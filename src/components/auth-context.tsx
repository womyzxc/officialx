"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getDiscordOAuthURL } from "@/lib/api";

interface User {
  id: string;
  username: string;
  discriminator: string;
  avatar: string;
  email?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user for demo purposes - In production, this would come from your API
const MOCK_USER: User = {
  id: "123456789012345678",
  username: "DemoUser",
  discriminator: "0",
  avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const checkSession = () => {
      const savedUser = localStorage.getItem("officialx_user");
      if (savedUser) {
        try {
          setUser(JSON.parse(savedUser));
        } catch {
          localStorage.removeItem("officialx_user");
        }
      }
      setIsLoading(false);
    };

    checkSession();
  }, []);

  const login = () => {
    // In production, redirect to Discord OAuth
    // window.location.href = getDiscordOAuthURL();

    // For demo, simulate login
    setUser(MOCK_USER);
    localStorage.setItem("officialx_user", JSON.stringify(MOCK_USER));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("officialx_user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
