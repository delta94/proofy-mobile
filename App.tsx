import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';
import {
  Archivo_400Regular,
  Archivo_700Bold,
} from '@expo-google-fonts/archivo';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  useFonts,
} from '@expo-google-fonts/poppins';

import Landing from './src/pages/Landing';

import AppStack from './src/routes/AppStack';

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <AppStack />
      </>
    );
  }
}
