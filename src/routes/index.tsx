import { NavigationContainer } from "@react-navigation/native";
import { AppRouter } from "./app.routes";
import { AuthRouter } from "./auth.routes";

const user = false;

export function Router() {
  return (
    <NavigationContainer>
      {user ? <AppRouter /> : <AuthRouter />}
    </NavigationContainer>
  );
}
