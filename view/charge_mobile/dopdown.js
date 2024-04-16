import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const App = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleOptionSelect = (value) => {
    setSelectedValue(value);
    setDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
        <View style={styles.dropdownButtonContent}>
          
          <Text style={styles.dropdownButtonText}>
            {selectedValue ? selectedValue : 'Choisir la rubrique'}
          </Text>
          <AntDesign name="down" size={18} color="black" />
        </View>
      </TouchableOpacity>

      <Modal visible={dropdownVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.modalBackground}
            onPress={toggleDropdown}
          />

          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleOptionSelect('Grande tontine')}
            >
              <Text style={styles.optionText}>Grande tontine</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleOptionSelect('Petite tontine')}
            >
              <Text style={styles.optionText}>Petite tontine</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleOptionSelect('Frais de roulement')}
            >
              <Text style={styles.optionText}>Frais de roulement</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropdownButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor:'#f8f6f6',
    borderRadius: 5,
  },
  dropdownButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  dropdownButtonText: {
    marginLeft: 5,
    fontSize: 18,
    color: 'black',
  },
  modalContainer: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
  modalContent: {
    position: 'absolute',
    top: '50%',
    width: '90%',
    backgroundColor: '#f8f6f6',
    borderRadius: 5,
    padding: 10,
  },

  optionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  optionText: {
    fontSize: 18,
  },
});

export default App;