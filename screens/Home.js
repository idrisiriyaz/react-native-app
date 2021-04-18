import React, {Component} from 'react';
import {Container, Content, Button, Text, View} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Cards from '../components/Cards';
import CustomeCard from '../components/CustomCard';
import Banner from '../components/Banner';
import styles from '../styles/style.js';
import AppBar from '../components/AppBar';
import {ScrollView, TouchableOpacity} from 'react-native';
import Footer from '../components/Footer';

export default class Home extends Component {
  images = {
    ghee: require('../assets/ghee.jpg'),
    fruit: require('../assets/fruit.jpg'),
    oil: require('../assets/oil.jpg'),
    pickle: require('../assets/pickle.jpg'),
    masala: require('../assets/masala.jpg'),
    snack: require('../assets/snack.jpg'),
  };

  render(props) {
    return (
      <Container>
        {/* <AppBar /> */}
        <Content>
          <ScrollView>
            <Content>
              <Text style={[styles.text]}>Hi ThekkeIndia</Text>
              <Banner></Banner>

              <View style={styles.arrow}>
                <Text style={[styles.text1]}>Our Exclusive Categories</Text>

                <TouchableOpacity>
                  <Text style={[styles.text, {color: 'grey'}]}>
                    See all <Icon name="keyboard-arrow-right" />
                  </Text>
                </TouchableOpacity>
              </View>
            </Content>
            <View style={styles.cards}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ProductList')}>
                <Cards
                  name="Masala & Spices"
                  imageSource={this.images.masala}></Cards>
              </TouchableOpacity>
              <Cards name="Edible oil" imageSource={this.images.oil}></Cards>
            </View>
            <View style={styles.cards}>
              <Cards name="Ghee" imageSource={this.images.ghee}></Cards>
              <Cards name="Pickle" imageSource={this.images.pickle}></Cards>
            </View>
            <View style={styles.cards}>
              <Cards name="Snacks" imageSource={this.images.snack}></Cards>
              <Cards
                name="Fruits & Veg"
                imageSource={this.images.fruit}></Cards>
            </View>

            <Text style={[styles.text1]}>Newly Added Products</Text>

            <ScrollView horizontal={true}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Category')}>
                <CustomeCard
                  name="Upma"
                  price="170gm | ₹200.00
                  "></CustomeCard>
              </TouchableOpacity>

              <CustomeCard
                name="Dosa"
                price="170gm | ₹200.00
                   "></CustomeCard>
              <CustomeCard
                name="Rava Dosa"
                price="170gm | ₹200.00
                   "></CustomeCard>
            </ScrollView>
          </ScrollView>
        </Content>
        {/* <Footer></Footer> */}
      </Container>
    );
  }
}
