import {View, Text, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

function Profile() {
  return (
    <View>
      <View>
        <Text
          style={{
            fontSize: 20,
            marginTop: 18,
            textAlign: 'left',
            left: 20,
            fontFamily: 'Quicksand-Bold',
          }}>
          Welcome Login
        </Text>
        <Text
          style={{
            marginTop: 18,
            fontSize: 15,
            textAlign: 'left',
            left: 20,
            fontFamily: 'Quicksand-Regular',
            marginBottom: 50,
          }}>
          Enter Your Phone Number and we will send SMS with confirmation code to
          your number
        </Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            fontSize: 20,
            flexDirection: 'row',
            left: 20,
            borderRadius: 10,

            width: 50,
            height: 50,
            borderColor: 'black',
            borderWidth: 1,
            fontFamily: 'Quicksand-Bold',
          }}>
          <Text
            style={{
              fontSize: 15,
              alignSelf: 'center',
              left: 10,
              fontFamily: 'Quicksand-Regular',
            }}>
            +91
          </Text>
        </View>
        <TextInput
          placeholderTextColor="black"
          dataDetectorTypes="phoneNumber"
          keyboardType="numeric"
          maxLength={10}
          style={{
            left: 30,
            width: 320,
            borderRadius: 10,
            height: 50,
            borderColor: 'black',
            borderWidth: 1,
            color: 'black',
            fontFamily: 'Quicksand-Regular',
          }}
          placeholder="Enter Number"
        />
      </View>

      <View
        style={{
          justifyContent: 'flex-end',
          flexDirection: 'column',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            top: '900%',
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
        <View
          style={{
            justifyContent: 'center',
            top: '130%',
            flexDirection: 'row',
          }}>
          <Text>Dont't have a account ? </Text>
          <TouchableOpacity>
            <Text style={{color: '#098b4d', fontFamily: 'Quicksand-Bold'}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Profile;
