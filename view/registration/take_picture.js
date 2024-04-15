import { Camera, CameraType } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, ImageComponent } from 'react-native';
import CropScreen from './crop_screen';
import { bntPicture, picture, reverse } from '../../utils/images';
import * as ImagePicker from 'expo-image-picker';

export default function TakePicture({ navigation }) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef(null);
  const [imageUri, setImageUri] = useState(null);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Nous avons besoin de votre permission pour ouvrir la caméra</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  const takePhoto = async () => {
    if (cameraRef.current) {
      try {
        const { uri } = await cameraRef.current.takePictureAsync();
        // setImageUri(uri);
        // navigation.navigate('CropScreen', { photoUri: uri });
      } catch (error) {
        console.log('Veuillez réessayer ultérieurement', error);
      }
    }
  };

  // La photo doit recouvrir tout l'écran et l'utilisateur doit recadrer s'il veut avant d'enregistrer
  return (
    <View style={styles.container}>
      <View style={styles.container1}></View>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
      </Camera>
      <View style={styles.container2}><Text style={styles.title}>Prenez un selfie</Text></View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonContainer1}>
          <TouchableOpacity style={styles.buttonPicturePict} onPress={pickImage}>
            <Image source={picture} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer1}>
          <TouchableOpacity style={styles.buttonPictTake} onPress={takePhoto}>
            <Image source={bntPicture} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer1}>
          <TouchableOpacity style={styles.buttonReverse} onPress={toggleCameraType}>
            <Image source={reverse} />
          </TouchableOpacity>
        </View>
      </View>
      {imageUri && (
        <View style={styles.previewContainer}>
          <Image style={styles.previewImage} source={{ uri: imageUri }} />
          <Button title="Enregistrer dans la base de données" onPress={() => saveImageToDatabase(imageUri)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  container1: {
    flex: 1,
    backgroundColor: 'black',
  },
  container2: {
    backgroundColor: 'black',
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  camera: {
    height: 450,
  },
  buttonContainer1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'row',
    padding: 64,
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  photo: {
    flex: 1,
    resizeMode: 'contain',
  },
  buttonContainerCrop: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 16,
  },
  previewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 16,
  },
});