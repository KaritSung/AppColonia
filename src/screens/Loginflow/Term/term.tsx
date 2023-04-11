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
import CNHeadder from '../../common/component/CNHeader';
function Terms({navigation}: {navigation: any}) {
  return (
    <View
      style={[
        {
          backgroundColor: '#ffffff',
          flex: 1,
          alignItems: 'center',
        },
      ]}>
      <View
        style={{
          flexDirection: 'column',
        }}>
        <CNHeadder title={'Terms of service'} />
      </View>
      <View
        style={{
          backgroundColor: '#E8E8E8',
          height: hp('65%'),
          width: wp('80%'),
          marginTop: hp('1.5%'),
        }}>
        <View
          style={{
            alignItems: 'center',
            marginTop: hp('30%'),
          }}>
          <Text
            style={{
              color: '#A3A3A3',
              fontSize: hp('3%'),
              fontFamily: FontFamily.bold,
              textAlign: 'center',
            }}>
            {'Terms of service \nDetails'}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: hp('1%'),
          marginHorizontal: wp('7%'),
        }}>
        <Text
          style={{
            color: '#63C596',
            fontSize: hp('1.7%'),
            fontFamily: FontFamily.regular,
          }}>
          <Text>I have read and agree to the </Text>
          <Text style={{fontWeight: 'bold'}}> terms of service,</Text>
          <Text> and</Text>
          <Text style={{fontWeight: 'bold'}}> privacy policy</Text>
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            backgroundColor: '#F9F9F9',
            borderColor: '#63C596',
            marginTop: hp('3%'),
            borderWidth: 2,
            borderRadius: wp('7%'),
            elevation: 8,
          }}>
          <Text
            style={{
              marginHorizontal: wp('7%'),
              marginVertical: hp('0.7%'),
              color: '#63C596',
              fontSize: hp('3%'),
              fontFamily: FontFamily.medium,
            }}>
            Decline
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SelectRegister');
          }}
          style={{
            backgroundColor: '#63C596',
            marginTop: hp('3%'),
            marginLeft: wp('4%'),
            borderRadius: wp('7%'),
            elevation: 8,
          }}>
          <Text
            style={{
              marginHorizontal: wp('9%'),
              marginVertical: hp('0.7%'),
              color: '#ffffff',
              fontSize: hp('3%'),
              fontFamily: FontFamily.medium,
            }}>
            Accept
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Terms;
