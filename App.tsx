// In App.js in a new project

import * as React from 'react';
import { View, StatusBar } from 'react-native';
// import { createStaticNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Routes from './src/Routes';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>DetailsScreen</Text>
//     </View>
//   );
// }

// const RootStack = createNativeStackNavigator({
//   initialRouteName: 'Home',
//   screenOptions: {
//     headerStyle: { backgroundColor: 'tomato' },
//   },
//   screens: {
//     Home: {
//       screen: HomeScreen,
//       options: {
//         title: 'Overview',
//       },
//     },
//     Details: DetailsScreen,
//   },
// });

// const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <View style={{flex:1}}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent showHideTransition="slide" />
      <Routes />
    </View>
  );
}