import React from 'react';
import {Text, View, StatusBar, TextInput, Image} from 'react-native';

const ListProduct = () => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginHorizontal: 20,
      marginVertical: 10,
      backgroundColor: 'white',
      borderColor: 'black',
      height: 110,
      width: 350,
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 1,
      shadowRadius: 100,
      borderRadius: 5,
      elevation: 2,
    }}>
    <Image
      style={{height: 90, alignSelf: 'center', width: 50}}
      source={require('../assets/upma.jpg')}></Image>
    <View style={{justifyContent: 'space-evenly'}}>
      <Text
        style={{
          fontSize: 16,
          color: 'grey',
          fontFamily: 'Quicksand-Bold',
          marginLeft: 10,
        }}>
        Upma
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: 'grey',
          fontFamily: 'Quicksand-Bold',
          marginLeft: 10,
        }}>
        170gm
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: '#098b4d',
          fontFamily: 'Quicksand-Bold',
          marginLeft: 10,
        }}>
        ₹200.00
      </Text>
    </View>
    <View
      style={{
        width: 60,
        height: 30,
        backgroundColor: '#098b4d',
        borderRadius: 10,
        alignSelf: 'center',
        left: 60,
      }}>
      <Text
        style={{
          fontSize: 16,
          color: 'white',
          fontFamily: 'Quicksand-Bold',
          alignSelf: 'center',
        }}>
        ADD
      </Text>
    </View>
  </View>
);

export default ListProduct;
