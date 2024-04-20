import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { abstractBackgroundYellowBlue } from '../../utils/images';
import SelectBox from 'react-native-multiple-selectbox'
import { xorBy } from 'lodash'
import { Ionicons } from '@expo/vector-icons';
import Input from '../../components/input';
import * as ImagePicker from 'expo-image-picker';

const rubriques = [
    {
      item: 'Grande tontine',
      id: '100',
    },
    {
      item: 'Petite tontine',
      id: '200',
    },
    {
      item: 'Banque scolaire',
      id: '300',
    },
    {
      item: 'Banque annuelle',
      id: '400',
    },
    {
      item: 'Fond de roulement',
      id: '500',
    },
    {
      item: 'Fond de garanti',
      id: '600',
    },
  ]

const AddRubrique = () => {

  const GetProfile = () =>{
    Profile().then((result) => {
        console.log("Rubriques :" + result.data.rubriques);
        result.data.rubriques.forEach(rubrique => {
          rubriques.push(rubrique);
        });
        console.log(data);
    }).catch(err => {
        console.error("Error"+ err);    
    });
}

      const [selectedTeam, setSelectedTeam] = useState({})
  const [selectedTeams, setSelectedTeams] = useState([])
  return (
     <ImageBackground source={abstractBackgroundYellowBlue} style={styles.container}>
        <View style={styles.containTitle}>
            <Text style={styles.title}>sélectionnez vos rubriques</Text>
          </View>
      <View style={{ height: 70 }} />
      <Text style={{ fontSize: 20, paddingBottom: 4 }}>Rubriques</Text>
      <SelectBox
        label=''
        options={rubriques}
        selectedValues={selectedTeams}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
      />

<View style={styles.btnContainer}>
            <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate('')}>
              <Text style={styles.floatingButtonText}>Envoyer</Text>
            </TouchableOpacity>
          </View>

    </ImageBackground>
  )

  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
  }

  function onChange() {
    return (val) => setSelectedTeam(val)
  }


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    
  },
  containTitle: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  title: {
    paddingHorizontal: 40,
    color: 'black',
    fontSize: 22,
    textAlign: 'center',
  },
  floatingButton: {
    position: 'absolute',
    bottom: -240,
    right: '3%',
    backgroundColor: 'black',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 130,
    display: 'flex',
    flexDirection: 'row',
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
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
  
});


export default AddRubrique;