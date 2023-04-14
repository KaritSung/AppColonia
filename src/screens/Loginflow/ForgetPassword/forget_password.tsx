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
function ForgetPassword({navigation, route}: {navigation: any; route: any}) {
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [isCPasswordSecure, setIsCPasswordSecure] = useState(true);
  const {create_by} = route.params;

  return (
    <View
      style={[
        {
          backgroundColor: '#ffffff',
          flex: 1,
        },
      ]}>
      <CNHeader title={'Forget Password'} />
      <View style={{marginTop: hp('10%'), marginLeft: wp('10%')}}>
        <Text
          style={{
            color: '#63C596',
            fontSize: hp('5.5%'),
            fontFamily: FontFamily.bold,
          }}>
          Fill in
        </Text>
        <Text
          style={{
            marginLeft: wp('2%'),
            color: '#63C596',
            fontSize: hp('2%'),
            lineHeight: hp('2.2%'),
            fontFamily: FontFamily.bold,
          }}>
          {
            'Information Email or Phone number \nfor sending verification messages.'
          }
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: wp('14%'),
          marginTop: hp('4%'),
        }}>
        <Image
          source={require('../../../../assets/image/icons/icon_person.png')}
          style={{
            width: wp('8%'),
            height: hp('5%'),
            marginTop: hp('-1%'),
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
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ConfirmEmail', {Route: 'Forget'});
          }}
          style={{
            backgroundColor: '#63C596',
            borderRadius: wp('6%'),
            marginTop: wp('65%'),
            elevation: 8,
          }}>
          <Text
            style={{
              marginHorizontal: wp('22%'),
              marginVertical: hp('0.7%'),
              color: '#ffffff',
              fontSize: hp('3%'),
              fontFamily: FontFamily.medium,
            }}>
            Next
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
export default ForgetPassword;
