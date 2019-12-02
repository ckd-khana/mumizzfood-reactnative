import React from 'React';
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
import Color from '../constants/Color';
import moment from 'moment';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { FlatList } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-navigation';

export default class ItemDetails extends React.Component {
  state = {
    entity: [
      { id: 1, image: 'http://lorempixel.com/400/200/food/1/' },
      { id: 2, image: 'http://lorempixel.com/400/200/food/2/' },
      { id: 3, image: 'http://lorempixel.com/400/200/food/3/' },
      { id: 4, image: 'http://lorempixel.com/400/200/food/4/' },
    ],
    search: 'fsfsdf'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
        <View style={styles.add_extra_view}>
          <View style={styles.add_extra_left}>
            <Text style={{ fontWeight: 'bold' }}>Add Extra</Text>
            <Text numberOfLines={1}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
          </View>
          <TouchableOpacity style={styles.add_extra_right}>
            <Image source={require('../assets/images/increase.png')}
              style={styles.img_plus} />
          </TouchableOpacity>
        </View>

        <View style={{ height: 150, backgroundColor: Color.primaryColor, borderRadius: 4, padding: 16 }}>
          <Text style={{ color: Color.white_color }}>Get this meal at{"\n"}<Text style={{ textDecorationLine: 'line-through' }}>75/-</Text> 70/-</Text>
          <TouchableOpacity style={{ backgroundColor: Color.white_color, borderRadius: 4, alignSelf: 'baseline', padding: 8 }}>
            <Text>{`Subscribe`.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>Select a delivery slot</Text>
          <View style={{ flexDirection: 'row', }}>
            <Text style={{ backgroundColor: Color.black_color, borderRadius: 4, color: Color.white_color, marginEnd: 8, padding: 4 }}>Dinner</Text><Text>{moment().format('YYYY-MM-DD')}</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={{ flex: 1, borderColor: Color.light_gray1, borderWidth: 1, height: 60, borderRadius: 4, justifyContent: 'center', marginEnd: 10 }}>
                <View style={{ alignSelf: 'center', }}>
                  <Text style={{ alignSelf: 'center', }}>7:00pm-7:45pm</Text>
                  <Text style={{ alignSelf: 'center', }}>Today</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, borderColor: Color.light_gray1, borderWidth: 1, height: 60, borderRadius: 4, justifyContent: 'center', marginStart: 10 }}>
                <View style={{ alignSelf: 'center', }}>
                  <Text style={{ alignSelf: 'center', }}>7:00pm-7:45pm</Text>
                  <Text style={{ alignSelf: 'center', }}>Today</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <TouchableOpacity style={{ flex: 1, borderColor: Color.light_gray1, borderWidth: 1, height: 60, borderRadius: 4, justifyContent: 'center', marginEnd: 10 }}>
                <View style={{ alignSelf: 'center', }}>
                  <Text style={{ alignSelf: 'center', }}>7:00pm-7:45pm</Text>
                  <Text style={{ alignSelf: 'center', }}>Today</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, borderColor: Color.light_gray1, borderWidth: 1, height: 60, borderRadius: 4, justifyContent: 'center', marginStart: 10 }}>
                <View style={{ alignSelf: 'center', }}>
                  <Text style={{ alignSelf: 'center', }}>7:00pm-7:45pm</Text>
                  <Text style={{ alignSelf: 'center', }}>Today</Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>
        </View>
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
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30
  },
  add_extra_view: {
    marginTop: 20,
    flexDirection: 'row'
  },
  add_extra_left: { flex: .8 },
  add_extra_right: {
    flex: 0.2,
    justifyContent: 'center',
  },
  img_plus: {
    width: 18,
    height: 18,
    alignSelf: 'flex-end'
  },
});
