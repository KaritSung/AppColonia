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
import {CheckBox, Input} from 'react-native-elements';
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
function CNGender({Style}) {
    const [selectedIndex, setIndex] = React.useState({});
  return (
    <View style={Style}>
        <Text style={{
                color: '#9F9F9F',
                fontSize: moderateScale(18),
                letterSpacing: -0.025,
                fontFamily: FontFamily.regular,
        }}>
            Sex
        </Text>
        <View style={{flexDirection: 'row'}}>
          <CheckBox
            title={'Male'}
            containerStyle={{width: 90}}
            checked={selectedIndex === 0}
            onPress={() => setIndex(0)}
            checkedIcon={
              <Image
                source={require('../../../../assets/image/icons/radio_Checked.png')}
                style={{width: 10, height: 10}}
              />
            }
            uncheckedIcon={
              <Image
                source={require('../../../../assets/image/icons/radio_Unchecked.png')}
                style={{width: 10, height: 10}}
              />
            }
          ></CheckBox>
          <CheckBox
            title={'Female'}
            containerStyle={{marginLeft: moderateScale(-1), width: 90}}
            checked={selectedIndex === 1}
            onPress={() => setIndex(1)}
            checkedIcon={
              <Image
                source={require('../../../../assets/image/icons/radio_Checked.png')}
                style={{width: 10, height: 10}}
              />
            }
            uncheckedIcon={
              <Image
                source={require('../../../../assets/image/icons/radio_Unchecked.png')}
                style={{width: 10, height: 10}}
              />
            }
          />
          <CheckBox
            title={'Other'}
            containerStyle={{marginLeft: moderateScale(-1), width: 90}}
            checked={selectedIndex === 2}
            onPress={() => setIndex(2)}
            checkedIcon={
              <Image
                source={require('../../../../assets/image/icons/radio_Checked.png')}
                style={{width: 10, height: 10}}
              />
            }
            uncheckedIcon={
              <Image
                source={require('../../../../assets/image/icons/radio_Unchecked.png')}
                style={{width: 10, height: 10}}
              />
            }
          />
        </View>
    </View>
  );
}
export default CNGender;
