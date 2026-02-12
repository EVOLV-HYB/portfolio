"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Wrench, Gauge, Rocket } from "lucide-react";

const phases = [
    {
        icon: Search,
        title: "Discovery & System Mapping",
        description: "We audit your operations to identify bottlenecks, inefficiencies, and integration points.",
        color: "text-blue-400"
    },
    {
        icon: PenTool,
        title: "Architecture & Platform Design",
        description: "We design the system blueprint—modular, scalable, and built for your specific needs.",
        color: "text-cyan-400"
    },
    {
        icon: Wrench,
        title: "Build & Integrate",
        description: "Our engineers build the platform and integrate it seamlessly with your existing stack.",
        color: "text-violet-400"
    },
    {
        icon: Gauge,
        title: "Automate & Optimize",
        description: "We eliminate manual processes and optimize for performance, security, and reliability.",
        color: "text-amber-400"
    },
    {
        icon: Rocket,
        title: "Scale & Evolve",
        description: "We ensure your platform grows with you—adding features, capacity, and intelligence over time.",
        color: "text-green-400"
    }
];

export default function PlatformLifecycle() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
    const yOrbs = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section id="methodology" ref={containerRef} className="py-32 px-6 bg-muted/30 relative overflow-hidden">
            {/* Cinematic background parallax elements */}
            <motion.div
                className="absolute inset-0 opacity-20 pointer-events-none will-change-transform"
                style={{ y: yOrbs }}
            >
                <div className="absolute top-40 left-[-10%] w-96 h-96 bg-blue-500/10 rounded-full blur-[60px]" />
                <div className="absolute bottom-40 right-[-10%] w-96 h-96 bg-violet-500/10 rounded-full blur-[60px]" />
            </motion.div>

            <motion.div
                className="container max-w-6xl mx-auto relative z-10 will-change-transform"
                style={{ y: yContent, opacity }}
            >
                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
                    >
                        Methodology
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 uppercase">
                        From Idea to Living Platform
                    </h2>
                    <p className="text-muted-foreground text-xl max-w-3xl mx-auto font-light">
                        Our proven methodology for building platforms that last.
                    </p>
                </div>

                {/* Desktop: Horizontal Timeline */}
                <div className="hidden lg:block relative">
                    {/* Timeline line */}
                    <div className="absolute top-12 left-0 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-accent via-accent to-accent/50 rounded-full"
                            style={{
                                scaleX: useTransform(scrollYProgress, [0.2, 0.8], [0, 1]),
                                transformOrigin: "left"
                            }}
                        />
                    </div>

                    <div className="grid grid-cols-5 gap-4 relative">
                        {phases.map((phase, index) => (
                            <motion.div
                                key={phase.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative"
                            >
                                {/* Node */}
                                <div className="flex justify-center mb-8">
                                    <motion.div
                                        className="w-24 h-24 rounded-2xl bg-card/80 backdrop-blur-md border border-white/10 flex items-center justify-center relative z-10 group hover:border-accent/50 transition-all shadow-xl"
                                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                                    >
                                        <phase.icon className={`w-10 h-10 ${phase.color}`} />
                                        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-black">
                                            {index + 1}
                                        </div>
                                        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
                                    </motion.div>
                                </div>

                                <div className="text-center">
                                    <h3 className="text-lg font-black mb-3 uppercase tracking-tight leading-tight">
                                        {phase.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                                        {phase.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile: Vertical Timeline */}
                <div className="lg:hidden space-y-8">
                    {phases.map((phase, index) => (
                        <motion.div
                            key={phase.title}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex gap-6"
                        >
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-2xl bg-card/80 backdrop-blur-md border border-white/10 flex items-center justify-center shrink-0 relative">
                                    <phase.icon className={`w-7 h-7 ${phase.color}`} />
                                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-black">
                                        {index + 1}
                                    </div>
                                </div>
                                {index < phases.length - 1 && (
                                    <div className="w-px h-full bg-white/5 mt-4" />
                                )}
                            </div>

                            <div className="flex-1 pb-8">
                                <h3 className="text-xl font-black mb-2 uppercase tracking-tight leading-tight">
                                    {phase.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed font-light">
                                    {phase.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
