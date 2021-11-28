import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import {Colors} from '../../utils/colors';
import {Texts} from '../../utils/texts';

const SignUp = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'space-between',
      }}>
      <Header title="Sign Up" subTitle="Register and eat" onBack />
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

          <TextInput text="Full Name" placeholder="Type your full name" />
          <TextInput
            text="Email Address"
            placeholder="Type your email address"
            keyboardType="email-address"
          />
          <TextInput
            text="Password"
            placeholder="Type your password"
            secureTextEntry
          />
          <Button
            text="Continue"
            onPress={() => navigation.navigate('NextSignUp')}
          />
          <Gap height={24} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
