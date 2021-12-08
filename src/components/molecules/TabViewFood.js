import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useSelector} from 'react-redux';
import {Gap} from '..';
import {FoodDummy1, FoodDummy2, FoodDummy3} from '../../assets';
import {Colors} from '../../utils/colors';
import {Texts} from '../../utils/texts';
import ListItemFood from './ListItemFood';

const NewTaste = () => {
  const foodReducer = useSelector(state => state.foodReducer);
  const navigation = useNavigation();
  return (
    <View
      style={{flex: 1, backgroundColor: '#fff'}}
      showsVerticalScrollIndicator={false}>
      <Gap height={8} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={foodReducer?.newTaste}
        renderItem={({item, index}) => (
          <ListItemFood
            key={index}
            image={item?.picturePath}
            name={item?.name}
            rate={item?.rate}
            price={item?.price}
            item={item}
            onPress={() => navigation.navigate('FoodDetail', item)}
            rating
          />
        )}
      />
    </View>
  );
};
const Popular = () => {
  const foodReducer = useSelector(state => state.foodReducer);
  const navigation = useNavigation();
  return (
    <View
      style={{flex: 1, backgroundColor: '#fff'}}
      showsVerticalScrollIndicator={false}>
      <Gap height={8} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={foodReducer?.popular}
        renderItem={({item, index}) => (
          <ListItemFood
            key={index}
            image={item?.picturePath}
            name={item?.name}
            rate={item?.rate}
            price={item?.price}
            item={item}
            onPress={() => navigation.navigate('FoodDetail', {item: item})}
            rating
          />
        )}
      />
    </View>
  );
};

const Recommended = () => {
  const foodReducer = useSelector(state => state.foodReducer);
  const navigation = useNavigation();
  return (
    <View
      style={{flex: 1, backgroundColor: '#fff'}}
      showsVerticalScrollIndicator={false}>
      <Gap height={8} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={foodReducer?.recommended}
        renderItem={({item, index}) => (
          <ListItemFood
            key={index}
            image={item?.picturePath}
            name={item?.name}
            rate={item?.rate}
            price={item?.price}
            item={item}
            onPress={() => navigation.navigate('FoodDetail', {item: item})}
            rating
          />
        )}
      />
    </View>
  );
};

const renderScene = SceneMap({
  1: NewTaste,
  2: Popular,
  3: Recommended,
});

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: Colors.black,
    }}
    scrollEnabled
    style={{backgroundColor: '#fff', padding: 0}}
    contentContainerStyle={{padding: 0}}
    renderLabel={({focused, route}) => (
      <Text
        style={{
          ...Texts.regular1,
          color: focused ? Colors.black : Colors.grey,
        }}>
        {route.title}
      </Text>
    )}
  />
);

const TabViewFood = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 1, title: 'New Taste'},
    {key: 2, title: 'Popular'},
    {key: 3, title: 'Recommended'},
  ]);
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
    />
  );
};

export default TabViewFood;

const styles = StyleSheet.create({});
