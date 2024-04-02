
import React, { useState } from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { image1 } from './utils/images';


export default function SplashScreen(){
  return(
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/illustration.jpg')}
        style={styles.imageBackground}>
      </ImageBackground>

      <View style={styles.container_text}>
      <Text style={styles.rubriqueTitle}>associattion</Text>
                <Text style={styles.rubriqueDescription}>
                AHAD est une associattion multi-etnique permettant à toute personne quelque soit ses origines, de s'intégrer et de profiter des avantages qu'elle propose comme avantages
                </Text>
      </View>
      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding:5
  },
  imageBackground: {
    flex: 0.7,
  },
  container_text:{
    flex: 0.3,
    justifyContent: 'center',

  },
  rubriqueTitle: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  rubriqueDescription: {
    color: 'black',
    fontSize: 16,
  },
  
});