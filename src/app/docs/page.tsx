import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const TerminalIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const BookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);

const RocketIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

const SettingsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const AlertIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const LockIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const commandCategories = [
  {
    title: "Getting Started",
    icon: RocketIcon,
    description: "Essential commands to set up OfficialX on your server",
    commands: [
      {
        name: "/security setup",
        description: "Initialize OfficialX protection for your server. This creates all necessary roles and channels.",
        usage: "/security setup",
        permissions: "Administrator",
        examples: ["/security setup"]
      },
      {
        name: "/security status",
        description: "Check the current security status and configuration of your server.",
        usage: "/security status",
        permissions: "Manage Server",
        examples: ["/security status"]
      },
      {
        name: "/security reset",
        description: "Reset all OfficialX settings to default. Use with caution.",
        usage: "/security reset [confirm:true]",
        permissions: "Administrator",
        examples: ["/security reset confirm:true"]
      }
    ]
  },
  {
    title: "Verification",
    icon: UsersIcon,
    description: "Commands for managing user verification",
    commands: [
      {
        name: "/verify",
        description: "Start the verification process. Sends a CAPTCHA or verification challenge.",
        usage: "/verify",
        permissions: "Everyone",
        examples: ["/verify"]
      },
      {
        name: "/verify setup",
        description: "Configure the verification system including CAPTCHA type, verification channel, and roles.",
        usage: "/verify setup [type:captcha|button|reaction] [channel:#channel] [role:@role]",
        permissions: "Administrator",
        examples: ["/verify setup type:captcha channel:#verify role:@Member"]
      },
      {
        name: "/verify user",
        description: "Manually verify a user, bypassing the verification process.",
        usage: "/verify user [@user]",
        permissions: "Manage Roles",
        examples: ["/verify user @NewMember"]
      },
      {
        name: "/verify unverify",
        description: "Remove verification from a user, requiring them to verify again.",
        usage: "/verify unverify [@user] [reason:text]",
        permissions: "Manage Roles",
        examples: ["/verify unverify @SuspiciousUser reason:Alt account detected"]
      }
    ]
  },
  {
    title: "Anti-Raid",
    icon: ShieldIcon,
    description: "Protect your server from mass join attacks",
    commands: [
      {
        name: "/antiraid config",
        description: "Configure anti-raid sensitivity, actions, and thresholds.",
        usage: "/antiraid config [sensitivity:low|medium|high] [action:kick|ban|timeout]",
        permissions: "Administrator",
        examples: ["/antiraid config sensitivity:high action:ban"]
      },
      {
        name: "/antiraid enable",
        description: "Enable anti-raid protection for your server.",
        usage: "/antiraid enable",
        permissions: "Administrator",
        examples: ["/antiraid enable"]
      },
      {
        name: "/antiraid disable",
        description: "Temporarily disable anti-raid protection.",
        usage: "/antiraid disable [duration:time]",
        permissions: "Administrator",
        examples: ["/antiraid disable duration:1h"]
      },
      {
        name: "/antiraid whitelist",
        description: "Add a user or bot to the anti-raid whitelist.",
        usage: "/antiraid whitelist add [@user|@bot]",
        permissions: "Administrator",
        examples: ["/antiraid whitelist add @TrustedBot"]
      }
    ]
  },
  {
    title: "Anti-Nuke",
    icon: AlertIcon,
    description: "Prevent server destruction from compromised accounts",
    commands: [
      {
        name: "/antinuke config",
        description: "Configure anti-nuke thresholds for channels, roles, and bans.",
        usage: "/antinuke config [channels:number] [roles:number] [bans:number]",
        permissions: "Server Owner",
        examples: ["/antinuke config channels:3 roles:2 bans:5"]
      },
      {
        name: "/antinuke enable",
        description: "Enable anti-nuke protection.",
        usage: "/antinuke enable",
        permissions: "Server Owner",
        examples: ["/antinuke enable"]
      },
      {
        name: "/antinuke trust",
        description: "Add a user to the trusted list (bypasses anti-nuke checks).",
        usage: "/antinuke trust add [@user]",
        permissions: "Server Owner",
        examples: ["/antinuke trust add @CoOwner"]
      },
      {
        name: "/antinuke logs",
        description: "View recent anti-nuke triggers and actions taken.",
        usage: "/antinuke logs [limit:number]",
        permissions: "Administrator",
        examples: ["/antinuke logs limit:10"]
      }
    ]
  },
  {
    title: "Emergency",
    icon: LockIcon,
    description: "Emergency commands for active threats",
    commands: [
      {
        name: "/lockdown",
        description: "Immediately lock down the server. Prevents new messages and joins.",
        usage: "/lockdown [reason:text]",
        permissions: "Administrator",
        examples: ["/lockdown reason:Active raid in progress"]
      },
      {
        name: "/lockdown end",
        description: "End the server lockdown and restore normal operations.",
        usage: "/lockdown end",
        permissions: "Administrator",
        examples: ["/lockdown end"]
      },
      {
        name: "/lockdown channel",
        description: "Lock a specific channel only.",
        usage: "/lockdown channel [#channel] [reason:text]",
        permissions: "Manage Channels",
        examples: ["/lockdown channel #general reason:Spam attack"]
      }
    ]
  },
  {
    title: "Moderation",
    icon: SettingsIcon,
    description: "General moderation and utility commands",
    commands: [
      {
        name: "/threats scan",
        description: "Scan your server for potential threats including alts and bad actors.",
        usage: "/threats scan [deep:true|false]",
        permissions: "Manage Server",
        examples: ["/threats scan deep:true"]
      },
      {
        name: "/whitelist add",
        description: "Add a user or bot to the global whitelist.",
        usage: "/whitelist add [@user|@bot] [reason:text]",
        permissions: "Administrator",
        examples: ["/whitelist add @ModBot reason:Moderation bot"]
      },
      {
        name: "/audit logs",
        description: "View detailed security audit logs for your server.",
        usage: "/audit logs [filter:type] [limit:number]",
        permissions: "Administrator",
        examples: ["/audit logs filter:kicks limit:20"]
      },
      {
        name: "/backup create",
        description: "Create a full backup of your server (roles, channels, settings).",
        usage: "/backup create [name:text]",
        permissions: "Administrator",
        examples: ["/backup create name:pre-event-backup"]
      },
      {
        name: "/backup restore",
        description: "Restore a server backup. Use with extreme caution.",
        usage: "/backup restore [id:backup_id] [confirm:true]",
        permissions: "Server Owner",
        examples: ["/backup restore id:backup_12345 confirm:true"]
      }
    ]
  }
];

export default function DocsPage() {
  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Documentation</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Command <span className="text-gradient">Reference</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete guide to all OfficialX commands. Learn how to protect your Discord server with our powerful security features.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <RocketIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Quick Start Guide</CardTitle>
                  <CardDescription>Get OfficialX running in under 2 minutes</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold mb-1">Invite the Bot</h4>
                    <p className="text-sm text-muted-foreground">Add OfficialX to your server using the invite button above.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">Run Setup</h4>
                    <p className="text-sm text-muted-foreground">Use <code className="text-primary">/security setup</code> to initialize protection.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold mb-1">You're Protected</h4>
                    <p className="text-sm text-muted-foreground">OfficialX now monitors your server 24/7.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Command Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {commandCategories.map((category) => (
            <div key={category.title} id={category.title.toLowerCase().replace(/\s+/g, '-')}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>
              <div className="grid gap-4">
                {category.commands.map((cmd) => (
                  <Card key={cmd.name} className="bg-card/50 border-border">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                          <TerminalIcon className="w-4 h-4 text-primary" />
                          <code className="text-lg font-mono text-primary">{cmd.name}</code>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          Requires: {cmd.permissions}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{cmd.description}</p>
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Usage</h4>
                        <code className="block bg-muted/50 px-3 py-2 rounded-md text-sm font-mono">
                          {cmd.usage}
                        </code>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Examples</h4>
                        <div className="space-y-1">
                          {cmd.examples.map((example, i) => (
                            <code key={i} className="block bg-muted/50 px-3 py-2 rounded-md text-sm font-mono text-primary">
                              {example}
                            </code>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Need Help */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/50 border-border text-center p-8">
            <BookIcon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Need More Help?</h2>
            <p className="text-muted-foreground mb-6">
              Join our Discord support server for live assistance from our team and community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-md font-medium transition-colors">
                Join Support Server
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-2 border border-border hover:bg-secondary px-6 py-2 rounded-md font-medium transition-colors">
                Submit a Ticket
              </a>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
