import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "../screens/home";
import { ExerciseScreen } from "../screens/exercises";

export type AppRoutes = {
  home: undefined;
  exercises: undefined;
};

const Drawer = createDrawerNavigator<AppRoutes>();

export function AppRouter() {
  return (
    <Drawer.Navigator
      initialRouteName="home"
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
