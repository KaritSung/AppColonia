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
function ChangePassword({navigation, route}: {navigation: any; route: any}) {
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [isCPasswordSecure, setIsCPasswordSecure] = useState(true);
  const popAction = StackActions.pop(2);
  return (
    <View
      style={[
        {
          backgroundColor: '#ffffff',
          flex: 1,
        },
      ]}>
      <CNHeader title={'Change password'} />
      <View style={{marginTop: hp('10%'), marginLeft: wp('10%')}}>
        <Text
          style={{
            color: '#63C596',
            fontSize: hp('5.5%'),
            fontFamily: FontFamily.bold,
          }}>
          Change
        </Text>
        <Text
          style={{
            marginLeft: wp('2%'),
            color: '#63C596',
            fontSize: hp('2.5%'),
            lineHeight: hp('2.2%'),
            fontFamily: FontFamily.bold,
          }}>
          {'your new password '}
        </Text>
      </View>
      <View
        style={{
          marginTop: hp('5%'),
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: wp('10%'),
          }}>
          <Image
            source={require('../../../../assets/image/icons/icon_lock.png')}
            style={{
              width: scale(35),
              height: verticalScale(35),
              marginTop: hp('-1%'),
              marginRight: wp('-1%'),
            }}
          />
          <Input
            secureTextEntry={isPasswordSecure}
            placeholder="Password"
            inputContainerStyle={{
              width: wp('60%'),
              height: hp('3.5%'),
              borderColor: '#63C596',
              borderBottomWidth: hp('0.4%'),
            }}
            inputStyle={{fontFamily: FontFamily.regular}}
            rightIcon={
              <TouchableOpacity
                onPress={() => {
                  isPasswordSecure
                    ? setIsPasswordSecure(false)
                    : setIsPasswordSecure(true);
                }}>
                <Image
                  source={
                    isPasswordSecure
                      ? require('../../../../assets/image/icons/icon_eyeoff.png')
                      : require('../../../../assets/image/icons/icon_eye.png')
                  }
                  style={{}}
                />
              </TouchableOpacity>
            }
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
            marginLeft: wp('10%'),
          }}>
          <Image
            source={require('../../../../assets/image/icons/icon_lock.png')}
            style={{
              width: scale(35),
              height: verticalScale(35),
              marginTop: hp('-1%'),
              marginRight: wp('-1%'),
            }}
          />
          <Input
            secureTextEntry={isCPasswordSecure}
            placeholder="Confirm Password"
            inputContainerStyle={{
              width: wp('60%'),
              height: hp('3.5%'),
              borderColor: '#63C596',
              borderBottomWidth: hp('0.4%'),
            }}
            inputStyle={{fontFamily: FontFamily.regular}}
            rightIcon={
              <TouchableOpacity
                onPress={() => {
                  isCPasswordSecure
                    ? setIsCPasswordSecure(false)
                    : setIsCPasswordSecure(true);
                }}>
                <Image
                  source={
                    isCPasswordSecure
                      ? require('../../../../assets/image/icons/icon_eyeoff.png')
                      : require('../../../../assets/image/icons/icon_eye.png')
                  }
                  style={
                    {
                      //   width: scale(35),
                      //   height: verticalScale(35),
                      // marginTop: hp('-1%'),
                      // marginRight: wp('-1%'),
                    }
                  }
                />
              </TouchableOpacity>
            }
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hp('30%'),
            marginHorizontal: wp('10%'),
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(popAction);
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
                marginHorizontal: wp('12%'),
                marginVertical: hp('0.7%'),
                color: '#63C596',
                fontSize: hp('3.3%'),
                fontFamily: FontFamily.medium,
              }}>
              Back
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Success', {
                header: 'Complete',
                title: 'complete to change password',
                nextstep: 'root',
              });
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
                marginHorizontal: wp('13%'),
                marginVertical: hp('0.7%'),
                color: '#ffffff',
                fontSize: hp('3.3%'),
                fontFamily: FontFamily.medium,
              }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default ChangePassword;
