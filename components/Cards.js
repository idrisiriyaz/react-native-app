import React from 'react';
import styles from '../styles/style';
import {Text, View, Image} from 'react-native';

const Cards = (props) => {
  
  return (
    <View style={styles.card}>
       <Image
                    style={styles.image}
                    source={props.imageSource}
                  />
      <Text style={styles.cardText}>{props.name}</Text>
    </View>
  );
};

export default Cards;