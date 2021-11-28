import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Rating} from '.';
import {Texts} from '../../utils/texts';

const ListItemFood = ({image, items, rating, orders}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('FoodDetail')}
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
          <View style={{flexDirection: 'row'}}>
            {orders && (
              <Text style={{...Texts.regular1, fontSize: 13}}>
                {14} Items .{' '}
              </Text>
            )}
            <Text style={{...Texts.regular1, fontSize: 13}}>IDR 289.000</Text>
          </View>
        </View>
      </View>
      {rating && <Rating />}
      {items && (
        <Text style={{...Texts.regular1, fontSize: 13}}>{14} Items</Text>
      )}
    </TouchableOpacity>
  );
};

export default ListItemFood;

const styles = StyleSheet.create({});
