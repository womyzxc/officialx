import { NextResponse } from "next/server";

const DISCORD_CLIENT_ID = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID;
const DISCORD_REDIRECT_URI = process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI || "http://localhost:3000/api/auth/callback";

export async function GET() {
  if (!DISCORD_CLIENT_ID) {
    return NextResponse.json(
      { error: "Discord client ID not configured" },
      { status: 500 }
    );
  }

  // Generate a random state for CSRF protection
  const state = Math.random().toString(36).substring(2, 15);

  const params = new URLSearchParams({
    client_id: DISCORD_CLIENT_ID,
    redirect_uri: DISCORD_REDIRECT_URI,
    response_type: "code",
    scope: "identify guilds email",
    state: state,
  });

  const discordAuthUrl = `https://discord.com/api/oauth2/authorize?${params.toString()}`;

  // Create response with redirect
  const response = NextResponse.redirect(discordAuthUrl);

  // Store state in cookie for verification
  response.cookies.set("oauth_state", state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 10, // 10 minutes
  });

  return response;
}
