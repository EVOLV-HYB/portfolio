"use client";

import { motion } from "framer-motion";
import { Video, Camera, PenTool, Film, MoveRight } from "lucide-react";
import { useState, useEffect } from "react";

const services = [
    {
        title: "Video Shoot",
        icon: Video,
        desc: "Cinematic commercials and storytelling."
    },
    {
        title: "Photo Shoot",
        icon: Camera,
        desc: "High-end editorial and product photography."
    },
    {
        title: "Graphic Designing",
        icon: PenTool,
        desc: "Visual identity and brand systems."
    },
    {
        title: "Video Editing",
        icon: Film,
        desc: "Post-production editing and motion graphics."
    }
];

// Duplicate for marquee effect
const marqueeServices = [...services, ...services, ...services];

export default function DomainOverview() {
    const [typedText, setTypedText] = useState("");
    const fullText = "Content & Creative Lab";

    // Typewriter effect
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setTypedText(fullText.slice(0, index + 1));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 50); // Adjust speed here
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-[70vh] flex flex-col justify-center items-center bg-[#0a0a0a] relative overflow-hidden pt-32 pb-16">

            {/* Background Details */}
            <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl w-full px-6 flex flex-col items-center z-10">

                {/* Creative Sub-header */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                    <MoveRight className="w-3 h-3" />
                    Creative Ecosystem
                </div>

                {/* 1. High-Impact Centered Header */}
                <div className="text-center mb-16 h-auto flex flex-col items-center justify-center">
                    <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase mb-8">
                        {typedText.split(" ").map((word, i) => (
                            <span key={i} className={word.toUpperCase().includes("CREATIVE") ? "text-blue-500" : ""}>
                                {word}{" "}
                            </span>
                        ))}
                    </h1>
                </div>

                {/* 2. Moving Animation (Marquee) */}
                <div className="w-full overflow-hidden mb-12 relative group-hover-wrapper">
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

                    <motion.div
                        className="flex gap-4 w-max"
                        animate={{ x: ["0%", "-33.33%"] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    >
                        {marqueeServices.map((service, index) => (
                            <div
                                key={index}
                                className="group/card relative w-[240px] h-[200px] bg-zinc-900/80 border border-blue-600 rounded-3xl flex flex-col items-center justify-center cursor-pointer overflow-hidden backdrop-blur-md transition-all duration-500 hover:border-blue-400 hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]"
                            >
                                {/* Attractive Hover Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

                                {/* Moving Shine Effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent skew-x-12 pointer-events-none z-0" />

                                {/* Main Content (Icon + Title) */}
                                <div className="relative z-10 flex flex-col items-center transition-transform duration-500 group-hover/card:-translate-y-8">
                                    <div className="p-3 bg-blue-500/10 rounded-2xl mb-3 group-hover/card:bg-blue-500/20 group-hover/card:scale-110 transition-all duration-300 border border-blue-500/20">
                                        <service.icon className="w-6 h-6 text-blue-400 group-hover/card:text-blue-300 transition-colors" />
                                    </div>
                                    <h3 className="text-lg font-black text-white uppercase tracking-wider text-center px-4">{service.title}</h3>
                                </div>

                                {/* Description Reveal */}
                                <div className="absolute bottom-6 left-0 right-0 px-6 opacity-0 group-hover/card:opacity-100 translate-y-8 group-hover/card:translate-y-0 transition-all duration-500 delay-100 flex items-center justify-center h-12">
                                    <p className="text-xs font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 leading-tight">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* 3. Short Summary Paragraph */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="max-w-2xl text-center"
                >
                    <p className="text-lg text-gray-400 leading-relaxed font-light">
                        ContentLab is EVOLV’s dedicated creative studio, delivering videos, graphics, branding, and digital content that help businesses communicate better and grow faster. We turn ideas into compelling visuals that inform, engage, and convert.</p>
                </motion.div>

            </div>
        </section>
    );
}
