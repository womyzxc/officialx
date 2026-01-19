"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  username: string;
  discriminator?: string;
  avatar: string;
  email?: string;
}

interface Guild {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

interface AuthContextType {
  user: User | null;
  guilds: Guild[];
  isLoading: boolean;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => Promise<void>;
  refreshSession: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Check if we're in demo mode (no OAuth configured)
const isDemoMode = () => {
  const clientId = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID;
  return !clientId || clientId === "your_discord_client_id";
};

// Mock user for demo purposes
const MOCK_USER: User = {
  id: "123456789012345678",
  username: "DemoUser",
  discriminator: "0",
  avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
};

const MOCK_GUILDS: Guild[] = [
  { id: "1", name: "Gaming Galaxy", icon: null, owner: true },
  { id: "2", name: "Creative Hub", icon: null, owner: false },
  { id: "3", name: "Study Together", icon: null, owner: false },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [guilds, setGuilds] = useState<Guild[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const checkSession = async () => {
    try {
      // First, check for user cookie (quick check)
      const userCookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("officialx_user="));

      if (userCookie) {
        const userData = JSON.parse(decodeURIComponent(userCookie.split("=")[1]));
        setUser(userData);
      }

      // Then verify with server and get full data
      const response = await fetch("/api/auth/me", {
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        setGuilds(data.guilds || []);
      } else {
        // Clear state if not authenticated
        setUser(null);
        setGuilds([]);
      }
    } catch (error) {
      console.error("Failed to check session:", error);
      // In demo mode or on error, check localStorage
      if (isDemoMode()) {
        const savedUser = localStorage.getItem("officialx_user");
        if (savedUser) {
          try {
            setUser(JSON.parse(savedUser));
            setGuilds(MOCK_GUILDS);
          } catch {
            localStorage.removeItem("officialx_user");
          }
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  const login = () => {
    if (isDemoMode()) {
      // Demo mode: simulate login
      setUser(MOCK_USER);
      setGuilds(MOCK_GUILDS);
      localStorage.setItem("officialx_user", JSON.stringify(MOCK_USER));
      return;
    }

    // Real OAuth: redirect to Discord
    window.location.href = "/api/auth/discord";
  };

  const logout = async () => {
    try {
      if (!isDemoMode()) {
        await fetch("/api/auth/logout", {
          method: "POST",
          credentials: "include",
        });
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      // Clear local state
      setUser(null);
      setGuilds([]);
      localStorage.removeItem("officialx_user");

      // Clear cookies manually as backup
      document.cookie = "officialx_user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  };

  const refreshSession = async () => {
    setIsLoading(true);
    await checkSession();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        guilds,
        isLoading,
        isAuthenticated: !!user,
        login,
        logout,
        refreshSession,
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
