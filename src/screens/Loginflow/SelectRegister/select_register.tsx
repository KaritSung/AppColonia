import React from 'react';
import {StackActions} from '@react-navigation/native';
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
function SelectRegister({navigation}: {navigation: any}) {
  return (
    <View
      style={[
        {
          backgroundColor: '#ffffff',
          flex: 1,
        },
      ]}>
      <View
        style={{
          flexDirection: 'column',
        }}>
        <View
          style={{
            marginTop: hp('6.8%'),
            backgroundColor: '#63DAA1',
            height: hp('6.1%'),
            width: wp('100%'),
            borderColor: '#63C596',
            borderBottomWidth: hp('0.6%'),
          }}>
          <View style={{alignItems: 'center', marginTop: hp('0.2%')}}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: hp('4.1%'),
                fontFamily: FontFamily.bold,
              }}>
              Register
            </Text>
          </View>
        </View>
      </View>
      <View style={{marginTop: hp('8%'), marginLeft: wp('10%')}}>
        <Text
          style={{
            color: '#63C596',
            fontSize: hp('5.5%'),
            fontFamily: FontFamily.bold,
          }}>
          Create
        </Text>
        <Text
          style={{
            marginLeft: wp('4%'),
            color: '#63C596',
            fontSize: hp('2.7%'),
            lineHeight: hp('2.2%'),
            fontFamily: FontFamily.bold,
          }}>
          your account by...
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          backgroundColor: '#63DAA1',
          marginHorizontal: wp('15%'),
          marginTop: hp('3%'),
          borderBottomColor: '#63C596',
          borderBottomWidth: wp('1.3%'),
          borderRadius: wp('4%'),
          elevation: 8,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: wp('5%'),
          }}>
          <Image
            source={require('../../../../assets/image/icons/icon_email.png')}
            style={{
              width: wp('9%'),
              height: hp('5%'),
              marginTop: hp('0.5%'),
            }}
          />
          <Text
            style={{
              marginLeft: wp('3%'),
              marginVertical: hp('0.7%'),
              color: '#ffffff',
              fontSize: hp('3.5%'),
              fontFamily: FontFamily.bold,
            }}>
            Email
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          backgroundColor: '#63DAA1',
          marginHorizontal: wp('15%'),
          marginTop: hp('3%'),
          borderBottomColor: '#63C596',
          borderBottomWidth: wp('1.3%'),
          borderRadius: wp('4%'),
          elevation: 8,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: wp('5%'),
          }}>
          <Image
            source={require('../../../../assets/image/icons/icon_phone_outline.png')}
            style={{
              width: wp('9%'),
              height: hp('5%'),
              marginTop: hp('0.5%'),
            }}
          />
          <Text
            style={{
              marginLeft: wp('3%'),
              marginVertical: hp('0.7%'),
              color: '#ffffff',
              fontSize: hp('3.5%'),
              fontFamily: FontFamily.bold,
            }}>
            Phone number
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(StackActions.popToTop());
        }}
        style={{
          backgroundColor: '#F9F9F9',
          borderColor: '#63C596',
          marginHorizontal: wp('15%'),
          marginTop: hp('35%'),
          borderWidth: 2,
          borderRadius: wp('6%'),
          elevation: 8,
        }}>
        <Text
          style={{
            // marginHorizontal: wp('30%'),
            marginVertical: hp('0.6%'),
            color: '#63C596',
            fontSize: hp('3%'),
            fontFamily: FontFamily.medium,
            textAlign: 'center',
          }}>
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default SelectRegister;
