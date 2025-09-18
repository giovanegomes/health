import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { AppRoutes } from "../routes/app.routes";

export const useAppNavigation = () =>
  useNavigation<DrawerNavigationProp<AppRoutes>>();
