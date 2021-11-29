import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ProfileDummy} from '../../assets';
import {Gap, TabViewProfile} from '../../components';
import {Colors} from '../../utils/colors';
import {Texts} from '../../utils/texts';

const Profile = () => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.background}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 26,
          backgroundColor: '#fff',
        }}>
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
          <Image
            source={ProfileDummy}
            style={{
              borderRadius: 100,
              height: 90,
              width: 90,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#F0F0F0',
            }}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 16}}>
          <Text style={{...Texts.regular2}}>Angga Risky</Text>
          <Text style={{...Texts.regular1}}>wepanda@gmail.com</Text>
        </View>
      </View>
      <Gap height={24} color={Colors.background} />
      <TabViewProfile />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
