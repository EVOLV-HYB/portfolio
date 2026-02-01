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
    SiVercel,
    SiFigma,
    SiAdobexd,
    SiGraphql,
    SiRedis,
    SiSupabase,
    SiFirebase
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const technologies = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "AWS", icon: FaAws, color: "#FF9900" },
    { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Adobe XD", icon: SiAdobexd, color: "#FF61F6" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "Redis", icon: SiRedis, color: "#DC382D" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" }
];

// Duplicate items for a seamless loop
const marqueeItems = [...technologies, ...technologies, ...technologies];

export default function TechStack() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    return (
        <section ref={sectionRef} className="py-24 bg-muted/30 relative overflow-hidden">
            {/* Cinematic background elements */}
            <motion.div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{ y }}
            >
                <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
            </motion.div>

            {/* Architectural grid overlay */}
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
                className="relative z-10"
                style={{ opacity }}
            >
                {/* Header Section */}
                <div className="container max-w-6xl mx-auto px-6 mb-20 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center md:justify-start gap-4 mb-6"
                    >
                        <div className="h-px w-12 bg-accent" />
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Our Arsenal</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-black tracking-tighter mb-8 uppercase leading-[0.9]"
                    >
                        Built With Modern<br />
                        <span className="text-accent underline decoration-accent/30 underline-offset-8">Battle-Tested Tech</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-xl max-w-3xl font-light mx-auto md:mx-0"
                    >
                        Leveraging high-performance, industry-leading tools to deliver scalable and resilient digital solutions.
                    </motion.p>
                </div>

                {/* Marquee Container */}
                <div className="relative mt-10">
                    {/* Gradient Masks for smooth edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 md:w-60 bg-gradient-to-r from-muted/30 to-transparent z-20 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 md:w-60 bg-gradient-to-l from-muted/30 to-transparent z-20 pointer-events-none" />

                    <div className="flex overflow-hidden py-10">
                        <motion.div
                            className="flex gap-8 md:gap-16 items-center flex-nowrap"
                            animate={{
                                x: ["0%", "-33.33%"]
                            }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            style={{ width: "fit-content" }}
                        >
                            {marqueeItems.map((tech, index) => (
                                <div
                                    key={`${tech.name}-${index}`}
                                    className="flex items-center gap-4 px-6 py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-accent/30 transition-all group cursor-pointer"
                                >
                                    <div className="relative flex items-center justify-center w-8 h-8 md:w-12 md:h-12">
                                        {/* Tech Icon */}
                                        <tech.icon
                                            className="w-full h-full transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12"
                                            style={{ color: tech.color }}
                                        />
                                        {/* Glow effect on hover */}
                                        <div
                                            className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                                            style={{ backgroundColor: tech.color }}
                                        />
                                    </div>
                                    <span className="text-lg md:text-2xl font-black uppercase tracking-tight whitespace-nowrap bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
