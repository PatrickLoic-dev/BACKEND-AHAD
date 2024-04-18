import React, { useState } from "react";
import {
  Platform,
  Keyboard,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import Dropdown from "../../components/dropdown";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { abstractBackgroundColor } from "../../utils/images";
import Icon from 'react-native-vector-icons/Ionicons';

const Cotisation = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <ImageBackground source={abstractBackgroundColor} style={styles.container}>
      <View style ={styles.header}>
        <Icon name = "arrow-back-outline" color = {'black'} size = {32}/>
        <View style = {{marginLeft : 20}}>
          <Text style={styles.title}>Cotisation</Text>
          <Text style={styles.subtitle}>+237698800797</Text>
        </View>
      </View>

      <View style={styles.containAmount}>
        <Text style={styles.device}>XAF</Text>
        <TextInput placeholder="2000" style={styles.amount} keyboardType="numeric">
        </TextInput>
        <Text style={styles.secondAmount}>.00</Text>
      </View>
      <Dropdown></Dropdown>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => navigation.navigate("")}
        >
          <Text style={styles.floatingButtonText}>Confirmer</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  containAmount: {
    height: 300,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  header : {
    marginTop : 32,
    flexDirection : 'row'
  },
  title : {
    fontSize: 14,
    fontWeight : '900'
  },
  subtitle: {
    fontSize: 12,
    color: "grey",
  },
  device: {
    fontSize: 24,
  },
  amount: {
    fontSize: 56,
    paddingBottom: 20,
    marginHorizontal: 5,
  },
  secondAmount: {
    fontSize: 24,
  },
  btnContainer: {
    backgroundColor: "white",
  },
  floatingButton: {
    position: "absolute",
    bottom: 200,
    right: "10%",
    backgroundColor: "black",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 100,
    display: "flex",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  floatingButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Cotisation;