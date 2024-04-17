import React, {useState} from 'react';
import {Platform,Keyboard, View,Text, StyleSheet,TouchableOpacity, TextInput, KeyboardAvoidingView  } from 'react-native';
import Dropdown from './dopdown';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Transfert = () => {
    const [selectedValue, setSelectedValue] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.containAmount}>
        <Text  style={styles.device}>XAF</Text>
        <TextInput style={styles.amount} keyboardType="numeric">20</TextInput>
        <Text style={styles.amountt}>.00</Text>
      </View>
      <Dropdown></Dropdown>
      <View style={styles.btnContainer}>
        <TouchableOpacity
            style={styles.floatingButton}
            onPress={() => navigation.navigate('')}
        >
            <Text style={styles.floatingButtonText}>Confirmer</Text>
        </TouchableOpacity>
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:25
  },
  containAmount:{
    height:300,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center'
  },
  device:{
    fontSize:24
  },
  amount:{
    fontSize:56,
    paddingBottom:20,
    marginHorizontal:5
  },
  amountt:{
    fontSize:24
  },
  btnContainer: {
    backgroundColor: 'white',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 200,
    right: '10%',
    backgroundColor: 'black',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 100,
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
});

export default Transfert;