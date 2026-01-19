// API Configuration for OfficialX Discord Bot
// Replace these values with your actual bot backend API

export const API_CONFIG = {
  // Your bot's backend API URL
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "https://api.officialx.xyz",

  // Discord OAuth2 Configuration
  DISCORD_CLIENT_ID: "1338739893035204628",
  DISCORD_REDIRECT_URI: process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI || "https://officialx.xyz/api/auth/callback",

  // API Endpoints
  ENDPOINTS: {
    // Auth
    AUTH_LOGIN: "/auth/discord",
    AUTH_CALLBACK: "/auth/callback",
    AUTH_LOGOUT: "/auth/logout",
    AUTH_ME: "/auth/me",

    // Servers
    SERVERS: "/servers",
    SERVER_SETTINGS: "/servers/:id/settings",
    SERVER_STATS: "/servers/:id/stats",
    SERVER_LOGS: "/servers/:id/logs",

    // Security
    ANTIRAID_CONFIG: "/servers/:id/antiraid",
    ANTINUKE_CONFIG: "/servers/:id/antinuke",
    VERIFICATION_CONFIG: "/servers/:id/verification",
    ALT_DETECTION_CONFIG: "/servers/:id/alt-detection",

    // Status
    BOT_STATUS: "/status",
    BOT_STATS: "/stats",
  }
};

// Discord OAuth2 URL generator
export function getDiscordOAuthURL(state?: string) {
  const params = new URLSearchParams({
    client_id: API_CONFIG.DISCORD_CLIENT_ID,
    redirect_uri: API_CONFIG.DISCORD_REDIRECT_URI,
    response_type: "code",
    scope: "identify guilds",
    ...(state && { state }),
  });

  return `https://discord.com/api/oauth2/authorize?${params.toString()}`;
}

// API Helper functions
export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_CONFIG.BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
}

// Auth API
export const authAPI = {
  login: () => {
    window.location.href = getDiscordOAuthURL();
  },

  logout: async () => {
    return apiRequest(API_CONFIG.ENDPOINTS.AUTH_LOGOUT, { method: "POST" });
  },

  getUser: async () => {
    return apiRequest(API_CONFIG.ENDPOINTS.AUTH_ME);
  },
};

// Server API
export const serverAPI = {
  getServers: async () => {
    return apiRequest(API_CONFIG.ENDPOINTS.SERVERS);
  },

  getServerSettings: async (serverId: string) => {
    return apiRequest(API_CONFIG.ENDPOINTS.SERVER_SETTINGS.replace(":id", serverId));
  },

  updateServerSettings: async (serverId: string, settings: Record<string, unknown>) => {
    return apiRequest(API_CONFIG.ENDPOINTS.SERVER_SETTINGS.replace(":id", serverId), {
      method: "PATCH",
      body: JSON.stringify(settings),
    });
  },

  getServerStats: async (serverId: string) => {
    return apiRequest(API_CONFIG.ENDPOINTS.SERVER_STATS.replace(":id", serverId));
  },

  getServerLogs: async (serverId: string, limit = 50) => {
    return apiRequest(`${API_CONFIG.ENDPOINTS.SERVER_LOGS.replace(":id", serverId)}?limit=${limit}`);
  },
};

// Status API
export const statusAPI = {
  getBotStatus: async () => {
    return apiRequest(API_CONFIG.ENDPOINTS.BOT_STATUS);
  },

  getBotStats: async () => {
    return apiRequest(API_CONFIG.ENDPOINTS.BOT_STATS);
  },
};

// Types
export interface User {
  id: string;
  username: string;
  discriminator: string;
  avatar: string;
  guilds: Guild[];
}

export interface Guild {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: number;
  features: string[];
}

export interface ServerSettings {
  antiraid: {
    enabled: boolean;
    sensitivity: "low" | "medium" | "high";
    action: "kick" | "ban" | "timeout";
  };
  antinuke: {
    enabled: boolean;
    channelLimit: number;
    roleLimit: number;
    banLimit: number;
  };
  verification: {
    enabled: boolean;
    type: "captcha" | "button" | "reaction" | "question";
    channelId: string;
    roleId: string;
    timeout: number;
  };
  altDetection: {
    enabled: boolean;
    minAccountAge: number;
    action: "verify" | "kick" | "alert";
  };
}

export interface BotStatus {
  status: "online" | "degraded" | "offline";
  uptime: number;
  ping: number;
  servers: number;
  users: number;
  shards: {
    id: number;
    status: "online" | "offline";
    ping: number;
    servers: number;
  }[];
  services: {
    name: string;
    status: "operational" | "degraded" | "down";
    uptime: number;
  }[];
  incidents: {
    id: string;
    title: string;
    status: "investigating" | "identified" | "monitoring" | "resolved";
    createdAt: string;
    updatedAt: string;
  }[];
}
