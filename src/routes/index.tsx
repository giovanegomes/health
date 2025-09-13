import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../screens/home";

export type Routes = {
  home: undefined;
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
          options={{ title: "Health App" }}
          component={HomeScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
