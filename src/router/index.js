import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SplashScreen} from '../pages';
import NextSignUp from '../pages/NextSignUp';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="NextSignUp" component={NextSignUp} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
