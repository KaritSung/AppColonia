import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Input} from 'react-native-elements';
import FontFamily from '../../../../assets/CommonStyle/index';
import {
  scale,
  verticalScale,
  moderateScale,
  s,
} from 'react-native-size-matters';

function Home() {
  const [text, onChangeText] = React.useState('Useless Text');
  return (
    <View
      style={[
        {
          backgroundColor: '#ffffff',
          flex: 1,
        },
      ]}>
      <SafeAreaView>
        <View style={[{alignItems: 'center', paddingTop: '45%'}]}>
          <Text
            style={[
              {
                color: '#000000',
                fontSize: moderateScale(40),
                fontFamily: FontFamily.regular,
              },
            ]}>
            {'IMG LOGO'}
          </Text>
          <Text
            style={[
              {
                color: '#000000',
                fontSize: moderateScale(40),
                fontFamily: FontFamily.regular,
              },
            ]}>
            {'LOGO'}
          </Text>

          <View
            style={{
              marginTop: '10%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: scale(50),
              }}>
              <Image
                source={require('../../../../assets/image/icons/icon_person.png')}
                style={{
                  width: scale(40),
                  height: verticalScale(40),
                  marginTop: verticalScale(-15),
                  marginRight: scale(-8),
                }}
              />
              <Input
                placeholder="Email or Phone number"
                inputContainerStyle={{
                  width: scale(230),
                  height: verticalScale(20),
                  borderColor: '#63C596',
                  borderBottomWidth: moderateScale(3),
                }}
                inputStyle={{fontFamily: FontFamily.regular}}
              />
            </View>
          </View>

          <View
            style={{
              marginTop: '3%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: scale(50),
              }}>
              <Image
                source={require('../../../../assets/image/icons/icon_lock.png')}
                style={{
                  width: scale(40),
                  height: verticalScale(40),
                  marginTop: verticalScale(-15),
                  marginRight: scale(-8),
                }}
              />
              <Input
                placeholder="Password"
                inputContainerStyle={{
                  width: scale(230),
                  height: verticalScale(20),
                  borderColor: '#63C596',
                  borderBottomWidth: moderateScale(3),
                }}
                inputStyle={{fontFamily: FontFamily.regular}}
              />
            </View>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: '#63C596',
              borderRadius: moderateScale(13),
              marginTop: verticalScale(15),
              elevation: 8,
            }}>
            <Text
              style={{
                marginHorizontal: scale(104),
                marginVertical: verticalScale(4),
                color: '#ffffff',
                fontSize: moderateScale(18),
                fontFamily: FontFamily.medium,
              }}>
              Sign In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#F9F9F9',
              borderColor: '#63C596',
              marginTop: verticalScale(20),
              borderWidth: 2,
              borderRadius: moderateScale(13),
              elevation: 8,
            }}>
            <Text
              style={{
                marginHorizontal: scale(104),
                marginVertical: verticalScale(4),
                color: '#63C596',
                fontSize: moderateScale(18),
                fontFamily: FontFamily.medium,
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', marginTop: '10%'}}>
            <Text
              style={{
                color: '#63C596',
                fontSize: moderateScale(14),
                fontFamily: FontFamily.medium,
              }}>
              {' Forgot your '}
            </Text>
            <TouchableOpacity style={{}}>
              <Text
                style={{
                  color: '#63C596',
                  fontSize: moderateScale(14),
                  fontFamily: FontFamily.bold,
                }}>
                password?
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginHorizontal: scale(20),
              marginTop: '20%',
            }}>
            <Text
              style={{
                color: '#63C596',
                fontSize: moderateScale(12),
                fontFamily: FontFamily.regular,
              }}>
              {"By continuing, you agree to Colonia's Terms of"}
            </Text>
            <Text
              style={{
                color: '#63C596',
                fontSize: moderateScale(12),
                fontFamily: FontFamily.regular,
                textAlign: 'center',
                lineHeight: moderateScale(15),
              }}>
              {'Service, Privacy Policy'}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default Home;
