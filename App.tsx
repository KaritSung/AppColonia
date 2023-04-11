import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigations/Navigator';
import {Text} from 'react-native';
import {Input} from 'react-native-elements';

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
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
