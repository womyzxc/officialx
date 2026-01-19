import { NextRequest, NextResponse } from "next/server";

const DISCORD_CLIENT_ID = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;
const DISCORD_REDIRECT_URI = process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI || "http://localhost:3000/api/auth/callback";

interface DiscordTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
}

interface DiscordUser {
  id: string;
  username: string;
  discriminator: string;
  avatar: string | null;
  email?: string;
  verified?: boolean;
}

interface DiscordGuild {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
  permissions: string;
  features: string[];
}

async function exchangeCode(code: string): Promise<DiscordTokenResponse> {
  const response = await fetch("https://discord.com/api/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: DISCORD_CLIENT_ID!,
      client_secret: DISCORD_CLIENT_SECRET!,
      grant_type: "authorization_code",
      code: code,
      redirect_uri: DISCORD_REDIRECT_URI,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to exchange code: ${error}`);
  }

  return response.json();
}

async function getDiscordUser(accessToken: string): Promise<DiscordUser> {
  const response = await fetch("https://discord.com/api/users/@me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  return response.json();
}

async function getDiscordGuilds(accessToken: string): Promise<DiscordGuild[]> {
  const response = await fetch("https://discord.com/api/users/@me/guilds", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch guilds");
  }

  return response.json();
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const error = searchParams.get("error");

  // Handle OAuth errors
  if (error) {
    return NextResponse.redirect(
      new URL(`/?error=${encodeURIComponent(error)}`, request.url)
    );
  }

  // Validate required parameters
  if (!code) {
    return NextResponse.redirect(
      new URL("/?error=missing_code", request.url)
    );
  }

  // Verify state to prevent CSRF
  const storedState = request.cookies.get("oauth_state")?.value;
  if (!state || state !== storedState) {
    return NextResponse.redirect(
      new URL("/?error=invalid_state", request.url)
    );
  }

  // Check configuration
  if (!DISCORD_CLIENT_ID || !DISCORD_CLIENT_SECRET) {
    return NextResponse.redirect(
      new URL("/?error=server_configuration", request.url)
    );
  }

  try {
    // Exchange code for tokens
    const tokens = await exchangeCode(code);

    // Get user info
    const user = await getDiscordUser(tokens.access_token);

    // Get user's guilds (servers)
    const guilds = await getDiscordGuilds(tokens.access_token);

    // Filter guilds where user has Manage Server permission (0x20 = 32)
    const manageableGuilds = guilds.filter(
      (guild) => guild.owner || (BigInt(guild.permissions) & BigInt(0x20)) !== BigInt(0)
    );

    // Create session data
    const sessionData = {
      user: {
        id: user.id,
        username: user.username,
        discriminator: user.discriminator,
        avatar: user.avatar
          ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
          : `https://cdn.discordapp.com/embed/avatars/${Number(user.discriminator) % 5}.png`,
        email: user.email,
      },
      guilds: manageableGuilds.map((guild) => ({
        id: guild.id,
        name: guild.name,
        icon: guild.icon
          ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
          : null,
        owner: guild.owner,
      })),
      accessToken: tokens.access_token,
      refreshToken: tokens.refresh_token,
      expiresAt: Date.now() + tokens.expires_in * 1000,
    };

    // Create response with redirect to dashboard
    const response = NextResponse.redirect(new URL("/dashboard", request.url));

    // Store session in secure cookie
    response.cookies.set("officialx_session", JSON.stringify(sessionData), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: tokens.expires_in,
      path: "/",
    });

    // Store minimal user data in accessible cookie for client
    response.cookies.set(
      "officialx_user",
      JSON.stringify({
        id: sessionData.user.id,
        username: sessionData.user.username,
        avatar: sessionData.user.avatar,
      }),
      {
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: tokens.expires_in,
        path: "/",
      }
    );

    // Clear state cookie
    response.cookies.delete("oauth_state");

    return response;
  } catch (err) {
    console.error("OAuth callback error:", err);
    return NextResponse.redirect(
      new URL("/?error=auth_failed", request.url)
    );
  }
}
