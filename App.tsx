// In App.js in a new project

import * as React from 'react';
import { View, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
// import { createStaticNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Routes from './src/Routes';

import theme from './src/theme';


export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent showHideTransition="slide" />
        <Routes />
      </ThemeProvider>
    </View>
  );
}