import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {IcBackWhite} from '../../assets';
import {Button, Counter, Rating} from '../../components';
import FormatNumber from '../../utils/formatNumber';
import {Texts} from '../../utils/texts';

const FoodDetails = ({navigation, route}) => {
  const {id, picturePath, description, name, ingredients, price, rate} =
    route.params;
  const [count, setCount] = useState(1);
  const userReducer = useSelector(state => state.userReducer.user);

  const onOrder = () => {
    const driver = 10000;
    const totalPrice = price * count;
    const tax = (10 / 100) * totalPrice;
    const includeTotal = totalPrice + tax + driver;

    const data = {
      item: {
        id: id,
        name: name,
        price: price,
        items: count,
        image: picturePath,
      },
      transaction: {
        name: name,
        driver: driver,
        tax: tax,
        totalPrice: totalPrice,
        includeTotal: includeTotal,
      },
      user: userReducer,
    };

    navigation.navigate('OrderSummary', data);
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        resizeMode="cover"
        source={{uri: picturePath}}
        style={{height: 330}}>
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
              <Text style={{...Texts.regular2}}>{name}</Text>
              <Rating rate={rate} />
            </View>
            <Counter
              countMin={() => setCount(count <= 1 ? 1 : count - 1)}
              countPlus={() => setCount(count + 1)}
              count={count}
            />
          </View>
          <View style={{marginTop: 12}}>
            <Text style={{...Texts.regular1}}>{description}</Text>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={{...Texts.regular2, fontSize: 14}}>Ingredients:</Text>
            <Text style={{...Texts.regular1}}>{ingredients}</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{...Texts.regular1}}>Total Price:</Text>
            <FormatNumber
              style={{...Texts.regular2, fontSize: 18}}
              number={price * count}
            />
          </View>
          <Button text="Order Now" onPress={onOrder} />
        </View>
      </View>
    </View>
  );
};

export default FoodDetails;

const styles = StyleSheet.create({});
