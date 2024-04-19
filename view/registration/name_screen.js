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
  ImageBackground
} from 'react-native';
import { principalColor } from "../../utils/constantes";
import Input from "../../components/input";
import { shape } from '../../utils/images';
import { abstractBackgroundColor } from "../../utils/images";



const NameScreen = ({ navigation }) => {
  
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');

  return (
    
    <ImageBackground source={abstractBackgroundColor}  style={styles.container}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View>
        <Text style={styles.title}>Quel est votre nom ?</Text>
        <Text style={styles.subtitle}>S'il vous plait, entrez vos vraies informations</Text>
        </View>
        <View style={styles.form}>
        <Input
          placeholder="Nom"
          value={nom}
          onChangeText={text => setNom(text)}
        />
        <Input
          placeholder="Prénom"
          value={prenom}
          onChangeText={text => setPrenom(text)}
        />

        </View>
        <View style={styles.btnContainer}>
            <TouchableOpacity
              style= {[styles.floatingButton, { opacity: (nom && prenom) ? 1 : 0.5 }]}
              onPress={() => {
                navigation.navigate('Information', {
                  Nom : nom,
                  Prenom : prenom
                })
              }}
              // disabled={nom.length === 0 || prenom.length === 0}
              >
    <Text style={styles.floatingButtonText}>Suivant</Text>
  </TouchableOpacity >
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

export default NameScreen;