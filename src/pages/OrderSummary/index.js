import {CommonActions} from '@react-navigation/routers';
import axios from 'axios';
import {isEmpty} from 'lodash';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {Button, Gap, Header, ListItemText, Loading} from '../../components';
import ListItemFood from '../../components/molecules/ListItemFood';
import {com} from '../../config/API';
import {Colors} from '../../utils/colors';
import {Texts} from '../../utils/texts';
import toastMessage from '../../utils/toastMessage';

const OrderSummary = ({navigation, route}) => {
  const [checkOut, setCheckOut] = useState({});
  const {item, transaction, user} = route?.params;
  const onCheckOut = () => {
    const data = {
      food_id: item?.id,
      user_id: user?.id,
      quantity: item?.items,
      total: transaction?.includeTotal,
      status: 'PENDING',
    };
    axios
      .post(com.checkout, data)
      .then(res => {
        setCheckOut(res.data.data);
      })
      .catch(err => {
        console.log('gagal', err);
        toastMessage('Pesanan anda Gagal Checkout');
      });
  };

  const onChangePagePayment = page => {
    if (page.title === 'Laravel') {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'SuccessOrder'}],
        }),
      );
    }
  };

  if (isEmpty(checkOut)) {
    return (
      <View style={{backgroundColor: Colors.background, flex: 1}}>
        <Header title="Payment" subTitle="You deserve better meal" onBack />
        <ScrollView>
          <Gap color={Colors.background} height={24} />
          <View style={{backgroundColor: '#fff'}}>
            <Text
              style={{
                ...styles.listRight,
                marginHorizontal: 24,
                marginTop: 15,
              }}>
              Item Ordered
            </Text>
            <ListItemFood
              items
              image={item?.image}
              count={item?.count}
              name={item?.name}
              price={item?.price}
              countItem={item?.items}
            />
          </View>

          <View style={{justifyContent: 'space-between', flex: 1}}>
            <View>
              <View
                style={{
                  backgroundColor: '#fff',
                  padding: 24,
                  paddingTop: 10,
                }}>
                <Text style={styles.listRight}>Details Transaction</Text>

                <ListItemText
                  formatNumber
                  textLeft={transaction?.name}
                  textRight={transaction?.totalPrice}
                />
                <ListItemText
                  formatNumber
                  textLeft="Driver"
                  textRight={transaction?.driver}
                />
                <ListItemText
                  formatNumber
                  textLeft="Tax 10%"
                  textRight={transaction?.tax}
                />
                <ListItemText
                  formatNumber
                  textLeft="Total Price"
                  textRight={transaction?.includeTotal}
                  total
                />
              </View>

              <Gap color={Colors.background} height={24} />

              <View
                style={{
                  backgroundColor: '#fff',
                  padding: 24,
                }}>
                <Text style={styles.listRight}>Deliver to:</Text>
                <ListItemText textLeft="Name" textRight={user?.name} />
                <ListItemText
                  textLeft="Phone No."
                  textRight={user?.phoneNumber}
                />
                <ListItemText textLeft="Address" textRight={user?.address} />
                <ListItemText
                  textLeft="House No."
                  textRight={user?.houseNumber}
                />
                <ListItemText textLeft="City" textRight={user?.city} />
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{marginVertical: 24}}>
          <Button text="Checkout Now" onPress={onCheckOut} />
        </View>
      </View>
    );
  } else {
    return (
      <>
        <Header title="Payment" subTitle="You deserve better meal" onCheckOut />
        <WebView
          startInLoadingState
          renderLoading={() => <Loading />}
          source={{uri: `${checkOut.payment_url}`}}
          onNavigationStateChange={onChangePagePayment}
        />
      </>
    );
  }
};

export default OrderSummary;

const styles = StyleSheet.create({
  listLeft: {...Texts.regular1},
  listRight: {...Texts.regular1, color: Colors.black},
});
