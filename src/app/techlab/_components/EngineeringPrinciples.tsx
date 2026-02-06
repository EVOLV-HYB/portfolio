"use client";

import { motion } from "framer-motion";
import { Network, Zap, Shield, TrendingUp } from "lucide-react";
import { useRef } from "react";

const principles = [
    {
        icon: Network,
        title: "Systems Over Silos",
        description: "We build interconnected platforms, not isolated tools.",
        gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
        icon: Zap,
        title: "Automation First",
        description: "Manual processes are technical debt. We eliminate them.",
        gradient: "from-violet-500/20 to-purple-500/20"
    },
    {
        icon: Shield,
        title: "Security & Scalability by Design",
        description: "Built to handle growth without breaking under pressure.",
        gradient: "from-amber-500/20 to-orange-500/20"
    },
    {
        icon: TrendingUp,
        title: "Built to Evolve, Not Replace",
        description: "Platforms that adapt to change, not become obsolete.",
        gradient: "from-green-500/20 to-emerald-500/20"
    }
];

export default function EngineeringPrinciples() {
    // We keep the ref in case you need it for other observers, 
    // but the scroll-linked transform logic is gone.
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section ref={sectionRef} className="py-32 px-6 relative overflow-hidden bg-background z-20">
            <motion.div className="container max-w-6xl mx-auto relative z-10">
                {/* Editorial header */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="h-px w-12 bg-accent" />
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Philosophy</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-black tracking-tighter mb-6 uppercase leading-[0.9]"
                    >
                        Engineering<br />
                        <span className="text-accent underline decoration-accent/30 underline-offset-8">Principles</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-xl max-w-2xl font-light"
                    >
                        The foundation of every platform we build. These aren&apos;t buzzwords—they&apos;re architectural decisions.
                    </motion.p>
                </div>

                {/* Cinematic grid with stagger */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {principles.map((principle, index) => (
                        <motion.div
                            key={principle.title}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.15,
                                duration: 0.8,
                                type: "spring",
                                stiffness: 100
                            }}
                            className="group relative bg-card/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:border-accent/40 transition-all duration-500 overflow-hidden"
                        >
                            {/* Cinematic gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                            {/* Architectural accent line */}
                            <motion.div
                                className="absolute top-0 left-0 right-0 h-0.5 bg-accent/30"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 + 0.3, duration: 0.8 }}
                            />

                            <div className="relative z-10">
                                {/* Icon with cinematic glow */}
                                <motion.div
                                    className="relative w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 overflow-hidden shadow-lg"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-accent/20 blur-xl"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.5, 0.8, 0.5]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                    <principle.icon className="w-7 h-7 text-accent relative z-10" />
                                </motion.div>

                                <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">
                                    {principle.title}
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed font-light">
                                    {principle.description}
                                </p>
                            </div>

                            {/* Number indicator */}
                            <motion.div
                                className="absolute bottom-8 right-8 text-6xl font-black text-accent/10 group-hover:text-accent/20 transition-colors"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 + 0.5 }}
                            >
                                0{index + 1}
                            </motion.div>

                            {/* Corner accent */}
                            <div className="absolute top-0 right-0 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity">
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <motion.path
                                        d="M 0 0 L 100 0 L 100 100"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="0.5"
                                        className="text-accent"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 + 0.6, duration: 0.8 }}
                                    />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}