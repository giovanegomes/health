import { Button, TextInput, View } from "react-native";
import styles from "./styles";

export function LoginScreen() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Usuário"
        style={{
          height: 54,
          borderColor: "#000",
          borderWidth: 1,
          borderRadius: 7,
          paddingHorizontal: 20,
          width: "100%",
        }}
      />
      <TextInput
        placeholder="Senha"
        style={{
          height: 54,
          borderColor: "#000",
          borderWidth: 1,
          borderRadius: 7,
          paddingHorizontal: 20,
          width: "100%",
        }}
      />
      <Button title="Entrar" />
    </View>
  );
}
