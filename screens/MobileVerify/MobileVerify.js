import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import Color from '../../constants/Color';
import { SafeAreaView } from 'react-navigation';

export default class MobileVerify extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null

  });
  state = {
    mobile: ''
  }
  render() {
    return (
      <ImageBackground source={require('../../assets/images/mobile_bg.png')} style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }} >

        <SafeAreaView />
        <View style={[styles.container, { alignItems: 'center', }]}>
          <View style={{ justifyContent: 'center', flex: 1, }}>
            <Text style={{ color: Color.primaryColor, fontSize: 18, }}>Otp Verification</Text>
          </View>

          <View style={{ flex: 1.4, justifyContent: 'center' }}>
            <Image source={require('../../assets/images/email.png')} style={{ width: 100, height: 100 }} />
          </View>


          <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, color: Color.primaryColor }}>Enter Your mobile number </Text>
            <Text style={{}}>We will send you OTP message</Text>
          </View>

        </View>
        <View style={[styles.container, { justifyContent: 'flex-end', alignItems: 'center', }]}>

          <View style={styles.textInputMain} >
            <Text style={{ textAlign: 'center', color: Color.white_color }}>(+91) India</Text>
          </View>
          <View style={styles.textInputMain} >
            <TextInput
              style={styles.inputStyle}
              onChangeText={(mobile) => this.setState({ mobile })}
              value={this.state.mobile}
              placeholder="Enter Phone Number"
              placeholderTextColor={Color.white_color}
              keyboardType="numeric"
              maxLength={10}
            />
          </View>
          <TouchableOpacity
            onPress={() => { this.props.navigation.navigate('OTPVerifications') }}
            style={[styles.login_btn, { marginBottom: 80 }]}
            activeOpacity={1}>
            <Text style={styles.btnText}>{'Send Otp'.toUpperCase()}</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>

    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingStart: 20,
    paddingEnd: 20
  },
  inputStyle: {
    flex: 1,
    paddingStart: 16,
    alignSelf: 'center'

  },
  textInputMain: {
    borderBottomWidth: 1,
    borderBottomColor: Color.white_color,
    height: 46,
    marginTop: 6,
    justifyContent: 'center',
    width: '100%'
  },
  login_btn: {
    marginTop: 16,
    backgroundColor: Color.white_color,
    borderRadius: 46 / 2,
    width: 200,
    height: 46,
    justifyContent: 'center',
  },
  btnText: {
    color: Color.primaryColor,
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 14
  },
});
