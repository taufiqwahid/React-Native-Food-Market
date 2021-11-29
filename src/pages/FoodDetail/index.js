import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FoodDummy6, IcBackWhite} from '../../assets';
import {Button, Counter, Rating} from '../../components';
import {Texts} from '../../utils/texts';

const FoodDetails = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={FoodDummy6} style={{height: 330}}>
        <TouchableOpacity
          style={{margin: 24}}
          onPress={() => navigation.goBack()}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View
        style={{
          padding: 24,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          marginTop: -40,
          backgroundColor: '#fff',
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{...Texts.regular2}}>Cherry Healthy</Text>
              <Rating />
            </View>
            <Counter />
          </View>
          <View style={{marginTop: 12}}>
            <Text style={{...Texts.regular1}}>
              Makanan khas Bandung yang cukup sering dipesan oleh anak muda
              dengan pola makan yang cukup tinggi dengan mengutamakan diet yang
              sehat dan teratur.
            </Text>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={{...Texts.regular2, fontSize: 14}}>Ingredients:</Text>
            <Text style={{...Texts.regular1}}>
              Seledri, telur, blueberry, madu.
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{...Texts.regular1}}>Total Price:</Text>
            <Text style={{...Texts.regular2, fontSize: 18}}>
              IDR 12.289.000
            </Text>
          </View>
          <Button
            text="Order Now"
            onPress={() => navigation.navigate('OrderSummary')}
          />
        </View>
      </View>
    </View>
  );
};

export default FoodDetails;

const styles = StyleSheet.create({});