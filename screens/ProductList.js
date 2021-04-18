import {
  Text,
  View,
  StatusBar,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import style from '../styles/style';
import ListProduct from '../components/ListProduct';

export default class Details extends Component {
  render(props) {
    return (
      <View>
        <View
          style={{
            height: 100,
            backgroundColor: '#098b4d',
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}>
          <StatusBar
            animated={true}
            barStyle="dark-content"
            backgroundColor="#098b4d"
            showHideTransition="none"
          />
          <TextInput
            placeholderTextColor="white"
            maxLength={10}
            style={{
              left: 30,
              width: 360,
              borderRadius: 10,
              height: 40,
              borderColor: 'white',
              borderWidth: 1,
              color: 'white',
              fontFamily: 'Quicksand-Regular',
            }}
            placeholder="Enter Product Name"
          />
        </View>
        <ScrollView style={{top: -40}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Category')}>
            <ListProduct></ListProduct>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Category')}>
            <ListProduct></ListProduct>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Category')}>
            <ListProduct></ListProduct>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Category')}>
            <ListProduct></ListProduct>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Category')}>
            <ListProduct></ListProduct>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Category')}>
            <ListProduct></ListProduct>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Category')}>
            <ListProduct></ListProduct>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Category')}>
            <ListProduct></ListProduct>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Category')}>
            <ListProduct></ListProduct>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Category')}>
            <ListProduct></ListProduct>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Category')}>
            <ListProduct></ListProduct>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Category')}>
            <ListProduct></ListProduct>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Category')}>
            <ListProduct></ListProduct>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Category')}>
            <ListProduct></ListProduct>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Category')}>
            <ListProduct></ListProduct>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
