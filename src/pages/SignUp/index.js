import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Gap, Header, TextInput} from '../../components';
import {Colors} from '../../utils/colors';

const SignUp = ({navigation}) => {
  const state = useSelector(state => state);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const formValue = (type, value) => {
    return setForm({...form, [type]: value});
  };

  const onSubmit = () => {
    console.log(form);
    dispatch({type: 'SET_REGISTER', value: form});
    navigation.replace('NextSignUp');
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <Header title="Sign Up" subTitle="Register and eat" onBack />
        <Gap color={Colors.background} height={24} />
        <Gap height={24} />
        <View style={{backgroundColor: '#fff', flex: 1}}>
          <TextInput
            text="Full Name"
            placeholder="Type your full name"
            value={form.name}
            onChangeText={text => formValue('name', text)}
          />
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
          <Button text="Continue" onPress={onSubmit} />
          <Gap height={24} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
