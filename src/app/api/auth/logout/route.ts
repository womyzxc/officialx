import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  // Clear all auth cookies
  response.cookies.delete("officialx_session");
  response.cookies.delete("officialx_user");
  response.cookies.delete("oauth_state");

  return response;
}

export async function GET() {
  const response = NextResponse.redirect(new URL("/", process.env.NEXTAUTH_URL || "http://localhost:3000"));

  // Clear all auth cookies
  response.cookies.delete("officialx_session");
  response.cookies.delete("officialx_user");
  response.cookies.delete("oauth_state");

  return response;
}
