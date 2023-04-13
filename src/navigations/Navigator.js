import { createStackNavigator } from '@react-navigation/stack';
import login from '../screens/Loginflow/LoginPage/login';
import Terms from '../screens/Loginflow/Term/term';
import SelectRegister from '../screens/Loginflow/SelectRegister/select_register'
import RegisterForm from '../screens/Loginflow/RegisterForm/register_form';
import ConfirmEmail from '../screens/Loginflow/ConfirmEmail/confirm_email';
import Success from '../screens/Loginflow/Success/success';
import Personal_Info from '../screens/Loginflow/Personal_Info/Personal_Info';
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
      <Stack.Screen name="RegisterForm" component={RegisterForm} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="Personal_Info" component={Personal_Info} />
    </Stack.Navigator>
  );
}
export default Navigator;