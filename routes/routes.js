import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OnBoarding from './view/onboarding/onBoarding';
import Acceuil from './view/wallet_transaction_history/acceuil';
import Rubrique from './view/rubriques/rubrique';
import TakePicture from './view/registration/take_picture';
import CropScreen from './view/registration/crop_screen';
import Loarder from './view/registration/loarder';
import PinCodeInput from './view/pin_code_settings/pin_code';
import tabNavigator from './tabNavigator';
import Login from '../view/login/login';


const Stack = createStackNavigator();

const routes = () => {
  return (

    <Stack.Navigator>
    <Stack.Screen 
          name="Login" 
          component={Login}
          options={{ headerTitle: '',headerTransparent: true,}} />
    <Stack.Screen 
          name="Home" 
          component={tabNavigator}
          options={{ headerTitle: '',headerTransparent: true,}} />

    </Stack.Navigator>
  )
}

export default routes;