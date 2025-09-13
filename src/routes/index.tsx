import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../screens/home";
import { ExerciseScreen } from "../screens/exercises";

export type Routes = {
  home: undefined;
  exercises: undefined;
};

const Drawer = createDrawerNavigator<Routes>();

export function DrawerRouter() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}
