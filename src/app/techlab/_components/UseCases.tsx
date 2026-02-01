"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, BarChart3, Users, Database, Code, Sparkles } from "lucide-react";
import { useState, useRef } from "react";

const useCases = [
    {
        icon: Building2,
        title: "Internal Operations Platforms",
        description: "Centralized systems that unify workflows, data, and teams across your organization.",
        tags: ["Workflow Management", "Process Automation", "Team Collaboration"],
        gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
        icon: BarChart3,
        title: "Automation Dashboards",
        description: "Real-time visibility into automated processes with intelligent monitoring and alerts.",
        tags: ["Real-time Analytics", "Smart Alerts", "Performance Tracking"],
        gradient: "from-violet-500/20 to-purple-500/20"
    },
    {
        icon: Users,
        title: "Customer-Facing Portals",
        description: "Self-service platforms that empower your customers while reducing support overhead.",
        tags: ["Self-Service", "User Management", "Custom Branding"],
        gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
        icon: Database,
        title: "Data & Analytics Systems",
        description: "Transform raw data into actionable intelligence with custom analytics platforms.",
        tags: ["Data Pipelines", "Custom Reports", "Predictive Analytics"],
        gradient: "from-amber-500/20 to-orange-500/20"
    },
    {
        icon: Code,
        title: "Developer Platforms",
        description: "API-first platforms and internal tools that accelerate your engineering teams.",
        tags: ["API Management", "Developer Tools", "CI/CD Integration"],
        gradient: "from-green-500/20 to-emerald-500/20"
    }
];

export default function UseCases() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
            {/* Cinematic gradient overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none"
                style={{ y }}
            />

            {/* Architectural lines */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            </div>

            <motion.div
                className="container max-w-7xl mx-auto relative z-10"
                style={{ opacity }}
            >
                {/* Editorial header */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="h-px w-12 bg-accent" />
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Use Cases</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-black tracking-tighter mb-6 uppercase leading-[0.9]"
                    >
                        What We<br />
                        <span className="text-accent">Build</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-xl max-w-3xl font-light"
                    >
                        Real-world platforms solving real operational challenges. Each solution is architected for scale, security, and long-term evolution.
                    </motion.p>
                </div>

                {/* Cinematic grid with 3D effects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={useCase.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.8,
                                ease: [0.25, 0.4, 0.25, 1]
                            }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            className="group relative bg-card/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 overflow-hidden hover:border-accent/40 transition-all duration-500 cursor-pointer"
                            style={{
                                transform: hoveredIndex === index
                                    ? "perspective(1000px) rotateX(-2deg) rotateY(2deg) translateZ(20px)"
                                    : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
                                transition: "transform 0.5s cubic-bezier(0.25, 0.4, 0.25, 1)"
                            }}
                        >
                            {/* Cinematic gradient background */}
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                                initial={false}
                            />

                            {/* Glow effect on hover */}
                            {hoveredIndex === index && (
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent pointer-events-none"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            )}

                            <div className="relative z-10">
                                {/* Icon with cinematic reveal */}
                                <motion.div
                                    className="relative w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 overflow-hidden"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-accent/20 blur-xl"
                                        animate={{
                                            scale: hoveredIndex === index ? [1, 1.3, 1] : 1,
                                            opacity: hoveredIndex === index ? [0.5, 0.9, 0.5] : 0.5
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: hoveredIndex === index ? Infinity : 0,
                                            ease: "easeInOut"
                                        }}
                                    />
                                    <useCase.icon className="w-7 h-7 text-accent relative z-10" />
                                </motion.div>

                                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight leading-tight">
                                    {useCase.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed mb-6 font-light">
                                    {useCase.description}
                                </p>

                                {/* Tags with stagger animation */}
                                <div className="flex flex-wrap gap-2">
                                    {useCase.tags.map((tag, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + 0.3 + i * 0.05 }}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium border border-white/5 group-hover:border-accent/30 transition-colors flex items-center gap-1"
                                        >
                                            <Sparkles className="w-2.5 h-2.5" />
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            {/* Architectural corner accent */}
                            <div className="absolute top-0 right-0 w-24 h-24 opacity-20 group-hover:opacity-40 transition-opacity">
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <motion.path
                                        d="M 0 0 L 100 0 L 100 100 Z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="0.5"
                                        className="text-accent"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
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
