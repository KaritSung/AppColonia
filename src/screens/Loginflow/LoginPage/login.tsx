//TEST-UPDATE
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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
function Home({navigation}: {navigation: any}) {
  //const navigation = useNavigation<any>();
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
        <View style={[{alignItems: 'center', paddingTop: hp('25%')}]}>
          <Text
            style={[
              {
                color: '#63C596',
                fontSize: hp('5%'),
                fontFamily: FontFamily.regular,
              },
            ]}>
            {'COLONIA'}
          </Text>
          <Text
            style={[
              {
                color: '#63C596',
                fontSize: hp('5%'),
                fontFamily: FontFamily.regular,
              },
            ]}>
            {'LOGO'}
          </Text>

          <View
            style={{
              marginTop: hp('5%'),
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: wp('14%'),
              }}>
              <Image
                source={require('../../../../assets/image/icons/icon_person.png')}
                style={{
                  width: wp('10%'),
                  height: hp('6%'),
                  marginTop: hp('-2%'),
                  marginRight: wp('-2%'),
                }}
              />
              <Input
                placeholder="Email or Phone number"
                inputContainerStyle={{
                  width: wp('66%'),
                  height: hp('3.5%'),
                  borderColor: '#63C596',
                  borderBottomWidth: hp('0.4%'),
                }}
                inputStyle={{fontFamily: FontFamily.regular}}
              />
            </View>
          </View>

          <View
            style={{
              marginTop: hp('1%'),
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: wp('14%'),
              }}>
              <Image
                source={require('../../../../assets/image/icons/icon_lock.png')}
                style={{
                  width: wp('10%'),
                  height: hp('6%'),
                  marginTop: hp('-2%'),
                  marginRight: wp('-2%'),
                }}
              />
              <Input
                placeholder="Password"
                inputContainerStyle={{
                  width: wp('66%'),
                  height: hp('3.5%'),
                  borderColor: '#63C596',
                  borderBottomWidth: hp('0.4%'),
                }}
                inputStyle={{fontFamily: FontFamily.regular}}
              />
            </View>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: '#63C596',
              borderRadius: wp('3%'),
              marginTop: wp('5%'),
              elevation: 8,
            }}>
            <Text
              style={{
                marginHorizontal: wp('30%'),
                marginVertical: hp('0.7%'),
                color: '#ffffff',
                fontSize: hp('2.4%'),
                fontFamily: FontFamily.medium,
              }}>
              Sign In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Terms');
            }}
            style={{
              backgroundColor: '#F9F9F9',
              borderColor: '#63C596',
              marginTop: hp('3%'),
              borderWidth: 2,
              borderRadius: wp('3%'),
              elevation: 8,
            }}>
            <Text
              style={{
                marginHorizontal: wp('30%'),
                marginVertical: hp('0.7%'),
                color: '#63C596',
                fontSize: hp('2.4%'),
                fontFamily: FontFamily.medium,
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', marginTop: hp('2%')}}>
            <Text
              style={{
                color: '#63C596',
                fontSize: hp('1.8%'),
                fontFamily: FontFamily.medium,
              }}>
              {' Forgot your '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ForgetPassword', {create_by: 'Email'});
              }}
              style={{}}>
              <Text
                style={{
                  color: '#63C596',
                  fontSize: hp('1.8%'),
                  fontFamily: FontFamily.bold,
                }}>
                password?
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginHorizontal: wp('10%'),
              marginTop: hp('12%'),
            }}>
            <Text
              style={{
                color: '#63C596',
                fontSize: hp('1.5%'),
                fontFamily: FontFamily.regular,
              }}>
              {"By continuing, you agree to Colonia's Terms of"}
            </Text>
            <Text
              style={{
                color: '#63C596',
                fontSize: hp('1.5%'),
                fontFamily: FontFamily.regular,
                textAlign: 'center',
                lineHeight: hp('2%'),
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
