import axios from 'axios';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import {com} from '../../config/API';
import {Colors} from '../../utils/colors';

const SignIn = ({navigation}) => {
  const [form, setForm] = useState({});

  const onSubmit = () => {
    axios
      .post(com.login, form)
      .then(res => {
        console.log('BERHASILLLLL', res);
        navigation.replace('MainApp', {screen: 'HomeStackScreen'});
      })
      .catch(err => {
        console.log('err', err.response);
      });
  };

  const formValue = (type, value) => {
    return setForm({...form, [type]: value});
  };

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
          value={form.email}
          onChangeText={text => formValue('email', text)}
        />
        <TextInput
          text="Password"
          placeholder="Type your password"
          secureTextEntry
          value={form.password}
          onChangeText={text => formValue('password', text)}
        />
        <Button text="Sign In" onPress={onSubmit} />
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
