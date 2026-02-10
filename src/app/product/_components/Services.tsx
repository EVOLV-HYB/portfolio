"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2, PenTool, BarChart3, Users, Globe, Lightbulb, ArrowRight, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

const services = [
    { icon: Lightbulb, title: "Ideation Coaching", desc: "Refine your core concept with industry veterans." },
    { icon: Code2, title: "MVP Development", desc: "Full-stack development for your first release." },
    { icon: BarChart3, title: "Pitch Strategy", desc: "Design data-driven decks that win investors." },
    { icon: PenTool, title: "UI/UX Design", desc: "Premium interfaces that enchant your users." },
    { icon: Users, title: "Team Building", desc: "Find the right co-founders and early hires." },
    { icon: Globe, title: "Global Expansion", desc: "Scaling strategies for international markets." },
];

function TiltCard({ service }: { service: typeof services[0] }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);
    const z = useMotionValue(0);
    const zSpring = useSpring(z, { stiffness: 100, damping: 10 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
        z.set(50);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        z.set(0);
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        setRipples([...ripples, { id: Date.now(), x: mouseX, y: mouseY }]);
        setTimeout(() => setRipples(prev => prev.slice(1)), 1000);
    };

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                z: zSpring,
                transformStyle: "preserve-3d"
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            className="relative p-8 rounded-3xl bg-card border border-white/5 group hover:border-accent/40 transition-colors shadow-2xl hover:shadow-accent/20 cursor-pointer overflow-hidden"
        >
            {/* Click Ripples */}
            <AnimatePresence>
                {ripples.map(ripple => (
                    <motion.span
                        key={ripple.id}
                        initial={{ scale: 0, opacity: 0.5 }}
                        animate={{ scale: 4, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{
                            left: ripple.x,
                            top: ripple.y,
                            width: 100,
                            height: 100,
                        }}
                        className="absolute rounded-full bg-accent/30 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"
                    />
                ))}
            </AnimatePresence>

            {/* 3D Border Glow */}
            <div className="absolute inset-0 rounded-3xl border border-accent/0 group-hover:border-accent/50 group-hover:shadow-[0_0_30px_rgba(0,123,255,0.3)] transition-all duration-500 pointer-events-none" />

            <div
                style={{ transform: "translateZ(80px)" }}
                className="flex flex-col items-start gap-6 relative z-10"
            >
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-4 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-lg"
                >
                    <service.icon size={32} />
                </motion.div>
                <div>
                    <h3 className="text-2xl font-bold mb-2 transition-colors group-hover:text-accent">{service.title}</h3>
                    <p className="text-white/40 leading-relaxed text-sm">{service.desc}</p>
                </div>

                {/* Morphing Button */}
                <motion.button
                    whileHover="hover"
                    initial="initial"
                    className="px-6 py-2 bg-accent/10 border border-accent/20 text-accent font-bold text-xs flex items-center gap-2 group/btn relative overflow-hidden"
                >
                    <motion.div
                        variants={{
                            initial: { borderRadius: "9999px", scale: 1 },
                            hover: { borderRadius: "8px", scale: 1.05 }
                        }}
                        className="absolute inset-0 bg-accent/20 -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    />
                    Explore
                    <motion.div
                        variants={{
                            initial: { x: 0, scale: 1 },
                            hover: { x: 5, scale: 1.2 }
                        }}
                    >
                        <ArrowRight size={14} />
                    </motion.div>
                </motion.button>

                {/* Animated Background Ripple Overlay */}
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -z-10" />
            </div>
        </motion.div>
    );
}

export default function Services() {
    const [mounted, setMounted] = useState(false);
    React.useEffect(() => setMounted(true), []);

    return (
        <section id="services" className="py-24 bg-[#121212] relative overflow-hidden">
            {/* Unique Section Background: Floating Particles */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
                {mounted && [...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            opacity: Math.random() * 0.5 + 0.2
                        }}
                        animate={{
                            y: ["-10%", "110%"],
                            x: (Math.random() * 100 - 50) + "%",
                            opacity: [0, 0.5, 0]
                        }}
                        transition={{
                            duration: 15 + Math.random() * 10,
                            repeat: Infinity,
                            delay: Math.random() * 10,
                            ease: "linear"
                        }}
                        className="absolute w-1 h-1 bg-accent rounded-full blur-[1px]"
                    />
                ))}
            </div>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Launchpad Services
                    </motion.h2>
                    <p className="text-white/40 max-w-xl mx-auto">
                        Everything you need to go from a napkin sketch to a Series A funding round.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <TiltCard service={s} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
