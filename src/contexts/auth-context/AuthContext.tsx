import { createContext } from "react";
import { User } from "../../database/schemas/userSchema";

export type Credential = {
  email: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  error?: string;
  login: (credentials: Credential) => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
