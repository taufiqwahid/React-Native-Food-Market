import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {FoodDummy1, IcStarOff, IcStarOn} from '../../assets';
import {Texts} from '../../utils/texts';

const FoodCard = ({image}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 8,
        width: 200,
        height: 210,
        marginRight: 24,
        marginVertical: 24,
        overflow: 'hidden',

        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
      }}>
      <Image
        source={image}
        style={{
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          width: 200,
          height: 140,
          resizeMode: 'cover',
        }}
      />
      <View style={{marginLeft: 12}}>
        <Text style={{...Texts.regular2, marginTop: 12}}>Cherry Healthy</Text>
        <View style={{flexDirection: 'row'}}>
          <IcStarOn />
          <IcStarOn />
          <IcStarOn />
          <IcStarOn />
          <IcStarOff />
          <Text style={{...Texts.regular1}}>4.5</Text>
        </View>
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({});
