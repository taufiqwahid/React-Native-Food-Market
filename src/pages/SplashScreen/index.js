import {isEmpty} from 'lodash';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Logo} from '../../assets';
import {Colors} from '../../utils/colors';
import {Texts} from '../../utils/texts';

const SplashScreen = ({navigation}) => {
  const userReducer = useSelector(state => state?.userReducer);

  useEffect(() => {
    setTimeout(() => {
      if (isEmpty(userReducer?.access_token)) {
        navigation.replace('SignIn');
      } else {
        navigation.replace('MainApp');
      }
    }, 2000);
  }, []);

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
