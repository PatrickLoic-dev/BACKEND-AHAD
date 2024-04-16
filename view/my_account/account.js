import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, Switch } from 'react-native';
import { abstractBackgroundBlue, abstractBackgroundBlueSVG, avatar, block, calendar, card, chevron, faceIDIcon, investing, mailIcon, pAvatar, pencil, phoneIcon, scale, search, userIcon } from '../../utils/images';
import { principalColor, RedColor, RPColor, textSecondaryColor } from '../../utils/constantes';
import { logout, Profile } from '../../api/userAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authToken = AsyncStorage.getItem('AuthToken');


const handleLogout = ({navigation}) => {
    logout()
      .then((result) => {
        if (result.status == 200) {
          console.log(result.data);
          navigation.back();
        }
      })
      .catch((err) => {
        console.error("Error" + err);
      });
  };

const Account = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const [user, setUser] = useState('');
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    useEffect(() => {
        GetProfile();
    }, []);

    const GetProfile = () =>{
        Profile().then((result) => {
            setUser(result.data);
            console.log(user);
        }).catch(err => {
            console.error("Error"+ err);    
        });
        // console.log(authToken._j);
    }
return (
    <ImageBackground  source={abstractBackgroundBlue} style={styles.container}>
        <Text style = {styles.head}>My account</Text>
        <Image source={pAvatar} style = {styles.avatar}/>
        <TouchableOpacity style = {{backgroundColor : '#FFF', padding : 20, borderRadius : 50, height : 40, width :40, justifyContent : 'center', alignItems : 'center', position :'absolute', zIndex :100, top : 154, right : 137}}>
            <Image source={pencil}/>
        </TouchableOpacity>
        
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
                    <Text style = {{fontSize  :14, fontWeight : '600', color: principalColor}}>+237{user.telephone}</Text>
                </View>
            </View>

            
            <View style = {styles.item}>
                <Image source={mailIcon}/>
                <View>
                    <Text style = {{fontSize  :12, fontWeight : '600', color: textSecondaryColor, marginBottom : 8}}>Email</Text>
                    <Text style = {{fontSize  :14, fontWeight : '600', color: principalColor}}>{user.email}</Text>
                </View>
            </View>

            <Text style = {{fontSize  :12, fontWeight : '600', color: textSecondaryColor, marginTop : 20, marginBottom : 24, marginLeft : 154}}>Paramètres</Text>
            <View style = {styles.item}>
                <Image source={faceIDIcon}/>
                <View style = {{marginRight : 24}}>
                    <Text style = {{fontSize  :14, fontWeight : '600', color: principalColor , marginBottom : 8}}>Authoriser Face ID</Text>
                    <Text style = {{fontSize  :12, fontWeight : '600', color: textSecondaryColor}}>Utiliser Face ID pour se connecter</Text>
                </View>
                <Switch
                    trackColor={{false: '#767577', true: '#365FF1'}}
                    thumbColor={isEnabled ? '#FFF' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <TouchableOpacity style = {styles.item} onPress={handleLogout}>
                <Image source={block} style = {{height :40, width : 40}}/>
                <View>
                    <Text style = {{fontSize  :14, fontWeight : '600', color: RedColor , marginBottom : 8}}>Deconnexion</Text>
                    <Text style = {{fontSize  :12, fontWeight : '600', color: RPColor}}>Appuyez ici pour vous deconnecter</Text>
                </View>
            </TouchableOpacity>
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
    
});


export default Account