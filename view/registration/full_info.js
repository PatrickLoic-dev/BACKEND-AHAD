import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native';
import { principalColor } from "../../utils/constantes";
import Input from "../../components/input";
import { shape } from '../../utils/images';
import { ScrollView } from 'react-native-gesture-handler';
import InputTel from '../../components/inputTel';
import InputPasword from '../../components/inputPassword';

const FullInfo = ({ navigation }) => {

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.titleView}>
        <Text style={styles.title}>Entrez les informations de contact</Text>
        </View>
        <View style={styles.form}>
        <Input
          valeur="Email"
        />
        <InputPasword valeur="Mot de passe"></InputPasword>
        <InputPasword valeur="Vérification du mot de passe"></InputPasword>
        <Input
          valeur="Adresse"
        />
        <InputTel/>
        </View>
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
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:principalColor,
    flex: 1,
    paddingHorizontal:20
    
  },
  title:{
    // marginTop:10,
    fontSize:22,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black',
    alignContent:'center'
  },
  titleView:{
    width:300,
    justifyContent:'center',
    // alignItems:'center',
    marginVertical:30
  },
  subtitle:{
    marginVertical:10,
    textAlign: 'center',
  },
  form:{
    // marginTop: 35,
  },
  label: {
    position: 'absolute',
    left: 10,
    top: 10,
    fontSize: 16,
    color: 'gray',
  },
  floatingButton: {
    position: 'absolute',
    bottom: '-145%',
    right: '6%',
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
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});

export default FullInfo;