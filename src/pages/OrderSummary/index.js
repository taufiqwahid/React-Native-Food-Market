import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {FoodDummy1} from '../../assets';
import {
  Button,
  Gap,
  Header,
  ListItemFood,
  ListItemText,
} from '../../components';
import {Colors} from '../../utils/colors';
import {Texts} from '../../utils/texts';

const OrderSummary = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: Colors.background, flex: 1}}>
      <Header title="Payment" subTitle="You deserve better meal" onBack />
      <Gap color={Colors.background} height={24} />
      <View style={{backgroundColor: '#fff'}}>
        <Text
          style={{...styles.listRight, marginHorizontal: 24, marginTop: 15}}>
          Item Ordered
        </Text>
        <ListItemFood image={FoodDummy1} items />
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
              textLeft="Cherry Healthy"
              textRight="IDR 18.390.000"
            />
            <ListItemText textLeft="Driver" textRight="IDR 50.000" />
            <ListItemText textLeft="Tax 10%" textRight="IDR 1.800.390" />
            <ListItemText
              textLeft="Total Price"
              textRight="IDR 390.803.000"
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
            <ListItemText textLeft="Name" textRight="Angga Risky" />
            <ListItemText textLeft="Phone No." textRight="0822 0819 9688" />
            <ListItemText textLeft="Address" textRight="Setra Duta Palima" />
            <ListItemText textLeft="House No." textRight="A5 Hook" />
            <ListItemText textLeft="City" textRight="Bandung" />
          </View>
        </View>
        <View style={{marginVertical: 24}}>
          <Button
            text="Checkout Now"
            onPress={() => navigation.replace('SuccessOrder')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  listLeft: {...Texts.regular1},
  listRight: {...Texts.regular1, color: Colors.black},
});
