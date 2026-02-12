"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { Hammer, Rocket, Target, Users } from "lucide-react";
import ParticleSystem from "./Extras/ParticleSystem";

const steps = [
    { id: 1, title: "Ideation", icon: Target, desc: "Refine your concept with data-backed market analysis." },
    { id: 2, title: "Development", icon: Hammer, desc: "Forge a robust MVP with our elite engineering squads." },
    { id: 3, title: "Presentation", icon: Users, desc: "Perfect your pitch and connect with top-tier investors." },
    { id: 4, title: "Investment", icon: Rocket, desc: "Secure the capital needed to scale your vision globally." },
];

function CubeStep({ step, isActive, onHover, index }: { step: typeof steps[0]; isActive: boolean; onHover: () => void; index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["30deg", "-30deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-30deg", "30deg"]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    return (
        <motion.div
            onMouseEnter={onHover}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            className={`relative cursor-pointer transition-all duration-700 ${isActive ? "scale-110 z-20" : "scale-90 opacity-50 z-10"}`}
            style={{ perspective: "1000px" }}
        >
            <motion.div
                animate={{
                    rotateX: isActive ? rotateX.get() : "0deg",
                    rotateY: isActive ? rotateY.get() : "0deg",
                    translateY: isActive ? -20 : 0
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
                className="w-48 h-48 md:w-64 md:h-64 relative group"
            >
                {/* Cube Faces */}
                <div className={`absolute inset-0 bg-card border-2 flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-500 ${isActive ? "border-accent shadow-[0_0_50px_rgba(0,123,255,0.4)]" : "border-white/10"}`}>
                    <step.icon size={64} className={`${isActive ? "text-accent" : "text-white/40"} transition-colors mb-4`} />
                    <h3 className="text-xl font-bold">{step.title}</h3>

                    {/* Orbiting Particle Ring */}
                    {isActive && (
                        <div className="absolute inset-0 pointer-events-none">
                            {Array.from({ length: 8 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 3 + i, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0"
                                >
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full blur-[2px]" />
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Cube Side (Glassy) */}
                <div
                    style={{ transform: "rotateY(90deg) translateZ(128px)" }}
                    className="absolute inset-0 bg-accent/20 backdrop-blur-md border border-accent/20 rounded-2xl md:block hidden"
                />
                <div
                    style={{ transform: "rotateX(90deg) translateZ(128px)" }}
                    className="absolute inset-0 bg-accent/10 backdrop-blur-sm border border-accent/10 rounded-2xl md:block hidden"
                />
            </motion.div>
        </motion.div>
    );
}

export default function HowItWorks() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section id="how" className="py-24 bg-[#121212] relative overflow-hidden">
            {/* Unique Section Background: Orbiting Rings */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-50 flex items-center justify-center">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                        transition={{
                            rotate: { duration: 10 + i * 5, repeat: Infinity, ease: "linear" },
                            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute border border-accent/20 rounded-full"
                        style={{
                            width: `${30 + i * 20}vw`,
                            height: `${30 + i * 20}vw`,
                            borderStyle: i % 2 === 0 ? "solid" : "dashed"
                        }}
                    >
                        <motion.div
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute top-0 left-1/2 w-4 h-4 bg-accent rounded-full blur-[2px]"
                        />
                    </motion.div>
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-16">Forge Path</h2>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
                    {steps.map((step, i) => (
                        <CubeStep
                            key={step.id}
                            step={step}
                            index={i}
                            isActive={activeStep === i}
                            onHover={() => setActiveStep(i)}
                        />
                    ))}
                </div>

                <div className="max-w-2xl mx-auto min-h-[150px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                            className="bg-card p-8 rounded-3xl border border-white/10 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                <Target size={120} className="text-accent" />
                            </div>
                            <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Phase 0{activeStep + 1}</h4>
                            <p className="text-xl text-white/80 leading-relaxed relative z-10">
                                {steps[activeStep].desc}
                            </p>
                            {/* 3D Progress Bar */}
                            <div className="absolute bottom-0 left-0 h-1 bg-accent/50 w-full">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 5 }}
                                    className="h-full bg-accent shadow-[0_0_15px_#007BFF]"
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
