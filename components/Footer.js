import {Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Grid from 'react-native-vector-icons/Entypo';
import {Container, Content, Badge} from 'native-base';

export default Footer = () => {
  const changeState = route => {
    switch (route) {
      case 'Home':
        setSelected(true);
        setCart(false);
        setDashBoard(false);
        setPerson(false);
        break;
      case 'Dashboard':
        setDashBoard(true);
        setCart(false);
        setSelected(false);
        setPerson(false);
        break;
      case 'Person':
        setPerson(true);
        setCart(false);
        setDashBoard(false);
        setSelected(false);
        break;
      case 'Cart':
        setCart(true);
        setSelected(false);
        setDashBoard(false);
        setPerson(false);
        break;
      default:
        break;
    }
  };

  const [selected, setSelected] = useState(true);
  const [dashBoard, setDashBoard] = useState(false);
  const [cart, setCart] = useState(false);
  const [person, setPerson] = useState(false);

  return (
    <View style={styles.foot}>
      <TouchableOpacity style={styles} onPress={() => changeState('Home')}>
        {selected ? (
          <Container>
            <Icon size={25} name="home" color="#098b4d" />

            <View style={styles.dot}></View>
          </Container>
        ) : (
          <Icon size={25} name="home" color="black" />
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles} onPress={() => changeState('Dashboard')}>
        {dashBoard ? (
          <Container>
            <Grid size={25} name="grid" color="#098b4d" />
            <View style={styles.dot} />
          </Container>
        ) : (
          <Grid size={25} name="grid" />
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles} onPress={() => changeState('Cart')}>
        {cart ? (
          <Container>
            <Icon size={25} name="local-mall" color="#098b4d" />
            <View style={styles.dot}></View>
          </Container>
        ) : (
          <Icon size={25} name="local-mall" color="black" />
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles} onPress={() => changeState('Person')}>
        {person ? (
          <Container>
            <Icon size={25} name="person" color="#098b4d" />
            <View style={styles.dot}></View>
          </Container>
        ) : (
          <Icon size={25} name="person" color="black" />
        )}
      </TouchableOpacity>
    </View>
  );
};
