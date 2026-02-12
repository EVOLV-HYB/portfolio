"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Camera, Zap, Sun, Aperture, Plane, Wallet, Lightbulb } from "lucide-react";

const cameraItems = [
    {
        id: 1,
        name: "SONY ALPHA MARK IV",
        image: "/sony-alpha-7r-4k-background-download-wallpaper-thumb.jpg", // Use available asset
        desc: "33MP full-frame hybrid camera delivering ultra-sharp photography and cinematic 4K video with advanced AI autofocus and stabilization.",
        icon: Camera,
        color: "from-blue-600 to-cyan-500"
    },
    {
        id: 2,
        name: "IPHONE 16 PRO MAX",
        image: "/Apple-iPhone-16-Pro-hero-240909-lp.jpg.news_app_ed.jpg",
        desc: "Professional-grade triple-lens system with enhanced low-light performance and advanced computational photography for stunning photos and smooth cinematic video.",
        icon: Aperture,
        color: "from-purple-600 to-blue-500"
    },
    {
        id: 3,
        name: "IPHONE 14 PRO MAX",
        image: "/iPhone-14-Pro-Max-Review_02.jpg",
        desc: "Pro camera system with 48MP main sensor and versatile lenses delivering high-detail images and strong performance across photo and video.",
        icon: Sun,
        color: "from-blue-700 to-indigo-600"
    }
];

export default function ShootingProduction() {
    const sectionRef = useRef<HTMLElement>(null);
    const [hoveredCircle, setHoveredCircle] = useState<number | null>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Circles start at bottom center and spread out
    const circleY = useTransform(scrollYProgress, [0.05, 0.3, 0.7], ["60%", "0%", "-10%"]);
    const rawScale = useTransform(scrollYProgress, [0.05, 0.2], [0.6, 1]);
    const circleScale = useSpring(rawScale, { stiffness: 100, damping: 30, mass: 0.5 });

    // Spread X positions - Start spreading AFTER they arrived and scaled
    const rawX1 = useTransform(scrollYProgress, [0.35, 0.5], ["0%", "-120%"]); // Left
    const rawX2 = useTransform(scrollYProgress, [0.35, 0.5], ["0%", "0%"]);    // Center
    const rawX3 = useTransform(scrollYProgress, [0.35, 0.5], ["0%", "120%"]);  // Right

    const spreadX1 = useSpring(rawX1, { stiffness: 100, damping: 30, mass: 0.5 });
    const spreadX2 = useSpring(rawX2, { stiffness: 100, damping: 30, mass: 0.5 });
    const spreadX3 = useSpring(rawX3, { stiffness: 100, damping: 30, mass: 0.5 });

    // Spread Opacity - Reach full visibility earlier
    const circleOpacity = useTransform(scrollYProgress, [0.05, 0.15, 0.75, 0.9], [0, 1, 1, 0]);

    return (
        <section ref={sectionRef} className="relative min-h-[100vh] bg-black overflow-hidden pt-16">

            {/* Background Details */}
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

            {/* 1. High-Impact Centered Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="container max-w-7xl mx-auto px-6 text-center mb-4 z-20 relative"
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-[0.3em] mb-8">
                    <Zap className="w-3 h-3 fill-current" />
                    Production Excellence
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase mb-8">
                    Production & <br />
                    <span className="text-blue-500">
                        Shooting.
                    </span>
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto text-lg font-light uppercase tracking-widest">
                    We combine cinematic vision with industry-leading technology to capture every detail with absolute precision.
                </p>
            </motion.div>

            {/* 2. Scroll Animation: Circle to Spread */}
            <div className="sticky top-20 h-[60vh] flex items-center justify-center pointer-events-none">
                <div className="relative w-full max-w-5xl h-[500px] flex items-center justify-center">

                    {cameraItems.map((camera, index) => {
                        const x = index === 0 ? spreadX1 : index === 1 ? spreadX2 : spreadX3;

                        return (
                            <motion.div
                                key={camera.id}
                                style={{
                                    x,
                                    y: circleY,
                                    scale: circleScale,
                                    opacity: circleOpacity,
                                }}
                                className="absolute pointer-events-auto"
                            >
                                <div
                                    className="relative w-64 h-64 md:w-80 md:h-80 perspective-1000 group/circle"
                                    onMouseEnter={() => setHoveredCircle(index)}
                                    onMouseLeave={() => setHoveredCircle(null)}
                                >
                                    <motion.div
                                        className="w-full h-full relative preserve-3d transition-transform duration-700 ease-in-out cursor-pointer"
                                        animate={{ rotateY: hoveredCircle === index ? 180 : 0 }}
                                    >
                                        {/* Front: Icon Side - Plain Blue for all */}
                                        <div className="absolute inset-0 backface-hidden rounded-full border-2 border-blue-400/30 flex flex-col items-center justify-center overflow-hidden shadow-[0_0_50px_-12px_rgba(37,99,235,0.4)] bg-zinc-900">
                                            {/* Camera Image Background */}
                                            <img
                                                src={camera.image}
                                                alt={camera.name}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/circle:scale-110 opacity-70 group-hover/circle:opacity-90"
                                            />

                                            {/* Subtle Radial Overlay for Text Readability */}
                                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 group-hover/circle:from-black/40 group-hover/circle:to-black/40 transition-colors duration-500 z-10" />

                                            {/* Large White Name Overlay */}
                                            <span className="text-white font-black text-center uppercase tracking-tighter text-2xl md:text-4xl leading-[0.85] relative z-20 px-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
                                                {camera.name.split(' ').map((word, i) => (
                                                    <span key={i} className="block">{word}</span>
                                                ))}
                                            </span>
                                        </div>

                                        {/* Back: Details Side */}
                                        <div className="absolute inset-0 backface-hidden rounded-full bg-zinc-900 border-2 border-blue-500/50 flex flex-col items-center justify-center p-8 text-center transform rotateY-180 shadow-[0_0_50px_-12px_rgba(37,99,235,0.6)]">
                                            <div className="absolute inset-0 bg-blue-600/10" />
                                            <h4 className="text-blue-400 font-black uppercase text-xs tracking-[0.3em] mb-4 relative z-10">Technical Specs</h4>
                                            <p className="text-sm md:text-base text-gray-200 font-light leading-relaxed relative z-10">
                                                {camera.desc}
                                            </p>
                                            <div className="mt-6 w-12 h-1 bg-blue-500 rounded-full" />
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <div className="container max-w-7xl mx-auto px-6 relative z-20 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-white/5"
                >
                    {[
                        { icon: Lightbulb, title: "Lighting Mastery", desc: "Crafting atmosphere through light." },
                        { icon: Plane, title: "Open to Travel", desc: "Global production capabilities." },
                        { icon: Wallet, title: "Budget Friendly", desc: "Premium quality, optimized costs." }
                    ].map((benefit, i) => (
                        <div key={i} className="flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300">
                                <benefit.icon className="w-8 h-8 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">{benefit.title}</h3>
                            <p className="text-gray-500 text-sm font-light uppercase tracking-widest">
                                {benefit.desc}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>

            <style jsx global>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .preserve-3d {
                    transform-style: preserve-3d;
                }
                .backface-hidden {
                    backface-visibility: hidden;
                }
                .rotateY-180 {
                    transform: rotateY(180deg);
                }
            `}</style>
        </section>
    );
}
