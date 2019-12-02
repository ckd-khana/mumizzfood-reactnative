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
import { PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager';
import Color from '../../constants/Color';

export default class SliderScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null

  });
  state = {
    images: [
      { image: '../../assets/images/kitchen.png' },
      { image: '../../assets/images/delivery.png' },
      { image: '../../assets/images/kitchen.png' },
      { image: '../../assets/images/delivery.png' }
    ],
    search: 'fsfsdf'
  }

  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={this.state.images.length}
      dotStyle={{ backgroundColor: Color.black_color }}
      selectedDotStyle={{ backgroundColor: Color.primaryColor }} />;
  }

  render() {
    return (
      <View style={styles.container}>

        <IndicatorViewPager
          style={{ flex: 1 }}
          indicator={this._renderDotIndicator()}>

          <View style={{ paddingBottom: 20 }}>
            <ImageBackground source={require('../../assets/images/kitchen.png')} style={{ width: '100%', height: '100%' }} />
          </View>
          <View style={{ paddingBottom: 20 }}>
            <ImageBackground source={require('../../assets/images/delivery.png')} style={{ width: '100%', height: '100%' }} />
          </View>
          <View style={{ paddingBottom: 20 }}>
            <ImageBackground source={require('../../assets/images/kitchen.png')} style={{ width: '100%', height: '100%' }} />
          </View>
          <View style={{ paddingBottom: 20 }}>
            <ImageBackground source={require('../../assets/images/delivery.png')} style={{ width: '100%', height: '100%' }} />
          </View>
        </IndicatorViewPager>

        <View style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 4,
        }}>
          <View style={{ height: 140, paddingStart: 20, paddingEnd: 20, }}>

            <TouchableOpacity
              onPress={() => { this.props.navigation.navigate('Main') }}>
              <Text style={{ textAlign: 'center', marginTop: 20, fontWeight: '700' }}>SKIP</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <View style={styles.btn_style}
                onPress={() => { this.props.navigation.navigate('Main') }}>
                <Text style={{ alignSelf: 'center', justifyContent: 'center', fontWeight: '700' }}>Google+</Text>
              </View>
              <View style={{ flex: 0.2 }} />
              <TouchableOpacity style={styles.btn_style}
                onPress={() => { this.props.navigation.navigate('MobileVerify') }}>
                <Text style={{ alignSelf: 'center', justifyContent: 'center', fontWeight: '700' }}>Mobile</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>


      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  btn_style: {
    flex: 1, height: 48,
    borderColor: Color.primaryColor,
    borderRadius: 48 / 2, borderWidth: 2,
    justifyContent: 'center'
  }
});
