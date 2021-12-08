import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IcNext} from '../../assets';
import {Texts} from '../../utils/texts';

const ListItemDropDown = ({textLeft, textRight, total, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 24,
      }}>
      <Text style={styles.listLeft}>{textLeft}</Text>
      <IcNext />
    </TouchableOpacity>
  );
};

export default ListItemDropDown;

const styles = StyleSheet.create({
  listLeft: {...Texts.regular1},
});
