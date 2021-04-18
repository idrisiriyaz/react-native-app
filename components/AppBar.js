import React from 'react';
import {View, StatusBar, TouchableOpacity, Text} from 'react-native';
import Logo from '../components/Logo';
import styles from '../styles/style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Cart from 'react-native-vector-icons/Ionicons';

export default AppBar = () => {
  return (
    <View style={styles.head}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="#098b4d"
        showHideTransition="none"
      />
      <Logo></Logo>
      <View style={styles.headic}>
        <TouchableOpacity style={styles.ic}>
          <Icon size={25} color="white" name="search" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ic}>
          <Icon size={25} color="white" name="notifications" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ic}>
          <View>
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
    </View>
  );
};
