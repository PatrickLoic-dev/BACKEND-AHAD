import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Acceuil from '../view/wallet_transaction_history/acceuil';
import Rubrique from '../view/rubriques/rubrique';
import Account from '../view/my_account/account';
import PayementStack from './payemantStack';
import Attente from '../view/attente/attente';
import { account } from '../utils/images';




export default function ValidationStack()  {

    const Tab = createBottomTabNavigator();

return(
    <Tab.Navigator
    initialRouteName='Waiting'
    screenOptions={{
        tabBarActiveTintColor: '#FDFF96',
    }}>
    <Tab.Screen
        name='Waiting'
        component={Attente}
        options={{
            tabBarLabel: 'Acceuil',
            tabBarIcon: ({ color, size, borderColor }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} borderColor = '#000'/>
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
            <Image source={account}/>
        ),
        tabBarLabelStyle : {color: '#000'},
        headerShown : false
    }}
    />
</Tab.Navigator>
)
}
