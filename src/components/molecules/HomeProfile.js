import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ProfileDummy} from '../../assets';
import {Texts} from '../../utils/texts';

const HomeProfile = ({photo}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingTop: 30,
        paddingBottom: 24,
        backgroundColor: '#fff',
      }}>
      <View>
        <Text style={{...Texts.regular2, fontSize: 22}}>Food Market</Text>
        <Text style={{...Texts.regular1}}>Let’s get some foods</Text>
      </View>
      <Image
        resizeMode="cover"
        source={photo ? {uri: photo} : ProfileDummy}
        style={{width: 50, height: 50, borderRadius: 10}}
      />
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({});
