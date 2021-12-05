import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {BottomNavigator} from '../components';
import {
  FoodDetails,
  Home,
  NextSignUp,
  Order,
  OrderDetail,
  OrderSummary,
  Profile,
  SignIn,
  SignUp,
  SplashScreen,
  SuccessOrder,
  SuccessSignUp,
} from '../pages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
const OrderStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};
const OrderStackScreen = () => {
  return (
    <OrderStack.Navigator screenOptions={{headerShown: false}}>
      <OrderStack.Screen name="Order" component={Order} />
    </OrderStack.Navigator>
  );
};
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
};

const MainApp = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomNavigator {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomeStackScreen" component={HomeStackScreen} />
      <Tab.Screen name="OrderStackScreen" component={OrderStackScreen} />
      <Tab.Screen name="ProfileStackScreen" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="NextSignUp" component={NextSignUp} />
      <Stack.Screen name="SuccessSignUp" component={SuccessSignUp} />
      <Stack.Screen name="FoodDetail" component={FoodDetails} />
      <Stack.Screen name="OrderSummary" component={OrderSummary} />
      <Stack.Screen name="SuccessOrder" component={SuccessOrder} />
      <Stack.Screen name="OrderDetail" component={OrderDetail} />
      <Stack.Screen name="MainApp" component={MainApp} />
    </Stack.Navigator>
  );
};

export default Router;
