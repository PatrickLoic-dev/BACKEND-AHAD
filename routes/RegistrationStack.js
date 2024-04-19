import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';


import FullInfo from '../view/registration/full_info';
import NameScreen from '../view/registration/name_screen';
import { TakePicture } from '../view/registration/take_picture';


const Stack = createStackNavigator();

const RegistrationStack = () => {
  return (

    <Stack.Navigator>
    <Stack.Screen 
          name="Names" 
          component={NameScreen}
          options={{ headerShown : false}} />
    <Stack.Screen 
        name="Information" 
        component={FullInfo}
        options={{ headerShown : false}} />

    <Stack.Screen 
            name="Avatar" 
            component={TakePicture}
            options={{ headerShown : false}} />

    </Stack.Navigator>
  )
}

export default RegistrationStack;