import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Page/SplashPage'; 
import LoginScreen from './Page/LoginPage';
import RegisterScreen from './Page/RegisterPage';
import UbahPasswordScreen from './Page/UbahPasswordPage';
import HomeScreen from './Page/HomePage';
import InputScreen from './Page/InputPage';

// Komponen Layar Login
<LoginScreen/>,
// Komponen Layar Register
<RegisterScreen/>

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown : true}} initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="UbahPassword" component={UbahPasswordScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="InputScreen" component={InputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
