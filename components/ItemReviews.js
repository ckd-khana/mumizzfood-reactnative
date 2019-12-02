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
  TextInput

} from 'react-native';
import Color from '../constants/Color';
import { Rating } from 'react-native-ratings';
import { FlatList } from 'react-native-gesture-handler';


// import { PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager';

export default class ItemReview extends React.Component {
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
        <View>
          <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
            <TouchableOpacity style={{ flex: 0.2 }}>
              <Image source={require('../assets/images/thumbnail.png')}
                style={styles.image} />
            </TouchableOpacity>
            <View style={{ flex: 0.8 }}>
              <Text>Seema Nagar</Text>
              <Text>Give your review</Text>
              <View style={{ flexDirection: 'row', marginTop: 4, flex: 0.8 }}>
                <Rating
                  type='star'
                  ratingCount={5}
                  imageSize={10}
                />
                <Text style={{ marginStart: 4, color: Color.gray_color, fontSize: 10 }}>April 4, 2019</Text>
              </View>
              <View style={{
                borderRadius: 4,
                borderColor: Color.light_gray1,
                height: 100,
                borderWidth: 1
              }}>
                <TextInput multiline={true}
                  style={{ padding: 8 }}
                > Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </TextInput>
              </View>
            </View>
          </View>

          <View style={{ alignItems: 'flex-end' }}>
            <TouchableOpacity style={{ backgroundColor: Color.primaryColor, borderRadius: 4, alignItems: 'flex-end', padding: 4, paddingStart: 16, paddingEnd: 16 }}>
              <Text style={{ color: Color.white_color }}>Post</Text>
            </TouchableOpacity>
          </View>

        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={{ paddingStart: 10, paddingEnd: 10 }}
          data={this.state.entity}
          ItemSeparatorComponent={this.space}
          renderItem={({ item, index }) =>
            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
              <TouchableOpacity style={{ flex: 0.2 }}>
                <Image source={require('../assets/images/thumbnail.png')}
                  style={styles.image} />
              </TouchableOpacity>
              <View style={{ flex: 0.8 }}>
                <Text>Seema Nagar</Text>
                <View style={{ flexDirection: 'row', marginTop: 4, flex: 0.8 }}>
                  <Rating
                    type='star'
                    ratingCount={5}
                    imageSize={10}
                  />
                  <Text style={{ marginStart: 4, color: Color.gray_color, fontSize: 10 }}>April 4, 2019</Text>
                </View>
                <Text>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </Text>
              </View>
            </View>

          }
          ItemSeparatorComponent={() => <View style={{ margin: 0 }} />}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2
  }
});
