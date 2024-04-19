import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DemandeUser from '../view/users/demandeUser';
import DetailUser from '../view/Detail/DetailUser';

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    
        <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen 
            name="UsersList" 
            component={DemandeUser}/>

        <Stack.Screen 
            name="UserDetails" 
            component={DetailUser} />
        </Stack.Navigator>
  )
}