import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import ImageViewer from 'react-native-image-zoom-viewer';
const images = [
  {
    url:
      'https://envato-shoebox-0.imgix.net/7651/471d-b76a-4f6e-a52d-12c54c1209c3/DSC_0718.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=e1cafacfad25d88ae977cca42cdb53a8',

    props: {
      // headers: ...
    },
  },
  {
    url: '',
    props: {
      source: require('../assets/upma.jpg'),
    },
  },
];

function Products() {
  return (
    <View>
      <View
        style={{
          height: 230,
          backgroundColor: '#098b4d',
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}>
        <Text
          style={{
            fontSize: 18,
            left: 20,
            fontFamily: 'Quicksand-Bold',
            color: 'white',
          }}>
          Ready to make / Upma
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          alignSelf: 'center',
          width: 260,
          height: 260,
          borderRadius: 130,
          top: -150,
          justifyContent: 'center',
        }}>
        <Image
          style={{height: 200, alignSelf: 'center', width: 150}}
          source={require('../assets/upma.jpg')}></Image>
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            bottom: 100,
            left: 20,
            fontFamily: 'Quicksand-Bold',
          }}>
          Description
        </Text>
        <Text
          style={{
            fontSize: 14,
            bottom: 100,
            left: 20,
            fontFamily: 'Quicksand-Bold',
            color: 'grey',
          }}>
          Description
        </Text>
        <Text
          style={{
            fontSize: 18,
            bottom: 100,
            left: 20,
            fontFamily: 'Quicksand-Bold',
          }}>
          Select Variant
        </Text>
        <View
          style={{
            left: 20,
            backgroundColor: '#098b4d',
            height: 70,
            bottom: 90,
            width: 90,
            borderRadius: 15,
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 3},
            shadowOpacity: 1,
            shadowRadius: 100,
            elevation: 2,
          }}>
          <Text
            style={{
              fontSize: 16,
              marginHorizontal: 10,
              left: 8,

              top: 10,
              fontFamily: 'Quicksand-Bold',
              color: 'white',
            }}>
            170gm
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginHorizontal: 10,
              marginTop: 6,
              left: 8,

              top: 10,
              fontFamily: 'Quicksand-Bold',
              color: 'white',
            }}>
            ₹200.00
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              top: 100,

              borderColor: '#098b4d',
              borderWidth: 2,
              borderRadius: 50,
              width: 145,
              height: 40,
              justifyContent: 'space-evenly',

              left: 20,
              backgroundColor: '#d9f2e6',
              alignItems: 'center',
            }}>
            <View style={{}}>
              <Text>-</Text>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                width: 45,
                height: 36,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>0</Text>
            </View>
            <View>
              <Text>+</Text>
            </View>
          </View>

          <View
            style={{
              right: 20,
              top: 100,
              borderRadius: 50,
              backgroundColor: '#098b4d',
              justifyContent: 'center',
              alignItems: 'center',
              width: 220,
              height: 40,
            }}>
            <Text style={{fontFamily: 'Quicksand-Bold', color: 'white'}}>
              Add ₹0.00
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Products;
