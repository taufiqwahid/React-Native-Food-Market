import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IcStarOff, IcStarOn} from '../../assets';
import {Texts} from '../../utils/texts';

const ListItemFood = ({image}) => {
  return (
    <View
      style={{
        marginHorizontal: 24,
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={image}
          style={{width: 60, height: 60, borderRadius: 8}}
        />
        <View style={{marginLeft: 12}}>
          <Text style={{...Texts.regular2}}>Soup Bumil</Text>
          <Text style={{...Texts.regular1, fontSize: 13}}>IDR 289.000</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
        <IcStarOff />
        <Text style={{...Texts.regular1}}>4.5</Text>
      </View>
    </View>
  );
};

export default ListItemFood;

const styles = StyleSheet.create({});
