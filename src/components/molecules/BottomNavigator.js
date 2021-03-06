import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  IcHomeOff,
  IcHomeOn,
  IcOrderOff,
  IcOrderOn,
  IcProfileOff,
  IcProfileOn,
} from '../../assets';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'HomeStackScreen':
      return focus ? <IcHomeOn height={25} /> : <IcHomeOff height={25} />;

    case 'OrderStackScreen':
      return focus ? <IcOrderOn height={25} /> : <IcOrderOff height={25} />;

    case 'ProfileStackScreen':
      return focus ? <IcProfileOn height={25} /> : <IcProfileOff height={25} />;

    default:
      return focus ? <IcHomeOn height={25} /> : <IcHomeOff height={25} />;
  }
};

const BottomNavigator = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        top: 1,
        elevation: 8,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            activeOpacity={0.5}
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
            }}>
            <Icon label={label} focus={isFocused} />
            {/* <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
