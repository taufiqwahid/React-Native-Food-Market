import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcBack} from '../../assets/Icon';
import {Texts} from '../../utils/texts';
import {useNavigation} from '@react-navigation/native';

const Header = ({title, subTitle, onBack}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingTop: 30,
        paddingBottom: 24,
        paddingLeft: 24,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {onBack && (
        <TouchableOpacity
          style={{marginRight: 32}}
          onPress={() => {
            navigation.goBack();
          }}>
          <IcBack />
        </TouchableOpacity>
      )}
      <View>
        <Text style={{...Texts.regular2, fontSize: 22}}>{title}</Text>
        <Text style={{...Texts.regular1}}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
