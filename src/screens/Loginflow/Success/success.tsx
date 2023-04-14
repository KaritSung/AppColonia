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
function Success({navigation, route}: {navigation: any; route: any}) {
  const {header, title, nextstep} = route.params;

  return (
    <View
      style={[
        {
          backgroundColor: '#ffffff',
          flex: 1,
        },
      ]}>
      <CNHeader title={header} />
      <View
        style={{
          alignItems: 'center',
        }}>
        <Image
          source={require('../../../../assets/image/icons/icon_bigcheck.png')}
          style={{
            marginTop: hp('10%'),
            width: scale(190),
            height: verticalScale(190),
          }}
        />
        <Text
          style={{
            marginTop: hp('1.8%'),
            color: '#63C596',
            fontSize: moderateScale(37),
            letterSpacing: -0.025,
            fontFamily: FontFamily.bold,
          }}>
          Congratulations!
        </Text>
        <Text
          style={{
            lineHeight: 20,
            color: '#63C596',
            fontSize: moderateScale(20),
            letterSpacing: -0.025,
            fontFamily: FontFamily.bold,
          }}>
          {title}
        </Text>

        <TouchableOpacity
          onPress={() => {
            if (nextstep === 'root') {
              navigation.popToTop();
            } else {
              navigation.navigate(nextstep);
            }
          }}
          style={{
            backgroundColor: '#63C596',
            borderRadius: wp('6%'),
            marginTop: wp('52%'),
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
    </View>
  );
}
export default Success;
