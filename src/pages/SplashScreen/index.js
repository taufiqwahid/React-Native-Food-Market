import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets/Illustration';
import {Gap} from '../../components';
import {Colors} from '../../utils/colors';
import {Texts} from '../../utils/texts';

const SplashScreen = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.default,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo />
      <Text
        style={{
          ...Texts.regular2,
          fontSize: 32,
          fontFamily: 'Poppins-Medium',
        }}>
        FoodMarket
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
