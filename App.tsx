import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigations/Navigator';
import {Text} from 'react-native';
import {Input} from 'react-native-elements';
import {BackHandler} from 'react-native';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
interface TextWithDefaultProps extends Text {
  defaultProps?: {allowFontScaling?: boolean};
}

(Text as unknown as TextWithDefaultProps).defaultProps =
  (Text as unknown as TextWithDefaultProps).defaultProps || {};
(Text as unknown as TextWithDefaultProps).defaultProps!.allowFontScaling =
  false;

Input.defaultProps = {
  ...(Input.defaultProps || {}),
  allowFontScaling: false,
};

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
    const backAction = () => {
      // ตรวจสอบว่าต้องการปิดหรือไม่
      // โดยใช้ Alert, Modal หรือ Custom Dialog

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    // คืนค่าฟังก์ชันที่เป็น unsubscribe เมื่อ component ถูก unmount
    return () => backHandler.remove();
  }, []);
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
