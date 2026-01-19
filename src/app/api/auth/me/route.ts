import { NextRequest, NextResponse } from "next/server";

interface SessionData {
  user: {
    id: string;
    username: string;
    discriminator: string;
    avatar: string;
    email?: string;
  };
  guilds: {
    id: string;
    name: string;
    icon: string | null;
    owner: boolean;
  }[];
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

export async function GET(request: NextRequest) {
  const sessionCookie = request.cookies.get("officialx_session");

  if (!sessionCookie) {
    return NextResponse.json(
      { error: "Not authenticated" },
      { status: 401 }
    );
  }

  try {
    const session: SessionData = JSON.parse(sessionCookie.value);

    // Check if session is expired
    if (Date.now() > session.expiresAt) {
      const response = NextResponse.json(
        { error: "Session expired" },
        { status: 401 }
      );
      response.cookies.delete("officialx_session");
      response.cookies.delete("officialx_user");
      return response;
    }

    // Return user data without sensitive tokens
    return NextResponse.json({
      user: session.user,
      guilds: session.guilds,
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid session" },
      { status: 401 }
    );
  }
}
