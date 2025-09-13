import { StatusBar } from "expo-status-bar";
import { DrawerRouter } from "./src/routes";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <DrawerRouter />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
