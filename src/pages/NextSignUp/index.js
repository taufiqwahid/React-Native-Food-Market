import axios from 'axios';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {Button, Gap, Header, ListItem, TextInput} from '../../components';
import {com} from '../../config/API';
import {Colors} from '../../utils/colors';
import {Texts} from '../../utils/texts';

const NextSignUp = ({navigation}) => {
  const register = useSelector(state => state.registerReducer);
  const userReducer = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    address: '',
    city: 'makassar',
    houseNumber: '',
    phoneNumber: '',
  });

  const formValue = (type, value) => {
    return setForm({...form, [type]: value});
  };

  const onSubmit = () => {
    dispatch({type: 'SET_NEXT_REGISTER', value: form});

    axios
      .post(com.register, register)
      .then(res => {
        dispatch({type: 'SET_USER', value: res.data.data});
      })
      .catch(err => console.log(err.response));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{backgroundColor: Colors.background, flex: 1}}>
        <Header title="Address" subTitle="Make sure it’s valid" onBack />
        <Gap color={Colors.background} height={24} />
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
          <TextInput
            text="Phone No."
            placeholder="Type your phone number"
            value={form.phoneNumber}
            onChangeText={text => formValue('phoneNumber', text)}
          />
          <TextInput
            text="Address"
            placeholder="Type your address"
            value={form.address}
            onChangeText={text => formValue('address', text)}
          />
          <TextInput
            text="House No."
            placeholder="Type your house number"
            value={form.houseNumber}
            onChangeText={text => formValue('houseNumber', text)}
          />
          <ListItem
            text="City"
            value={form.city}
            selectedValue={form.city}
            onValueChange={value => formValue('city', value)}
          />

          <Button text="Sign Up Now" onPress={onSubmit} />
          <Gap height={24} />
        </View>
      </View>
    </ScrollView>
  );
};

export default NextSignUp;

const styles = StyleSheet.create({});
