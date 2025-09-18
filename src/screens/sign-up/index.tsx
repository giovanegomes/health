import { Button, TextInput, View } from "react-native";
import { useAuthNavigation } from "../../hooks/useAuthNavigation";
import styles from "./styles";
import { cache, useEffect, useState } from "react";
import userRepository from "../../repositories/userRepository";
// import z from "zod";

// const userSchema = z.object({
//   email: z.string().nonempty(),
//   password: z.string().nonempty(),
// });

// type TaskFormInputs = z.infer<typeof userSchema>;

export function SignUpScreen() {
  const navigation = useAuthNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const teste = await userRepository.getAll();

      console.log("usuários cadastrados:", teste);
    };
    fetch();
  }, []);

  const submit = async () => {
    if (!email) console.log("email invalido");
    if (!password) console.log("password invalido");
    console.log("inserir usuário");
    try {
      const teste = await userRepository.create({ email, password });

      console.log("usuário cadastrado com sucesso", teste);
      navigation.goBack();
    } catch (error) {
      console.log("não foi possível cadastrar", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="E-mail"
        style={{
          height: 54,
          borderColor: "#000",
          borderWidth: 1,
          borderRadius: 7,
          paddingHorizontal: 20,
          width: "100%",
        }}
        onChangeText={setEmail}
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
        onChangeText={setPassword}
      />
      <Button title="Cadastrar" onPress={submit} />
      <Button title="Cancelar" onPress={() => navigation.goBack()} />
    </View>
  );
}
