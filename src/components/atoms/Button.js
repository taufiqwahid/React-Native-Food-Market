import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../utils/colors';
import {Texts} from '../../utils/texts';

const Button = ({color, text, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: color ? color : Colors.default,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        padding: 12,
        borderRadius: 10,
      }}>
      <Text style={{...Texts.regular2, color: color ? '#fff' : Colors.black}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
