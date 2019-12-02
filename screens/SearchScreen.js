import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function SearchScreen() {
  return (
    <ScrollView style={styles.container}>

    </ScrollView>
  );
}

SearchScreen.navigationOptions = {
  title: 'Discovery',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
