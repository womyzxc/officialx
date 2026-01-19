import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/components/auth-context";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OfficialX - Ultimate Discord Security Bot",
  description: "Protect your Discord server with advanced anti-raid, verification, and threat detection. OfficialX keeps your community safe 24/7 with enterprise-grade security.",
  keywords: ["Discord", "security", "bot", "anti-raid", "verification", "protection", "moderation"],
  openGraph: {
    title: "OfficialX - Ultimate Discord Security Bot",
    description: "Protect your Discord server with advanced anti-raid, verification, and threat detection.",
    url: "https://officialx.xyz",
    siteName: "OfficialX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OfficialX - Ultimate Discord Security Bot",
    description: "Protect your Discord server with advanced anti-raid, verification, and threat detection.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
