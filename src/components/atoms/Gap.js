import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Gap = ({height, width}) => {
  return <View height={height} width={width ? width : '100%'}></View>;
};

export default Gap;

const styles = StyleSheet.create({});
