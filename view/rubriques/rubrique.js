import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList,ImageBackground, ScrollView } from 'react-native';
import { abstractBackgroundBlue, avatar, calendar, card, chevron, investing, scale, search } from '../../utils/images';
import { principalColor, textSecondaryColor } from '../../utils/constantes';
import AntDesign from '@expo/vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import React , {useEffect, useState} from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { GetCotisationsPourRubrique, MontantTotalCotisationsPourRubrique, Profile } from '../../api/userAPI';
import listItem from '../../components/listItem';

const data = [];

const Rubrique = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [cotisation, setCotisation] = useState(0);

    const [cotisations, setCotisations] = useState([]);






    useEffect(() => {
        GetProfile();
        }, []);
        

        const GetMontantCotisation = () =>{
            MontantTotalCotisationsPourRubrique(value._id).then((result) => {
                console.log("Donnee : ");
                console.log(result.data.totalAmount);
                setCotisation(result.data.totalAmount)
            }).catch((err) => {
                console.error("Error"+ err); 
            })
        }

        const GetUsersContribution = () =>{
            GetCotisationsPourRubrique(value._id).then((result) => {
                console.log('Data :');
                console.log(result.data);
                setCotisations(result.data);
            }).catch((err) => {
                console.error("Error"+ err); 
            })
        }




        const GetProfile = () =>{
        Profile().then((result) => {
            console.log("Rubriques :" + result.data.rubriques);
            result.data.rubriques.forEach(rubrique => {
            data.push(rubrique);
            });
            console.log(data);
        }).catch(err => {
            console.error("Error"+ err);    
        });
    }





return (
    <ImageBackground  source={abstractBackgroundBlue} style={styles.container}>

            <View style = {styles.head}>
                <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="intitule"
                valueField="value"
                placeholder={!isFocus ? 'Rubriques' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item);
                    setIsFocus(false);
                    GetMontantCotisation();
                    GetUsersContribution();
                    console.log(item.intitule);
                    console.log(item);
                }}
                renderLeftIcon={() => (
                    <AntDesign
                    style={styles.icon}
                    color={isFocus ? 'blue' : 'black'}
                    name="creditcard"
                    size={20}
                    />
                )}
                />
            </View>

            <View style = {styles.solde}>
                <Text style = {{fontSize : 14, color : textSecondaryColor, fontWeight : '600'}}>Cotisation Totale</Text>
                <View style = {styles.montant}>
                    <Text style = {{fontSize : 56, fontWeight : '900'}}>{cotisation? cotisation : 'NO'}</Text>
                    <Text style = {{fontSize : 24, fontWeight : '900'}}>XAF</Text>
                </View>
                <Text style = {{fontSize : 14, color : textSecondaryColor, fontWeight : '600'}}>Vous</Text>
            </View>


            <View style = {styles.bottomSheet}>
                <View style = {styles.search}>
                    <Image source={calendar} style = {styles.icon}/>
                    <Text style = {{fontSize : 12, color : textSecondaryColor, fontWeight: "600"}}>Historique</Text>
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
        paddingHorizontal : 32,
    },
    view : {
        marginTop:18,
    }, 
    dropdown: {
        height: 50,
        width : 250,
        borderColor: 'gray',
        borderWidth: 0,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginLeft : 33,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
        fontWeight : '900'
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});

export default Rubrique;