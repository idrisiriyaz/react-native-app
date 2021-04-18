import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import styles from '../styles/style';
import React from 'react';
import Logo from '../components/Logo';
import Cart from 'react-native-vector-icons/Ionicons';
function Bags() {
  return (
    <View>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        showHideTransition="none"
        backgroundColor="#098b4d"
      />
      <View
        style={{
          height: 100,
          backgroundColor: '#098b4d',
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          flexDirection: 'row',
        }}>
        <Logo></Logo>
        <TouchableOpacity style={styles.ic}>
          <View style={{left: 350, top: 10}}>
            <Cart size={25} color="white" name="cart" />
            <View style={styles.dot1}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontFamily: 'Quicksand-Regular',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  position: 'absolute',
                  top: -2,
                  fontSize: 10,
                }}>
                0
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            justifyContent: 'center',
            top: 250,
            padding: 20,
            margin: 30,
            textAlign: 'auto',
            color: 'grey',
            textAlign: 'center',
            fontFamily: 'Quicksand-Bold',
          }}>
          You can view your Orders here. You must Sign In to place an Order.
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          top: 530,
          borderRadius: 20,
          backgroundColor: '#098b4d',
          height: 40,
          width: 100,
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Quicksand-Bold',
            fontSize: 16,
          }}>
          Sign in
        </Text>
      </View>
    </View>
  );
}

export default Bags;
