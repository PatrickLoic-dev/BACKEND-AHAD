import React, { useState } from 'react';
import { View, Alert,StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const MyComponent = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [options, setOptions] = useState([
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ]);

  const handleValueChange = (value) => {
    setSelectedValue(value);
  };

  const handleAddOption = (inputValue) => {
    const newOption = { label: inputValue, value: inputValue };

    // Vérifier si l'option existe déjà dans la liste
    const optionExists = options.some((option) => option.value === inputValue);

    if (optionExists) {
      Alert.alert('Doublon détecté', 'Cette option existe déjà dans la liste.');
    } else {
      setOptions((prevOptions) => [...prevOptions, newOption]);
      setSelectedValue(inputValue);
    }
  };

  return (
    <View style={styles.container}>
      <DropDownPicker
        items={options}
        defaultValue={selectedValue}
        containerStyle={{ height: 40 }}
        searchable={true}
        onOpen={() => setSelectedValue(null)}
        onChangeText={(inputValue) => handleValueChange(inputValue)}
        onEndEditing={(inputValue) => handleAddOption(inputValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flex: 1,
    padding:30,
  },
})

export default MyComponent;