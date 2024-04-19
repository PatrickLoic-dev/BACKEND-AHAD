import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { abstractBackgroundColor, avatar, avatarImage } from '../../utils/images'
import { SecondaryColor } from '../../utils/constantes'

const Attente = () => {
  return (
    <ImageBackground source = {abstractBackgroundColor} style = {styles.container}>
        <Image source={avatarImage} style = {styles.img}/>
        <Text style = {styles.title}>Vous n'êtes pas encore vérifié</Text>
        <Text style = {styles.subtitle}>Veuillez patienter pendant qu'un de nos administrateurs vérifie votre statut.</Text>
    </ImageBackground>
  )
}

export default Attente

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal : 30
      },
      img : {
        marginTop : 180,
      },
      title:{
        marginTop:20,
        fontSize:22,
        fontWeight: '900',
        textAlign: 'center',
        color:'black',
        alignContent:'center'
      },
      
      subtitle:{
        marginTop:10,
        fontSize:14,
        fontWeight: '600',
        textAlign: 'center',
        color: SecondaryColor,
        alignContent:'center'
      },
})