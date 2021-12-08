import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Rating} from '.';
import {Colors} from '../../utils/colors';
import FormatNumber from '../../utils/formatNumber';
import {Texts} from '../../utils/texts';

const ListItemFood = ({
  name,
  price,
  rate,
  countItem,
  item,
  image,
  items,
  rating,
  inProgress,
  pastOrders,
  statusCancel,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingHorizontal: 24,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={{uri: image}}
          resizeMode="cover"
          style={{width: 60, height: 60, borderRadius: 8}}
        />
        <View style={{marginLeft: 12}}>
          <Text style={{...Texts.regular2}}>{name}</Text>
          <View style={{flexDirection: 'row'}}>
            {inProgress && (
              <Text style={{...Texts.regular1, fontSize: 13}}>
                {countItem} Items .{' '}
              </Text>
            )}
            <FormatNumber number={price} />
          </View>
        </View>
      </View>
      {rating && <Rating rate={rate} />}
      {pastOrders && (
        <View>
          <Text style={{...Texts.regular1, fontSize: 10, color: Colors.grey}}>
            Mei 2, 09:00
          </Text>
          {statusCancel && (
            <Text style={{...Texts.regular1, fontSize: 10, color: Colors.red}}>
              Cancelled
            </Text>
          )}
        </View>
      )}
      {items && (
        <Text style={{...Texts.regular1, fontSize: 13}}>{countItem} Items</Text>
      )}
    </TouchableOpacity>
  );
};

export default ListItemFood;

const styles = StyleSheet.create({});
