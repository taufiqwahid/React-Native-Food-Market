import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Rating} from '.';
import {IcStarOff, IcStarOn} from '../../assets';
import {Texts} from '../../utils/texts';

const FoodCard = ({image}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 8,
        width: 180,
        height: 190,
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
          width: 180,
          height: 120,
          resizeMode: 'cover',
        }}
      />
      <View style={{marginLeft: 12}}>
        <TouchableOpacity onPress={() => navigation.navigate('FoodDetail')}>
          <Text style={{...Texts.regular2, marginTop: 12}}>Cherry Healthy</Text>
        </TouchableOpacity>
        <Rating />
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({});
