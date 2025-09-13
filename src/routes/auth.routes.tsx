import { HomeScreen } from "../screens/home";
import { ExerciseScreen } from "../screens/exercises";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/login";
import { SignUpScreen } from "../screens/sign-up";
import { ResetPasswordScreen } from "../screens/reset-password";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";

export type AuthRoutes = {
  login: undefined;
  signUp: undefined;
  resetPassword: undefined;
};

const Stack = createNativeStackNavigator<AuthRoutes>();

export function AuthRouter() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          title: "Health App",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signUp" component={SignUpScreen} />
        <Stack.Screen name="resetPassword" component={ResetPasswordScreen} />
      </Stack.Navigator>
    </View>
  );
}
