import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {FoodDummy1, FoodDummy2, FoodDummy3} from '../../assets';
import {FoodCard, Gap, HomeProfile, TabViewFood} from '../../components';
import {Colors} from '../../utils/colors';

const Home = () => {
  return (
    <View style={{backgroundColor: Colors.background, flex: 1}}>
      <HomeProfile />

      <View>
        <ScrollView
          style={{flexDirection: 'row'}}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <Gap width={24} color={Colors.background} />
          <FoodCard image={FoodDummy1} />
          <FoodCard image={FoodDummy2} />
          <FoodCard image={FoodDummy3} />
        </ScrollView>
      </View>

      <TabViewFood />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
