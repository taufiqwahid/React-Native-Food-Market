import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcMin, IcPlus} from '../../assets';
import {Texts} from '../../utils/texts';

const Counter = ({count, countMin, countPlus}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={countMin} style={styles.icon}>
        <IcMin />
      </TouchableOpacity>
      <View
        style={{
          width: 30,
          height: 26,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 2,
        }}>
        <Text style={{...Texts.regular2}}>{count ? count : 1}</Text>
      </View>
      <TouchableOpacity onPress={countPlus} style={styles.icon}>
        <IcPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 2,
  },
});
