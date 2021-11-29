import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {Gap} from '..';
import {FoodDummy1, FoodDummy2, FoodDummy3} from '../../assets';
import {Colors} from '../../utils/colors';
import {Texts} from '../../utils/texts';
import ListItemFood from './ListItemFood';

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: Colors.background}}
      showsVerticalScrollIndicator={false}>
      <Gap height={8} />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        inProgress
        image={FoodDummy1}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        inProgress
        image={FoodDummy2}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        inProgress
        image={FoodDummy3}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        inProgress
        image={FoodDummy1}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        inProgress
        image={FoodDummy1}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        inProgress
        image={FoodDummy2}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        inProgress
        image={FoodDummy3}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        inProgress
        image={FoodDummy1}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        inProgress
        image={FoodDummy1}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        inProgress
        image={FoodDummy2}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        inProgress
        image={FoodDummy3}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        inProgress
        image={FoodDummy1}
      />
    </ScrollView>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: Colors.background}}
      showsVerticalScrollIndicator={false}>
      <Gap height={8} />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        pastOrders
        image={FoodDummy3}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        pastOrders
        statusCancel
        image={FoodDummy2}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        pastOrders
        image={FoodDummy1}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        pastOrders
        statusCancel
        image={FoodDummy2}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        pastOrders
        image={FoodDummy1}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        pastOrders
        image={FoodDummy3}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        pastOrders
        image={FoodDummy1}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        pastOrders
        statusCancel
        image={FoodDummy2}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        pastOrders
        image={FoodDummy1}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        pastOrders
        image={FoodDummy3}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        pastOrders
        statusCancel
        image={FoodDummy2}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        pastOrders
        image={FoodDummy1}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        pastOrders
        statusCancel
        image={FoodDummy2}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        pastOrders
        image={FoodDummy1}
      />
    </ScrollView>
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
