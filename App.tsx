import { StatusBar } from "expo-status-bar";
import { Router } from "./src/routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { openDatabaseSync } from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "./src/database/drizzle/migrations";
import { Text, View } from "react-native";

const expoDb = openDatabaseSync("db.db");
const db = drizzle(expoDb);

export default function App() {
  const { success, error } = useMigrations(db, migrations);

  if (error) {
    return (
      <View>
        <Text>Migration error: {error.message}</Text>
      </View>
    );
  }

  if (!success) {
    return (
      <View>
        <Text>Migration is in progress...</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <Router />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
