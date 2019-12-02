import * as WebBrowser from 'expo-web-browser';
import React from 'react';
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
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { FlatList } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';
import ItemDetails from '../../components/ItemDetails';
import ItemReview from '../../components/ItemReviews';
// import { PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager';

export default class FoodItemScreen extends React.Component {
  state = {
    entity: [
      { id: 1, image: 'http://lorempixel.com/400/200/food/1/' },
      { id: 2, image: 'http://lorempixel.com/400/200/food/2/' },
      { id: 3, image: 'http://lorempixel.com/400/200/food/3/' },
      { id: 4, image: 'http://lorempixel.com/400/200/food/4/' },
    ],
    search: 'fsfsdf',
    selectedTab: 0
  }
  _SearchData = (search) => {
    alert(search)
  }
  _renderDotIndicator() {
    return <PagerDotIndicator
      itemDotStyle={styles.indicatorText}
      selectedItemTextStyle={styles.indicatorSelectedText}
      pageCount={2}
    />
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={{ flex: 1 }}>
            <View style={{ height: 300, width: '100%', }}>
              <ImageBackground source={require('../../assets/images/thumbnail.png')} style={{ flex: 1, height: 300 }} >
                <ImageBackground source={{ uri: 'http://lorempixel.com/400/200/food/1/' }} style={{ flex: 1, height: 300 }} >
                  {/* <View style={{
                  position: 'absolute',
                  bottom: 0, height: 60, backgroundColor: 'gray', borderTopLeftRadius: 8, borderTopRightRadius: 8, marginStart: 20, marginEnd: 20,
                }}>

                </View> */}
                </ImageBackground>
              </ImageBackground>


              <TouchableOpacity style={{
                margin: 48,
                marginStart: 20,
                position: 'absolute',
                width: 32, height: 32, borderRadius: 32 / 2, backgroundColor: Color.white_color,
                justifyContent: 'center'
              }}
                onPress={() => { this.props.navigation.navigate('Home') }}
              >
                <Ionicons
                  name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
                  size={18}
                  style={{
                    alignSelf: 'center',
                  }}
                  color={Color.tabIconDefault}
                />
              </TouchableOpacity>

              <TouchableOpacity style={{
                margin: 48,
                marginEnd: 20,
                position: 'absolute',
                width: 32, height: 32, borderRadius: 32 / 2, backgroundColor: Color.white_color,
                alignSelf: 'flex-end',
                justifyContent: 'center'
              }}>

                <AntDesign
                  name={'shoppingcart'}
                  size={18}
                  style={{
                    alignSelf: 'center',
                  }}
                  color={Color.tabIconDefault}
                />
              </TouchableOpacity>

            </View>
            <View style={{ backgroundColor: Color.white_color, borderRadius: 8, borderTopLeftRadius: 0, borderTopRightRadius: 0, paddingStart: 20, paddingEnd: 20 }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 0.8 }}>
                  <View style={{ flexDirection: 'row', }}>
                    <Image source={require('../../assets/images/food_symbol.png')}
                      style={{
                        tintColor: Color.green_color,
                        width: 16, height: 16
                      }} />
                    <Text style={{ color: Color.black_color, fontSize: 12, fontWeight: 'bold', marginStart: 4 }}>Rajasthani Thali</Text>
                  </View>
                  <Text>by<Text> MumizzFood</Text></Text>
                </View>
                <Text style={{ flex: 0.2 }}>60/-</Text>
              </View>
              <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
                <TouchableOpacity style={{ flex: 1, alignSelf: 'center' }}>
                  <Image source={require('../../assets/images/decrease.png')}
                    style={{ width: 18, height: 18, alignSelf: 'center' }} />
                </TouchableOpacity>

                <View style={{ borderRadius: 4, alignItems: 'center', flex: 2, backgroundColor: Color.primaryColor, }}>
                  <Text style={{ padding: 12, color: Color.white_color }}>Add To Bag</Text>
                </View>

                <TouchableOpacity style={{ flex: 1, alignSelf: 'center' }}>
                  <Image source={require('../../assets/images/increase.png')}
                    style={{ width: 18, height: 18, alignSelf: 'center' }} />
                </TouchableOpacity>
              </View>

              <View style={{
                flexDirection: 'row', height: 46,
                marginTop: 20
              }}>

                <TouchableOpacity onPress={() => { this.setState({ selectedTab: 0 }) }}
                  style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', }}>

                  <View style={[this.state.selectedTab === 0 && {
                    borderBottomColor: Color.primaryColor,
                    borderBottomWidth: 1.5,
                  }, { alignSelf: 'flex-start', flexDirection: 'row' }]}>
                    <Text style={[{ fontSize: 16, color: Color.primaryColor, paddingBottom: 4 }]}>{'Details'.toUpperCase()}</Text>
                  </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => { this.setState({ selectedTab: 1 }) }}
                  style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', }}>

                  <View style={[this.state.selectedTab === 1 && {
                    borderBottomColor: Color.primaryColor,
                    borderBottomWidth: 1.5,
                  }, { alignSelf: 'flex-end', flexDirection: 'row' }]}>
                    <Text style={{ fontSize: 16, color: Color.primaryColor, paddingBottom: 4 }}>{'Reviews'.toUpperCase()}</Text>
                  </View>

                </TouchableOpacity>
              </View>
              {this.state.selectedTab === 0 ?
                (<ItemDetails />)
                :
                (<ItemReview />)}
            </View>

          </View>

        </ScrollView>

        <View style={{ padding: 12, backgroundColor: Color.primaryColor }}>
          <Text>100/-</Text>
          <Text style={{ color: Color.white_color }}>View Cart</Text>
        </View>

        <SafeAreaView />
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
