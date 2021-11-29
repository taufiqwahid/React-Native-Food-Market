import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap} from '..';
import {IlEmptyOrder} from '../../assets';
import {Texts} from '../../utils/texts';

const EmptyOrder = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <View style={{alignItems: 'center'}}>
        <IlEmptyOrder />
        <Gap height={24} />
        <View style={{marginHorizontal: '20%'}}>
          <Text style={{...Texts.regular2, textAlign: 'center', fontSize: 20}}>
            Ouch! Hungry
          </Text>
          <Text style={{...Texts.regular1, textAlign: 'center'}}>
            Seems like you have not ordered any food yet
          </Text>
        </View>
        <Gap height={24} />
      </View>
      <View>
        <View style={{width: 300, alignSelf: 'center'}}>
          <Button
            text="Find Foods"
            onPress={() =>
              navigation.replace('MainApp', {
                screen: 'HomeStackScreen',
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

export default EmptyOrder;

const styles = StyleSheet.create({});
