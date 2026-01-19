"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const ServerIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
    <line x1="6" y1="6" x2="6.01" y2="6"/>
    <line x1="6" y1="18" x2="6.01" y2="18"/>
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

const BellIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);

const ActivityIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
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
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

// Demo data
const servers = [
  { id: "1", name: "Gaming Galaxy", members: 50432, icon: "GG" },
  { id: "2", name: "Creative Hub", members: 25890, icon: "CH" },
  { id: "3", name: "Study Together", members: 12500, icon: "ST" },
];

const recentActivity = [
  { type: "block", message: "Blocked raid attempt (15 accounts)", time: "2 minutes ago" },
  { type: "verify", message: "45 users verified today", time: "1 hour ago" },
  { type: "alert", message: "Alt account detected and kicked", time: "3 hours ago" },
  { type: "block", message: "Anti-nuke triggered: Mass ban attempt", time: "5 hours ago" },
  { type: "verify", message: "New member verified: @NewUser#1234", time: "6 hours ago" },
];

export default function DashboardPage() {
  const [selectedServer, setSelectedServer] = useState(servers[0]);
  const [antiRaidEnabled, setAntiRaidEnabled] = useState(true);
  const [antiNukeEnabled, setAntiNukeEnabled] = useState(true);
  const [verificationEnabled, setVerificationEnabled] = useState(true);
  const [altDetectionEnabled, setAltDetectionEnabled] = useState(true);
  const [antiSpamEnabled, setAntiSpamEnabled] = useState(true);
  const [logChannelId, setLogChannelId] = useState("");
  const [raidSensitivity, setRaidSensitivity] = useState("medium");
  const [verifyType, setVerifyType] = useState("captcha");

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
              <p className="text-muted-foreground">Manage your server security settings</p>
            </div>
            <div className="flex items-center gap-4">
              <Select value={selectedServer.id} onValueChange={(id) => setSelectedServer(servers.find(s => s.id === id) || servers[0])}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select server" />
                </SelectTrigger>
                <SelectContent>
                  {servers.map((server) => (
                    <SelectItem key={server.id} value={server.id}>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center text-xs font-semibold">
                          {server.icon}
                        </div>
                        {server.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-card/50 border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <UsersIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{selectedServer.members.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">Total Members</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <ShieldIcon className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">1,234</p>
                    <p className="text-xs text-muted-foreground">Threats Blocked</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <CheckIcon className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">8,567</p>
                    <p className="text-xs text-muted-foreground">Users Verified</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                    <AlertIcon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">23</p>
                    <p className="text-xs text-muted-foreground">Raids Prevented</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="security" className="space-y-6">
            <TabsList className="bg-muted/50">
              <TabsTrigger value="security" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <ShieldIcon className="w-4 h-4 mr-2" />
                Security
              </TabsTrigger>
              <TabsTrigger value="verification" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <UsersIcon className="w-4 h-4 mr-2" />
                Verification
              </TabsTrigger>
              <TabsTrigger value="logs" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <ActivityIcon className="w-4 h-4 mr-2" />
                Activity Logs
              </TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <SettingsIcon className="w-4 h-4 mr-2" />
                Settings
              </TabsTrigger>
            </TabsList>

            {/* Security Tab */}
            <TabsContent value="security" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card/50 border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Anti-Raid Protection</span>
                      <Switch checked={antiRaidEnabled} onCheckedChange={setAntiRaidEnabled} />
                    </CardTitle>
                    <CardDescription>Detect and prevent mass join attacks automatically</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Sensitivity</label>
                      <Select value={raidSensitivity} onValueChange={setRaidSensitivity}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low - 20+ joins/minute</SelectItem>
                          <SelectItem value="medium">Medium - 10+ joins/minute</SelectItem>
                          <SelectItem value="high">High - 5+ joins/minute</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Action</label>
                      <Select defaultValue="kick">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kick">Kick raiders</SelectItem>
                          <SelectItem value="ban">Ban raiders</SelectItem>
                          <SelectItem value="timeout">Timeout raiders</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Anti-Nuke System</span>
                      <Switch checked={antiNukeEnabled} onCheckedChange={setAntiNukeEnabled} />
                    </CardTitle>
                    <CardDescription>Prevent server destruction from compromised accounts</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Channel Deletion Limit</label>
                      <Input type="number" defaultValue="3" className="bg-background" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Role Deletion Limit</label>
                      <Input type="number" defaultValue="2" className="bg-background" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ban Limit (per minute)</label>
                      <Input type="number" defaultValue="5" className="bg-background" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Alt Detection</span>
                      <Switch checked={altDetectionEnabled} onCheckedChange={setAltDetectionEnabled} />
                    </CardTitle>
                    <CardDescription>Identify and handle alt accounts automatically</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Minimum Account Age</label>
                      <Select defaultValue="7">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 day</SelectItem>
                          <SelectItem value="7">7 days</SelectItem>
                          <SelectItem value="30">30 days</SelectItem>
                          <SelectItem value="90">90 days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Action for New Accounts</label>
                      <Select defaultValue="verify">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="verify">Require verification</SelectItem>
                          <SelectItem value="kick">Kick</SelectItem>
                          <SelectItem value="alert">Alert moderators</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Anti-Spam</span>
                      <Switch checked={antiSpamEnabled} onCheckedChange={setAntiSpamEnabled} />
                    </CardTitle>
                    <CardDescription>Prevent spam messages and mass pings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Message Threshold</label>
                      <Input type="number" defaultValue="5" placeholder="Messages per 5 seconds" className="bg-background" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Action</label>
                      <Select defaultValue="mute">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="warn">Warn user</SelectItem>
                          <SelectItem value="mute">Mute user</SelectItem>
                          <SelectItem value="kick">Kick user</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Verification Tab */}
            <TabsContent value="verification" className="space-y-6">
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Verification System</span>
                    <Switch checked={verificationEnabled} onCheckedChange={setVerificationEnabled} />
                  </CardTitle>
                  <CardDescription>Require new members to verify before accessing the server</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Verification Type</label>
                      <Select value={verifyType} onValueChange={setVerifyType}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="captcha">CAPTCHA Challenge</SelectItem>
                          <SelectItem value="button">Button Click</SelectItem>
                          <SelectItem value="reaction">Reaction</SelectItem>
                          <SelectItem value="question">Custom Question</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Verification Channel</label>
                      <Select defaultValue="verify">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="verify">#verify</SelectItem>
                          <SelectItem value="welcome">#welcome</SelectItem>
                          <SelectItem value="lobby">#lobby</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Verified Role</label>
                      <Select defaultValue="member">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="member">@Member</SelectItem>
                          <SelectItem value="verified">@Verified</SelectItem>
                          <SelectItem value="human">@Human</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Timeout Duration</label>
                      <Select defaultValue="10">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">5 minutes</SelectItem>
                          <SelectItem value="10">10 minutes</SelectItem>
                          <SelectItem value="30">30 minutes</SelectItem>
                          <SelectItem value="60">1 hour</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  {verifyType === "question" && (
                    <div>
                      <label className="text-sm font-medium mb-2 block">Custom Question</label>
                      <Input placeholder="What is 2 + 2?" className="bg-background" />
                      <Input placeholder="Answer" className="bg-background mt-2" />
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Logs Tab */}
            <TabsContent value="logs" className="space-y-6">
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Security events from the past 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, i) => (
                      <div key={i} className="flex items-start gap-4 p-3 bg-muted/30 rounded-lg">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          activity.type === "block" ? "bg-red-500/20 text-red-500" :
                          activity.type === "alert" ? "bg-orange-500/20 text-orange-500" :
                          "bg-green-500/20 text-green-500"
                        }`}>
                          {activity.type === "block" ? <ShieldIcon className="w-4 h-4" /> :
                           activity.type === "alert" ? <AlertIcon className="w-4 h-4" /> :
                           <CheckIcon className="w-4 h-4" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">{activity.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-6">
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                  <CardDescription>Configure general bot settings for your server</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Log Channel</label>
                      <Select defaultValue="security-logs">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="security-logs">#security-logs</SelectItem>
                          <SelectItem value="mod-logs">#mod-logs</SelectItem>
                          <SelectItem value="bot-logs">#bot-logs</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Alert Role</label>
                      <Select defaultValue="moderator">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="moderator">@Moderator</SelectItem>
                          <SelectItem value="admin">@Admin</SelectItem>
                          <SelectItem value="staff">@Staff</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Bot Prefix (Legacy)</label>
                      <Input defaultValue="!" className="bg-background" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Language</label>
                      <Select defaultValue="en">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>Configure when and how you receive alerts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Raid Alerts</p>
                      <p className="text-sm text-muted-foreground">Get notified when a raid is detected</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Anti-Nuke Alerts</p>
                      <p className="text-sm text-muted-foreground">Get notified when anti-nuke triggers</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Alt Detection Alerts</p>
                      <p className="text-sm text-muted-foreground">Get notified when alt accounts are detected</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Daily Summary</p>
                      <p className="text-sm text-muted-foreground">Receive a daily security summary</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}
