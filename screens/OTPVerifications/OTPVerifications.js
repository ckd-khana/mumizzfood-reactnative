import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import Color from '../../constants/Color';
import { SafeAreaView } from 'react-navigation';
import OtpInputs from '../../components/OtpInputs';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

export default class OTPVerifications extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null

  });
  state = { code: '' };

  render() {
    return (
      <ImageBackground source={require('../../assets/images/mobile_bg.png')} style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }} >

        <SafeAreaView />
        <View style={[styles.container, { alignItems: 'center', }]}>
          <View style={{ justifyContent: 'center', flex: 1, }}>
            <Text style={{ color: Color.primaryColor, fontSize: 18, }}>Enter Verification Code</Text>
          </View>

          <View style={{ flex: 1.4, justifyContent: 'center' }}>
            <Image source={require('../../assets/images/email.png')} style={{ width: 100, height: 100 }} />
          </View>


          <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, color: Color.primaryColor }}>Enter OTP </Text>
            <Text style={{}}>We have sent OTP on your mobile number</Text>
          </View>

        </View>
        <View style={[styles.container, { justifyContent: 'flex-end', alignItems: 'center' }]}>

          <SmoothPinCodeInput
            ref={this.pinInput}
            value={this.state.code}
            onTextChange={code => this.setState({ code })}
            onFulfill={this._checkCode}
            onBackspace={this._focusePrevInput}
            codeLength={6}
            cellStyle={{
              borderWidth: 1,
              borderColor: 'black',
            }}
            cellStyleFocused={{
              borderWidth: 1,
              borderColor: Color.white_color,

            }}
            textStyle={{
              fontSize: 24,
              color: 'black'
            }}
            textStyleFocused={{
              color: Color.white_color
            }}
          />

          <TouchableOpacity
            onPress={() => { this.props.navigation.navigate('Main') }}
            style={[styles.login_btn, { marginBottom: 80 }]}
            activeOpacity={1}>
            <Text style={styles.btnText}>{'Verify'.toUpperCase()}</Text>
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
  containerCodePin: {

    backgroundColor: '#f4f4f4',
  },
  pinStyle: {
    marginLeft: 10,
    marginRight: 10,
    width: 30,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 0,
  },
});
