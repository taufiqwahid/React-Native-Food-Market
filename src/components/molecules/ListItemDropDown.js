import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcNext} from '../../assets';
import {Texts} from '../../utils/texts';

const ListItemDropDown = ({textLeft, textRight, total}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 24,
      }}>
      <Text style={styles.listLeft}>{textLeft}</Text>
      <IcNext />
    </View>
  );
};

export default ListItemDropDown;

const styles = StyleSheet.create({
  listLeft: {...Texts.regular1},
});
