import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import FoodItemScreen from '../screens/FoodItemScreen/FoodItemScreen';
import SliderScreen from '../screens/SliderScreen/SliderScreen';
import CartScreen from '../screens/CartScreen/CartScreen';
import MobileVerify from '../screens/MobileVerify/MobileVerify';
import OTPVerifications from '../screens/OTPVerifications/OTPVerifications';

const AuthStack = createStackNavigator({
  MobileVerify: MobileVerify,
  OTPVerifications: OTPVerifications,
});


const FoodItemStack = createStackNavigator({
  screen: FoodItemScreen,
});

FoodItemStack.navigationOptions = {
  tabBarLabel: ['Main']
};

const SliderScreenStack = createStackNavigator({
  screen: SliderScreen,
});

const CartStack = createStackNavigator({
  screen: CartScreen,
});

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Auth: AuthStack,
    Main: MainTabNavigator,
    FoodItem: FoodItemScreen,
    Slider: SliderScreenStack,
    Cart: CartStack,
  }, { initialRouteName: 'Slider' }
  )
);
