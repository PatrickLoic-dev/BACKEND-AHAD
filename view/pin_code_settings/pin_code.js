import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { deleteCode, lockCode } from '../../utils/images';

export default function PinCodeInput() {
  const [pinCode, setPinCode] = useState('');

  const handleKeyPress = (number) => {
    if (pinCode.length < 4) {
      setPinCode(pinCode + number);
    }
  };

  const handleDelete = () => {
    if (pinCode.length > 0) {
      setPinCode(pinCode.slice(0, -1));
    }
  };

  const renderCircles = () => {
    const circles = [];
    for (let i = 0; i < 4; i++) {
      const filled = i < pinCode.length;
      circles.push(
        <View
          key={i}
          style={[styles.circle, filled && styles.filledCircle]}
        />
      );
    }
    return circles;
  };

  return (
    <View style={styles.container}>
        <View style={styles.containerLock}>
        <Image source={lockCode} />
        </View>
        <View style={styles.containTitle}>
            <Text style={styles.title}>Code PIN</Text>
            <Text style={styles.text}>Veillez entrer votre code PIN</Text>
        </View>
      <View style={styles.pinContainer}>{renderCircles()}</View>
      <View style={styles.keyboardContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, styles.buttonCircle]}
            onPress={() => handleKeyPress('1')}
          >
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonCircle]}
            onPress={() => handleKeyPress('2')}
          >
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonCircle]}
            onPress={() => handleKeyPress('3')}
          >
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, styles.buttonCircle]}
            onPress={() => handleKeyPress('4')}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonCircle]}
            onPress={() => handleKeyPress('5')}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonCircle]}
            onPress={() => handleKeyPress('6')}
          >
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, styles.buttonCircle]}
            onPress={() => handleKeyPress('7')}
          >
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonCircle]}
            onPress={() => handleKeyPress('8')}
          >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonCircle]}
            onPress={() => handleKeyPress('9')}
          >
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.buttonCircleN]} disabled>
            <Text style={styles.buttonText}></Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonCircle]}
            onPress={() => handleKeyPress('0')}
          >
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonCircle, {backgroundColor:'white'}]}
            onPress={handleDelete}
          >
            <Image source={deleteCode} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  containerLock:{
    alignItems:'center'
  },
  containTitle:{
    alignItems:'center',
    // marginBottom:20,
    marginVertical:10,
    marginBottom:40
  },
  title:{
    fontSize:24,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black',
    marginBottom:5
  },
  pinContainer: {
    flexDirection: 'row',
    marginBottom: 26,
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 8,
  },
  filledCircle: {
    backgroundColor: 'black',
  },
  keyboardContainer: {
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  button: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 8,
    borderBlockColor:'#0011'
  },
  buttonCircle: {
    borderRadius: 32,
    marginTop:20,
    backgroundColor:'#0011',
    borderBlockColor:'white',
    borderLeftColor:'white',
    borderRightColor:'white'
  },
  buttonCircleN:{
    borderColor:'white'
  },
  buttonText: {
    fontSize: 24,
  },
});