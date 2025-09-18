import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { HomeScreen } from "../screens/home";
import { ExerciseScreen } from "../screens/exercises";
import { View } from "react-native";
import { useAuth } from "../contexts/auth-context/useAuth";

export type AppRoutes = {
  home: undefined;
  exercises: undefined;
};

function DrawerContent(props: any) {
  const { logout } = useAuth();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View style={{ marginTop: 20 }}>
        <DrawerItem
          label="Sair"
          labelStyle={{ color: "red" }}
          onPress={logout}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator<AppRoutes>();

export function AppRouter() {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Drawer.Screen
        name="home"
        options={{ title: "Health App", drawerLabel: "Início" }}
        component={HomeScreen}
      />
      <Drawer.Screen
        name="exercises"
        options={{ title: "Exercícios" }}
        component={ExerciseScreen}
      />
    </Drawer.Navigator>
  );
}
