"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Building2, BarChart3, Users, Database, Code, Sparkles } from "lucide-react";
import { useState, useRef, useEffect, MouseEvent } from "react";
import { cn } from "@/lib/utils";

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

function UseCaseCard({ useCase, index }: { useCase: typeof useCases[0], index: number }) {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    // Cursor-driven 3D tilt
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

    // Icon counter-motion
    const iconX = useSpring(useTransform(mouseX, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });
    const iconY = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });

    const handleMouseMove = (e: MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
    };

    // Entrance variants
    const entranceVariants = {
        hidden: {
            opacity: 0,
            y: index % 2 === 0 ? 40 : 20,
            scale: index % 3 === 1 ? 0.96 : 1
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1] as [number, number, number, number],
                delay: index * 0.14
            }
        }
    };

    return (
        <motion.div
            ref={cardRef}
            variants={entranceVariants}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: "preserve-3d",
            }}
            className={cn(
                "group relative bg-[#0a0a0a] backdrop-blur-sm border border-white/5 rounded-[32px] p-8 overflow-hidden transition-all duration-500 cursor-pointer",
                isHovered ? "border-blue-500/20 -translate-y-[6px]" : ""
            )}
        >
            {/* Box shadow intensify on hover */}
            <div className={cn(
                "absolute inset-0 transition-opacity duration-500 pointer-events-none",
                isHovered ? "opacity-100 shadow-[0_20px_50px_-12px_rgba(37,99,235,0.15)]" : "opacity-0"
            )} />

            {/* Diagonal highlight sweep */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ left: "-100%", top: "-100%" }}
                        animate={{ left: "100%", top: "100%" }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute h-[250%] w-[100px] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent rotate-45 pointer-events-none z-20"
                    />
                )}
            </AnimatePresence>

            {/* Border glow */}
            <div className={cn(
                "absolute inset-0 border border-blue-500/20 rounded-[32px] transition-opacity duration-700 pointer-events-none",
                isHovered ? "opacity-100" : "opacity-0"
            )} />

            <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
                {/* Icon with cinematic reveal */}
                <motion.div
                    style={{ x: iconX, y: iconY }}
                    className="relative w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 overflow-hidden"
                >
                    <motion.div
                        className="absolute inset-0 bg-blue-500/10 blur-xl"
                        animate={isHovered ? {
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.6, 0.3]
                        } : {}}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.div
                        animate={isHovered ? { rotate: [0, -3, 0] } : {}}
                        transition={{ duration: 0.4 }}
                    >
                        <useCase.icon className="w-7 h-7 text-blue-500 relative z-10" />
                    </motion.div>
                </motion.div>

                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight leading-tight text-white/90">
                    {useCase.title}
                </h3>
                <p className="text-white/40 leading-relaxed mb-6 font-light text-sm">
                    {useCase.description}
                </p>

                {/* Tags with "wake up" animation */}
                <div className="flex flex-wrap gap-2">
                    {useCase.tags.map((tag, i) => (
                        <motion.span
                            key={i}
                            animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0.7, scale: 0.98 }}
                            transition={{ delay: i * 0.04 }}
                            className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/5 group-hover:border-blue-500/20 transition-colors flex items-center gap-1.5 text-white/60"
                        >
                            <Sparkles className="w-2.5 h-2.5 text-blue-500" />
                            {tag}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function UseCases() {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Background and Section Parallax
    const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const orbsY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const exitOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0.6]);
    const exitScale = useTransform(scrollYProgress, [0.8, 1], [1, 0.98]);

    return (
        <section
            ref={sectionRef}
            className="py-32 px-6 relative overflow-hidden bg-[#050505]"
        >
            {/* Cinematic Background with slow parallax */}
            <motion.div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ y: orbsY }}
            >
                <div className="absolute top-20 left-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-20 right-[-5%] w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px]" />
                <motion.div className="absolute inset-0 grid-pattern opacity-[0.03]" style={{ y: gridY }} />
            </motion.div>

            <motion.div
                className="container max-w-7xl mx-auto relative z-10"
                style={{ opacity: exitOpacity, scale: exitScale }}
            >
                {/* Editorial header */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="h-px w-12 bg-blue-500" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500">Selection</span>
                    </motion.div>

                    <div className="overflow-hidden mb-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                            className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-white flex flex-col md:flex-row md:items-center gap-x-6"
                        >
                            <span>What We</span>
                            <span className="relative text-blue-500">
                                Build
                                {/* Horizontal light sweep */}
                                <motion.div
                                    initial={{ left: "-100%" }}
                                    whileInView={{ left: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6, duration: 1.2, ease: "easeInOut" }}
                                    className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-full w-[50%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                                />
                            </span>
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.6 }}
                        className="text-white/40 text-xl max-w-2xl font-light leading-relaxed"
                    >
                        Real-world platforms solving real operational challenges. Each solution is architected for scale, security, and long-term evolution.
                    </motion.p>
                </div>

                {/* Cinematic grid with asymmetric entrance */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {useCases.map((useCase, index) => (
                        <UseCaseCard key={useCase.title} useCase={useCase} index={index} />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
