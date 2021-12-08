import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcStarOff, IcStarOn} from '../../assets';
import {Texts} from '../../utils/texts';

const Rating = ({rate}) => {
  const RenderStart = () => {
    let star = [];
    for (let i = 0; i < 5; i++) {
      if (i < rate) {
        star.push(<IcStarOn />);
      } else {
        star.push(<IcStarOff />);
      }
    }
    return star;
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <RenderStart />
      <Text style={{...Texts.regular1}}>{rate}</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({});
