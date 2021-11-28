import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcStarOff, IcStarOn} from '../../assets';
import {Texts} from '../../utils/texts';

const Rating = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <IcStarOn />
      <IcStarOn />
      <IcStarOn />
      <IcStarOn />
      <IcStarOff />
      <Text style={{...Texts.regular1}}>4.5</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({});
