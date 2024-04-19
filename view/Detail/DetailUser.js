import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, Switch } from 'react-native';
import { abstractBackgroundBlue, abstractBackgroundBlueSVG, avatar, block, calendar, card, chevron, faceIDIcon, investing, mailIcon, pAvatar, pencil, phoneIcon, scale, search, userIcon } from '../../utils/images';
import { principalColor, RedColor, RPColor, textSecondaryColor } from '../../utils/constantes';
import { logout, Profile, updateUserByID } from '../../api/userAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';



const DetailUser = ({route, navigation}) => {
    
    const user = route.params;

    const handleUpdateStatus = () => { 
        updateUserByID({
          estValide : true
        },user._id).then((result) => {
          if (result.status == 200) {
            console.log(result.data);
            navigation.replace("UsersList");
          }
        }).catch((err) => {
          console.error("Error" + err);
        });
      }

return (
    <ImageBackground  source={abstractBackgroundBlue} style={styles.container}>
        <Text style = {styles.head}>Details</Text>
        <Image source={{uri : `https://backend-ahad-production.up.railway.app/uploads//1712714150194.png`}} style = {styles.avatar}/>

        
        <View style = {styles.bottomSheet}>
            <Text style = {{fontSize  :12, fontWeight : '600', color: textSecondaryColor, marginTop : 20, marginBottom : 24, marginLeft : 124}}>Information personnelle</Text>
            <View style = {styles.item}>
                <Image source={userIcon}/>
                <View>
                    <Text style = {{fontSize  :12, fontWeight : '600', color: textSecondaryColor, marginBottom : 8}}>Votre Nom</Text>
                    <Text style = {{fontSize  :14, fontWeight : '600', color: principalColor}}>{user.name}</Text>
                </View>
            </View>


            <View style = {styles.item}>
                <Image source={userIcon}/>
                <View>
                    <Text style = {{fontSize  :12, fontWeight : '600', color: textSecondaryColor, marginBottom : 8}}>Vos Prénoms</Text>
                    <Text style = {{fontSize  :14, fontWeight : '600', color: principalColor}}>{user.surname}</Text>
                </View>
            </View>

            
            <View style = {styles.item}>
                <Image source={phoneIcon}/>
                <View>
                    <Text style = {{fontSize  :12, fontWeight : '600', color: textSecondaryColor, marginBottom : 8}}>Numéro</Text>
                    <Text style = {{fontSize  :14, fontWeight : '600', color: principalColor}}>+{user.telephone}</Text>
                </View>
            </View>

            
            <View style = {styles.item}>
                <Image source={mailIcon}/>
                <View>
                    <Text style = {{fontSize  :12, fontWeight : '600', color: textSecondaryColor, marginBottom : 8}}>Email</Text>
                    <Text style = {{fontSize  :14, fontWeight : '600', color: principalColor}}>{user.email}</Text>
                </View>
            </View>

            <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.floatingButton}
            onPress={handleUpdateStatus}
          >
            <Text style={styles.floatingButtonText}>Valider</Text>
          </TouchableOpacity>
      </View>
        </View>
    </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        width : 395,
        height : 892,
        justifyContent : "center",
        alignItems: "center"
    },
    imageBackground: {
        flex: 0.7,
    },
    head : {
        fontSize : 18,
        fontWeight : "600",
        marginTop: 128, 
        marginBottom : 16
    },
    icon : {
        height : 24,
        width : 24, 
        marginLeft : 30,
        marginRight: 10
    },

    bottomSheet : {
        width : 385,
        height: 724,
        marginLeft : 2,
        backgroundColor : '#FFF',
        borderTopLeftRadius : 48,
        borderTopRightRadius : 48,
        alignItems : 'flex-start',
        overflow : "hidden"
    },
    
    item : {
        display : "flex", 
        flexDirection: "row",
        alignItems : "center",
        justifyContent : "center",
        paddingHorizontal : 8,
        marginBottom: 24,
        marginLeft : 20
    },
    avatar : {
        height : 88,
        width : 88,
        borderRadius : 50,
        borderColor : '#FFF',
        borderWidth : 3,
        marginBottom : 44
    }, 
    btnContainer: {
        alignItems: "center",
      },
      floatingButton: {
        marginLeft : 100,
        backgroundColor: "black",
        borderRadius: 30,
        paddingVertical: 10,
        marginTop: 40,
        marginHorizontal: 50,
        paddingHorizontal: 60,
        display: "flex",
        flexDirection: "row",
      },
      floatingButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
      },
    
});


export default DetailUser