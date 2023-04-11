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
function CNHeadder({title}) {
  return (
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
         {title}
        </Text>
      </View>
    </View>
  </View>
  );
}
export default CNHeadder;
