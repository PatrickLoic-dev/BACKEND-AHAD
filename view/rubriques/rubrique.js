import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { abstractBackgroundBlue, avatar, calendar, card, chevron, investing, scale, search } from '../../utils/images';
import { principalColor, textSecondaryColor } from '../../utils/constantes';
import React from 'react';

const Rubrique = () => {
  return (
    <ImageBackground  source={abstractBackgroundBlue} style={styles.container}>
             

            <View style = {styles.head}>
                <Image source={card} style = {styles.icon}></Image>
                <TouchableOpacity>
                    <Image source={chevron} style = {{height : 16, width: 16}}></Image>
                </TouchableOpacity>
            </View>

            <View style = {styles.solde}>
                <Text style = {{fontSize : 14, color : textSecondaryColor, fontWeight : '600'}}>Available balance</Text>
                <View style = {styles.montant}>
                    <Text style = {{fontSize : 24, fontWeight : '900'}}>XAF</Text>
                    <Text style = {{fontSize : 56, fontWeight : '900'}}>2,500</Text>
                </View>
                <Text style = {{fontSize : 14, color : textSecondaryColor, fontWeight : '600'}}>Vous</Text>
            </View>

            <View style = {styles.graph}>
                <Image source = {investing} style = {{marginBottom : 18, height : 144}}/>           
                <Image source = {scale} style = {{marginBottom : 30, height : 36}}/>           
            </View>


            <View style = {styles.bottomSheet}>
                <View style = {styles.search}>
                    <Image source={calendar} style = {styles.icon}/>
                    <Text style = {{fontSize : 12, color : textSecondaryColor, fontWeight: "600"}}>Historique</Text>
                    <Image source={search} style = {styles.icon}/>
                </View>
                <ScrollView showsVerticalScrollIndicator = {false} style = {styles.view}>

                    <TouchableOpacity style = {styles.item}>
                        <Image style = {styles.avatar} source={avatar}/>
                        <View style = {styles.content}>
                            <Text style = {{fontWeight : '900', fontSize :14}}>AirBnb</Text>
                            <Text style = {{fontWeight : '600', color: textSecondaryColor, fontSize : 12}}>Housing</Text>
                        </View>
                        <Text  style = {{fontWeight : '600', color: textSecondaryColor, fontSize : 14}}>-1500</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.item}>
                        <Image style = {styles.avatar} source={avatar}/>
                        <View style = {styles.content}>
                            <Text style = {{fontWeight : '900', fontSize :14}}>AirBnb</Text>
                            <Text style = {{fontWeight : '600', color: textSecondaryColor, fontSize : 12}}>Housing</Text>
                        </View>
                        <Text  style = {{fontWeight : '600', color: textSecondaryColor, fontSize : 14}}>-1500</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.item}>
                        <Image style = {styles.avatar} source={avatar}/>
                        <View style = {styles.content}>
                            <Text style = {{fontWeight : '900', fontSize :14}}>AirBnb</Text>
                            <Text style = {{fontWeight : '600', color: textSecondaryColor, fontSize : 12}}>Housing</Text>
                        </View>
                        <Text  style = {{fontWeight : '600', color: textSecondaryColor, fontSize : 14}}>-1500</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style = {styles.item}>
                        <Image style = {styles.avatar} source={avatar}/>
                        <View style = {styles.content}>
                            <Text style = {{fontWeight : '900', fontSize :14}}>AirBnb</Text>
                            <Text style = {{fontWeight : '600', color: textSecondaryColor, fontSize : 12}}>Housing</Text>
                        </View>
                        <Text  style = {{fontWeight : '600', color: textSecondaryColor, fontSize : 14}}>-1500</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.item}>
                        <Image style = {styles.avatar} source={avatar}/>
                        <View style = {styles.content}>
                            <Text style = {{fontWeight : '900', fontSize :14}}>AirBnb</Text>
                            <Text style = {{fontWeight : '600', color: textSecondaryColor, fontSize : 12}}>Housing</Text>
                        </View>
                        <Text  style = {{fontWeight : '600', color: textSecondaryColor, fontSize : 14}}>-1500</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.item}>
                        <Image style = {styles.avatar} source={avatar}/>
                        <View style = {styles.content}>
                            <Text style = {{fontWeight : '900', fontSize :14}}>AirBnb</Text>
                            <Text style = {{fontWeight : '600', color: textSecondaryColor, fontSize : 12}}>Housing</Text>
                        </View>
                        <Text  style = {{fontWeight : '600', color: textSecondaryColor, fontSize : 14}}>-1500</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.item}>
                        <Image style = {styles.avatar} source={avatar}/>
                        <View style = {styles.content}>
                            <Text style = {{fontWeight : '900', fontSize :14}}>AirBnb</Text>
                            <Text style = {{fontWeight : '600', color: textSecondaryColor, fontSize : 12}}>Housing</Text>
                        </View>
                        <Text  style = {{fontWeight : '600', color: textSecondaryColor, fontSize : 14}}>-1500</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.item}>
                        <Image style = {styles.avatar} source={avatar}/>
                        <View style = {styles.content}>
                            <Text style = {{fontWeight : '900', fontSize :14}}>AirBnb</Text>
                            <Text style = {{fontWeight : '600', color: textSecondaryColor, fontSize : 12}}>Housing</Text>
                        </View>
                        <Text  style = {{fontWeight : '600', color: textSecondaryColor, fontSize : 14}}>-1500</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.item}>
                        <Image style = {styles.avatar} source={avatar}/>
                        <View style = {styles.content}>
                            <Text style = {{fontWeight : '900', fontSize :14}}>AirBnb</Text>
                            <Text style = {{fontWeight : '600', color: textSecondaryColor, fontSize : 12}}>Housing</Text>
                        </View>
                        <Text  style = {{fontWeight : '600', color: textSecondaryColor, fontSize : 14}}>-1500</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.item}>
                        <Image style = {styles.avatar} source={avatar}/>
                        <View style = {styles.content}>
                            <Text style = {{fontWeight : '900', fontSize :14}}>AirBnb</Text>
                            <Text style = {{fontWeight : '600', color: textSecondaryColor, fontSize : 12}}>Housing</Text>
                        </View>
                        <Text  style = {{fontWeight : '600', color: textSecondaryColor, fontSize : 14}}>-1500</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        width : 395,
        height : 892,
    },
    imageBackground: {
        flex: 0.7,
    },
    icon : {
        height : 24,
        width : 24, 
        marginLeft : 30,
        marginRight: 10
    },
    head : {
        display: "flex",
        alignItems :"center",
        flexDirection : "row",
        marginTop : 64
    }, 
    montant : {
        marginTop : 8,
        marginBottom : 8,
        display : "flex",
        flexDirection : "row",
        alignItems : "baseline"
    },
    solde : {
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        marginTop : 32,
        marginBottom : 24
    },
    bottomSheet : {
        width : 385,
        height: 800,
        marginLeft : 2,
        backgroundColor : '#FFF',
        borderTopLeftRadius : 48,
        borderTopRightRadius : 48
    },
    search : {
        display : "flex",
        flexDirection: "row",
        alignItems : "center",
        justifyContent : "space-between",
        marginTop : 16,
        paddingHorizontal : 8,
    },
    view : {
        marginTop:18,
    }, 
    item : {
        display : "flex", 
        flexDirection: "row",
        alignItems : "center",
        paddingHorizontal : 8,
        marginBottom: 16
    },
    avatar : {
        marginLeft : 16,
        height : 40,
        width : 40,
        marginRight :8
    }, 
    content : {
        marginRight : 180
    },
    graph : {
        marginTop : 24,
        marginBottom: 32
    }
});

export default Rubrique;