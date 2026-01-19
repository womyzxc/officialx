"use client"

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const AlertCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const XCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

const ActivityIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const ServerIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

// Mock data - In production, this would come from your API
const mockStatus = {
  status: "online" as const,
  uptime: 99.98,
  uptimeSeconds: 2592000, // 30 days
  ping: 42,
  servers: 52847,
  users: 10234567,
  lastIncident: "45 days ago",
  shards: [
    { id: 0, status: "online" as const, ping: 38, servers: 8808 },
    { id: 1, status: "online" as const, ping: 41, servers: 8809 },
    { id: 2, status: "online" as const, ping: 45, servers: 8810 },
    { id: 3, status: "online" as const, ping: 39, servers: 8805 },
    { id: 4, status: "online" as const, ping: 44, servers: 8807 },
    { id: 5, status: "online" as const, ping: 42, servers: 8808 },
  ],
  services: [
    { name: "Discord Gateway", status: "operational" as const, uptime: 99.99 },
    { name: "Anti-Raid System", status: "operational" as const, uptime: 99.98 },
    { name: "Verification Service", status: "operational" as const, uptime: 99.97 },
    { name: "Alt Detection", status: "operational" as const, uptime: 99.95 },
    { name: "Threat Intelligence", status: "operational" as const, uptime: 99.99 },
    { name: "Database", status: "operational" as const, uptime: 99.99 },
    { name: "API", status: "operational" as const, uptime: 99.98 },
    { name: "Dashboard", status: "operational" as const, uptime: 99.97 },
  ],
  incidents: [
    {
      id: "1",
      title: "Increased API latency",
      status: "resolved" as const,
      createdAt: "2024-12-05T10:30:00Z",
      resolvedAt: "2024-12-05T11:15:00Z",
      description: "We experienced increased API latency due to a database optimization process. The issue has been resolved."
    },
  ],
  uptimeHistory: [
    { date: "Jan 13", uptime: 100 },
    { date: "Jan 14", uptime: 100 },
    { date: "Jan 15", uptime: 99.95 },
    { date: "Jan 16", uptime: 100 },
    { date: "Jan 17", uptime: 100 },
    { date: "Jan 18", uptime: 100 },
    { date: "Jan 19", uptime: 100 },
  ],
};

function formatUptime(seconds: number): string {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (days > 0) return `${days}d ${hours}h ${minutes}m`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

function getStatusColor(status: string) {
  switch (status) {
    case "online":
    case "operational":
    case "resolved":
      return "text-green-500";
    case "degraded":
    case "identified":
    case "monitoring":
      return "text-yellow-500";
    case "offline":
    case "down":
    case "investigating":
      return "text-red-500";
    default:
      return "text-muted-foreground";
  }
}

function getStatusBg(status: string) {
  switch (status) {
    case "online":
    case "operational":
    case "resolved":
      return "bg-green-500/10";
    case "degraded":
    case "identified":
    case "monitoring":
      return "bg-yellow-500/10";
    case "offline":
    case "down":
    case "investigating":
      return "bg-red-500/10";
    default:
      return "bg-muted";
  }
}

function getStatusIcon(status: string) {
  switch (status) {
    case "online":
    case "operational":
    case "resolved":
      return CheckCircleIcon;
    case "degraded":
    case "identified":
    case "monitoring":
      return AlertCircleIcon;
    case "offline":
    case "down":
    case "investigating":
      return XCircleIcon;
    default:
      return AlertCircleIcon;
  }
}

export default function StatusPage() {
  const [status, setStatus] = useState(mockStatus);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    // In production, fetch from your API
    // const fetchStatus = async () => {
    //   const data = await statusAPI.getBotStatus();
    //   setStatus(data);
    //   setLastUpdated(new Date());
    // };
    // fetchStatus();
    // const interval = setInterval(fetchStatus, 30000);
    // return () => clearInterval(interval);

    // Simulate updates
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const StatusIcon = getStatusIcon(status.status);

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">System Status</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            OfficialX <span className="text-gradient">Status</span>
          </h1>

          {/* Overall Status */}
          <Card className={`${getStatusBg(status.status)} border-none max-w-md mx-auto`}>
            <CardContent className="p-6 flex items-center justify-center gap-4">
              <StatusIcon className={`w-12 h-12 ${getStatusColor(status.status)}`} />
              <div className="text-left">
                <p className={`text-2xl font-bold capitalize ${getStatusColor(status.status)}`}>
                  {status.status === "online" ? "All Systems Operational" : status.status}
                </p>
                <p className="text-sm text-muted-foreground">
                  Last updated: {lastUpdated.toLocaleTimeString()}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-card/50 border-border">
              <CardContent className="p-4 text-center">
                <ActivityIcon className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">{status.uptime}%</p>
                <p className="text-xs text-muted-foreground">Uptime (30 days)</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border">
              <CardContent className="p-4 text-center">
                <ClockIcon className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">{status.ping}ms</p>
                <p className="text-xs text-muted-foreground">Avg Response Time</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border">
              <CardContent className="p-4 text-center">
                <ServerIcon className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">{status.servers.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">Protected Servers</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border">
              <CardContent className="p-4 text-center">
                <ClockIcon className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">{formatUptime(status.uptimeSeconds)}</p>
                <p className="text-xs text-muted-foreground">Current Uptime</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Uptime History */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle>Uptime History (Last 7 Days)</CardTitle>
              <CardDescription>Daily uptime percentage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-1 h-12">
                {status.uptimeHistory.map((day, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className={`flex-1 w-full rounded ${
                        day.uptime === 100 ? "bg-green-500" :
                        day.uptime >= 99 ? "bg-yellow-500" : "bg-red-500"
                      }`}
                      title={`${day.date}: ${day.uptime}%`}
                    />
                    <span className="text-xs text-muted-foreground">{day.date}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle>Services</CardTitle>
              <CardDescription>Current status of all OfficialX services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {status.services.map((service) => {
                const Icon = getStatusIcon(service.status);
                return (
                  <div key={service.name} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${getStatusColor(service.status)}`} />
                      <span className="font-medium">{service.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">{service.uptime}% uptime</span>
                      <Badge className={`${getStatusBg(service.status)} ${getStatusColor(service.status)} border-none capitalize`}>
                        {service.status}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Shards */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle>Bot Shards</CardTitle>
              <CardDescription>Status of individual bot shards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {status.shards.map((shard) => {
                  const Icon = getStatusIcon(shard.status);
                  return (
                    <div key={shard.id} className={`p-3 rounded-lg ${getStatusBg(shard.status)} text-center`}>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Icon className={`w-4 h-4 ${getStatusColor(shard.status)}`} />
                        <span className="font-semibold">Shard {shard.id}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{shard.ping}ms</p>
                      <p className="text-xs text-muted-foreground">{shard.servers.toLocaleString()} servers</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle>Recent Incidents</CardTitle>
              <CardDescription>Past incidents and their resolutions</CardDescription>
            </CardHeader>
            <CardContent>
              {status.incidents.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <CheckCircleIcon className="w-12 h-12 mx-auto mb-4 text-green-500" />
                  <p>No recent incidents</p>
                  <p className="text-sm">Last incident was {status.lastIncident}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {status.incidents.map((incident) => (
                    <div key={incident.id} className="p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold">{incident.title}</h4>
                        <Badge className={`${getStatusBg(incident.status)} ${getStatusColor(incident.status)} border-none capitalize`}>
                          {incident.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{incident.description}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(incident.createdAt).toLocaleDateString()} - {new Date(incident.resolvedAt).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 text-center p-8">
            <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Join our Discord server to receive real-time status updates and incident notifications.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-md font-medium transition-colors"
            >
              Join Discord Server
            </a>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
