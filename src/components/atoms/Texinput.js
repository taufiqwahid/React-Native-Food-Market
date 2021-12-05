import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Colors} from '../../utils/colors';
import {Texts} from '../../utils/texts';

const Texinput = props => {
  return (
    <View style={{marginHorizontal: 24, marginBottom: 24}}>
      <Text style={{...Texts.regular2}}>{props.text}</Text>
      <TextInput
        autoCapitalize="none"
        {...props}
        style={{
          ...Texts.regular1,
          borderRadius: 10,
          borderColor: Colors.black,
          borderWidth: 1,
          padding: 10,
        }}
      />
    </View>
  );
};

export default Texinput;

const styles = StyleSheet.create({});
