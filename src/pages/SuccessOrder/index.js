import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlSuccessOrder} from '../../assets';
import {Button, Gap} from '../../components';
import {Colors} from '../../utils/colors';
import {Texts} from '../../utils/texts';

const SuccessOrder = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <View style={{alignItems: 'center'}}>
        <IlSuccessOrder />
        <Gap height={24} />
        <View style={{marginHorizontal: '20%'}}>
          <Text style={{...Texts.regular2, textAlign: 'center', fontSize: 20}}>
            You’ve Made Order
          </Text>
          <Text style={{...Texts.regular1, textAlign: 'center'}}>
            Just stay at home while we are preparing your best foods
          </Text>
        </View>
        <Gap height={24} />
      </View>
      <View>
        <View style={{width: 300, alignSelf: 'center'}}>
          <Button
            text="Order Other Foods"
            onPress={() =>
              navigation.replace('MainApp', {
                screen: 'Home',
              })
            }
          />
          <View style={{marginTop: 16}}>
            <Button
              text="View My Order"
              color={Colors.grey}
              onPress={() =>
                navigation.replace('MainApp', {
                  screen: 'Order',
                })
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SuccessOrder;

const styles = StyleSheet.create({});
