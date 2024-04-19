import { ImageBackground, StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { abstractBackgroundWhite} from '../../utils/images'
import { chevonRight } from '../../utils/images'
import { Avatar } from 'react-native-paper'
import { avatarImage } from "../../utils/images";
import { SecondaryColor } from '../../utils/constantes';


import { nonValidatedUsersList } from '../../api/userAPI';
import cardComponent from '../../components/card';

const DemandeUser = ({navigation}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        CollectUsers();
        console.log(users);
    }, []);

    const CollectUsers = () =>{
        nonValidatedUsersList().then((result) => {
            setUsers(result.data);
        }).catch(err => {
            console.error("Error"+ err);    
        });
    }


    const cardComponent = ({item}) => {
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

    return (
    <ImageBackground source={abstractBackgroundWhite} style = {styles.container}>
        <View style = {styles.header}>
            <Text style = {styles.title}>Demandes de validation</Text>
        </View>
        
        <FlatList
            data={users}
            keyExtractor={(item) => item._id}
            renderItem={cardComponent}
        />
       
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
        marginBottom : 32,
        flexDirection : 'row',
    },
    title : {
        fontSize: 24,
        fontWeight : '900', 
    },
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