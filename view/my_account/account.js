import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, Switch } from 'react-native';
import { abstractBackgroundBlue, abstractBackgroundBlueSVG, avatar, calendar, card, chevron, faceIDIcon, investing, mailIcon, pAvatar, pencil, phoneIcon, scale, search, userIcon } from '../../utils/images';
import { principalColor, textSecondaryColor } from '../../utils/constantes';


const Account = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
                    <Text style = {{fontSize  :14, fontWeight : '600', color: principalColor}}>Kangue Kwelle</Text>
                </View>
            </View>


            <View style = {styles.item}>
                <Image source={userIcon}/>
                <View>
                    <Text style = {{fontSize  :12, fontWeight : '600', color: textSecondaryColor, marginBottom : 8}}>Vos Prénoms</Text>
                    <Text style = {{fontSize  :14, fontWeight : '600', color: principalColor}}>Patrick Loic</Text>
                </View>
            </View>

            
            <View style = {styles.item}>
                <Image source={phoneIcon}/>
                <View>
                    <Text style = {{fontSize  :12, fontWeight : '600', color: textSecondaryColor, marginBottom : 8}}>Numéro</Text>
                    <Text style = {{fontSize  :14, fontWeight : '600', color: principalColor}}>+237698800797</Text>
                </View>
            </View>

            
            <View style = {styles.item}>
                <Image source={mailIcon}/>
                <View>
                    <Text style = {{fontSize  :12, fontWeight : '600', color: textSecondaryColor, marginBottom : 8}}>Email</Text>
                    <Text style = {{fontSize  :14, fontWeight : '600', color: principalColor}}>kangueloic9@gmail.com</Text>
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