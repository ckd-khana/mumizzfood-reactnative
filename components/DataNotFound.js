
import React from 'React';
import { View, StyleSheet, Image, ActivityIndicator, Text } from 'react-native';
import Color from '../constants/Color';

export default class DataNotFound extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.text_style]} >Data not found</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.bg_color,
  },

  text_style: {
    fontSize: 16,
    color: Color.dark_gray
  }
});