import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image,FlatList, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { abstractBackground, avatar, calendar, card, category, chevron, coin, exchange, invoice, search } from '../../utils/images';
import { principalColor, textSecondaryColor } from '../../utils/constantes';
import { GetCotisations, Profile } from '../../api/userAPI';
import listItem from '../../components/listItem';



const Acceuil = ({navigation}) => {

    const [user, setUser] = useState('');
    const [cotisations, setCotisations] = useState([]);

    useEffect(() => {
        // Fetch user profile initially
        GetProfile();
        GetAllCotisations();

        // Fetch user profile every 60 seconds
        const interval = setInterval(() => {
            GetProfile();
            GetAllCotisations();
        }, 30000); // 30000 milliseconds = 30 seconds

        // Clean up the interval to avoid memory leaks
        return () => clearInterval(interval);

    }, []);


    const GetProfile = () =>{
        Profile().then((result) => {
            setUser(result.data);
            console.log(user);
        }).catch(err => {
            console.error("Error"+ err);    
        });
    }

    
    const GetAllCotisations = () =>{
        GetCotisations().then((result) => {
            console.log('Data :');
            console.log(result.data);
            setCotisations(result.data);
        }).catch(err => {
            console.error("Error"+ err);    
        });
    }



    return (
        <ImageBackground  source={abstractBackground} style={styles.container}>

            <View style = {styles.head}>
                <Image source={card} style = {styles.icon}></Image>
                <TouchableOpacity>
                    <Image source={chevron} style = {{height : 16, width: 16}}></Image>
                </TouchableOpacity>
            </View>

            <View style = {styles.solde}>
                <View style = {styles.montant}>
                    <Text style = {{fontSize : 56, fontWeight : '900'}}>{user.solde}</Text>
                    <Text style = {{fontSize : 24, fontWeight : '900'}}>XAF</Text>
                </View>
                <Text style = {{marginLeft : 35, fontSize : 14, color : textSecondaryColor, fontWeight : '600'}}>Available balance</Text>
            </View>

            <View style = {styles.actions}>
                <View style = {styles.button}>
                    <TouchableOpacity style = {styles.btn} onPress={()=> navigation.replace('Recharge', {
                        email : user.email,
                        phone : user.telephone,
                        solde: user.solde
                    })}>
                        <Image source={exchange}/>
                    </TouchableOpacity>
                    <Text style = {{marginTop : 4, fontWeight : '900'}}>Recharge</Text>
                </View>

                <View style = {styles.button}>
                    <TouchableOpacity style = {styles.btn} onPress={()=> navigation.replace('Cotisation')}>
                        <Image source={invoice}/>
                    </TouchableOpacity>
                    <Text style = {{marginTop : 4,fontWeight : '900'}}>Cotiser</Text>
                </View>

                <View style = {styles.button}>
                    <TouchableOpacity style = {styles.btn}>
                        <Image source={category}/>
                    </TouchableOpacity>
                    <Text style = {{marginTop : 4, fontWeight : '900'}} onPress={()=> navigation.replace('AjouterRubrique')}>Plus</Text>
                </View>
            </View>


            <View style = {styles.bottomSheet}>
                <View style = {styles.search}>
                    <Image source={calendar} style = {styles.icon}/>
                    <Text style = {{fontSize : 12, color : textSecondaryColor}}>Historique</Text>
                    <Image source={search} style = {styles.icon}/>
                </View>
                <FlatList
                    data={cotisations}
                    keyExtractor={(item) => item._id}
                    renderItem={listItem}
                    style = {styles.view}
                />
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
        marginLeft : 60,
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
        borderRadius : 50,
        alignItems :"center",
        justifyContent : "center"
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
        marginBottom : 12,
        height :"auto"
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