import React, { useState } from 'react';
import { View, Alert,StyleSheet } from 'react-native';
import { illustrationInscription, listValid } from '../../utils/images';

const Loarder = ({ navigation }) => {
<View style={styles.container}>
    <View style={styles.containIllustration}>
        <Image source={illustrationInscription}></Image>
    </View>
    <View style={styles.containTitle}>
        <Text style={styles.title}>Patientez quelques instants</Text>
        <Text style={styles.titleDescript}>Nous analysons la vérification de votre profil</Text>
    </View>
    <View style={containList}>
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
        
    },

    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
      },
      floatingButton: {
        position: 'absolute',
        bottom: '-145%',
        right: '6%',
        backgroundColor: '#007AFF',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 130,
        display:'flex',
        flexDirection:'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
      },
      floatingButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },

})

export default Loarder;