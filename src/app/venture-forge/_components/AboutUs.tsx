"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Zap, Rocket, Shield } from "lucide-react";
import { useRef } from "react";

const features = [
    { icon: Rocket, title: "Rapid Ideation", desc: "Prototype your vision in weeks, not months." },
    { icon: Zap, title: "Flash Development", desc: "Agile sprints focused on core value delivery." },
    { icon: Shield, title: "Market Ready", desc: "Secure, scalable, and fully compliant solutions." },
    { icon: CheckCircle2, title: "Proven Success", desc: "Over 500+ startups launched via our hub." },
];

export default function AboutUs() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const rippleScale = useTransform(scrollYProgress, [0, 1], [0.5, 2]);
    const rippleOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 0]);

    return (
        <section ref={containerRef} id="about" className="py-24 bg-[#121212] relative overflow-hidden">
            {/* Unique Section Background: Animated Gradient Shifts */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
                <motion.div
                    animate={{
                        background: [
                            "radial-gradient(circle at 0% 0%, rgba(0,123,255,0.1) 0%, transparent 60%)",
                            "radial-gradient(circle at 100% 0%, rgba(0,123,255,0.1) 0%, transparent 60%)",
                            "radial-gradient(circle at 100% 100%, rgba(0,123,255,0.1) 0%, transparent 60%)",
                            "radial-gradient(circle at 0% 100%, rgba(0,123,255,0.1) 0%, transparent 60%)",
                            "radial-gradient(circle at 0% 0%, rgba(0,123,255,0.1) 0%, transparent 60%)",
                        ]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                />
                <motion.div
                    animate={{ x: ["-20%", "20%"], y: ["-20%", "20%"] }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                    className="absolute inset-[-50%] bg-[radial-gradient(ellipse_at_center,_rgba(0,123,255,0.05)_0%,_transparent_70%)]"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
                                Our Vision
                            </span>
                        </h2>
                        <p className="text-white/60 text-lg mb-8 leading-relaxed">
                            At VentureForge Hub, we bridge the gap between abstract concepts and successful market exits.
                            We are a collective of developers, designers, and investors dedicated to the art of the possible.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {features.map((f, i) => (
                                <motion.div
                                    key={f.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: "rgba(0,123,255,0.1)",
                                        borderColor: "rgba(0,123,255,0.3)"
                                    }}
                                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 transition-colors group cursor-default"
                                >
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.2 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <f.icon className="text-accent group-hover:text-white transition-colors shrink-0" size={24} />
                                    </motion.div>
                                    <div>
                                        <h4 className="font-semibold text-white">{f.title}</h4>
                                        <p className="text-sm text-white/40">{f.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-accent/20 bg-[#1a1a1a] relative group"
                        >
                            <div className="absolute inset-0 bg-accent/10 backdrop-blur-3xl animate-pulse" />

                            {/* Animated Decorative Shapes */}
                            <motion.div
                                animate={{
                                    borderRadius: ["20% 80% 30% 70% / 30% 30% 70% 70%", "80% 20% 70% 30% / 70% 70% 30% 30%"],
                                    rotate: [0, 360]
                                }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-20 border-2 border-accent/20"
                            />

                            <div className="absolute inset-4 rounded-2xl border border-white/10 flex items-center justify-center">
                                <div className="text-center group-hover:scale-110 transition-transform">
                                    <span className="text-7xl font-bold text-accent drop-shadow-[0_0_15px_#007BFF]">3+</span>
                                    <p className="text-white/40 uppercase tracking-widest mt-2">Ideas Building</p>
                                </div>
                            </div>

                            <motion.div
                                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-10 right-10 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 shadow-xl"
                            >
                                <span className="text-xs font-bold text-accent">TOP INVESTOR CHOICE</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
