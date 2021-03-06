import axios from 'axios';
import {isEmpty} from 'lodash';
import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ProfileDummy} from '../../assets';
import {Button, Gap, Header, ListItem, TextInput} from '../../components';
import {com} from '../../config/API';
import {setLoading} from '../../redux/action/global';
import {Colors} from '../../utils/colors';
import openGallery from '../../utils/openGallery';
import toastMessage from '../../utils/toastMessage';

const NextSignUp = ({navigation}) => {
  const register = useSelector(state => state.registerReducer);
  const userReducer = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState();
  const [form, setForm] = useState({
    address: '',
    city: 'makassar',
    houseNumber: '',
    phoneNumber: '',
  });

  const formValue = (type, value) => {
    return setForm({...form, [type]: value});
  };

  const onSubmit = async () => {
    dispatch({type: 'SET_NEXT_REGISTER', value: form});
    dispatch(setLoading(true));
    console.log(isEmpty(photo));
    if (isEmpty(photo)) {
      dispatch(setLoading(false));
      toastMessage('Tambahkan Foto terlebih dahulu');
    } else {
      await axios
        .post(com.register, register)
        .then(async res => {
          dispatch({type: 'SET_USER', value: res.data.data});
          const token = res.data.data;
          const formData = new FormData();
          console.log(token);
          formData.append('file', {
            uri: photo.uri,
            name: photo.fileName,
            type: 'image/*',
          });

          await axios
            .post(com.uploadPhoto, formData)
            .then(res => {
              toastMessage('Berhasil Register', 'success');
              dispatch(setLoading(false));
              dispatch({
                type: 'SET_UPLOAD_AVATAR',
                value: {
                  profile_photo_url: `https://foodmarket-backend.buildwithangga.id/storage/${res.data.data[0]}`,
                },
              });
              navigation.replace('SuccessSignUp');
            })
            .catch(err => {
              console.log(err.response);
              toastMessage(err?.response?.data?.message);
              dispatch(setLoading(false));
            });
        })
        .catch(err => {
          console.log(err.response);

          toastMessage(err?.response?.data?.message);
          dispatch(setLoading(false));
        });
    }
  };

  console.log('userReducer', userReducer);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{backgroundColor: Colors.background, flex: 1}}>
        <Header title="Address" subTitle="Make sure it???s valid" onBack />
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
              <TouchableOpacity
                onPress={() => openGallery(setPhoto)}
                style={{
                  borderRadius: 100,
                  height: 90,
                  width: 90,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#F0F0F0',
                }}>
                <Image
                  source={isEmpty(photo) ? ProfileDummy : {uri: photo?.uri}}
                  style={{
                    borderRadius: 100,
                    height: 90,
                    width: 90,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#F0F0F0',
                  }}
                />
              </TouchableOpacity>
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
