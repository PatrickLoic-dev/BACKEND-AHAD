
import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Acceuil from '../view/wallet_transaction_history/acceuil';
import Rubrique from '../view/rubriques/rubrique';
import Account from '../view/my_account/account';
import PayementStack from './payemantStack';
import demandeUser from '../view/users/demandeUser';
import DemandeUser from '../view/users/demandeUser';




export default function AdminTabNavigator()  {

    const Tab = createBottomTabNavigator();

return(
    <Tab.Navigator
    initialRouteName='Portefeuille'
    screenOptions={{
        tabBarActiveTintColor: '#FDFF96',
    }}>
    <Tab.Screen
        name='Portefeuille'
        component={PayementStack}
        options={{
            tabBarLabel: 'Portefeuille',
            tabBarIcon: ({ color, size, borderColor }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} borderColor = '#000'/>
            ),
            tabBarLabelStyle : {color: '#000'},
            headerShown : false
        }}
    />
    <Tab.Screen
        name='Rubrique'
        component={Rubrique}
        options={{
            tabBarLabel: 'Rubrique',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
            tabBarLabelStyle : {color: '#000'},
            headerShown : false
        }}
    />

<Tab.Screen
        name='Users'
        component={DemandeUser}
        options={{
            tabBarLabel: 'Utilisateurs',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
            tabBarLabelStyle : {color: '#000'},
            headerShown : false
        }}
    />
    <Tab.Screen
    name="Profile"
    component={Account}
    options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
        tabBarLabelStyle : {color: '#000'},
        headerShown : false
    }}
  />
</Tab.Navigator>
)
}
