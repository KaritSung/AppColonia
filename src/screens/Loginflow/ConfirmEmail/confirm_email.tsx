import React, {useState} from 'react';
import {StackActions} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Input} from 'react-native-elements';
import {Icon} from '@react-native-material/core';
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
import CNHeader from '../../common/component/CNHeader';
function ConfirmEmail({navigation, route}: {navigation: any; route: any}) {
  return (
    <View
      style={[
        {
          backgroundColor: '#ffffff',
          flex: 1,
        },
      ]}>
      <CNHeader title={'Confirm your Email'} />
      <View
        style={{
          alignItems: 'center',
        }}>
        <Image
          source={require('../../../../assets/image/icons/icon_email_big.png')}
          style={{
            marginTop: hp('10%'),
            width: scale(200),
            height: verticalScale(195),
          }}
        />
        <Text
          style={{
            marginTop: hp('0.5%'),
            color: '#63C596',
            fontSize: moderateScale(22),
            letterSpacing: -0.025,
            fontFamily: FontFamily.bold,
          }}>
          Please! confirm your Email
        </Text>
        <Text
          style={{
            marginTop: hp('0.5%'),
            color: '#63C596',
            fontSize: moderateScale(18),
            letterSpacing: -0.025,
            lineHeight: hp('3.4%'),
            fontFamily: FontFamily.regular,
            textAlign: 'center',
          }}>
          <Text>{'We’ve sent an email to\n'}</Text>
          <Text style={{fontWeight: '700'}}>{'dev.colonia@gmail.com\n'}</Text>
          <Text>{'for verify your email address'}</Text>
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Success', {
              header: 'Verified',
              title: 'Verification success',
              nextstep: 'Personal_Info',
            });
          }}
          style={{
            backgroundColor: '#63C596',
            borderRadius: wp('6%'),
            marginTop: wp('23%'),
            elevation: 8,
          }}>
          <Text
            style={{
              marginHorizontal: wp('10%'),
              marginVertical: hp('0.7%'),
              color: '#ffffff',
              fontSize: hp('3%'),
              fontFamily: FontFamily.medium,
            }}>
            Resend Email
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            backgroundColor: '#F9F9F9',
            borderColor: '#63C596',
            marginTop: hp('2%'),
            borderWidth: 2,
            borderRadius: wp('6%'),
            elevation: 8,
          }}>
          <Text
            style={{
              marginHorizontal: wp('22%'),
              marginVertical: hp('0.7%'),
              color: '#63C596',
              fontSize: hp('3%'),
              fontFamily: FontFamily.medium,
            }}>
            Back
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default ConfirmEmail;
