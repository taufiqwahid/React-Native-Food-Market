import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import {Colors} from '../../utils/colors';

const SignIn = ({navigation}) => {
  return (
    <View style={{backgroundColor: Colors.background, flex: 1}}>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <Gap color={Colors.background} height={24} />

      <Gap height={24} />
      <View style={{backgroundColor: '#fff'}}>
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
        <Button text="Sign In" />
        <Gap height={12} />
        <Button
          text="Create New Account"
          color={Colors.grey}
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
