import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Loginflow/LoginPage/login';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
                headerShown: false
            }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
export default Navigator;