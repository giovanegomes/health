import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/login";
import { SignUpScreen } from "../screens/sign-up";
import { ResetPasswordScreen } from "../screens/reset-password";

export type AuthRoutes = {
  login: undefined;
  signUp: undefined;
  resetPassword: undefined;
};

const Stack = createNativeStackNavigator<AuthRoutes>();

export function AuthRouter() {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="signUp" component={SignUpScreen} />
      <Stack.Screen name="resetPassword" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
}
