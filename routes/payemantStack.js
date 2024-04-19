import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Acceuil from '../view/wallet_transaction_history/acceuil';
import Transfert from '../view/charge_mobile/my_number';
import PayementSent from '../view/charge_mobile/payement_sent';
import Cotisation from '../view/transfert_to_card/cotisation';

const Stack = createStackNavigator();

const PayementStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen 
            name="Acceuil" 
            component={Acceuil}/>

        <Stack.Screen 
            name="Recharge" 
            component={Transfert} />

        <Stack.Screen 
            name="Cotisation" 
            component={Cotisation} />
    

        <Stack.Screen 
            name="Complete" 
            component={PayementSent} />
        </Stack.Navigator>
    )
}

export default PayementStack