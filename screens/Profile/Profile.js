import * as WebBrowser from './node_modules/expo-web-browser';
import React from './node_modules/react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  SafeAreaView
} from 'react-native';

import { MonoText } from '../../components/StyledText';
import Color from '../../constants/Color';
import Constant from '../../constants/Constant';
import { Ionicons, FontAwesome, AntDesign } from './node_modules/@expo/vector-icons';
import { Rating, AirbnbRating } from './node_modules/react-native-ratings';
import { FlatList } from 'react-native-gesture-handler';
import { Searchbar } from './node_modules/react-native-paper';
import ItemDetails from '../../components/ItemDetails';
import ItemReview from '../../components/ItemReviews';
// import { PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager';

export default class Profile extends React.Component {
  state = {

  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={{ flex: 1 }}>
            <View>
              <Image source={require('../../assets/images/decrease.png')} />
              <Text>Orders</Text>

            </View>
          </View>

        </ScrollView>

      </View>
    );
  }

}


FoodItemScreen.navigationOptions = {
  //title: Constant.appName,
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.bg_color,
  },
  contentContainer: {

  },
  boxView: {
    marginStart: 20,
    marginEnd: 20,
    height: 300,
    backgroundColor: Color.white_color,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,

    elevation: 5,
  },
  favView: {
    backgroundColor: Color.white_color,
    position: 'absolute',
    justifyContent: 'center',
    marginTop: 8,
    marginEnd: 8,

    alignSelf: 'flex-end',
    width: 40, height: 40,
    borderRadius: 40 / 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,

    elevation: 5,
  }

});
