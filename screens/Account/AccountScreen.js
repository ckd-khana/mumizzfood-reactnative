import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { SafeAreaView } from 'react-navigation';
import Colors from '../../constants/Color';
import Color from '../../constants/Color';
import Constant from '../../constants/Constant';

export default class AccountScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null

  });

  state = {
    channels: [
      { screen: Constant.profile, title: Constant.profile, image: require('../../assets/images/woman.png') },
      { screen: Constant.orders, title: Constant.orders, image: require('../../assets/images/woman.png') },
      { screen: Constant.subscriptions, title: Constant.subscriptions, image: require('../../assets/images/woman.png') },
      { screen: Constant.rate_your_meal, title: Constant.rate_your_meal, image: require('../../assets/images/woman.png') },
      { screen: Constant.address, title: Constant.address, image: require('../../assets/images/woman.png') },
      { screen: Constant.how_it_works, title: Constant.how_it_works, image: require('../../assets/images/woman.png') },

      { screen: Constant.contact_us, title: Constant.contact_us, image: require('../../assets/images/woman.png') },
      { screen: Constant.faqs, title: Constant.faqs, image: require('../../assets/images/woman.png') },
      { screen: Constant.terms, title: Constant.terms, image: require('../../assets/images/woman.png') },
      { screen: Constant.privacy_policy, title: Constant.privacy_policy, image: require('../../assets/images/woman.png') },
      { screen: Constant.cancellation_policy, title: Constant.cancellation_policy, image: require('../../assets/images/woman.png') },
      { screen: Constant.logout, title: Constant.logout, image: require('../../assets/images/woman.png') },
    ]
  };

  renderButtons() {
    return this.state.channels.map(({ screen, title, image }) => (

      <TouchableOpacity
        key={screen + title}
        //onPress={this.navigateToScreen(screen)}
        activeOpacity={1}
      >

        <View style={{
          flexDirection: 'row', borderBottomColor: Color.light_gray, borderBottomWidth: 1,
          justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: 10, paddingBottom: 10
        }}>
          <Image source={image} style={{ width: 24, height: 24, marginEnd: 20, marginStart: 20 }} resizeMode="contain" />
          <Text style={{ alignSelf: 'center', marginEnd: 20 }} >{title}</Text>
        </View>

      </TouchableOpacity>
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={{ flex: 1 }}>
            <View style={{ borderBottomColor: Color.light_gray, borderBottomWidth: 1, }}>
              <View style={{ flexDirection: 'row', padding: 16, }}>

                <ImageBackground source={require('../../assets/images/woman.png')}
                  style={styles.img_view}
                  imageStyle={styles.imageStyle}>
                  <Image source={require('../../assets/images/woman.png')} style={styles.img_view} />
                </ImageBackground>

                <View style={{ justifyContent: 'center', marginStart: 8 }}>
                  <Text >Seema Nagar</Text>
                  <Text >seema@mailinator.com</Text>

                </View>

              </View>
            </View>


            {this.renderButtons()}
          </View>

        </ScrollView>
        <SafeAreaView />
      </View>

    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: Color.white_color,
  },
  img_view: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },

  imageStyle: { borderRadius: 50 / 2, borderColor: Color.black_color, borderWidth: 1 }
});
