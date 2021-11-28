import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../utils/colors';
import {Texts} from '../../utils/texts';

const ListItem = ({onValueChange, selectedValue, text}) => {
  return (
    <View style={{marginHorizontal: 24, marginBottom: 24}}>
      <Text style={{...Texts.regular2}}>{text}</Text>
      <View
        style={{
          ...Texts.regular1,
          borderRadius: 10,
          borderColor: Colors.black,
          borderWidth: 1,
        }}>
        <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({});
