import { Button, TextInput, View, Text } from "react-native";
import styles from "./styles";
import { useAuthNavigation } from "../../hooks/useAuthNavigation";
import { useAuth } from "../../contexts/auth-context/useAuth";
import { useState } from "react";

export function LoginScreen() {
  const navigation = useAuthNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, login } = useAuth();

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="E-mail"
        onChangeText={setEmail}
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
        onChangeText={setPassword}
        style={{
          height: 54,
          borderColor: "#000",
          borderWidth: 1,
          borderRadius: 7,
          paddingHorizontal: 20,
          width: "100%",
        }}
      />
      <Text>{error}</Text>
      <Button title="Entrar" onPress={() => login({ email, password })} />
      <Button
        title="Cadastrar-se"
        onPress={() => navigation.navigate("signUp")}
      />
      <Button
        title="Esqueci minha senha"
        onPress={() => navigation.navigate("resetPassword")}
      />
    </View>
  );
}
