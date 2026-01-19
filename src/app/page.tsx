import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation, DISCORD_BOT_INVITE_URL } from "@/components/navigation";
import { Footer } from "@/components/footer";

// Icons as SVG components for better control
const ShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const LockIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const UserCheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <polyline points="17 11 19 13 23 9" />
  </svg>
);

const ZapIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const EyeOffIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const AlertTriangleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const TerminalIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const QuoteIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z"/>
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
  </svg>
);

const features = [
  {
    icon: ShieldIcon,
    title: "Anti-Raid Protection",
    description: "Advanced algorithms detect and prevent mass join attacks, nukes, and spam raids before they harm your server."
  },
  {
    icon: UserCheckIcon,
    title: "CAPTCHA Verification",
    description: "Powerful verification system with CAPTCHA, reaction roles, and custom questions to filter out bots and bad actors."
  },
  {
    icon: LockIcon,
    title: "Anti-Nuke System",
    description: "Real-time monitoring prevents channel deletions, role changes, and mass bans from compromised admin accounts."
  },
  {
    icon: EyeOffIcon,
    title: "Alt Detection",
    description: "Machine learning-powered detection identifies alt accounts, VPN users, and suspicious new accounts instantly."
  },
  {
    icon: AlertTriangleIcon,
    title: "Threat Intelligence",
    description: "Connected to a global database of known bad actors, scammers, and raiders across Discord servers."
  },
  {
    icon: ZapIcon,
    title: "Instant Response",
    description: "Sub-second response times ensure threats are neutralized before they can cause any damage to your community."
  }
];

const commands = [
  { command: "/security setup", description: "Initialize OfficialX protection for your server" },
  { command: "/verify", description: "Start the verification process for new members" },
  { command: "/lockdown", description: "Emergency lockdown mode for active threats" },
  { command: "/antiraid config", description: "Configure anti-raid sensitivity and actions" },
  { command: "/whitelist add", description: "Add trusted users or bots to the whitelist" },
  { command: "/audit logs", description: "View detailed security audit logs" },
  { command: "/threats scan", description: "Scan for potential threats in your server" },
  { command: "/backup create", description: "Create a full server backup for recovery" },
];

const stats = [
  { value: "50K+", label: "Protected Servers" },
  { value: "10M+", label: "Users Secured" },
  { value: "99.9%", label: "Uptime" },
  { value: "500K+", label: "Threats Blocked" },
];

const testimonials = [
  {
    name: "Alex Chen",
    role: "Owner of Gaming Galaxy",
    members: "50,000+ members",
    content: "OfficialX saved our server from multiple raid attempts. The anti-nuke feature is incredible - it stopped a compromised admin from destroying everything we built.",
    rating: 5,
    avatar: "AC"
  },
  {
    name: "Sarah Miller",
    role: "Admin at Creative Hub",
    members: "25,000+ members",
    content: "The verification system is so smooth. We went from 100+ bot joins per day to nearly zero. Our members feel safe and our mod team can actually focus on the community.",
    rating: 5,
    avatar: "SM"
  },
  {
    name: "Mike Johnson",
    role: "Owner of Crypto Traders",
    members: "75,000+ members",
    content: "Alt detection is a game-changer. We've caught so many scammers trying to rejoin with new accounts. The threat intelligence database is incredibly comprehensive.",
    rating: 5,
    avatar: "MJ"
  },
  {
    name: "Emily Davis",
    role: "Moderator at Anime World",
    members: "100,000+ members",
    content: "Setup took less than 5 minutes and the bot just works. We've had zero successful raids since installing OfficialX. Best security investment we've made.",
    rating: 5,
    avatar: "ED"
  },
  {
    name: "David Park",
    role: "Owner of Study Together",
    members: "30,000+ members",
    content: "The lockdown feature is a lifesaver during emergencies. One command and our server is instantly protected. Response time is unbelievably fast.",
    rating: 5,
    avatar: "DP"
  },
  {
    name: "Lisa Wang",
    role: "Admin at Music Lovers",
    members: "45,000+ members",
    content: "We've tried 5 different security bots. OfficialX is the only one that actually catches everything. The dashboard makes it so easy to manage settings.",
    rating: 5,
    avatar: "LW"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Navigation */}
      <Navigation showDashboardLink />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                Trusted by 50,000+ Servers
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Ultimate Discord
                <span className="text-gradient block">Security Solution</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                Protect your Discord server with advanced anti-raid, verification, and threat detection.
                OfficialX keeps your community safe 24/7 with enterprise-grade security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow" asChild>
                  <a href={DISCORD_BOT_INVITE_URL} target="_blank" rel="noopener noreferrer">
                    <DiscordIcon className="w-5 h-5 mr-2" />
                    Add to Discord - Free
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:bg-secondary" asChild>
                  <a href="/docs">View Documentation</a>
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Animated Shield Graphic */}
                <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto relative animate-float">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
                  <div className="absolute inset-4 bg-card rounded-3xl border border-border shadow-2xl flex items-center justify-center">
                    <ShieldIcon className="w-32 h-32 text-primary animate-pulse-glow" />
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-card rounded-xl border border-border shadow-lg flex items-center justify-center">
                    <CheckCircleIcon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-card rounded-xl border border-border shadow-lg flex items-center justify-center">
                    <LockIcon className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Features</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Enterprise-Grade <span className="text-gradient">Protection</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive security features designed to protect servers of all sizes from modern threats.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Loved by <span className="text-gradient">Communities</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See what server owners and admins are saying about OfficialX.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <CardTitle className="text-base">{testimonial.name}</CardTitle>
                        <CardDescription className="text-xs">{testimonial.role}</CardDescription>
                        <CardDescription className="text-xs text-primary">{testimonial.members}</CardDescription>
                      </div>
                    </div>
                    <QuoteIcon className="w-6 h-6 text-primary/30" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{testimonial.content}</p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-yellow-500" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commands Section */}
      <section id="commands" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Commands</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Simple Yet <span className="text-gradient">Powerful</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Easy-to-use slash commands that give you full control over your server security.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {commands.map((cmd) => (
              <div key={cmd.command} className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TerminalIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <code className="text-sm font-mono text-primary">{cmd.command}</code>
                  <p className="text-sm text-muted-foreground mt-1">{cmd.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Pricing</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Choose Your <span className="text-gradient">Plan</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start free and upgrade when you need more power.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="bg-card/50 border-border relative">
              <CardHeader>
                <CardTitle className="text-xl">Free</CardTitle>
                <CardDescription>For small communities</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {["Basic Anti-Raid", "CAPTCHA Verification", "5 Custom Commands", "Community Support"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircleIcon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-6" asChild>
                  <a href={DISCORD_BOT_INVITE_URL} target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-card border-primary relative shadow-lg shadow-primary/20">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Pro</CardTitle>
                <CardDescription>For growing servers</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$5</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {["Advanced Anti-Raid", "Alt Detection", "Threat Intelligence", "Unlimited Commands", "Priority Support", "Custom Branding"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircleIcon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Upgrade to Pro
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-card/50 border-border relative">
              <CardHeader>
                <CardTitle className="text-xl">Enterprise</CardTitle>
                <CardDescription>For large communities</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$15</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {["Everything in Pro", "Multi-Server Support", "API Access", "Custom Integrations", "Dedicated Support", "SLA Guarantee"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircleIcon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-6">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 p-8 sm:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <ShieldIcon className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Secure Your Server?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join over 50,000 servers already protected by OfficialX. Setup takes less than 2 minutes.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow" asChild>
              <a href={DISCORD_BOT_INVITE_URL} target="_blank" rel="noopener noreferrer">
                <DiscordIcon className="w-5 h-5 mr-2" />
                Add OfficialX to Your Server
              </a>
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
