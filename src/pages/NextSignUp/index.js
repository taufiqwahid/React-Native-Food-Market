import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, ListItem, TextInput} from '../../components';
import {Colors} from '../../utils/colors';
import {Texts} from '../../utils/texts';

const NextSignUp = ({navigation}) => {
  return (
    <View style={{backgroundColor: Colors.background, flex: 1}}>
      <Header title="Address" subTitle="Make sure it’s valid" onBack />
      <Gap color={Colors.background} height={24} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={24} />
        <View style={{backgroundColor: '#fff', flex: 1}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                borderRadius: 100,
                borderWidth: 1,
                borderColor: Colors.grey,
                height: 110,
                width: 110,
                justifyContent: 'center',
                alignItems: 'center',
                borderStyle: 'dashed',
              }}>
              <View
                style={{
                  borderRadius: 100,
                  height: 90,
                  width: 90,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#F0F0F0',
                }}>
                <Text
                  style={{...Texts.regular1, padding: 10, textAlign: 'center'}}>
                  Add Photo
                </Text>
              </View>
            </View>
          </View>
          <TextInput text="Phone No." placeholder="Type your phone number" />
          <TextInput text="Address" placeholder="Type your address" />
          <TextInput text="House No." placeholder="Type your house number" />
          <ListItem text="City" />

          <Button
            text="Sign Up Now"
            onPress={() => navigation.navigate('SuccessSignUp')}
          />
          <Gap height={24} />
        </View>
      </ScrollView>
    </View>
  );
};

export default NextSignUp;

const styles = StyleSheet.create({});
