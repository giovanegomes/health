import { useEffect, useState } from "react";
import { User } from "../../database/schemas/userSchema";
import { AuthContext, Credential } from "./AuthContext";
import userRepository from "../../repositories/userRepository";
import * as SecureStore from "expo-secure-store";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      setLoading(true);
      try {
        const storedUser = await SecureStore.getItemAsync("user");
        console.log(storedUser);
        if (storedUser) setUser(JSON.parse(storedUser));
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  async function login({ email, password }: Credential) {
    const user = await userRepository.getByEmail(email);

    if (!user) {
      setError("E-mail não cadastrado.");
      return;
    }

    if (password !== user.password) {
      setError("Senha inválida.");
      return;
    }

    setUser(user);
    await SecureStore.setItemAsync("user", JSON.stringify(user));
  }

  async function logout() {
    setUser(null);
    await SecureStore.deleteItemAsync("user");
  }

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
