import { createStackNavigator } from '@react-navigation/stack';
import login from '../screens/Loginflow/LoginPage/login';
import Terms from '../screens/Loginflow/Term/term';
import SelectRegister from '../screens/Loginflow/SelectRegister/select_register'
const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
                headerShown: false
        }}
    >
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="Terms" component={Terms} />
      <Stack.Screen name="SelectRegister" component={SelectRegister} />
    </Stack.Navigator>
  );
}
export default Navigator;