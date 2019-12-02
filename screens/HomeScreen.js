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

} from 'react-native';

import { MonoText } from '../components/StyledText';
import Color from '../constants/Color';
import Constant from '../constants/Constant';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { FlatList } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-navigation';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null

  });

  state = {
    entity: [
      { id: 1, image: 'http://lorempixel.com/400/200/food/1/' },
      { id: 2, image: 'http://lorempixel.com/400/200/food/2/' },
      { id: 3, image: 'http://lorempixel.com/400/200/food/3/' },
      { id: 4, image: 'http://lorempixel.com/400/200/food/4/' },
      { id: 5, image: 'http://lorempixel.com/400/200/food/5/' },
      { id: 6, image: 'http://lorempixel.com/400/200/food/6/' },
    ],
    search: 'fsfsdf'
  }
  _SearchData = (search) => {
    alert(search)
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <View style={{ flexDirection: 'row', margin: 20, marginBottom: 10 }}>
          <Text style={{ flex: 1, }}>What would you like to eat?</Text>
          <View style={{ alignItems: 'flex-end', }}>


            <FontAwesome
              name={'bell-o'}
              size={18}
              style={{
                alignSelf: 'center',

              }}
              color={Color.tabIconDefault}
            />
            <View style={{
              backgroundColor: Color.primaryColor,
              width: 14, height: 14, borderRadius: 14 / 2,
              position: 'absolute',
              marginBottom: 10, marginStart: 10
            }}>
              <Text style={{
                padding: 2,
                color: Color.white_color, fontSize: 10, textAlign: 'center',

                alignSelf: 'center'
              }}>2</Text>
            </View>
          </View>

        </View>
        <View style={[styles.container, { backgroundColor: Color.light_gray, flex: 0, borderColor: Color.gray_color, borderRadius: 4, marginStart: 20, marginEnd: 20, marginTop: 10 }]} >
          <Searchbar
            placeholder="Find a food"
            onChangeText={search => { this.setState({ search }); }}
            value={this.state.search}
            iconColor={Color.primaryColor}

            style={{
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              margin: 1,
              height: 46
            }}
            onSubmitEditing={search => { this._SearchData(search) }}
          />
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <Text style={{ color: Color.black_color, fontSize: 14, fontWeight: 'bold', margin: 20, marginBottom: 10, marginTop: 10 }}>Popular Food</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={{ paddingStart: 10, paddingEnd: 10 }}
            data={this.state.entity}
            ItemSeparatorComponent={this.space}
            horizontal={true}
            renderItem={({ item, index }) =>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('FoodItem')}
                style={[styles.boxView, { width: 160, height: 200, marginBottom: 12, marginStart: 10, marginEnd: 10 }]} >
                <View style={{ height: 150 }}>

                  <ImageBackground source={require('../assets/images/thumbnail.png')} style={{ height: 150, width: '100%', borderRadius: 8 }} imageStyle={{ borderRadius: 8 }}>
                    <Image source={{ uri: item.image }} style={{ height: 150, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} resizeMode="cover" imageStyle={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                  </ImageBackground>

                  <View style={[styles.favView, { width: 30, height: 30, borderRadius: 30 / 2 }]}>
                    <Ionicons
                      name={'ios-heart-empty'}
                      size={18}
                      style={{
                        alignSelf: 'center',
                      }}
                      color={Color.tabIconSelected}
                    />
                  </View>
                </View>

                <View style={{ flex: 1, padding: 8 }}>
                  <View style={{ flexDirection: 'row', }}>
                    <Image source={require('../assets/images/food_symbol.png')}
                      style={{
                        tintColor: Color.green_color,
                        width: 16, height: 16
                      }} />
                    <Text style={{ color: Color.black_color, fontSize: 12, fontWeight: 'bold', marginStart: 4 }}>Rajasthani Thali</Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', marginTop: 4, flex: 0.8 }}>
                      <Text style={{ marginEnd: 4, color: Color.gray_color, fontSize: 10 }}>4.5</Text>
                      <Rating
                        type='star'
                        ratingCount={5}
                        imageSize={10}
                      />
                      <Text style={{ marginStart: 4, color: Color.gray_color, fontSize: 10 }}>(100)</Text>
                    </View>
                    <Text style={{ color: Color.black_color, fontSize: 10, fontWeight: 'bold', flex: 0.2, alignSelf: 'flex-end', textAlign: 'right' }}>50/-</Text>

                  </View>




                </View>
              </TouchableOpacity>


            }
            ItemSeparatorComponent={() => <View style={{ margin: 0 }} />}
          />
          <Text style={{ color: Color.black_color, fontSize: 14, fontWeight: 'bold', margin: 20, marginBottom: 0 }}>Explore</Text>
          {
            this.state.entity.map((item, index) => (
              <View style={[styles.boxView, { marginTop: 20 }]} key={index} >
                <View style={{ height: 200 }}>

                  <ImageBackground source={require('../assets/images/thumbnail.png')} style={{ height: 200, width: '100%', borderRadius: 8 }} imageStyle={{ borderRadius: 8 }}>
                    <Image source={{ uri: item.image }} style={{ height: 200, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} resizeMode="cover" imageStyle={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                  </ImageBackground>

                  <View style={styles.favView}>
                    <Ionicons
                      name={'ios-heart-empty'}
                      size={26}
                      style={{
                        alignSelf: 'center',
                      }}
                      color={Color.tabIconSelected}
                    />
                  </View>
                </View>

                <View style={{ flex: 1, padding: 8 }}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', flex: 0.8 }}>
                      <Image source={require('../assets/images/food_symbol.png')}
                        style={{
                          tintColor: Color.green_color,
                          width: 16, height: 16
                        }} />
                      <Text style={{ color: Color.black_color, fontSize: 14, fontWeight: 'bold', marginStart: 4 }}>Rajasthani Thali</Text>
                    </View>
                    <Text style={{ color: Color.black_color, fontSize: 14, fontWeight: 'bold', flex: 0.2, alignSelf: 'flex-end', textAlign: 'right' }}>50/-</Text>

                  </View>
                  <Text style={{ marginTop: 4, color: Color.gray_color }}> by Swad Marathi</Text>
                  <View style={{ flexDirection: 'row', padding: 4, marginTop: 4 }}>
                    <Text style={{ marginEnd: 4, color: Color.gray_color }}>4.5</Text>
                    <Rating
                      type='star'
                      ratingCount={5}
                      imageSize={16}
                    />
                    <Text style={{ marginStart: 4, color: Color.gray_color }}>(100)</Text>
                  </View>


                </View>
              </View>

            ))
          }
        </ScrollView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  //title: Constant.appName,
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
