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
} from "react-native";
import { illustrationInscription } from "../../utils/images";
import Input from "../../components/input";
import { login } from "../../api/userAPI";
import { parseJsonConfigFileContent } from "typescript";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.containIllustration}>
            <Image source={illustrationInscription}></Image>
            <View style={styles.containTitle}>
              <Text style={styles.title}>Bienvenue !</Text>
            </View>
          </View>
          
          <View>
            <Input placeholder="Email" onChangeText={handleEmailChange} />
            <Input
              placeholder="Mot de passe"
              onChangeText={handlePasswordChange}
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
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 30,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
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
    justifyContent: "space-around",
  },
  containTitle: {
    alignItems: "center",
    // marginBottom:20
  },
  containItem: {},
  containIllustration: {},
  containList: {},
  titleDescript: {},
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
});
