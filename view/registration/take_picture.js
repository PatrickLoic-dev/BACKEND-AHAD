import React, {useState, useEffect} from 'react';
import { Avatar } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  ImageBackground
} from 'react-native';
import { abstractBackgroundColor, avatarImage } from "../../utils/images";
import Icon from 'react-native-vector-icons/Ionicons'
import { principalColor } from '../../utils/constantes';
import { registration } from '../../api/userAPI';


export const TakePicture = ({ route, navigation }) => {
  const {Nom, Prenom, Email, Telephone, Password} = route.params;
  const [image, setImage] = useState(null);

  useEffect(() => {
    console.log(`Nom : ${Nom}`);
    console.log(`Prenom : ${Prenom}`);
    console.log(`Email : ${Email}`);
    console.log(`Telephone : ${Telephone}`);
    console.log(`Password : ${Password}`);
  }, []);

const handleRegistration = () => {
  const formdata = new FormData();
  formdata.append('avatar', {
    uri: image,
    name: 'profile-image',
  });

  formdata.append('name', Nom);
  formdata.append('surname', Prenom);
  formdata.append('telephone', Telephone);
  formdata.append('email', Email);
  formdata.append('password', Password);

  registration(formdata)
    .then((result) => {
      if (result.status == 200) {
        console.log(result.data);

        navigation.replace("Login");
      }
    })
    .catch((err) => {
      console.error("Error" + err);
    });
};



  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  return(
    <ImageBackground source={abstractBackgroundColor} style={styles.container}>
          <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View>
        <Text style={styles.title}>Choissisez une image</Text>
        <Text style={styles.subtitle}>Veuillez choisir une image de vous</Text>
        </View>
        <View style = {styles.cameraBtn}>
          <Icon name = "camera-outline" color = {'white'} size = {32}/>
        </View>
        <TouchableOpacity style = {styles.avatar} onPress={pickImage}>
          <Avatar.Image size={200} source={{uri : image==""? avatarImage : image}}/>
        </TouchableOpacity>

        <View style={styles.btnContainer}>
            <TouchableOpacity style= {[styles.floatingButton]} onPress={handleRegistration}>
          <Text style={styles.floatingButtonText}>Enregistrer</Text>
        </TouchableOpacity >
        </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title:{
    // marginTop:10,
    fontSize:22,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black',
    alignContent:'center'
  },
  titleView:{
    width:300,
    justifyContent:'center',
    // alignItems:'center',
    marginVertical:30
  },
  subtitle:{
    marginVertical:10,
    textAlign: 'center',
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
    width : '100%',
  },
  cameraBtn : {
    backgroundColor : principalColor,
    justifyContent : "center",
    alignItems : "center",
    position : "absolute",
    right : '30%',
    bottom : "40%",
    padding: 10,
    borderRadius : 50,
    zIndex : 1
  },
  floatingButtonText: {
    color: 'white',
    fontSize: 18,
    alignContent:'center',
    fontWeight: 'bold',
  },
  inner: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  avatar : {
    alignItems: 'center',
    marginBottom: 20,

  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },

  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});