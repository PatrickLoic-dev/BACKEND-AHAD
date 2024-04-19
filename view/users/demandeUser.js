import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { abstractBackgroundWhite, chevonRight, chevron } from '../../utils/images'
import { Avatar } from 'react-native-paper'
import { abstractBackgroundColor, avatarImage } from "../../utils/images";
import { TouchableOpacity } from 'react-native-gesture-handler';

const DemandeUser = () => {
    return (
    <ImageBackground source={abstractBackgroundWhite} style = {styles.container}>
        <View style = {styles.header}>
            <Text style = {styles.title}>Demandes de validation</Text>
        </View>

        <View style = {styles.card}>
            <View>
                <Avatar.Image size={70} source={avatarImage}/>
                <View style = {styles.information}>
                    <Text>Nom</Text>
                    <Text>Prenom</Text>
                </View>
            </View>
            <TouchableOpacity>
                <Image source={chevonRight}></Image>
            </TouchableOpacity>
        </View>
    </ImageBackground>
    )
}

export default DemandeUser

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    },
    header : {
        marginTop : 32,
        flexDirection : 'row',
    },
    title : {
        fontSize: 24,
        fontWeight : '900', 
    },
    
})