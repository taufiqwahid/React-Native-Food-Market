import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {Gap} from '..';
import {FoodDummy1, FoodDummy2, FoodDummy3} from '../../assets';
import {Colors} from '../../utils/colors';
import {Texts} from '../../utils/texts';
import ListItemDropDown from './ListItemDropDown';
import ListItemFood from './ListItemFood';

const Account = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <Gap height={8} />
      <ListItemDropDown textLeft="Edit Profile" />
      <ListItemDropDown textLeft="Home Address" />
      <ListItemDropDown textLeft="Security" />
      <ListItemDropDown textLeft="Payments" />
    </ScrollView>
  );
};

const FoodMarket = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <Gap height={8} />
      <ListItemDropDown textLeft="Rate App" />
      <ListItemDropDown textLeft="Help Center" />
      <ListItemDropDown textLeft="Privacy & Policy" />
      <ListItemDropDown textLeft="Terms & Conditions" />
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: Account,
  2: FoodMarket,
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

const TabViewProfile = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 1, title: 'Account'},
    {key: 2, title: 'Food Market'},
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

export default TabViewProfile;

const styles = StyleSheet.create({});
