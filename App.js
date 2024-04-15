import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnBoarding from './view/onboarding/onBoarding';
import Acceuil from './view/wallet_transaction_history/acceuil';
import Rubrique from './view/rubriques/rubrique';
import TakePicture from './view/registration/take_picture';
import CropScreen from './view/registration/crop_screen';
import Loarder from './view/registration/loarder';
import PinCodeInput from './view/pin_code_settings/pin_code';
import React from 'react';

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen 
          name="Loarder" 
          component={PinCodeInput}
          options={{ headerTitle: '',headerTransparent: true,}} />
    <Stack.Screen 
          name="TakePicture" 
          component={TakePicture}
          options={{ headerTitle: '',headerTransparent: true,}} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
