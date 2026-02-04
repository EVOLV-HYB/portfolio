"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function TechLabHero() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
            {/* Cinematic Infrastructure Grid */}
            <motion.div
                className="absolute inset-0 z-0 accelerate will-change-transform"
                style={{ y: yBackground, scale }}
            >
                {/* Animated connection lines - digital infrastructure */}
                <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2" />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Dynamic network connections */}
                    {[
                        { x1: "10%", y1: "20%", x2: "30%", y2: "40%", delay: 0.2 },
                        { x1: "30%", y1: "40%", x2: "60%", y2: "30%", delay: 0.5 },
                        { x1: "60%", y1: "30%", x2: "85%", y2: "50%", delay: 0.8 },
                        { x1: "30%", y1: "40%", x2: "45%", y2: "70%", delay: 1.1 },
                        { x1: "60%", y1: "30%", x2: "70%", y2: "65%", delay: 1.4 },
                        { x1: "10%", y1: "20%", x2: "15%", y2: "60%", delay: 1.7 },
                        { x1: "85%", y1: "50%", x2: "70%", y2: "65%", delay: 2.0 },
                    ].map((line, i) => (
                        <motion.line
                            key={i}
                            x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
                            stroke="url(#lineGradient)"
                            strokeWidth="1.5"
                            filter="url(#glow)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.6 }}
                            transition={{ duration: 2, delay: line.delay, ease: "easeInOut" }}
                        />
                    ))}

                    {/* Infrastructure nodes */}
                    {[
                        { cx: "10%", cy: "20%", delay: 0, size: 8 },
                        { cx: "30%", cy: "40%", delay: 0.3, size: 12 },
                        { cx: "60%", cy: "30%", delay: 0.6, size: 10 },
                        { cx: "85%", cy: "50%", delay: 0.9, size: 8 },
                        { cx: "45%", cy: "70%", delay: 1.2, size: 10 },
                        { cx: "70%", cy: "65%", delay: 1.5, size: 8 },
                        { cx: "15%", cy: "60%", delay: 1.8, size: 6 },
                    ].map((node, i) => (
                        <g key={i}>
                            <motion.circle
                                cx={node.cx}
                                cy={node.cy}
                                r={node.size}
                                fill="#2563eb"
                                filter="url(#glow)"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 0.8 }}
                                transition={{ duration: 0.5, delay: node.delay }}
                            />
                            <motion.circle
                                cx={node.cx}
                                cy={node.cy}
                                r={node.size * 1.5}
                                fill="none"
                                stroke="#2563eb"
                                strokeWidth="1"
                                opacity="0.3"
                                initial={{ scale: 0 }}
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 2, delay: node.delay, repeat: Infinity, repeatDelay: 3 }}
                            />
                        </g>
                    ))}
                </svg>

                {/* Architectural grid overlay */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
              linear-gradient(to right, rgba(37, 99, 235, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(37, 99, 235, 0.1) 1px, transparent 1px)
            `,
                        backgroundSize: '80px 80px'
                    }} />
                </div>
            </motion.div>

            {/* Cinematic glow layers */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[80px] opacity-40 will-change-transform"
                style={{ y: yBackground }}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.5, 0.4]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Editorial content with cinematic reveal */}
            <motion.div
                className="container relative z-10 max-w-6xl mx-auto text-center will-change-transform"
                style={{ y: yContent, opacity }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-sm"
                >
                    <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-accent"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    Platform Engineering
                </motion.div>

                {/* Cinematic headline with stagger */}
                <div className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.95]">
                    {["Platform", "Engineering", "for", "Scalable,", "Intelligent", "Businesses"].map((word, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{
                                duration: 0.8,
                                delay: i * 0.1,
                                ease: [0.25, 0.4, 0.25, 1]
                            }}
                            className="inline-block mr-4 md:mr-6"
                        >
                            {i === 3 || i === 4 ? (
                                <span className="text-accent relative">
                                    {word}
                                    <motion.span
                                        className="absolute -bottom-2 left-0 right-0 h-1 bg-accent/30 blur-sm"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 0.8, delay: i * 0.1 + 0.3 }}
                                    />
                                </span>
                            ) : word}
                        </motion.span>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                >
                    We design, build, and automate digital platforms that power operations, growth, and innovation.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="#capabilities"
                        className="group relative bg-accent text-accent-foreground px-8 py-4 rounded-xl text-lg font-bold flex items-center gap-2 overflow-hidden transition-all hover:scale-105 active:scale-95"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.6 }}
                        />
                        <span className="relative z-10">Explore Our Capabilities</span>
                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 shadow-[0_0_30px_rgba(37,99,235,0.6)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>

                    <Link
                        href="#case-studies"
                        className="group relative bg-card/50 backdrop-blur-sm border border-white/10 text-foreground px-8 py-4 rounded-xl text-lg font-bold flex items-center gap-2 hover:border-accent/50 transition-all hover:scale-105 active:scale-95"
                    >
                        <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        View Platform Case Studies
                    </Link>
                </motion.div>
            </motion.div>

            {/* Architectural divider */}
            <div className="absolute bottom-0 left-0 w-full">
                <motion.div
                    className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-accent/50 to-transparent" />
            </div>
        </section>
    );
}
