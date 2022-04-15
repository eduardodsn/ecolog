import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold } from '@expo-google-fonts/poppins';
import { Dosis_500Medium, Dosis_400Regular, Dosis_600SemiBold } from '@expo-google-fonts/dosis';
import { Roboto_500Medium } from '@expo-google-fonts/roboto';

// Telas
import MainScreen from './src/Screens/MainScreen';

export default function App() {
  let [fontsLoaded] = useFonts({
    Dosis_400Regular, Dosis_600SemiBold, Roboto_500Medium,
    Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold, Poppins_500Medium,
    Dosis_500Medium,
    Dosis_600SemiBold,
    Roboto_500Medium,
  });


  if (!fontsLoaded) {
    return <View></View>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <MainScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
