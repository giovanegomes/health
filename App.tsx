import { StatusBar } from "expo-status-bar";
import { Router } from "./src/routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ActivityIndicator, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { DatabaseService } from "./src/services/database";
import { AuthProvider } from "./src/contexts/auth-context/AuthProvider";

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      await DatabaseService.getInstance().initialize();

      setReady(true);
    };

    init();
  }, []);

  if (!ready) {
    return (
      <View
        style={{ flex: 1, alignContent: "center", justifyContent: "center" }}
      >
        <ActivityIndicator size="large" />
        <Text>Preparando banco de dados...</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Router />
      </AuthProvider>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
