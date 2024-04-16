import React, { useState } from 'react';
import { View,Text, Alert,StyleSheet, Image, TouchableOpacity } from 'react-native';
import { illustrationInscription, listValid } from '../../utils/images';

const Loader = ({ navigation }) => {
<View style={styles.container}>
    <View style={styles.containIllustration}>
        <Image source={illustrationInscription}></Image>
    </View>
    <View style={styles.containTitle}>
        <Text style={styles.title}>Patientez quelques instants</Text>
        <Text style={styles.titleDescript}>Nous analysons la vérification de votre profil</Text>
    </View>
    <View style={styles.containList}>
        <View style={styles.containItem}>
            <Image source={listValid}></Image>
            <Text>Documents téléchargés</Text>
        </View><View style={styles.containItem}>
            <Image source={listValid}></Image>
            <Text>Documents approuvés</Text>
        </View>
        <View style={styles.containItem}>
            <Image source={listValid}></Image>
            <Text>Selfie approuvés</Text>
        </View>
    </View>
    <View style={styles.btnContainer}>
            <TouchableOpacity
                style= {[styles.floatingButton]}>
                <Text style={styles.floatingButtonText}>Terminé</Text>
                </TouchableOpacity>
        </View>
</View>

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:50,
        padding:10,
        backgroundColor:'white'
        
    },
    containTitle:{

    },
    containItem:{

    },
    containIllustration:{

    },
    containList:{

    },
    titleDescript:{

    },
    title:{

    },

    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
      },
      floatingButton: {
        position: 'absolute',
        bottom: '-145%',
        right: 5,
        backgroundColor: '#000',
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 114,
        justifyContent:'center',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
      },
      floatingButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },

})

export default Loader;