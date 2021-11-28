import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../utils/colors';
import {Texts} from '../../utils/texts';

const ListItemText = ({textLeft, textRight, total}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={styles.listLeft}>{textLeft}</Text>
      {textRight && total ? (
        <Text style={styles.total}>{textRight}</Text>
      ) : (
        <Text style={styles.listRight}>{textRight}</Text>
      )}
    </View>
  );
};

export default ListItemText;

const styles = StyleSheet.create({
  listLeft: {...Texts.regular1},
  listRight: {...Texts.regular1, color: Colors.black},
  total: {...Texts.regular1, color: Colors.green},
});
