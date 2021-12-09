import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useSelector} from 'react-redux';
import {Gap} from '..';
import {Colors} from '../../utils/colors';
import {Texts} from '../../utils/texts';
import ListItemFood from './ListItemFood';

const InProgress = () => {
  const navigation = useNavigation();
  const orderReducer = useSelector(state => state.orderReducer);
  return (
    <View style={{flex: 1, backgroundColor: Colors.background}}>
      <Gap height={8} />
      <FlatList
        scrollEnabled
        data={orderReducer?.inProgress}
        renderItem={({item, index}) => (
          <>
            <ListItemFood
              key={index}
              image={item?.food?.picturePath}
              name={item?.food?.name}
              rate={item?.food?.rate}
              price={item?.food?.price}
              item={item?.food}
              countItem={item?.quantity}
              status={item?.status}
              onPress={() => navigation.navigate('OrderDetail', item)}
              inProgress
            />
            <ListItemFood
              key={index + 13}
              image={item?.food?.picturePath}
              name={item?.food?.name}
              rate={item?.food?.rate}
              price={item?.food?.price}
              item={item?.food}
              countItem={item?.quantity}
              status={item?.status}
              onPress={() => navigation.navigate('OrderDetail', item)}
              inProgress
            />
          </>
        )}
      />
    </View>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  const orderReducer = useSelector(state => state.orderReducer);

  return (
    <View style={{flex: 1, backgroundColor: Colors.background}}>
      <Gap height={8} />
      <FlatList
        scrollEnabled
        data={orderReducer?.pastOrders}
        renderItem={({item, index}) => (
          <ListItemFood
            key={index}
            image={item?.food?.picturePath}
            name={item?.food?.name}
            rate={item?.food?.rate}
            price={item?.food?.price}
            item={item?.food}
            countItem={item?.quantity}
            status={item?.status}
            onPress={() => navigation.navigate('OrderDetail', item)}
            pastOrders
          />
        )}
      />
    </View>
  );
};

const renderScene = SceneMap({
  1: InProgress,
  2: PastOrders,
});

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: Colors.black,
    }}
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

const TabViewOrder = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 1, title: 'In Progress'},
    {key: 2, title: 'Past Orders'},
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

export default TabViewOrder;

const styles = StyleSheet.create({});
