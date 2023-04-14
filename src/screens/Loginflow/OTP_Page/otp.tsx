import React, {useState, useRef} from 'react';
import {StackActions} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {CheckBox, Input} from 'react-native-elements';
import {Icon, Stack} from '@react-native-material/core';
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
import CountDown from 'react-native-countdown-component';
function OTP({navigation, route}: {navigation: any; route: any}) {
  const inputone = React.createRef<TextInput>();
  const inputtwo = React.createRef<TextInput>();
  const inputthree = React.createRef<TextInput>();
  const inputfour = React.createRef<TextInput>();
  const popAction = StackActions.pop(5);

  return (
    <View
      style={[
        {
          backgroundColor: '#ffffff',
          flex: 1,
        },
      ]}>
      <CNHeader title={'Confirm OTP'} />
      <View style={{alignItems: 'center', marginTop: hp('15%')}}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: wp('14%'),
              height: hp('8.1%'),
              borderColor: '#63DAA1',
              backgroundColor: '#ffffff',
              elevation: 8,
              borderWidth: wp('1%'),
              borderRadius: wp('3%'),
            }}>
            <Input
              ref={inputone}
              maxLength={1}
              placeholder=""
              keyboardType="numeric"
              inputContainerStyle={{
                height: hp('8%'),
                borderBottomWidth: hp('0%'),
              }}
              inputStyle={{fontFamily: FontFamily.regular, fontSize: hp('4%')}}
              onChangeText={text => {
                text ? inputtwo.current?.focus() : null;
              }}
            />
          </View>
          <View
            style={{
              marginHorizontal: wp('3%'),
              width: wp('14%'),
              height: hp('8.1%'),
              backgroundColor: '#ffffff',
              elevation: 8,
              borderColor: '#63DAA1',
              borderWidth: wp('1%'),
              borderRadius: wp('3%'),
            }}>
            <Input
              ref={inputtwo}
              maxLength={1}
              placeholder=""
              keyboardType="numeric"
              inputContainerStyle={{
                height: hp('8%'),
                borderBottomWidth: hp('0%'),
              }}
              inputStyle={{fontFamily: FontFamily.regular, fontSize: hp('4%')}}
              onChangeText={text => {
                text ? inputthree.current?.focus() : inputone.current?.focus();
              }}
            />
          </View>
          <View
            style={{
              width: wp('14%'),
              height: hp('8.1%'),
              borderColor: '#63DAA1',
              backgroundColor: '#ffffff',
              elevation: 8,
              borderWidth: wp('1%'),
              borderRadius: wp('3%'),
            }}>
            <Input
              ref={inputthree}
              maxLength={1}
              placeholder=""
              keyboardType="numeric"
              inputContainerStyle={{
                height: hp('8%'),
                borderBottomWidth: hp('0%'),
              }}
              inputStyle={{fontFamily: FontFamily.regular, fontSize: hp('4%')}}
              onChangeText={text => {
                text ? inputfour.current?.focus() : inputtwo.current?.focus();
              }}
            />
          </View>
          <View
            style={{
              marginHorizontal: wp('3%'),
              width: wp('14%'),
              height: hp('8.1%'),
              borderColor: '#63DAA1',
              backgroundColor: '#ffffff',
              elevation: 8,
              borderWidth: wp('1%'),
              borderRadius: wp('3%'),
            }}>
            <Input
              ref={inputfour}
              maxLength={1}
              placeholder=""
              keyboardType="numeric"
              inputContainerStyle={{
                height: hp('8%'),
                borderBottomWidth: hp('0%'),
              }}
              inputStyle={{fontFamily: FontFamily.regular, fontSize: hp('4%')}}
              onChangeText={text => {
                text ? null : inputthree.current?.focus();
              }}
            />
          </View>
        </View>
        <CountDown
          until={200}
          size={20}
          timeToShow={['M', 'S']}
          digitStyle={{backgroundColor: '#FFF', marginTop: hp('3%')}}
          digitTxtStyle={{
            color: '#63C596',
            fontFamily: FontFamily.bold,
            fontWeight: 'normal',
            fontSize: hp('4%'),
          }}
          separatorStyle={{color: '#63C596', marginTop: hp('2%')}}
          timeLabels={{m: null, s: null}}
          showSeparator
        />
        <Text
          style={{
            //marginTop: hp('0.5%'),
            color: '#63C596',
            fontSize: hp('4%'),
            letterSpacing: -0.025,
            fontFamily: FontFamily.bold,
          }}>
          Verification Code
        </Text>
        <Text
          style={{
            lineHeight: hp('2.8%'),
            color: '#63C596',
            fontSize: hp('2%'),
            letterSpacing: -0.025,
            fontFamily: FontFamily.regular,
            textAlign: 'center',
          }}>
          {'Please enter the verification code sent \n to +66 0123456789'}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Success', {
              header: 'Complete',
              title: 'complete information',
              nextstep: 'login',
            });
          }}
          style={{
            backgroundColor: '#63C596',
            borderRadius: wp('6%'),
            marginTop: wp('45%'),
            elevation: 8,
          }}>
          <Text
            style={{
              marginHorizontal: wp('13%'),
              marginVertical: hp('0.7%'),
              color: '#ffffff',
              fontSize: hp('3%'),
              fontFamily: FontFamily.medium,
            }}>
            Resend OTP
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(popAction);
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
export default OTP;
