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
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Profile } from '../../api/userAPI';



const data = [];

const Cotisation = ({navigation}) => {
  const [Rubriques, setRubriques] = useState([]);
  


    useEffect(() => {
      GetProfile();
    }, []);
    
    const GetProfile = () =>{
      Profile().then((result) => {
        console.log("Rubriques :" + result.data.rubriques);
        result.data.rubriques.forEach(rubrique => {
          data.push(rubrique);
        });
          console.log(data);
      }).catch(err => {
          console.error("Error"+ err);    
      });
  }

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Rubriques
          </Text>
        );
      }
      return null;
    };

  const [selectedValue, setSelectedValue] = useState("");
  
  return (
    <ImageBackground source={abstractBackgroundColor} style={styles.container}>
      <View style ={styles.header}>
      <TouchableOpacity onPress={() => navigation.replace('Acceuil')}><Icon name = "arrow-back-outline" color = {'black'} size = {32}/></TouchableOpacity>
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
      {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="intitule"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.intitule);
            setIsFocus(false);
            console.log(item);
            console.log(item.intitule)
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />

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
    marginTop: 100,
    marginBottom : 133,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom : 133,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    fontWeight : '900'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
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
  floatingButton: {
    backgroundColor: "black",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent : "center"
  },
  floatingButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Cotisation;