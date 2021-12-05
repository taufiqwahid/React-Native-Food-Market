import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {Colors} from '../../utils/colors';
import {Texts} from '../../utils/texts';
const Loading = () => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(0,0,0,0.1)',
        position: 'absolute',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%',
        width: '100%',
      }}>
      <ActivityIndicator size="large" color={Colors.default} />
      <Text
        style={{
          ...Texts.regular1,
          color: Colors.black,
          marginTop: 10,
          textAlign: 'center',
        }}>
        Loading...
      </Text>
    </View>
  );
};

export default Loading;
