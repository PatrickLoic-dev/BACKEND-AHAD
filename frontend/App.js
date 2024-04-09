import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnBoarding from './view/onboarding/onBoarding';
import Acceuil from './view/wallet_transaction_history/acceuil';
import Rubrique from './view/rubriques/rubrique';


export default function App() {
  return (
      <Rubrique></Rubrique>
  );
}

const styles = StyleSheet.create({
  
});
