"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiPython,
    SiPostgresql,
    SiMongodb,
    SiDocker,
    SiKubernetes,
    SiVercel
} from "react-icons/si";
import { Code2, Server, Workflow, Cloud } from "lucide-react";
import { FaAws } from "react-icons/fa";
const techStack = {
    frontend: {
        title: "Frontend",
        icon: Code2,
        color: "from-blue-500/20 to-cyan-500/20",
        technologies: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" }
        ]
    },
    backend: {
        title: "Backend",
        icon: Server,
        color: "from-violet-500/20 to-purple-500/20",
        technologies: [
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
        ]
    },
    automation: {
        title: "Automation",
        icon: Workflow,
        color: "from-amber-500/20 to-orange-500/20",
        technologies: [
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" }
        ]
    },
    cloud: {
        title: "Cloud & Infrastructure",
        icon: Cloud,
        color: "from-green-500/20 to-emerald-500/20",
        technologies: [
            { name: "AWS", icon: FaAws, color: "#FF9900" },
            { name: "Vercel", icon: SiVercel, color: "#000000" }
        ]
    }
};

export default function TechStack() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={sectionRef} className="py-32 px-6 bg-muted/30 relative overflow-hidden">
            {/* Cinematic floating orbs */}
            <motion.div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{ y }}
            >
                <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
            </motion.div>

            {/* Architectural grid */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(37, 99, 235, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 99, 235, 0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px'
                }} />
            </div>

            <motion.div
                className="container max-w-6xl mx-auto relative z-10"
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
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Technology Stack</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-black tracking-tighter mb-6 uppercase leading-[0.9]"
                    >
                        Technologies We<br />
                        <span className="text-accent">Engineer With</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-xl max-w-3xl font-light"
                    >
                        Modern, battle-tested tools for building scalable platforms. We choose technologies based on performance, maintainability, and ecosystem maturity.
                    </motion.p>
                </div>

                {/* Cinematic grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.entries(techStack).map(([key, category], categoryIndex) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: categoryIndex * 0.1,
                                duration: 0.8,
                                ease: [0.25, 0.4, 0.25, 1]
                            }}
                            className="relative bg-card/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 overflow-hidden group hover:border-accent/30 transition-all duration-500"
                        >
                            {/* Gradient overlay */}
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                            />

                            {/* Architectural accent */}
                            <motion.div
                                className="absolute top-0 left-0 right-0 h-0.5 bg-accent/30"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: categoryIndex * 0.1 + 0.3, duration: 0.8 }}
                            />

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <motion.div
                                        className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <category.icon className="w-6 h-6 text-accent" />
                                    </motion.div>
                                    <h3 className="text-2xl font-black uppercase tracking-tight">
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {category.technologies.map((tech, techIndex) => (
                                        <motion.div
                                            key={tech.name}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: categoryIndex * 0.1 + techIndex * 0.05,
                                                type: "spring",
                                                stiffness: 200
                                            }}
                                            whileHover={{
                                                scale: 1.05,
                                                y: -5
                                            }}
                                            className="relative flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-accent/30 transition-all group/tech cursor-pointer overflow-hidden"
                                        >
                                            {/* Hover glow */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover/tech:opacity-100 transition-opacity"
                                            />

                                            <tech.icon
                                                className="w-8 h-8 shrink-0 group-hover/tech:scale-110 transition-transform relative z-10"
                                                style={{ color: tech.color }}
                                            />
                                            <span className="font-bold text-sm relative z-10">{tech.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
