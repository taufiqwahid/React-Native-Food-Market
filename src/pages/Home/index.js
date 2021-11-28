import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {FoodDummy1, FoodDummy2, FoodDummy3, ProfileDummy} from '../../assets';
import {FoodCard, Gap} from '../../components';
import {Colors} from '../../utils/colors';
import {Texts} from '../../utils/texts';

const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

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

const Home = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 1, title: 'New Taste'},
    {key: 2, title: 'Popular'},
    {key: 3, title: 'Recommended'},
  ]);
  return (
    <View style={{backgroundColor: Colors.background, flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 24,
          paddingTop: 30,
          paddingBottom: 24,
          backgroundColor: '#fff',
        }}>
        <View>
          <Text style={{...Texts.regular2, fontSize: 22}}>Food Market</Text>
          <Text style={{...Texts.regular1}}>Let’s get some foods</Text>
        </View>
        <Image
          source={ProfileDummy}
          style={{width: 50, height: 50, borderRadius: 10}}
        />
      </View>
      <View>
        <ScrollView style={{flexDirection: 'row'}} horizontal>
          <Gap width={24} color={Colors.background} />
          <FoodCard image={FoodDummy1} />
          <FoodCard image={FoodDummy2} />
          <FoodCard image={FoodDummy3} />
        </ScrollView>
      </View>
      <View style={{flex: 1}}>
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
