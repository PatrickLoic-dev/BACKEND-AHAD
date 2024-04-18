import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  ImageBackground
} from "react-native";
import { abstractBackgroundColor, illustrationInscription } from "../../utils/images";
import Input from "../../components/input";
import { login } from "../../api/userAPI";
import { parseJsonConfigFileContent } from "typescript";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { textSecondaryColor } from "../../utils/constantes";
import { StatusBar } from "expo-status-bar";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleLogin = () => {
    login({
      email: email,
      password: password,
    })
      .then((result) => {
        if (result.status == 200) {
          console.log(result.data);
          AsyncStorage.setItem("AuthToken", result.data.authToken);

          navigation.replace("Home");
        }
      })
      .catch((err) => {
        console.error("Error" + err);
      });
  };

  return (
    <ImageBackground source={abstractBackgroundColor} style={styles.container}>
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar style="auto" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.containIllustration}>
            <Image source={illustrationInscription}></Image>
            <View style={styles.containTitle}>
              <Text style={styles.title}>Bienvenue !</Text>
            </View>
          </View>

          <View>
            <Input 
            placeholder="Email" 
            onChangeText={handleEmailChange} />

            <Input
              placeholder="Mot de passe"
              onChangeText={handlePasswordChange}
              secureTextEntry
            />
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.floatingButton}
              onPress={handleLogin}
            >
              <Text style={styles.floatingButtonText}>Connexion</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.link} onPress={() => {
              navigation.navigate("Registration", {screen : 'Names'});
            }}>
              <Text style={{ color: textSecondaryColor, fontWeight: "600" }}>
                Pas encore membre ?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 64,
  },
  floatingButton: {
    position: "absolute",
    bottom: "-145%",
    right: 5,
    backgroundColor: "#000",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 114,
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  floatingButtonText: {
    color: "white",
    fontSize: 18,
    alignContent: "center",
    fontWeight: "bold",
  },
  inner: {
    padding: 0,
    flex: 1,
    justifyContent: "flex-start",
  },
  containTitle: {
    alignItems: "center",
    marginBottom:20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    marginBottom: 5,
  },
  link: {
    alignItems: "center",
    marginTop: 0,
    borderBottomWidth: 1,
    width: 145,
    marginLeft: 104,
    marginTop : 16,
    borderBottomColor: textSecondaryColor,
  },
});
