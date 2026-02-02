"use client";

import { motion } from "framer-motion";
import { Compass, PenTool, Users, BarChart } from "lucide-react";
import { useCausality } from "../_context/CausalityContext";
import ResolutionReveal from "./ResolutionReveal";

const pillars = [
    {
        title: "Social Strategy & Positioning",
        tagline: "Clear narratives for the right people on the right channels",
        icon: Compass,
        color: "text-blue-400",
        covers: [
            "Audience and community research",
            "Social brand positioning",
            "Channel strategy",
            "Content pillars & messaging",
            "Campaign/launch roadmaps"
        ],
        examples: [
            "Repositioning Brand LinkedIn",
            "Channel Roles (IG, TikTok, YT)",
            "90-day Launch Plans"
        ]
    },
    {
        title: "Content Systems & Storytelling",
        tagline: "Consistent, on-brand content that doesn't burn out your team",
        icon: PenTool,
        color: "text-purple-400",
        covers: [
            "Content calendars & systems",
            "Visual social design systems",
            "Short-form video & threads",
            "Repurposing workflows",
            "UGC & creator integration"
        ],
        examples: [
            "Always-on 3-5 channel calendar",
            "Recurring Reels/Shorts series",
            "Long-form to Multi-channel"
        ]
    },
    {
        title: "Community Design & Management",
        tagline: "Spaces where your audience actually wants to show up",
        icon: Users,
        color: "text-pink-400",
        covers: [
            "Community strategy & journeys",
            "Platform selection (Discord/Slack)",
            "Guidelines & rituals",
            "Moderation & escalation",
            "Ambassador programs"
        ],
        examples: [
            "Product/Creator Discord servers",
            "B2B Slack Communities",
            "Tiered Ambassador Programs"
        ]
    },
    {
        title: "Social Intelligence & Growth Ops",
        tagline: "Data-informed growth without chasing vanity metrics",
        icon: BarChart,
        color: "text-green-400",
        covers: [
            "Analytics reporting frameworks",
            "Dashboard creation",
            "Experiment design (A/B testing)",
            "Audience feedback loops",
            "Growth experiments"
        ],
        examples: [
            "Deep Engagement Reports",
            "Hook & Format Experiments",
            "Integrated Data Dashboards"
        ]
    }
];

export default function DomainPillars() {
    const { triggerTrail } = useCausality();

    const handleMouseEnter = (e: React.MouseEvent, targetId: string) => {
        const rect = e.currentTarget.getBoundingClientRect();
        triggerTrail(rect.left + rect.width / 2, rect.top + rect.height / 2, targetId);
    };

    return (
        <section className="py-24 px-6 bg-muted/20">
            <div className="container max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
                        Our Social & Community Domains
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        We design social and community systems that work together—from strategy and content, to community operations and growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillars.map((pillar, index) => (
                        <ResolutionReveal
                            key={index}
                            delay={index * 0.1}
                            className="h-full"
                        >
                            <div
                                onMouseEnter={(e) => handleMouseEnter(e, "lifecycle")}
                                className="bg-card border border-white/5 rounded-3xl p-6 group hover:border-accent/30 transition-all flex flex-col h-full hover:shadow-[0_0_20px_rgba(37,99,235,0.1)]"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${pillar.color}`}>
                                    <pillar.icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-xl font-bold mb-3 leading-tight">{pillar.title}</h3>
                                <p className="text-sm text-accent font-medium mb-6 italic border-l-2 border-accent/20 pl-3">
                                    &quot;{pillar.tagline}&quot;
                                </p>

                                <div className="space-y-6 flex-grow">
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Covers</h4>
                                        <ul className="space-y-2">
                                            {pillar.covers.map((item, i) => (
                                                <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                                                    <span className="w-1 h-1 bg-white/20 rounded-full mt-2" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-6 border-t border-white/5">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Examples</h4>
                                        <ul className="space-y-2">
                                            {pillar.examples.map((item, i) => (
                                                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                                    <span className="w-1 h-1 bg-accent/40 rounded-full mt-2" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </ResolutionReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
