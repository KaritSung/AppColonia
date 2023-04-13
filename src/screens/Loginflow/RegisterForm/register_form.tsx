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
function RegisterForm({navigation, route}: {navigation: any; route: any}) {
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [isCPasswordSecure, setIsCPasswordSecure] = useState(true);
  const {create_by} = route.params;

  const create_info = () => {
    if (create_by == 'Email') {
      return <Text> Email </Text>;
    } else {
      return <Text> phone </Text>;
    }
  };
  return (
    <View
      style={[
        {
          backgroundColor: '#ffffff',
          flex: 1,
        },
      ]}>
      <CNHeader title={'Register'} />
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
            fontSize: hp('2.4%'),
            lineHeight: hp('2.2%'),
            fontFamily: FontFamily.bold,
          }}>
          your account by {create_by}
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
          {create_by == 'Email' ? (
            <>
              <Image
                source={require('../../../../assets/image/icons/icon_email_green.png')}
                style={{
                  width: scale(35),
                  height: verticalScale(35),
                  marginTop: hp('-1%'),
                  marginRight: wp('-1%'),
                }}
              />
              <Input
                placeholder="Email"
                inputContainerStyle={{
                  width: wp('60%'),
                  height: hp('3.5%'),
                  borderColor: '#63C596',
                  borderBottomWidth: hp('0.4%'),
                }}
                inputStyle={{fontFamily: FontFamily.regular}}
              />
            </>
          ) : (
            <>
              <Image
                source={require('../../../../assets/image/icons/icon_phone.png')}
                style={{
                  width: scale(35),
                  height: verticalScale(35),
                  marginTop: hp('-1%'),
                  marginRight: wp('-1%'),
                }}
              />
              <Input
                placeholder="+66 Phone number"
                inputContainerStyle={{
                  width: wp('60%'),
                  height: hp('3.5%'),
                  borderColor: '#63C596',
                  borderBottomWidth: hp('0.4%'),
                }}
                inputStyle={{fontFamily: FontFamily.regular}}
              />
            </>
          )}
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
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: hp('25%'),
          marginHorizontal: wp('10%'),
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
            navigation.navigate('ConfirmEmail');
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
              fontSize: hp('3.3%'),
              fontFamily: FontFamily.medium,
            }}>
            Create
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default RegisterForm;
