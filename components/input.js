import React, {useRef, useState} from 'react';
import {Animated, StyleSheet, Text, TextInput, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'

const Input = ({placeholder, onChangeText, ...props}) => {
  

  const handleTextChange = (val) => {
    setText(val);
    onChangeText(val); // Pass the text value to the parent component
  };

  const [text, setText] = useState('');
  const [showPassword, setshowPassword] = useState(props.secureTextEntry);

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
        {placeholder}
      </Animated.Text>
      <TextInput
        {...props}
        style={styles.input}
        value={text}
        onChangeText={handleTextChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        textContentType={props.secureTextEntry ? 'newPassword': props.secureTextEntry}
        secureTextEntry ={showPassword}
      />
      {props.secureTextEntry && !!text && (
        <TouchableOpacity style = {{width : 24, borderColor: '#000', borderBottomWidth : 1, paddingTop : 15.35}} onPress= {() => setshowPassword(!showPassword)}>
            {!showPassword ? <Icon name = "eye-outline" color = {'gray'} size = {24}/> : <Icon name = "eye-off-outline" color = {'gray'} size = {24}/>}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container :  {
    flexDirection : "row",
    justifyContent: "space-between",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#000',
    padding: 10,
    fontSize: 16,
    marginBottom:45,
    width: '95%',
    // fontWeight: 'bold',
  },
  label: {
    paddingLeft: 5,
    fontSize: 16,
    position: 'absolute',
  },
});

export default Input;
