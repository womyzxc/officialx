"use client"

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

const SearchIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.3-4.3"/>
  </svg>
);

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  // Getting Started
  {
    category: "Getting Started",
    question: "How do I add OfficialX to my Discord server?",
    answer: "Click the 'Add to Discord' button on our website. You'll be redirected to Discord where you can select the server you want to add the bot to. Make sure you have 'Manage Server' permissions on that server. Once authorized, OfficialX will join your server and you can run /security setup to configure it."
  },
  {
    category: "Getting Started",
    question: "What permissions does OfficialX need?",
    answer: "OfficialX requires Administrator permissions to function properly. This is necessary for anti-raid protection (kicking/banning users), anti-nuke prevention (managing roles and channels), and verification systems. We take security seriously and never misuse these permissions."
  },
  {
    category: "Getting Started",
    question: "How do I set up OfficialX after adding it?",
    answer: "After adding the bot, run the /security setup command in any channel. This will create the necessary roles and channels for OfficialX to function. You can then customize settings using /antiraid config, /verify setup, and other configuration commands."
  },
  {
    category: "Getting Started",
    question: "Is OfficialX free to use?",
    answer: "Yes! OfficialX offers a free tier with basic anti-raid protection, CAPTCHA verification, and 5 custom commands. For advanced features like alt detection, threat intelligence, and unlimited commands, you can upgrade to our Pro plan for $5/month."
  },

  // Anti-Raid
  {
    category: "Anti-Raid",
    question: "How does anti-raid protection work?",
    answer: "OfficialX monitors join patterns in real-time. When it detects an unusual number of users joining in a short period (configurable), it automatically triggers protection. Depending on your settings, it can kick, ban, or timeout the raiders, and optionally lock the server."
  },
  {
    category: "Anti-Raid",
    question: "What sensitivity level should I use?",
    answer: "It depends on your server size. For small servers (under 1,000 members), we recommend 'High' sensitivity (5+ joins/minute triggers). For medium servers (1,000-10,000), use 'Medium' (10+ joins/minute). For large servers, 'Low' (20+ joins/minute) prevents false positives."
  },
  {
    category: "Anti-Raid",
    question: "Can I whitelist certain users or bots?",
    answer: "Yes! Use /antiraid whitelist add @user or @bot to add users or bots to the whitelist. Whitelisted accounts are never affected by anti-raid actions, even during an active raid."
  },

  // Verification
  {
    category: "Verification",
    question: "What verification types are available?",
    answer: "OfficialX offers four verification types: CAPTCHA (image-based challenge), Button (simple button click), Reaction (react to a message), and Custom Question (answer a question you set). CAPTCHA is the most secure and recommended for most servers."
  },
  {
    category: "Verification",
    question: "How long do users have to verify?",
    answer: "You can configure the verification timeout from 5 minutes to 24 hours. Users who don't verify within this time can be kicked automatically. The default is 10 minutes."
  },
  {
    category: "Verification",
    question: "Can I customize the verification message?",
    answer: "Yes! Pro users can fully customize the verification embed including the title, description, color, and footer. You can also add your server's branding and custom instructions."
  },

  // Anti-Nuke
  {
    category: "Anti-Nuke",
    question: "What is anti-nuke protection?",
    answer: "Anti-nuke protection prevents server destruction from compromised admin accounts or malicious bots. It monitors actions like channel deletions, role deletions, mass bans, and permission changes. When limits are exceeded, OfficialX automatically reverts changes and removes the offender's permissions."
  },
  {
    category: "Anti-Nuke",
    question: "How do I add trusted users who can bypass anti-nuke?",
    answer: "Use /antinuke trust add @user to add a trusted user. Only the server owner can add trusted users, and trusted users bypass all anti-nuke checks. Be very careful about who you trust!"
  },
  {
    category: "Anti-Nuke",
    question: "What happens when anti-nuke triggers?",
    answer: "When anti-nuke triggers, OfficialX immediately: 1) Removes the offender's dangerous permissions, 2) Logs the incident, 3) Alerts staff with a @mention, 4) Optionally bans the offender. You can configure these actions in the dashboard."
  },

  // Alt Detection
  {
    category: "Alt Detection",
    question: "How does alt detection work?",
    answer: "OfficialX uses multiple signals to detect alt accounts: account age, profile completeness, join patterns, IP correlation (with VPN detection), and behavior analysis. When an alt is detected, it can be flagged, require verification, or be automatically kicked."
  },
  {
    category: "Alt Detection",
    question: "What is the minimum account age setting?",
    answer: "Minimum account age sets how old a Discord account must be to join without additional verification. Options range from 1 day to 90 days. Accounts younger than this threshold will be flagged as potential alts."
  },
  {
    category: "Alt Detection",
    question: "Does alt detection block VPN users?",
    answer: "By default, VPN users are flagged but not blocked. You can configure OfficialX to require extra verification for VPN users or block them entirely. This helps prevent raiders who use VPNs to evade IP bans."
  },

  // Dashboard
  {
    category: "Dashboard",
    question: "How do I access the dashboard?",
    answer: "Click 'Login' on our website and authenticate with Discord. Once logged in, you'll see all servers where you have 'Manage Server' permissions. Select a server to access its dashboard and configure settings."
  },
  {
    category: "Dashboard",
    question: "Can multiple admins access the dashboard?",
    answer: "Yes! Anyone with 'Manage Server' permissions on your Discord server can access the dashboard. The server owner has additional permissions like adding anti-nuke trusted users."
  },

  // Premium
  {
    category: "Premium",
    question: "What's included in the Pro plan?",
    answer: "Pro ($5/month) includes: Advanced anti-raid with ML detection, alt detection with VPN blocking, threat intelligence database access, unlimited custom commands, priority support, custom branding on verification messages, and access to the API."
  },
  {
    category: "Premium",
    question: "How do I upgrade to Pro?",
    answer: "Click 'Upgrade to Pro' on the pricing page or in your dashboard. Payment is processed securely through Stripe. Pro features are activated immediately after payment."
  },
  {
    category: "Premium",
    question: "Can I get a refund?",
    answer: "Yes, we offer a 7-day money-back guarantee. If you're not satisfied with Pro, contact support within 7 days of purchase for a full refund."
  },

  // Troubleshooting
  {
    category: "Troubleshooting",
    question: "OfficialX isn't responding to commands. What should I do?",
    answer: "First, check that OfficialX has the necessary permissions in the channel. Try running /security status to check the bot's status. If the bot is offline, check our status page. If issues persist, join our support server for help."
  },
  {
    category: "Troubleshooting",
    question: "The bot kicked legitimate users during a raid. How do I prevent this?",
    answer: "Lower your anti-raid sensitivity or increase the join threshold. You can also add known legitimate users to the whitelist before events where many people might join simultaneously."
  },
  {
    category: "Troubleshooting",
    question: "How do I report a bug or suggest a feature?",
    answer: "Join our Discord support server and use the #bug-reports or #suggestions channels. You can also email us at support@officialx.xyz. We review all feedback and continuously improve based on community input."
  },
];

const categories = [...new Set(faqs.map(faq => faq.category))];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === null || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const groupedFAQs = filteredFAQs.reduce((acc, faq) => {
    if (!acc[faq.category]) acc[faq.category] = [];
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, FAQItem[]>);

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Find answers to common questions about OfficialX. Can't find what you're looking for? Join our support server.
          </p>

          {/* Search */}
          <div className="relative max-w-md mx-auto mb-8">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border hover:bg-secondary"
              }`}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border hover:bg-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {Object.entries(groupedFAQs).map(([category, items]) => (
            <div key={category}>
              <h2 className="text-xl font-bold mb-4 text-primary">{category}</h2>
              <div className="space-y-3">
                {items.map((faq, index) => {
                  const globalIndex = faqs.findIndex(f => f.question === faq.question);
                  const isOpen = openIndex === globalIndex;

                  return (
                    <Card key={index} className="bg-card/50 border-border overflow-hidden">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full p-4 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
                      >
                        <span className="font-medium pr-4">{faq.question}</span>
                        <ChevronDownIcon
                          className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <CardContent className="pt-0 pb-4 px-4">
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No questions found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 text-center p-8">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help. Join our Discord server for live assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors"
              >
                Join Support Server
              </a>
              <a
                href="mailto:support@officialx.xyz"
                className="inline-flex items-center justify-center gap-2 border border-border hover:bg-secondary px-6 py-3 rounded-md font-medium transition-colors"
              >
                Email Support
              </a>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
