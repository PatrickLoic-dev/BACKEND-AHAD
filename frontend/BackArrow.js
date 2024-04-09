import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const BackArrow = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  arrow: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
};

export default BackArrow;