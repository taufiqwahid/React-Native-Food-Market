import axios from 'axios';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Button, Gap, Header, ListItemText} from '../../components';
import ListItemFood from '../../components/molecules/ListItemFood';
import {com} from '../../config/API';
import {Colors} from '../../utils/colors';
import {Texts} from '../../utils/texts';

const OrderDetail = ({navigation, route}) => {
  const user = useSelector(state => state.userReducer.user);
  const item = route?.params?.food;
  const status = route?.params?.status;
  const {id, picturePath, name, price} = route?.params?.food;
  const count = route.params.quantity;

  const driver = 10000;
  const totalPrice = price * count;
  const tax = (10 / 100) * totalPrice;
  const includeTotal = totalPrice + tax + driver;

  const onCancelOrder = () => {
    axios
      .post(com.transactionUpdate(id), {status: 'CANCELLED'})
      .then(res => {
        console.log('res update', res);
        navigation.replace('MainApp', {
          screen: 'OrderStackScreen',
        });
      })
      .catch(err => console.log('err update', err.response));
  };

  return (
    <View style={{backgroundColor: Colors.background, flex: 1}}>
      <Header title="Payment" subTitle="You deserve better meal" onBack />
      <ScrollView>
        <Gap color={Colors.background} height={24} />
        <View style={{backgroundColor: '#fff'}}>
          <Text
            style={{...styles.listRight, marginHorizontal: 24, marginTop: 15}}>
            Item Ordered
          </Text>
          <ListItemFood
            items
            image={picturePath}
            countItem={count}
            name={name}
            price={price}
            onPress={() => navigation.navigate('FoodDetail', item)}
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
                textLeft={name}
                textRight={totalPrice}
              />
              <ListItemText formatNumber textLeft="Driver" textRight={driver} />
              <ListItemText formatNumber textLeft="Tax 10%" textRight={tax} />
              <ListItemText
                formatNumber
                textLeft="Total Price"
                textRight={includeTotal}
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
            <Gap color={Colors.background} height={24} />

            <View
              style={{
                backgroundColor: '#fff',
                padding: 24,
              }}>
              <Text style={styles.listRight}>Order Status:</Text>
              <ListItemText
                statusOrder
                textLeft={`#ID${id}`}
                textRight={status}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      {status == 'PENDING' && (
        <View style={{marginVertical: 24}}>
          <Button
            text="Cancel My Order"
            color={Colors.red}
            onPress={onCancelOrder}
          />
        </View>
      )}
    </View>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  listLeft: {...Texts.regular1},
  listRight: {...Texts.regular1, color: Colors.black},
});
