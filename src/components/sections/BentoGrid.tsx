"use client";

import { motion } from "framer-motion";
import {
    BarChart3,
    Code2,
    Layout,
    MessageSquare,
    Share2,
    Cpu
} from "lucide-react";
import { cn } from "@/lib/utils";

const domains = [
    {
        title: "Content and Creative Systems",
        description: "Architecting high-volume content engines that drive authority without manual overhead.",
        icon: MessageSquare,
        className: "md:col-span-2",
        color: "from-blue-500/10 to-transparent"
    },
    {
        title: "Social Media and Community Management",
        description: "Systematic distribution protocols that scale reach and resonance across every platform.",
        icon: Share2,
        className: "md:col-span-1",
        color: "from-blue-600/10 to-transparent"
    },
    {
        title: "Marketing Infrastructure",
        description: "The plumbing of growth. CRM, automation, and funnel orchestration built for scale.",
        icon: BarChart3,
        className: "md:col-span-1",
        color: "from-blue-700/10 to-transparent"
    },
    {
        title: "Web & Platform Engineering",
        description: "High-performance digital foundations. Fast, accessible, and system-integrated.",
        icon: Code2,
        className: "md:col-span-2",
        color: "from-blue-400/10 to-transparent"
    },
    {
        title: "Product and Startup Building",
        description: "From concept to MVP to scale. We build tools that solve specific operational needs.",
        icon: Cpu,
        className: "md:col-span-1",
        color: "from-blue-800/10 to-transparent"
    },
    {
        title: "Consulting & Advisory",
        description: "Partner-level strategy to navigate bottlenecks and architect growth loops.",
        icon: Layout,
        className: "md:col-span-2",
        color: "from-blue-900/10 to-transparent"
    }
];

export default function BentoGrid() {
    return (
        <section id="domains" className="py-32 px-6">
            <div className="container max-w-6xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase">
                        Multi-Domain Expertise
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Nothing works in isolation. We solve across domains because bottlenecks don&apos;t respect departments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {domains.map((domain, index) => (
                        <motion.div
                            key={domain.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={cn(
                                "group relative bg-card border border-white/5 rounded-3xl p-8 overflow-hidden transition-all hover:border-accent/30",
                                domain.className
                            )}
                        >
                            <div className={cn(
                                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity",
                                domain.color
                            )} />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <domain.icon className="w-6 h-6 text-accent" />
                                </div>

                                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{domain.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {domain.description}
                                </p>

                                <div className="mt-8 pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-2">
                                        System Interconnect <span className="w-8 h-px bg-accent/30" />
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
