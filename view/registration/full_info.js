import React, { useState, useEffect } from 'react';
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
  ImageBackground
} from 'react-native';
import { abstractBackgroundColor } from "../../utils/images";
import { principalColor } from "../../utils/constantes";
import Input from "../../components/input";
import { shape } from '../../utils/images';
import { ScrollView } from 'react-native-gesture-handler';
import InputTel from '../../components/inputTel';
// import InputPasword from '../../components/inputPassword';

const FullInfo = ({ route, navigation }) => {

  const {Nom, Prenom} = route.params;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const [tel, setTelephone] = useState('');
    const phoneNumber = tel.replace(/\s/g, '');
  const CheckPassword = () => { 
    if(password != confirmPassword){
      console.log("Les mots de passe ne correspondent pas");
    }else{
      navigation.navigate('Avatar', {
        Nom : Nom,
        Prenom : Prenom,
        Email : email,
        Telephone : phoneNumber,
        Password : password,
      });
    }
  }



  useEffect(() => {
    console.log(`Nom : ${Nom}`);
    console.log(`Prenom : ${Prenom}`);
}, []);

  return (
    <ImageBackground source={abstractBackgroundColor} style = {styles.container}>

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
          placeholder="Email"
          onChangeText={text => setEmail(text)}
        />

        <Input
          placeholder="Mot de passe"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <Input
          placeholder="Confimer le mot de passe"
          onChangeText={text => setconfirmPassword(text)}
          secureTextEntry
        />
        <InputTel
         onChangeText={text => setTelephone(text)}
        />
        </View>
        <View style={styles.btnContainer}>
            <TouchableOpacity
    style={styles.floatingButton}
    onPress={CheckPassword}
  >
    <Text style={styles.floatingButtonText}>Suivant</Text>
  </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    right: 5,
    backgroundColor: '#000',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 114,
    justifyContent:'center',
    display:'flex',
    width : '100%',
    flexDirection:'row',
    alignItems:'center',
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
    justifyContent: 'flex-start',
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