import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlSuccessSignUp} from '../../assets';
import {Button, Gap} from '../../components';
import {Texts} from '../../utils/texts';

const SuccessSignUp = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <View style={{alignItems: 'center'}}>
        <IlSuccessSignUp />
        <Gap height={24} />
        <View style={{marginHorizontal: '20%'}}>
          <Text style={{...Texts.regular2, textAlign: 'center', fontSize: 20}}>
            Yeay! Completed
          </Text>
          <Text style={{...Texts.regular1, textAlign: 'center'}}>
            some foods as a self-reward
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

export default SuccessSignUp;

const styles = StyleSheet.create({});
