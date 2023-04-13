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
function CNTextInput({title,Style}) {
  return (
    <View style={Style}>
        <Text style={{
                color: '#9F9F9F',
                fontSize: moderateScale(18),
                letterSpacing: -0.025,
                fontFamily: FontFamily.regular,
                marginLeft: moderateScale(-15)
        }}>
            {title}
        </Text>
        <View style={{elevation: 5}}>
        <Input
                    placeholder=""
                    inputContainerStyle={{
                    width: wp('66%'),
                    height: hp('3.0%'),
                    borderColor: '#63C596',
                    borderBottomWidth: hp('0.4%'),
                    }}
                    inputStyle={{fontFamily: FontFamily.regular}}
                />
        </View>
            
       
    </View>
  );
}
export default CNTextInput;
