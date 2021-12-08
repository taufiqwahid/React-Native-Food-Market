import React from 'react';
import {Text} from 'react-native';
import NumberFormat from 'react-number-format';
import {Texts} from './texts';

const FormatNumber = ({number, style}) => {
  return (
    <NumberFormat
      value={number}
      displayType={'text'}
      thousandSeparator={true}
      prefix="IDR "
      renderText={(value, props) => (
        <Text
          {...props}
          style={style ? style : {...Texts.regular1, fontSize: 13}}>
          {value}
        </Text>
      )}
    />
  );
};

export default FormatNumber;
