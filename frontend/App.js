
import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import NameScreen from './view/registration/name_screen';
import BirthScreen from './view/registration/birth_screen';
import FullInfo from './view/registration/full_info';
// import BackArrow from './BackArrow';
import MyComponent from './view/registration/a';
import TakePicture from './view/registration/take_picture';

// Étape 1: Créez vos écrans
function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      {/* <BackArrow onPress={() => navigation.navigate('SecondScreen')} /> */}
    </View>
  );
}

function SecondScreen({ navigation }) {
  return (
    <View>
      <Text>Second Screen</Text>
      {/* <BackArrow onPress={() => navigation.goBack()} /> */}
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen 
            name="FullInfo" 
            component={FullInfo}
            options={{ headerTitle: '',headerTransparent: true,}} />
            <Stack.Screen 
              name="Inscription" 
              component={NameScreen} 
              options={{ headerShown:false}} 
              />
        <Stack.Screen 
          name="BirthScreen" 
          component={BirthScreen} 
          options={{ headerTitle: '',headerTransparent: true,}}
          />
          <Stack.Screen 
                name="MyComponent" 
                component={MyComponent}
                options={{ headerTitle: '',headerTransparent: true,}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;