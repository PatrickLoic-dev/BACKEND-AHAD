// import React from 'react';
// import { View, Image, Button } from 'react-native';
// import ImageCropPicker from 'react-native-image-crop-picker';

// export default function CropScreen({ navigation, route }) {
//   const { photoUri } = route.params;

//   const handleSavePhoto = async () => {
//     try {
//       const croppedImage = await ImageCropPicker.openCropper({
//         path: photoUri,
//         width: 200,
//         height: 200,
//         cropperCircleOverlay: true,
//         cropping: true,
//       });

//       // Récupérer l'URI de l'image recadrée
//       const cropImageUri = croppedImage.path;

//       // Implémentez votre logique de sauvegarde de l'image ici
//       // par exemple, vous pouvez utiliser la méthode save de `react-native-fs` pour enregistrer l'image dans le système de fichiers

//       console.log('Image saved successfully:', cropImageUri);
//     } catch (error) {
//       console.log('Error saving image:', error);
//     }
//   };

//   const handleCancel = () => {
//     navigation.goBack();
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: photoUri }} style={styles.photo} />
//       <View style={styles.buttonContainer}>
//         <Button title="Save" onPress={handleSavePhoto} />
//         <Button title="Cancel" onPress={handleCancel} />
//       </View>
//     </View>
//   );
// }

// const styles = {
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   photo: {
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '80%',
//   },
// };