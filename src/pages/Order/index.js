import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {EmptyOrder, Gap, Header, TabViewOrder} from '../../components';
import {Colors} from '../../utils/colors';

const Order = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  return (
    <View style={{flex: 1}}>
      {isEmpty ? (
        <EmptyOrder />
      ) : (
        <View style={{flex: 1}}>
          <Header title="Your Orders" subTitle="Wait for the best meal" />
          <Gap height={24} color={Colors.background} />
          <TabViewOrder />
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
