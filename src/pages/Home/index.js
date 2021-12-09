import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FoodCard, Gap, HomeProfile, TabViewFood} from '../../components';
import {getFood, getFoodType} from '../../redux/action/food';
import {Colors} from '../../utils/colors';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const userReducer = useSelector(state => state.userReducer);
  const foodReducer = useSelector(state => state.foodReducer);

  useEffect(() => {
    dispatch(getFood());
    dispatch(getFoodType('new_food'));
    dispatch(getFoodType('popular'));
    dispatch(getFoodType('recommended'));
  }, []);

  return (
    <View style={{backgroundColor: Colors.background, flex: 1}}>
      <HomeProfile photo={userReducer?.user?.profile_photo_url} />

      <View style={{flexDirection: 'row'}}>
        <Gap width={24} color={Colors.background} />
        <FlatList
          keyExtractor={item => item.id}
          data={foodReducer.food}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item, index}) => (
            <FoodCard
              key={index}
              image={item.picturePath}
              name={item.name}
              rate={item.rate}
              price={item.price}
              item={item}
            />
          )}
        />
      </View>

      <TabViewFood />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
