import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {ListItemFood} from '.';
import {Gap} from '..';
import {FoodDummy1, FoodDummy2, FoodDummy3} from '../../assets';
import {Colors} from '../../utils/colors';
import {Texts} from '../../utils/texts';

const FirstRoute = () => (
  <ScrollView
    style={{flex: 1, backgroundColor: '#fff'}}
    showsVerticalScrollIndicator={false}>
    <Gap height={8} />
    <ListItemFood image={FoodDummy1} />
    <ListItemFood image={FoodDummy2} />
    <ListItemFood image={FoodDummy3} />
    <ListItemFood image={FoodDummy1} />
  </ScrollView>
);

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);
const renderScene = SceneMap({
  1: FirstRoute,
  2: SecondRoute,

  3: FirstRoute,
  4: FirstRoute,
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
