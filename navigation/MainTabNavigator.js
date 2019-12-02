import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SubscribeScreen';
import SearchScreen from '../screens/SearchScreen';
import SubscribeScreen from '../screens/SubscribeScreen';
import Color from '../constants/Color';
import FoodItemScreen from '../screens/FoodItemScreen/FoodItemScreen';
import AccountScreen from '../screens/Account/AccountScreen';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config,
  { headerLayoutPreset: 'left' },
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
};

HomeStack.path = '';

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
  },
  config,
  { headerLayoutPreset: 'left' },
);

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />
  ),
};

SearchStack.path = '';

const SubscribeStack = createStackNavigator(
  {
    Subscribe: SubscribeScreen,
  },
  config,
  { headerLayoutPreset: 'left' },
);

SubscribeStack.navigationOptions = {
  tabBarLabel: 'Subscribe',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'} />
  ),
};

SubscribeStack.path = '';

const AccountStack = createStackNavigator(
  {
    Account: AccountScreen,
  },
  config,
  { headerLayoutPreset: 'left' },
);

AccountStack.navigationOptions = {
  tabBarLabel: 'Account',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'user' : 'user'} />
  ),
};

AccountStack.path = '';


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SearchStack,
  SubscribeStack,
  AccountStack,
}, {
    tabBarOptions: {
      activeTintColor: Color.primaryColor,
      inactiveTintColor: Color.tabIconDefault,

    },
  });

tabNavigator.path = '';

export default tabNavigator;
