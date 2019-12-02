
import React from 'React';
import { View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import Color from '../constants/Color';
import ProgressLoader from 'rn-progress-loader'

export default class CustomProgressBar extends React.Component {
  render() {
    return (

      <ProgressLoader
        visible={this.props.spinner}
        isModal={true} isHUD={true}
        hudColor={Color.bg_color}
        color={Color.black_color} />

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});