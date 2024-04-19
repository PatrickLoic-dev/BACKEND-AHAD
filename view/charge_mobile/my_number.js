import React, { useState, useEffect } from "react";
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
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { abstractBackgroundColor } from "../../utils/images";
import Icon from 'react-native-vector-icons/Ionicons';
import { confirmPayement, initializePayement } from "../../api/depositAPI";
import { notchApiManager } from "../../api/notchApiManager";
import { updateUser } from "../../api/userAPI";

const Transfert = ({route, navigation}) => {

  const {email, phone, solde} = route.params;


  const [amount, setAmount] = useState('');


  useEffect(() => {
    console.log(`Email : ${email}`);
    console.log(`Telephone : ${phone}`);
    console.log(`Solde : ${solde}`);
  }, []);

  // Function to handle text input change
  const handleInputChange = (value) => {
    setAmount(value);
    console.log(amount) // Update the amount state with the new value
  };

  const handlePayement = () => {
    initializePayement({
      email: email,
      currency: 'XAF',
      amount : amount,
      phone : `+${phone}`,
      reference : '',
      description: "Depot sur le compte Coinbase",
    }).then((result) => {
        if (result.status == 201) {
          console.log(result.data);
          console.log(result.data.transaction.reference);
          
          confirmPayement({
            channel : "cm.mobile",
            data : {
              phone : `+${phone}`,
            }
          },result.data.transaction.reference).then((result) => {
            if (result.status == 202) {
              console.log(result.data);
              console.log("Transaction effectué avec succès");
              navigation.navigate("Complete", {Montant : amount, Solde : solde})
            }
          }).catch((err) => {
            console.error("Error" + err);
          });
        }
      })
      .catch((err) => {
        console.error("Error" + err);
      });
  };
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <ImageBackground source={abstractBackgroundColor} style={styles.container}>
      <View style ={styles.header}>
      <TouchableOpacity onPress={() => navigation.replace('Acceuil')}><Icon name = "arrow-back-outline" color = {'black'} size = {32}/></TouchableOpacity>
        <View style = {{marginLeft : 20}}>
          <Text style={styles.title}>Depot</Text>
          <Text style={styles.subtitle}>+237698800797</Text>
        </View>
      </View>

      <View style={styles.containAmount}>
        <Text style={styles.device}>XAF</Text>
        <TextInput 
          placeholder="2000" 
          style={styles.amount} 
          keyboardType="numeric"
          onChangeText={handleInputChange} 
          value={amount}
          >
        </TextInput>
        <Text style={styles.secondAmount}>.00</Text>
      </View>
      
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={handlePayement}
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
    fontWeight : '900'
  },
  amount: {
    fontSize: 56,
    paddingBottom: 20,
    marginHorizontal: 5,
    fontWeight : '900'
  },
  secondAmount: {
    fontSize: 24,
    fontWeight : '900'
  },
  btnContainer: {
    backgroundColor: "white",
  },
  floatingButton: {
    justifyContent : "center",
    backgroundColor: "black",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 100,
    display: "flex",
    flexDirection: "row",
  },
  floatingButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Transfert;
