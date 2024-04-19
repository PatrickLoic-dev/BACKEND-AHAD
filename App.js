import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Acceuil from './view/wallet_transaction_history/acceuil';
import Rubrique from './view/rubriques/rubrique';
import Account from './view/my_account/account';
import Login from './view/login/login';
import BottomtabNavigator from './routes/tabNavigator';
import RegistrationStack from './routes/RegistrationStack';
import ValidationStack from './routes/validationStack';
import AdminTabNavigator from './routes/AdminStack';



const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName='Login'>
    <Stack.Screen 
          name="Login" 
          component={Login}
          options={{ headerTitle: '',headerTransparent: true,}} />
    <Stack.Screen 
          name="Home" 
          component={BottomtabNavigator}
          options={{ headerTitle: '',headerTransparent: true,}} />
    <Stack.Screen 
          name="Validation" 
          component={ValidationStack}
          options={{ headerTitle: '',headerTransparent: true,}} />
    <Stack.Screen 
          name="Admin" 
          component={AdminTabNavigator}
          options={{ headerTitle: '',headerTransparent: true,}} />          
    <Stack.Screen 
          name="Registration" 
          component={RegistrationStack}
          options={{ headerTitle: '',headerTransparent: true,}} />

    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
