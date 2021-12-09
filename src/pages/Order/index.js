import {useFocusEffect} from '@react-navigation/core';
import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {EmptyOrder, Gap, Header, TabViewOrder} from '../../components';
import {
  getOrder,
  getOrderInProgress,
  getOrderPastOrders,
} from '../../redux/action/order';
import {Colors} from '../../utils/colors';

const Order = () => {
  const dispatch = useDispatch();
  const orderReducer = useSelector(state => state.orderReducer);

  useFocusEffect(
    useCallback(() => {
      dispatch(getOrder());
      dispatch(getOrderInProgress());
      dispatch(getOrderPastOrders());
    }, []),
  );

  console.log('orderReducer', orderReducer);

  return (
    <View style={{flex: 1}}>
      {orderReducer.orders.length < 1 ? (
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
