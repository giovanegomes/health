import { NavigationContainer } from "@react-navigation/native";
import { AppRouter } from "./app.routes";
import { AuthRouter } from "./auth.routes";
import { useAuth } from "../contexts/auth-context/useAuth";
import { ActivityIndicator, Text, View } from "react-native";

export function Router() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View
        style={{ flex: 1, alignContent: "center", justifyContent: "center" }}
      >
        <ActivityIndicator size="large" />
        <Text>Inicializando aplicação...</Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
      {user ? <AppRouter /> : <AuthRouter />}
    </NavigationContainer>
  );
}
