import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  abstractBackgroundBlue,
  abstractBackgroundYellow,
  chekk,
  finishedBackground,
} from "../../utils/images";
import Icon from 'react-native-vector-icons/Ionicons';
import { updateUser } from "../../api/userAPI";

const PayementSent = ({route, navigation}) => {
  const {Montant, Solde} = route.params;

  const montantNumber = parseFloat(Montant);
  const soldeNumber = parseFloat(Solde);
  const Newsolde = montantNumber + soldeNumber;

  useEffect(() => {
    console.log(`Montant : ${Montant}`);
    console.log(`Solde : ${Solde}`);
    console.log(`Solde + Montant : ${montantNumber + soldeNumber}`);
  }, []);


  const handleUpdateSolde = () => { 
    updateUser({
      solde : `${Newsolde}`
    }).then((result) => {
      if (result.status == 200) {
        console.log(result.data);
        navigation.replace("Acceuil");
      }
    }).catch((err) => {
      console.error("Error" + err);
    });
  }

  return (
    <ImageBackground style={styles.container} source={abstractBackgroundYellow}>
            <View style ={styles.header}>
             <TouchableOpacity onPress={() => navigation.replace('Acceuil')}><Icon name = "arrow-back-outline" color = {'black'} size = {32}/></TouchableOpacity>
            </View>

      <ImageBackground source={finishedBackground} style= {styles.done}>
      <Text style={styles.title}>Recharge effectué</Text>

        <View style={styles.containAmount}>
          <Text style={styles.device}>XAF</Text>
          <Text style={styles.amount} keyboardType="numeric">
            {Montant}
          </Text>
          <Text style={styles.amountt}>.00</Text>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.floatingButton}
            onPress={handleUpdateSolde}
          >
            <Text style={styles.floatingButtonText}>Terminé !</Text>
          </TouchableOpacity>
      </View>
      </ImageBackground>
    
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width : "100%",
    height : "100%",
    // alignItems: "center",
    // justifyContent : "center"
  },
  header : {
    marginTop : 56,
    marginLeft : 25,
    flexDirection : 'row'
  },
  title: {
    fontSize: 24,
    fontWeight: "900",
    marginTop : 84,
    marginRight : 25,
    marginBottom : 96
  },
  containAmount: {
    alignItems: "baseline",
    flexDirection: "row",
    justifyContent: "center",
    marginRight : 25,
    marginBottom : 96,
  },
  device: {
    fontSize: 24,
    fontWeight : '900'
  },
  done: {
    marginTop: 90,
    width: "95%",
    height: "76%",
    marginLeft: 20,
    alignItems: "center",
  },
  amount: {
    fontSize: 56,
    marginHorizontal: 5,
    fontWeight : '900'
  },
  amountt: {
    fontSize: 24,
  },
  btnContainer: {
    alignItems: "center",
  },
  floatingButton: {
    right: 5,
    backgroundColor: "black",
    borderRadius: 30,
    paddingVertical: 10,
    marginHorizontal: 50,
    paddingHorizontal: 60,
    display: "flex",
    flexDirection: "row",
  },
  floatingButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  textview: {
    fontSize: 14,
    fontWeight : '900'
  },
});

export default PayementSent;
