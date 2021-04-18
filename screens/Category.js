import {View, TouchableOpacity, Container, Content} from 'native-base';
import React, {Component} from 'react';
import Home, {ScrollView} from 'react-native';
import AppBar from '../components/AppBar';
import Banner from '../components/Banner';
import Cards from '../components/Cards';
import styles from '../styles/style';

export default class Category extends Component {
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
      <View>
        <AppBar />

        <ScrollView>
          <Banner />
          <Content style={{backgroundColor: 'white'}}>
            <View style={styles.cards}>
              <Cards name="Categery" imageSource={this.images.fruit}></Cards>
              <Cards name="Categeries" imageSource={this.images.fruit}></Cards>
            </View>
            <View style={styles.cards}>
              <Cards name="Categery" imageSource={this.images.fruit}></Cards>
              <Cards name="Categeries" imageSource={this.images.fruit}></Cards>
            </View><View style={styles.cards}>
              <Cards name="Categery" imageSource={this.images.fruit}></Cards>
              <Cards name="Categeries" imageSource={this.images.fruit}></Cards>
            </View><View style={styles.cards}>
              <Cards name="Categery" imageSource={this.images.fruit}></Cards>
              <Cards name="Categeries" imageSource={this.images.fruit}></Cards>
            </View><View style={styles.cards}>
              <Cards name="Categery" imageSource={this.images.fruit}></Cards>
              <Cards name="Categeries" imageSource={this.images.fruit}></Cards>
            </View>
          </Content>
        </ScrollView>
      </View>
    );
  }
}
