import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

function CustomeCard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.rect2}>
          <Text style={styles.loremIpsum}>New!</Text>
        </View>
        <Image source={require('../assets/upma.jpg')} style={styles.pimage} />
        <Text style={styles.sampleText}>Ready to make</Text>

        <Text style={styles.productName}>{props.name}</Text>
        <Text style={styles.priceStyle}>{props.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-evenly',
    marginLeft: 20,
  },
  pimage: {
    height: 100,
    width: 60,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  },
  rect: {
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    margin: 8,
    borderColor: 'black',
    height: 210,
    width: 180,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 100,
    borderRadius: 10,
    elevation: 2,
  },
  rect2: {
    width: 50,
    height: 25,
    backgroundColor: '#098b4d',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  loremIpsum: {
    color: 'white',
    marginTop: 4,
    marginLeft: 10,
    fontSize: 12,
    fontFamily: 'Quicksand-Regular',
  },
  sampleText: {
    fontSize: 14,
    color: 'grey',
    fontFamily: 'Quicksand-Bold',
    marginLeft: 10,
  },
  productName: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 16,
    marginLeft: 10,
    textAlign: 'left',
    marginBottom: 4,
  },
  priceStyle: {
    fontSize: 14,
    fontFamily: 'Quicksand-Bold',
    color: 'grey',
    marginBottom: 20,
    marginLeft: 10,
  },
});

export default CustomeCard;
