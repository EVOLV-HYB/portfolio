"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Workflow,
    Globe,
    Server,
    Code2,
    Sparkles,
    ChevronRight,
    Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const domains = [
    {
        title: "Automation Engineering",
        tagline: "Turning operations into self-running systems",
        icon: Workflow,
        description: "We eliminate manual overhead by designing intelligent automation that scales with your business.",
        capabilities: [
            "Business process automation",
            "Workflow orchestration",
            "AI-assisted decision pipelines",
            "System integrations"
        ],
        examples: [
            "Automated onboarding",
            "Smart approval workflows"
        ],
        color: "bg-blue-500/10",
        border: "border-blue-500/20",
        iconColor: "text-blue-400",
    },
    {
        title: "Web Experience",
        tagline: "High-performance digital experiences with intent",
        icon: Globe,
        description: "We craft web experiences that convert, engage, and perform at scale.",
        capabilities: [
            "Marketing & product websites",
            "Interactive landing pages",
            "Performance-optimized frontend",
            "Motion + storytelling"
        ],
        examples: [
            "Agency websites",
            "Product launches"
        ],
        color: "bg-cyan-500/10",
        border: "border-cyan-500/20",
        iconColor: "text-cyan-400",
    },
    {
        title: "Platform Engineering",
        tagline: "Scalable platforms built for long-term evolution",
        icon: Server,
        description: "We architect robust platforms that grow with your organization's ambitions.",
        capabilities: [
            "Internal platforms",
            "SaaS foundations",
            "Microservices & modular systems",
            "Authentication and roles"
        ],
        examples: [
            "Admin panels",
            "Multi-tenant platforms"
        ],
        color: "bg-violet-500/10",
        border: "border-violet-500/20",
        iconColor: "text-violet-400",
    },
    {
        title: "Custom Solutions",
        tagline: "Software shaped around the business needs",
        icon: Code2,
        description: "We build bespoke tools that solve your unique operational challenges.",
        capabilities: [
            "Internal tools",
            "Enterprise software",
            "Data-driven systems",
            "API-first development"
        ],
        examples: [
            "CRM alternatives",
            "Operational dashboards"
        ],
        color: "bg-amber-500/10",
        border: "border-amber-500/20",
        iconColor: "text-amber-400",
    },
];

export default function PlatformDomains() {
    const targetRef = useRef<HTMLDivElement>(null);

    // Track scroll progress of the target section
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Map scroll progress to horizontal movement
    // We have 4 cards, so we move -75% to show the last one fully if cards are 100vw, 
    // but here we use gaps and fixed widths, so we'll move by percentage of the container.
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

    return (
        <section ref={targetRef} className="relative h-[400vh] bg-[#050505] z-10">
            {/* The Sticky Wrapper */}
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Architectural Background */}
                <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

                {/* Section Header (Fixed in place) */}
                <motion.div
                    style={{
                        opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]),
                        x: useTransform(scrollYProgress, [0, 0.2], [0, -50])
                    }}
                    className="absolute top-20 left-6 md:left-12 z-20 pointer-events-none"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <div className="h-px w-8 bg-blue-500" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500">Core Capabilities</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-7xl font-black uppercase text-white leading-[0.9] tracking-tighter">
                        Multi-Domain <br />
                        <span className="text-blue-500">Expertise</span>
                    </h2>
                    <p className="text-white/40 mt-6 uppercase tracking-[0.2em] text-[10px] font-bold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        Scroll to explore domains
                    </p>
                </motion.div>

                {/* The Horizontal Moving Track */}
                <motion.div style={{ x }} className="flex gap-12 px-12 md:pl-[600px] md:pr-48">
                    {domains.map((domain, index) => (
                        <div
                            key={index}
                            className={cn(
                                "group relative h-[550px] w-[320px] md:w-[500px] shrink-0 overflow-hidden rounded-[32px] border backdrop-blur-md transition-all duration-500 p-8 flex flex-col justify-between",
                                domain.border,
                                domain.color,
                                "bg-black/40 hover:bg-black/60 hover:border-blue-500/40"
                            )}
                        >
                            <div>
                                <div className={cn("p-4 rounded-2xl bg-white/5 inline-flex mb-8", domain.iconColor)}>
                                    <domain.icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2">
                                    {domain.title}
                                </h3>
                                <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-6">
                                    {domain.tagline}
                                </p>
                                <p className="text-white/60 font-light leading-relaxed mb-8">
                                    {domain.description}
                                </p>

                                <div className="space-y-4">
                                    <h4 className="text-[10px] uppercase tracking-widest text-white/40 flex items-center gap-2">
                                        <div className="w-4 h-px bg-white/20" />
                                        Key Capabilities
                                    </h4>
                                    <ul className="grid grid-cols-1 gap-2">
                                        {domain.capabilities.map((cap, i) => (
                                            <li key={i} className="flex items-center gap-2 text-[13px] text-white/80 font-medium">
                                                <Sparkles className="w-3 h-3 text-blue-500" />
                                                {cap}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                                <div className="flex flex-wrap gap-2">
                                    {domain.examples.map((ex, i) => (
                                        <span key={i} className="text-[9px] px-2 py-1 bg-white/5 rounded-full border border-white/10 text-white/40 uppercase font-bold">
                                            {ex}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2 text-white/20 group-hover:text-blue-400 transition-colors">
                                    <ChevronRight className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                                <Zap className="w-24 h-24 text-blue-500" />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Release indicator for next section */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronRight className="w-4 h-4 rotate-90" />
                </motion.div>
                Continue Scrolling
            </div>
        </section>
    );
}