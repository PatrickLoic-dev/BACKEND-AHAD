import React, { useState } from 'react';
import { View,Image,Text, Alert,StyleSheet,TouchableOpacity,
  TouchableWithoutFeedback,KeyboardAvoidingView,Keyboard,Platform, } from 'react-native';
import { illustrationInscription } from '../../utils/images';
import Input from '../../components/input';

export default function Login(){
    return ( 
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.inner}>
        <View style={styles.containIllustration}>
            <Image source={illustrationInscription}></Image>
        <View style={styles.containTitle}>
            <Text style={styles.title}>Bienvenue !</Text>
        </View></View>
        <View>
        <Input
          valeur="Email"/>
        <Input
          valeur="Mot de passe"/></View>
        <View style={styles.btnContainer}>
            <TouchableOpacity
    style={styles.floatingButton}
    onPress={() => navigation.navigate('FullInfo')}
  >
    <Text style={styles.floatingButtonText}>Suivant</Text>
  </TouchableOpacity>
          </View>
    </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
)}

const styles = StyleSheet.create({
    container: {
      backgroundColor:'white',
      flex: 1,
      padding:30,
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
      },
      floatingButton: {
        position: 'absolute',
        bottom: '-145%',
        right: '13%',
        backgroundColor: '#007AFF',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 100,
        justifyContent:'center',
        display:'flex',
        flexDirection:'row',
        shadowColor: '#000',
        alignItems:'center',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
      },
      floatingButtonText: {
        color: 'white',
        fontSize: 18,
        alignContent:'center',
        fontWeight: 'bold',
      },
      inner: {
        padding: 0,
        flex: 1,
        justifyContent: 'space-around',
      },
      containTitle:{
        alignItems:'center',
        // marginBottom:20
      },
      containItem:{
  
      },
      containIllustration:{
  
      },
      containList:{
  
      },
      titleDescript:{
  
      },
      title:{
        fontSize:24,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'black',
      },
  })