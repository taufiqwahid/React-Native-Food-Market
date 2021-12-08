import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../utils/colors';
import FormatNumber from '../../utils/formatNumber';
import {Texts} from '../../utils/texts';

const ListItemText = ({textLeft, textRight, total, formatNumber}) => {
  const CompTextRight = () => {
    if (formatNumber) {
      return <FormatNumber style={styles.listRight} number={textRight} />;
    } else {
      return <Text style={styles.listRight}>{textRight}</Text>;
    }
  };

  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={styles.listLeft}>{textLeft}</Text>
      {textRight && total ? (
        <FormatNumber style={styles.total} number={textRight} />
      ) : (
        <CompTextRight />
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
