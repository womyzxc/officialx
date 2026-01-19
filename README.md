# OfficialX - Ultimate Discord Security Bot

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwindcss" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Bun-1.0-f9f1e1?style=for-the-badge&logo=bun" alt="Bun" />
</p>

<p align="center">
  <strong>Protect your Discord server with advanced anti-raid, verification, and threat detection.</strong>
</p>

<p align="center">
  <a href="https://officialx.xyz">Website</a> •
  <a href="https://officialx.xyz/docs">Documentation</a> •
  <a href="https://discord.gg/officialx">Discord</a> •
  <a href="https://officialx.xyz/status">Status</a>
</p>

---

## Features

- **Anti-Raid Protection** - Advanced algorithms detect and prevent mass join attacks
- **CAPTCHA Verification** - Filter out bots with customizable verification systems
- **Anti-Nuke System** - Prevent server destruction from compromised accounts
- **Alt Detection** - ML-powered detection of alt accounts and VPN users
- **Threat Intelligence** - Global database of known bad actors
- **Real-time Dashboard** - Manage your server security from the web

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Package Manager**: Bun
- **Authentication**: Discord OAuth2
- **Deployment**: Netlify / Vercel

## Quick Start

### Prerequisites

- [Bun](https://bun.sh/) (v1.0 or higher)
- [Node.js](https://nodejs.org/) (v18 or higher)
- Discord Application with OAuth2 configured

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/womyzxc/officialx.git
cd officialx
```

2. **Install dependencies**

```bash
bun install
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values:

```env
# Discord OAuth2
NEXT_PUBLIC_DISCORD_CLIENT_ID=your_client_id
DISCORD_CLIENT_SECRET=your_client_secret
NEXT_PUBLIC_DISCORD_REDIRECT_URI=http://localhost:3000/api/auth/callback

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001

# NextAuth (optional)
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

4. **Run the development server**

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_DISCORD_CLIENT_ID` | Discord application client ID | Yes |
| `DISCORD_CLIENT_SECRET` | Discord application client secret | Yes |
| `NEXT_PUBLIC_DISCORD_REDIRECT_URI` | OAuth2 callback URL | Yes |
| `NEXT_PUBLIC_API_URL` | Backend API URL | Yes |
| `NEXTAUTH_SECRET` | NextAuth.js secret key | Yes |
| `NEXTAUTH_URL` | Application URL | Yes |

## Project Structure

```
officialx/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   │   └── auth/          # OAuth endpoints
│   │   ├── dashboard/         # Dashboard page
│   │   ├── docs/              # Documentation page
│   │   ├── faq/               # FAQ page
│   │   ├── status/            # Status page
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Landing page
│   ├── components/            # React components
│   │   ├── ui/                # shadcn/ui components
│   │   ├── auth-context.tsx   # Auth provider
│   │   ├── navigation.tsx     # Navigation bar
│   │   ├── footer.tsx         # Footer
│   │   └── theme-*.tsx        # Theme components
│   └── lib/                   # Utility functions
│       ├── api.ts             # API helpers
│       └── utils.ts           # General utilities
├── public/                    # Static assets
├── .github/
│   └── workflows/             # GitHub Actions
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

## Scripts

| Command | Description |
|---------|-------------|
| `bun dev` | Start development server |
| `bun build` | Build for production |
| `bun start` | Start production server |
| `bun lint` | Run ESLint and TypeScript checks |
| `bun format` | Format code with Biome |

## Discord OAuth2 Setup

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application or select existing one
3. Go to **OAuth2** > **General**
4. Add your redirect URI: `https://yourdomain.com/api/auth/callback`
5. Copy the **Client ID** and **Client Secret**
6. Add them to your environment variables

### Required OAuth2 Scopes

- `identify` - Access user's username and avatar
- `guilds` - Access user's server list
- `email` (optional) - Access user's email

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy!

### Self-Hosted

```bash
# Build the application
bun run build

# Start production server
bun run start
```

## API Integration

The dashboard connects to your Discord bot's backend API. Configure endpoints in `src/lib/api.ts`:

```typescript
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL,
  ENDPOINTS: {
    AUTH_LOGIN: "/auth/discord",
    SERVERS: "/servers",
    SERVER_SETTINGS: "/servers/:id/settings",
    // ... more endpoints
  }
};
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- **Discord**: [Join our server](https://discord.gg/officialx)
- **Email**: support@officialx.xyz
- **Documentation**: [officialx.xyz/docs](https://officialx.xyz/docs)

---

<p align="center">
  Made with care for Discord communities worldwide
</p>
