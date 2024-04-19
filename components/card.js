import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { chevonRight } from '../utils/images'
import { Avatar } from 'react-native-paper'
import { avatarImage } from "../utils/images";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SecondaryColor } from '../utils/constantes';


const cardComponent = ({item, navigation}) => {
  return (
        <TouchableOpacity style = {styles.card}  onPress={() => {navigation.navigate('UserDetails', item)}}>
            <View style = {{flexDirection :'row', alignItems : 'center',}}>
                <Avatar.Image size={70} source={avatarImage}/>
                <View style = {styles.information}>
                    <Text style = {{fontSize :14, fontWeight : '900'}}>{item.name}</Text>
                    <Text style = {{fontSize :14, fontWeight : '600'}}>{item.surname}</Text>
                    <Text style = {{fontSize :14, fontWeight : '600', color : SecondaryColor}}>{item.email}</Text>
                </View>
            </View>
            <TouchableOpacity>
                <Image source={chevonRight}></Image>
            </TouchableOpacity>
        </TouchableOpacity>
  )
}

export default cardComponent;

const styles = StyleSheet.create({

    card : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : 16,
        borderRadius : 10,
        backgroundColor : '#F1F1F1',
        marginBottom : 16,
    },
    information : {
        marginLeft : 8,
        justifyContent :'space-between'
    }
})