import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import { abstractBackgroundBlue, abstractBackgroundYellow, chekk } from '../../utils/images';

const PayementSent = () => {
  return (
    <ImageBackground style={styles.container}  source={abstractBackgroundYellow} >

      <View style={styles.card}>
        <Image source={chekk} style={styles.check}></Image>
        <View style={styles.rondG}></View>
        <View style={styles.rondD}></View>
        <Text style={styles.title}>Transfert effectué</Text>

        <View style={styles.containAmount}>
        <Text  style={styles.device}>XAF</Text>
        <Text style={styles.amount} keyboardType="numeric">20</Text>
        <Text style={styles.amountt}>.00</Text>
      </View>

      <View style={styles.btnContainer}>
            <TouchableOpacity
    style={styles.floatingButton}
    onPress={() => navigation.navigate('')}
  >
    <Text style={styles.floatingButtonText}>Terminé !</Text>
  </TouchableOpacity>
          </View>

      </View>
      <TouchableOpacity>
      <Text style={styles.textview}>Voir la transaction</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
  },
  card: {
    position:'relative',
    width:300,
    backgroundColor:'white',
    borderRadius: 30,
    height:400,
    marginTop:120,
  },
  check:{
    top:-30,
    left:115
  },
  rondG:{
    width:50,
    height:50,
    backgroundColor:'#EAEEFF',
    borderRadius:50,
    left:-30,
    top:50
  },
  rondD:{
    width:50,
    height:50,
    backgroundColor:'#EAEEFF',
    borderRadius:50,
    right:-281,
    top:-2
  },
  title:{
    fontSize:27,
    fontWeight:'bold',
    top:-100,
    left:35
  },
  containAmount:{
    top:-20,
    height:60,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center'
  },
  device:{
    fontSize:24
  },
  amount:{
    fontSize:56,
    top:-13,
    marginHorizontal:5
  },
  amountt:{
    fontSize:24
  },
  btnContainer: {
    backgroundColor: 'white',
    alignContent:'center'
  },
  floatingButton: {
    bottom: -40,
    right: '0%',
    backgroundColor: 'black',
    borderRadius: 30,
    paddingVertical: 10,
    marginHorizontal: 50,
    paddingHorizontal:60,
    display:'flex',
    flexDirection:'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  floatingButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textview:{
    marginTop:150,
    fontSize:16
  }
});

export default PayementSent;