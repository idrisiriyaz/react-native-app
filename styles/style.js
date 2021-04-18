import {StyleSheet} from 'react-native';
import React from 'react';

export default StyleSheet.create({
  text: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 18,
    color: '#098b4d',
    marginLeft: 16,
    justifyContent: 'center',
    padding: 12,
  },
  foot: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 18,
  },
  badgenew: {
    color: '#098b4d',
  },
  text1: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 18,
    color: 'black',
    marginLeft: 16,
    justifyContent: 'center',
    padding: 12,
  },
  head: {
    flexDirection: 'row',
    backgroundColor: '#098b4d',
    justifyContent: 'space-between',
  },
  headic: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  ic: {
    marginRight: 20,
  },

  text3: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 14,
    color: 'black',
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 150 / 2,
    margin: 44,
    marginTop: 25,
  },
  cardText: {
    textAlign: 'center',
    fontFamily: 'Quicksand-Bold',
    margin: -24,
    fontSize: 18,
    color: 'grey',
  },

  card: {
    justifyContent: 'flex-start',

    flexDirection: 'column',
    backgroundColor: 'white',
    margin: 10,
    borderColor: 'black',
    height: 180,
    width: 160,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 1,
    shadowRadius: 100,
    borderRadius: 5,
    elevation: 2,
  },

  cards: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
  },
  arrow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  dot: {
    height: 5,
    width: 5,
    borderRadius: 2.5,
    backgroundColor: '#098b4d',
    alignSelf: 'center',
  },
  dot1: {
    position: 'absolute',
    height: 13,
    width: 13,
    left: 12,
    borderRadius: 6.5,
    backgroundColor: 'red',
    alignSelf: 'center',
  },
});
