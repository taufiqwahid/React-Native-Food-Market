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
        <Text style={{...Texts.regular2, fontSize: 20}}>Yeay! Completed</Text>
        <Text style={{...Texts.regular1}}>some foods as a self-reward</Text>
        <Gap height={24} />
      </View>
      <View>
        <View style={{width: 200, alignSelf: 'center'}}>
          <Button
            text="Find Foods"
            onPress={() => navigation.replace('NextSignUp')}
          />
        </View>
      </View>
    </View>
  );
};

export default SuccessSignUp;

const styles = StyleSheet.create({});
