import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ListView,
  TouchableOpacity,
  View,
  Image,
  Text,
  FlatList,
  AsyncStorage,
  ImageBackground,
  ScrollView
} from 'react-native';
import Colors from '../../constants/Color';
import { LinearGradient } from 'expo'
import Loader from '../../components/Loader';
import DataNotFound from '../../components/DataNotFound';
import CustomProgressBar from '../../components/CustomProgressBar';
import Utils from '../../constants/Utils';

export default class CartScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  state = {
    tableHead: ['Total', '$440'],
    tableData: [
      ['Sub Total', '$400'],
      ['Shipping Cost', '$40'],
      ['Tax 2.5%', '$20'],
    ],
    totalPrice: 0,
    shipping: 0,
    tax: 0,
    priceCalculate: 0,
    shippingJson: null,
    userInfo: '',
    spinner: false,
    entity: [
      { id: 1, image: 'http://lorempixel.com/400/200/food/1/' },
      { id: 2, image: 'http://lorempixel.com/400/200/food/2/' },
      { id: 3, image: 'http://lorempixel.com/400/200/food/3/' },
      { id: 4, image: 'http://lorempixel.com/400/200/food/4/' },
    ],
  }

  _AddItem = (index) => {
    alert("_AddItem")
  }

  _RemoveItem = (index) => {
    alert("_RemoveItem")

  }

  _CloseItem = (index) => {
    alert("_CloseItem")

  }

  _CheckoutOrder = () => {
    alert("_CheckoutOrder")
  }

  render() {

    if (this.state.data === undefined || this.state.data === null) {
      return (<Loader />)
    } else {
      if (this.state.data.length === 0) {
        return (<DataNotFound />)

      } else {
        return (
          <ScrollView style={styles.container}>
            <CustomProgressBar spinner={this.state.spinner} />
            <View >

              <FlatList
                showsVerticalScrollIndicator={false}
                style={{ paddingTop: 6, paddingBottom: 6 }}
                data={this.state.entity}
                scrollEnabled={false}
                keyExtractor={(item, index) => {
                  return index.toString();
                }}
                renderItem={({ item, index }) => (
                  <View key={index}
                    activeOpacity={1}
                  >
                    <View style={styles.box}>
                      <View style={{
                        alignItems: 'center',
                        height: 72,
                        width: 72,
                        justifyContent: 'center',
                        margin: 8
                      }}>
                        <ImageBackground source={require('../../assets/images/thumbnail.png')}
                          style={styles.image}>
                          <Image style={[styles.image, { margin: 0, }]} source={{ uri: item.product.image }} />
                        </ImageBackground>

                      </View>
                      <View style={{ width: '50%', justifyContent: 'center' }}>
                        <Text style={[{ padding: 4, fontSize: 14, color: Colors.dark_gray, textTransform: 'capitalize' }]}>Rajasthani Thali</Text>
                        {/* <Rating
                          type='star'
                          imageSize={12} startingValue={4.5}
                          ratingImage={require('../assets/images/icons/star_3x.png')}
                          ratingBackgroundColor='gray'
                          style={{ alignItems: 'flex-start', marginTop: 4 }} /> */}
                        <Text style={[{
                          color: Colors.primaryColor,
                          textAlign: 'left',
                          marginTop: 8,
                          marginBottom: 8
                        }]}>50/-</Text>
                      </View>
                      <View style={styles.info}>

                        <View style={{ alignItems: 'center', justifyContent: 'center', marginEnd: 16 }}>
                          <TouchableOpacity
                            onPress={() => this._AddItem(index)}
                            activeOpacity={1}
                            style={styles.icon_view}
                          >
                            <Image source={require('../../assets/images/increase.png')}
                              style={{ width: 18, height: 18, alignSelf: 'center' }} />
                            {/* <Icon
                              name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
                              type='ionicon'
                              color={Colors.cart_color_icon}
                              size={20}

                            /> */}
                          </TouchableOpacity>
                          <Text style={{ padding: 4 }}>2</Text>
                          <TouchableOpacity
                            onPress={() => this._RemoveItem(index)}
                            activeOpacity={1}
                            style={styles.icon_view}
                          >
                            {/* <Icon

                              name={Platform.OS === 'ios' ? 'ios-remove' : 'md-remove'}
                              type='ionicon'
                              color={Colors.cart_color_icon}
                              size={20}

                            /> */}
                            <Image source={require('../../assets/images/decrease.png')}
                              style={{ width: 18, height: 18, alignSelf: 'center' }} />
                          </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                          onPress={() => this._CloseItem(index)}
                          activeOpacity={1}
                          style={styles.icon_view}
                        >
                          {/* <Icon
                            name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'}
                            type='ionicon'
                            color='red'
                            size={28}

                          /> */}
                          <Image source={require('../../assets/images/close.png')}
                            style={{ width: 16, height: 16, alignSelf: 'flex-start' }} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              />

              <View style={{ width: '80%', alignSelf: 'flex-end', }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end', aspectRatio: 2, }}>
                  <View style={{ flex: 1.2 }}>
                    <Text style={styles.text}>Sub Total</Text>
                    <Text style={styles.text}>Shipping Cost</Text>
                    <Text style={styles.text}>Tax 2.5%</Text>
                  </View>
                  <View style={{ flex: 1, }}>
                    <Text style={[styles.text, { alignSelf: 'flex-end', }]}>${this.state.totalPrice}</Text>
                    <Text style={[styles.text, { alignSelf: 'flex-end' }]}>${this.state.shipping}</Text>
                    <Text style={[styles.text, { alignSelf: 'flex-end' }]}>${this.state.tax}</Text>
                  </View>
                </View>
                <View style={{
                  flexDirection: 'row',
                  borderTopColor: '#000',
                  borderTopWidth: 1,
                  aspectRatio: 2,
                }}>
                  <Text style={[styles.text1, { flex: 1.2 }]}>Total</Text>
                  <View style={[{ flex: 1 }]}>
                    <Text style={[styles.text1, { alignSelf: 'flex-end' }]}>${this.state.priceCalculate}</Text>
                  </View>

                </View>
              </View>

              {/* <Table borderStyle={{ borderColor: 'transparent' }} style={{ width: '60%', alignSelf: 'flex-end', }}>

          {
            this.state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (

                    <Cell key={cellIndex} data={cellData} textStyle={styles.text} />
                  ))
                }
              </TableWrapper>
            ))
          }
          <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text1} />
        </Table> */}
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => { this._CheckoutOrder() }}
              >
                <LinearGradient
                  colors={['#0000FF', '#3333FF', '#5858FF']}
                  style={{
                    height: 46, alignItems: 'center', borderRadius: 46 / 2, justifyContent: 'center',
                    marginBottom: 16,
                    marginStart: 6, marginEnd: 6
                  }}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 0 }}>
                  <Text
                    style={[{
                      backgroundColor: 'transparent',
                      fontSize: 14,
                      color: '#fff',
                    }]}>
                    CHECKOUT
                </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )
      }

    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg_color,
    paddingStart: 12, paddingEnd: 12

  },
  gridView: {
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,

  },
  itemName: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#000',
  },
  icon: {
    width: 30,
    height: 30,
  },
  image: {
    width: 70,
    height: 70,
    margin: 4,

  },
  box: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height: 1,
      width: -2
    },
    elevation: 2,
    marginStart: 10,
    marginEnd: 10,
    marginTop: 14,
    borderRadius: 4,
  },
  info: {
    width: 100,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    color: '#333'
  },

  iconContainer: {
    flex: 1,
    alignItems: 'center'
  },
  iconFonts: {
    color: 'gray',
  },
  red: {
    color: '#FF4500',
  },

  //table style
  head: {
    height: 40, borderBottomColor: '#000',
    borderTopWidth: 1,

  },
  text1: {
    margin: 6,

    fontSize: 16,
    fontFamily: 'futura-bold'
  },
  text: {
    margin: 6,

    fontSize: 16,
    fontFamily: 'futura-medium',
    color: Colors.dark_gray
  },
  row: {
    flexDirection: 'row',
  },
  icon_view: {
    width: 32, height: 32,
    justifyContent: 'center',
    alignItems: 'center',

  }
});

