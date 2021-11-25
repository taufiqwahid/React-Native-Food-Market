import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  NextSignUp,
  SignIn,
  SignUp,
  SplashScreen,
  SuccessSignUp,
} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="NextSignUp" component={NextSignUp} />
      <Stack.Screen name="SuccessSignUp" component={SuccessSignUp} />
    </Stack.Navigator>
  );
};

export default Router;
