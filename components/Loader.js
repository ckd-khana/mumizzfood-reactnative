
import React from 'React';
import { View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import Color from '../constants/Color';

export default class Loader extends React.Component {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="small" color={Color.primaryColor} />
      </View>
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