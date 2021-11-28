import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Gap = ({height, width, color}) => {
  return (
    <View
      height={height}
      width={width ? width : '100%'}
      style={{backgroundColor: color ? color : '#fff'}}></View>
  );
};

export default Gap;

const styles = StyleSheet.create({});
