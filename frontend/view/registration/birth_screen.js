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

const BirthScreen = ({ navigation }) => {
    const [dateNaissance, setDateNaissance] = useState('');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View>
        <Text style={styles.title}>Quand êtes-vous nés ?</Text>
        <Text style={styles.subtitle}>S'il vous plait, entrez vos vraies informations</Text>
        </View>
        <View style={styles.form}>
        <TextInput style={styles.textInput}
            tyle={styles.textInput} 
            placeholder='JJ/MM/AAAA'
            value={dateNaissance}
            onChangeText={text => setDateNaissance(text)}>
        </TextInput>
        </View>
        <View style={styles.btnContainer}>
            <TouchableOpacity
                style= {[styles.floatingButton, { opacity: dateNaissance ? 1 : 0.5 }]}
                onPress={() => navigation.navigate('FullInfo')}
                disabled={!dateNaissance}>
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
    // padding:30,
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
    paddingHorizontal:20
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
    paddingHorizontal: 130,
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
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
    fontSize:18,
    paddingHorizontal:50,
    textAlign:'center'
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
});

export default BirthScreen;