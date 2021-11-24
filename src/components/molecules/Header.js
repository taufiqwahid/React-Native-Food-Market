import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Texts} from '../../utils/texts';

const Header = ({title, subTitle}) => {
  return (
    <View
      style={{
        paddingTop: 30,
        paddingBottom: 24,
        paddingLeft: 24,
        backgroundColor: '#fff',
      }}>
      <Text style={{...Texts.regular2, fontSize: 22}}>{title}</Text>
      <Text style={{...Texts.regular1}}>{subTitle}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
