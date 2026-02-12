"use client";

import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const teams = [
    {
        id: 1,
        name: "Ideation & Dev",
        role: "The Builders",
        desc: "A group of radical engineers and visionary designers who turn concepts into code.",
        skills: ["Full Stack", "AI/ML", "UX Research"],
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400&h=400",
    },
    {
        id: 2,
        name: "Growth & Invest",
        role: "The Strategists",
        desc: "Market experts and finance wizards dedicated to scaling and securing capital.",
        skills: ["Venture Capital", "Growth Hacking", "Publicity"],
        img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=400&h=400",
    },
];

function WarpProfile({ src }: { src: string }) {
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);
    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const warpX = useTransform(xSpring, [0, 1], ["20%", "80%"]);
    const warpY = useTransform(ySpring, [0, 1], ["20%", "80%"]);

    return (
        <motion.div
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                x.set((e.clientX - rect.left) / rect.width);
                y.set((e.clientY - rect.top) / rect.height);
            }}
            onMouseLeave={() => { x.set(0.5); y.set(0.5); }}
            className="relative w-full h-full rounded-2xl overflow-hidden cursor-none group"
        >
            <motion.img
                src={src}
                alt="Team"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                style={{
                    clipPath: `circle(30% at ${warpX.get()} ${warpY.get()})`,
                }}
            />
            <motion.div
                className="absolute inset-0 bg-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.4, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </motion.div>
    );
}

function TeamCard({ team, isTop, onSwipe }: { team: typeof teams[0]; isTop: boolean; onSwipe: () => void }) {
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-200, 200], [-30, 30]);
    const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);

    return (
        <motion.div
            drag={isTop ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            style={{ x, rotate, opacity, zIndex: isTop ? 50 : 0 }}
            onDragEnd={(_, info) => {
                if (Math.abs(info.offset.x) > 100) onSwipe();
            }}
            className="absolute inset-0 bg-card border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col justify-between"
        >
            <div className="flex items-start justify-between">
                <div>
                    <span className="text-sm font-bold text-accent tracking-widest uppercase">{team.role}</span>
                    <h3 className="text-4xl font-bold mt-2">{team.name}</h3>
                </div>
            </div>

            <div className="h-48 w-full mt-6 bg-white/5 rounded-2xl relative">
                <WarpProfile src={team.img} />
            </div>

            <div className="mt-6">
                <p className="text-white/60 mb-6">{team.desc}</p>
                <div className="flex flex-wrap gap-2">
                    {team.skills.map(s => (
                        <span key={s} className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent rounded-full text-xs font-bold">
                            {s}
                        </span>
                    ))}
                </div>
            </div>

            {isTop && (
                <div className="text-center mt-6">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">Swipe to Shuffle Squad</span>
                </div>
            )}
        </motion.div>
    );
}

export default function Teams() {
    const [index, setIndex] = useState(0);
    const [mounted, setMounted] = useState(false);
    const activeTeam = teams[index];
    const nextTeam = teams[(index + 1) % teams.length];
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const rotateGeo = useTransform(scrollYProgress, [0, 1], [0, 45]);

    useEffect(() => setMounted(true), []);

    return (
        <section
            id="teams"
            ref={containerRef}
            className="py-24 bg-[#050510] relative flex flex-col justify-center items-center min-h-[900px] mt-20 z-10 overflow-hidden"
        >
            {/* Ethereal Mesh Background Layers */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Layer 1: Shifting Mesh Gradient Blobs */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 60, 0],
                        scale: [1, 1.4, 1],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-15%] left-[-15%] w-[90%] h-[90%] bg-blue-600/10 blur-[150px] rounded-full"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -60, 0],
                        scale: [1.4, 1, 1.4],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[-15%] right-[-15%] w-[90%] h-[90%] bg-accent/15 blur-[150px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.6, 1],
                        opacity: [0.05, 0.15, 0.05]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-400/5 blur-[180px] rounded-full"
                />

                {/* Layer 2: Animated Grid Pattern */}
                <div className="absolute inset-0 z-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(to right, #2563eb 1px, transparent 1px), linear-gradient(to bottom, #2563eb 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />

                {/* Layer 3: Noise Texture */}
                <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none">
                    <svg className="w-full h-full">
                        <filter id="noiseFilter">
                            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
                        </filter>
                        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                    </svg>
                </div>

                {mounted && (
                    <>
                        {/* Layer 3: Floating Parallax Glass Fragments */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={`shard-${i}`}
                                style={{
                                    y: i % 2 === 0 ? y1 : y2,
                                    rotate: rotateGeo,
                                    left: `${15 + i * 15}%`,
                                    top: `${20 + (i % 3) * 20}%`
                                }}
                                className="absolute w-24 h-24 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl transform-gpu shadow-2xl"
                            />
                        ))}

                        {/* Layer 4: Glass Container / Backdrop Blur Overlay */}
                        <div className="absolute inset-0 backdrop-blur-[100px] z-10" />

                        {/* Layer 5: Subtle Shimmer Light Sweep */}
                        <motion.div
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 3 }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -skew-x-12 z-20 pointer-events-none"
                        />
                    </>
                )}
            </div>
            <div className="container mx-auto px-6 relative max-w-lg flex flex-col items-center">
                <div className="text-center mb-16 w-full">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">The Squads</h2>
                    <p className="text-white/40">Gesture-powered team browsing.</p>
                </div>

                <div className="relative w-full h-[600px]">
                    <AnimatePresence>
                        <TeamCard
                            key={nextTeam.id}
                            team={nextTeam}
                            isTop={false}
                            onSwipe={() => { }}
                        />
                        <TeamCard
                            key={activeTeam.id}
                            team={activeTeam}
                            isTop={true}
                            onSwipe={() => setIndex((index + 1) % teams.length)}
                        />
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
