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
import NameScreen from '../view/registration/name_screen';
import BirthScreen from '../view/registration/birth_screen';
import FullInfo from '../view/registration/full_info';


const Stack = createStackNavigator();

const routes = () => {
  return (

    <Stack.Navigator>
    <Stack.Screen 
          name="Names" 
          component={NameScreen}
          options={{ headerShown : false}} />
    <Stack.Screen 
          name="Birth" 
          component={BirthScreen}
          options={{ headerShown : false}} />
    <Stack.Screen 
        name="Information" 
        component={FullInfo}
        options={{ headerShown : false}} />
    <Stack.Screen 
        name="Camera" 
        component={TakePicture}
        options={{ headerShown : false}} />

    </Stack.Navigator>
  )
}

export default routes;