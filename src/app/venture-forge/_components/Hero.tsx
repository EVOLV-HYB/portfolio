"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Rocket, Globe } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

// Source references:
// Framer Motion for text cascade and staggered reveals
// CSS-Tricks for button explosion and particle effects
// GSAP-inspired spring physics for bouncy entrances
// Awwwards for immersive typography and shimmer effects

function MorphingBlobs() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: ["-10%", "10%", "-10%"],
                    y: ["-10%", "10%", "-10%"],
                    rotate: [0, 90, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-accent/20 blur-[120px] rounded-full"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    x: ["10%", "-10%", "10%"],
                    y: ["10%", "-10%", "10%"],
                    rotate: [0, -90, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full"
            />
        </div>
    );
}

function ParticleSwarm({ count = 40 }) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number }[]>([]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);

        const newParticles = Array.from({ length: count }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1
        }));
        setParticles(newParticles);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [count]);

    return (
        <div className="absolute inset-0 pointer-events-none z-0">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute bg-accent/30 rounded-full"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                    }}
                    animate={{
                        x: (mousePos.x / window.innerWidth - 0.5) * 60,
                        y: (mousePos.y / window.innerHeight - 0.5) * 60,
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        x: { type: "spring", stiffness: 40, damping: 12 },
                        y: { type: "spring", stiffness: 40, damping: 12 },
                        scale: { duration: 2, repeat: Infinity }
                    }}
                />
            ))}
        </div>
    );
}

function ButtonExplosion({ children, className }: { children: React.ReactNode; className: string }) {
    const [isHovered, setIsHovered] = useState(false);
    const [exploded, setExploded] = useState(false);

    const triggerExplosion = () => {
        setExploded(true);
        setTimeout(() => setExploded(false), 800);
    };

    return (
        <motion.button
            onMouseEnter={() => { setIsHovered(true); triggerExplosion(); }}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative group ${className}`}
        >
            <AnimatePresence>
                {(isHovered || exploded) && Array.from({ length: 12 }).map((_, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                        animate={{
                            opacity: 0,
                            scale: 2,
                            x: (Math.random() - 0.5) * 150,
                            y: (Math.random() - 0.5) * 150
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute inset-0 bg-accent rounded-full blur-[1px] -z-10"
                    />
                ))}
            </AnimatePresence>
            {children}
            <motion.div
                animate={isHovered ? { opacity: 0.4, scale: 1.2 } : { opacity: 0, scale: 1 }}
                className="absolute inset-0 bg-accent rounded-xl blur-xl -z-20 transition-all duration-300"
            />
        </motion.button>
    );
}

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const headline = "Forging the Future of Innovation";
    const words = headline.split(" ");

    return (
        <section
            ref={containerRef}
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden pt-0 bg-[#121212]"
        >
            <MorphingBlobs />
            <ParticleSwarm count={50} />

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side: Text */}
                <div className="text-left order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold mb-6"
                    >
                        <Sparkles size={14} className="animate-spin-slow" />
                        <span className="tracking-[3px] uppercase">Empower Your Ideas Today</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9] flex flex-wrap gap-x-4">
                        {words.map((word, i) => (
                            <motion.span
                                key={i}
                                initial={{ y: 80, opacity: 0, rotate: i % 2 === 0 ? -15 : 15 }}
                                animate={{ y: 0, opacity: 1, rotate: 0 }}
                                transition={{
                                    delay: i * 0.1,
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 12
                                }}
                                className="relative bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-accent/20 inline-block group cursor-default"
                            >
                                {word}
                                {/* Shimmer Overlay Wrapper */}
                                <motion.span
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent pointer-events-none -skew-x-12"
                                    style={{ clipPath: "inset(0 0 0 0)" }}
                                />
                            </motion.span>
                        ))}
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-lg md:text-xl text-white/40 max-w-xl mb-10 leading-relaxed font-medium"
                    >
                        VentureForge Hub empowers founders to transform abstract concepts into market-ready ventures.
                        We don&apos;t just build products; we forge legacies.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row items-start gap-4">
                        <Link href="#contact">
                            <ButtonExplosion
                                className="px-10 py-5 bg-accent rounded-xl text-white font-bold flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,123,255,0.5)] transition-shadow hover:shadow-[0_0_40px_rgba(0,123,255,0.7)]"
                            >
                                Ignite the Growth <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                            </ButtonExplosion>
                        </Link>

                        <Link href="#how">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
                                className="px-10 py-5 border-2 border-white/5 text-white rounded-xl font-bold backdrop-blur-md transition-all flex items-center gap-2"
                            >
                                Explore Forge path<Globe size={18} className="text-accent" />
                            </motion.button>
                        </Link>
                    </div>
                </div>

                {/* Right Side: Visual Section */}
                <div className="relative h-[400px] lg:h-[600px] order-1 lg:order-2 flex items-center justify-center">
                    <motion.div
                        animate={{
                            y: [0, -25, 0],
                            rotateX: [0, 5, 0],
                            rotateY: [0, 10, 0]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-full aspect-square max-w-[450px]"
                    >
                        {/* Layered Geometric Shapes */}
                        <motion.div
                            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                            transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity } }}
                            className="absolute inset-0 border-[3px] border-accent/10 rounded-[4rem]"
                        />
                        <motion.div
                            animate={{ rotate: -360, borderRadius: ["30%", "50%", "30%"] }}
                            transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, borderRadius: { duration: 10, repeat: Infinity } }}
                            className="absolute inset-12 border-2 border-blue-500/5"
                        />

                        {/* Core Visual */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                whileHover={{ scale: 1.15, rotateY: 180 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="w-40 h-40 md:w-56 md:h-56 bg-gradient-to-br from-accent via-blue-700 to-black rounded-[3rem] flex items-center justify-center shadow-4xl shadow-accent/30 cursor-pointer group"
                            >
                                <Rocket size={80} className="text-white drop-shadow-2xl group-hover:scale-110 transition-transform" />
                                <div className="absolute inset-0 bg-accent/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 rounded-full" />
                            </motion.div>
                        </div>

                        {/* Orbiting Elements */}
                        {[Zap, Globe, Sparkles, Zap].map((Icon, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    y: [0, -30, 0],
                                    x: i % 2 === 0 ? [0, 10, 0] : [0, -10, 0],
                                    opacity: [0.4, 0.8, 0.4]
                                }}
                                transition={{
                                    duration: 4 + i,
                                    repeat: Infinity,
                                    delay: i * 0.7
                                }}
                                className="absolute p-5 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-xl"
                                style={{
                                    top: `${15 + i * 20}%`,
                                    [i % 2 === 0 ? "left" : "right"]: "-15%"
                                }}
                            >
                                <Icon size={28} className="text-accent" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Progress Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <span className="text-[10px] uppercase tracking-[0.5em] text-white/20">Initiate Scroll</span>
                <div className="w-7 h-12 border-2 border-white/10 rounded-full flex justify-center p-1.5 overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_#007BFF]"
                    />
                </div>
            </motion.div>
        </section>
    );
}
