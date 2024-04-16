import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Acceuil from '../view/wallet_transaction_history/acceuil';
import Rubrique from '../view/rubriques/rubrique';
import Account from '../view/my_account/account';



export default function BottomtabNavigator()  {

    const Tab = createBottomTabNavigator();

return(
    <Tab.Navigator
    initialRouteName='Acceuil'
    screenOptions={{
        tabBarActiveTintColor: '#FDFF96',
    }}>
    <Tab.Screen
        name='Portefeuille'
        component={Acceuil}
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
