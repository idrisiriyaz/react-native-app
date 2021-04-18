import React, {Component} from 'react';
import Logo from './components/Logo';
import {Button, TouchableOpacity, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './screens/Home';
import Bags from './screens/Bags';
import Profile from './screens/Profile';
import Products from './screens/ProductDetails';
import AppBar from './components/AppBar';
import Catogery from './screens/Category';
import ProductList from './screens/ProductList';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

enableScreens();
export default class App extends Component {
  createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: props => <AppBar />,
        }}
      />
      <Stack.Screen
        name="Category"
        children={Products}
        options={{
          title: '',
          headerLeft: props => <Logo></Logo>,

          headerStyle: {
            backgroundColor: '#098b4d',
            elevation: 0,
          },
        }}
      />
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{
          header: props => <AppBar />,
        }}
      />
    </Stack.Navigator>
  );
  // createDetailsStack = () => {
  //   <Stack.Navigator>
  //     <Stack.Screen name="Details" component={Products} />
  //   </Stack.Navigator>;
  // };
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
              } else if (route.name === 'Category') {
                iconName = focused ? 'apps' : 'apps';
              } else if (route.name === 'Bags') {
                iconName = focused ? 'shopping-cart' : 'shopping-cart';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person';
              }
              return (
                <View>
                  <Icon name={iconName} size={size} color={color} />
                  {/* <View style={styles.dot}></View> */}
                </View>
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: '#098b4d',
            inactiveTintColor: 'black',
            showLabel: false,
          }}>
          <Tab.Screen name="Home" children={this.createHomeStack} />
          <Tab.Screen name="Category" component={Catogery} />
          <Tab.Screen name="Bags" component={Bags} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
