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
    SiFirebase,
    SiRedux,
    SiJest,
    SiCypress,
    SiTerraform,
    SiGooglecloud,
    SiElasticstack
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
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "Jest", icon: SiJest, color: "#C21325" },
    { name: "Cypress", icon: SiCypress, color: "#17202C" },
    { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
    { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
    { name: "ELK Stack", icon: SiElasticstack, color: "#005571" }
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
        <section ref={sectionRef} className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Cinematic background elements */}
            <motion.div
                className="absolute inset-0 opacity-30 pointer-events-none will-change-transform"
                style={{ y }}
            >
                <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[60px]" />
                <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[60px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-[60px]" />
            </motion.div>

            {/* Architectural grid overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 grid-pattern" />
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
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Our Arsenal</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-8xl font-black tracking-tighter mb-8 uppercase leading-[0.85] text-white"
                    >
                        Built With Modern<br />
                        <span className="text-accent">Battle-Tested Tech</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/40 text-xl max-w-3xl font-light mx-auto md:mx-0 leading-relaxed"
                    >
                        Leveraging high-performance, industry-leading tools to deliver scalable and resilient digital solutions.
                    </motion.p>
                </div>

                {/* Marquee Container */}
                <div className="relative mt-10">
                    {/* Gradient Masks for smooth edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 md:w-[20%] bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 md:w-[20%] bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />

                    <div className="flex overflow-hidden py-20 will-change-transform">
                        <motion.div
                            className="flex gap-12 md:gap-24 items-center flex-nowrap accelerate"
                            animate={{
                                x: ["0%", "-33.33%"]
                            }}
                            transition={{
                                duration: 40,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            style={{ width: "fit-content" }}
                        >
                            {marqueeItems.map((tech, index) => (
                                <div
                                    key={`${tech.name}-${index}`}
                                    className="flex items-center gap-6 group cursor-crosshair"
                                >
                                    <div className="relative flex items-center justify-center w-12 h-12 md:w-20 md:h-20">
                                        {/* Tech Icon */}
                                        <tech.icon
                                            /*className="w-full h-full transition-all duration-700 opacity-40 group-hover:opacity-80 group-hover:scale-70 grayscale group-hover:grayscale-0"*/
                                            className="w-full h-full transition-all duration-700 opacity-80 scale-70 grayscale-0  "
                                            style={{ color: tech.color }}
                                        />
                                        {/* Glow effect on hover */}
                                        <div
                                            className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"
                                            style={{ backgroundColor: tech.color }}
                                        />
                                    </div>
                                    <span className="text-3xl md:text-4xl font-black uppercase tracking-tight whitespace-nowrap  group-hover:opacity-100 transition-all duration-700 text-white leading-none">
                                        {tech.name}
                                    </span>

                                    {/* Separator Dot */}
                                    <div className="w-2 h-2 rounded-full bg-white/5 mx-4 md:mx-0" />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
