import { useNavigation } from "@react-navigation/native";
import { AuthRoutes } from "../routes/auth.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const useAuthNavigation = () =>
  useNavigation<NativeStackNavigationProp<AuthRoutes>>();
