import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { abstractBackground, avatar, calendar, card, chevron, search } from '../../utils/images';
import { principalColor, textSecondaryColor } from '../../utils/constantes';

const Acceuil = () => {
    return (
        <ImageBackground   source={abstractBackground} style={styles.container}>
             

            <View style = {styles.head}>
                <Image source={card} style = {styles.icon}></Image>
                <TouchableOpacity>
                    <Image source={chevron} style = {{height : 16, width: 16}}></Image>
                </TouchableOpacity>
            </View>

            <View style = {styles.solde}>
                <View style = {styles.montant}>
                    <Text style = {{fontSize : 24, fontWeight : '900'}}>XAF</Text>
                    <Text style = {{fontSize : 56, fontWeight : '900'}}>2,500</Text>
                </View>
                <Text style = {{marginLeft : 35, fontSize : 14, color : textSecondaryColor, fontWeight : '600'}}>Available balance</Text>
            </View>

            <View style = {styles.actions}>
                <View style = {styles.button}>
                    <TouchableOpacity style = {styles.btn}></TouchableOpacity>
                    <Text style = {{marginTop : 4, fontWeight : '900'}}>Dépôt</Text>
                </View>

                <View style = {styles.button}>
                    <TouchableOpacity style = {styles.btn}></TouchableOpacity>
                    <Text style = {{marginTop : 4, fontWeight : '900'}}>Retrait</Text>
                </View>

                <View style = {styles.button}>
                    <TouchableOpacity style = {styles.btn}></TouchableOpacity>
                    <Text style = {{marginTop : 4,fontWeight : '900'}}>Cotiser</Text>
                </View>

                <View style = {styles.button}>
                    <TouchableOpacity style = {styles.btn}></TouchableOpacity>
                    <Text style = {{marginTop : 4, fontWeight : '900'}}>More</Text>
                </View>
            </View>


            <View style = {styles.bottomSheet}>
                <View style = {styles.search}>
                    <Image source={calendar} style = {styles.icon}/>
                    <Text style = {{fontSize : 12, color : textSecondaryColor}}>Historique</Text>
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
        marginTop : 28,
        display : "flex",
        flexDirection : "row",
        marginLeft : 30,
        alignItems : "baseline"
    },
    actions : {
        display :"flex",
        flexDirection : "row",
        marginLeft : 20,
        marginTop :48,
        marginBottom : 48
    },
    button : {
        marginRight : 37,
        alignItems : "center"
    },
    btn : {
        backgroundColor : principalColor,
        height : 56,
        width : 56,
        borderRadius : 50
    },
    bottomSheet : {
        width : 395,
        height: 800,
        backgroundColor : '#FFF',
        borderTopLeftRadius : 32,
        borderTopRightRadius : 32
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
        marginRight :8
    }, content : {
        marginRight : 180
    }
});

export default Acceuil;