import React, {useState} from 'react';
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
import CNTextInput from '../../common/component/CNTextInput';
import CNGender from '../../common/component/CNGender';
import DatePicker from 'react-native-date-picker';
function Personal_Info({navigation, route}: {navigation: any; route: any}) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <View
      style={[
        {
          backgroundColor: '#ffffff',
          flex: 1,
        },
      ]}>
      <CNHeader title={'Personal information'} />
      <ScrollView>
        <View style={{alignItems: 'center', marginTop: hp('5%')}}>
          <CNTextInput
            Style={{marginTop: hp('0%')}}
            title={'User Name'}></CNTextInput>
          <CNTextInput
            Style={{marginTop: hp('-2%')}}
            title={'First Name'}></CNTextInput>
          <CNTextInput
            Style={{marginTop: hp('-2%')}}
            title={'Last Name'}></CNTextInput>
          <CNTextInput
            Style={{marginTop: hp('-2%')}}
            title={'Email'}></CNTextInput>
          <CNTextInput
            Style={{marginTop: hp('-2%')}}
            title={'Phone number'}></CNTextInput>
          <CNGender Style={{marginTop: hp('-2%')}} />
          <View
            style={{
              alignSelf: 'flex-start',
              marginTop: hp('1%'),
              marginLeft: wp('17%'),
            }}>
            <Text
              style={{
                color: '#9F9F9F',
                fontSize: moderateScale(18),
                letterSpacing: -0.025,
                fontFamily: FontFamily.regular,
                marginLeft: moderateScale(-20),
              }}>
              Date of birth
            </Text>
            <TouchableOpacity onPress={() => setOpen(true)}>
              <View>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: moderateScale(15),
                    fontFamily: FontFamily.regular,
                  }}>
                  {date.toLocaleDateString('th') ==
                  new Date().toLocaleDateString('th')
                    ? ''
                    : date.toLocaleDateString('th')}
                </Text>
                <View
                  style={{
                    backgroundColor: '#63C596',
                    width: wp('67%'),
                    height: hp('0.4%'),
                  }}></View>
              </View>
            </TouchableOpacity>
          </View>
          <DatePicker
            modal
            mode="date"
            locale="th"
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
        <View
          style={{
            alignSelf: 'flex-start',
            marginTop: hp('2.5%'),
            marginLeft: wp('17%'),
          }}>
          <Text
            style={{
              color: '#9F9F9F',
              fontSize: moderateScale(18),
              letterSpacing: -0.025,
              fontFamily: FontFamily.regular,
              marginLeft: moderateScale(-20),
            }}>
            Profile picture
          </Text>
        </View>
        <View style={{alignItems: 'center', marginTop: verticalScale(6)}}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                borderColor: '#63C596',
                borderWidth: moderateScale(3),
                borderRadius: moderateScale(14),
              }}>
              <Image
                source={require('../../../../assets/image/icons/icon_plus.png')}
                style={{
                  width: scale(46),
                  height: verticalScale(42),
                  marginHorizontal: scale(77),
                  marginVertical: verticalScale(38),
                }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#ffffff',
                borderColor: '#63C596',
                borderWidth: moderateScale(3),
                borderRadius: moderateScale(14),
                marginTop: verticalScale(10),
                marginVertical: verticalScale(60),
              }}>
              <Text
                style={{
                  color: '#63C596',
                  fontSize: moderateScale(13),
                  letterSpacing: -0.025,
                  fontFamily: FontFamily.regular,
                  marginHorizontal: moderateScale(19),
                }}>
                Change
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              backgroundColor: '#63C596',
              borderRadius: wp('6%'),
              marginBottom: verticalScale(25),
              elevation: 8,
            }}>
            <Text
              style={{
                marginHorizontal: wp('25%'),
                marginVertical: hp('0.7%'),
                color: '#ffffff',
                fontSize: hp('3.5%'),
                fontFamily: FontFamily.medium,
              }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
export default Personal_Info;
