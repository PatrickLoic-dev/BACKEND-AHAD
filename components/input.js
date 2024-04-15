import React, {useRef, useState} from 'react';
import {Animated, StyleSheet, Text, TextInput, View} from 'react-native';

const Input = (val) => {
  const [text, setText] = useState('');
  const floatingLabelAnimation = useRef(
    new Animated.Value(text ? 1 : 0),
  ).current;

  const handleFocus = () => {
    // Animate the label up and reduce its size when input is focus
    Animated.timing(floatingLabelAnimation, {
      toValue: 1,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    // If the input is empty, animate the floating label back to its original position
    if (!text) {
      Animated.timing(floatingLabelAnimation, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  };

  // Define animated styles for the floating label
  const floatingLabelStyle = {
    top: floatingLabelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [16, -15], // top value
    }),
    fontSize: floatingLabelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 16], // font size
    }),
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.label, floatingLabelStyle]}>
        {val.valeur}
      </Animated.Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={val => setText(val)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  
  input: {
    borderBottomWidth: 1,
    borderColor: '#000',
    padding: 10,
    fontSize: 16,
    marginBottom:45,
    // fontWeight: 'bold',
  },
  label: {
    paddingLeft: 5,
    fontSize: 16,
    position: 'absolute',
  },
});

export default Input;