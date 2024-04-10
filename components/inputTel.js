import React, { useRef, useState } from 'react';
import { Animated, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

const Input = () => {
  const [text, setText] = useState('');
  const [isValid, setIsValid] = useState(true); // État pour la validité du numéro de téléphone
  const floatingLabelAnimation = useRef(new Animated.Value(text ? 1 : 0)).current;
  const inputRef = useRef(null);

  const handleFocus = () => {
    Animated.timing(floatingLabelAnimation, {
      toValue: 1,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    if (!text) {
      Animated.timing(floatingLabelAnimation, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  };

  const formatPhoneNumber = (inputText) => {
    let formattedText = inputText.replace(/\s/g, ''); // Remove existing spaces
    if (formattedText.startsWith('+237')) {
      formattedText = formattedText.substring(4); // Remove "+237"
    } else if (formattedText.startsWith('+')) {
      formattedText = formattedText.substring(1); // Remove the leading "+"
    }
    formattedText = formattedText.replace(/\D/g, ''); // Remove non-digit characters
    if (formattedText.length > 9) {
      formattedText = formattedText.substring(0, 9); // Limit to 9 digits
    }
    if (formattedText.length > 3) {
      formattedText = formattedText.replace(/(\d{3})/g, '$1 '); // Add spaces after every three digits
    }
    formattedText = '+237 ' + formattedText.trim(); // Add "+237" and trim any extra spaces
    return formattedText;
  };

  const validatePhoneNumber = (phoneNumber) => {
    const prefix = phoneNumber.substring(5, 7);
    const validPrefixes = ['62', '65', '67', '68', '69'];
    return validPrefixes.includes(prefix);
  };

  const floatingLabelStyle = {
    top: floatingLabelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [16, -15],
    }),
    fontSize: floatingLabelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 16],
    }),
  };

  const handleTextChange = (inputText) => {
    const formattedText = formatPhoneNumber(inputText);
    setText(formattedText);
    setIsValid(validatePhoneNumber(formattedText)); // Mise à jour de la validité du numéro de téléphone
  };

  const handleInputPress = () => {
    inputRef.current.focus();
  };

  const handleInputBlur = () => {
    inputRef.current.blur();
  };

  return (
    <TouchableWithoutFeedback onPress={handleInputPress} onBlur={handleInputBlur}>
      <View style={styles.container}>
        <Animated.Text style={[styles.label, floatingLabelStyle]}>Phone Number</Animated.Text>
        <TextInput
          style={[styles.input, !isValid && styles.invalidInput]} // Appliquer le style d'entrée non valide si isValid est faux
          ref={inputRef}
          value={text}
          onChangeText={handleTextChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          keyboardType="phone-pad"
        />
        {!isValid && <Text style={styles.errorText}>Le numéro de téléphone n'est pas valide.</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 45,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#000',
    padding: 10,
    fontSize: 16,
  },
  invalidInput: {
    borderColor: 'red', // Changer la couleur de la bordure en rouge
  },
  label: {
    paddingLeft: 5,
    fontSize: 16,
    position: 'absolute',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    fontSize: 12,
  },
});

export default Input;