"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function GlobalBackground() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-black">
            {/* Base Gradient Layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0A1128] to-black opacity-80" />

            {/* Morphing Blobs */}
            <div className="absolute inset-0 opacity-40 blur-[100px]">
                <motion.div
                    animate={{
                        x: ["-10%", "10%", "-10%"],
                        y: ["-10%", "10%", "-10%"],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-[50%] h-[50%] bg-blue-900/30 rounded-full"
                />
                <motion.div
                    animate={{
                        x: ["10%", "-10%", "10%"],
                        y: ["10%", "-10%", "10%"],
                        scale: [1.2, 1, 1.2],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-accent/20 rounded-full"
                />
            </div>

            {/* Drifting Particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            scale: Math.random() * 0.5 + 0.5
                        }}
                        animate={{
                            opacity: [0.2, 0.6, 0.2],
                            y: ["-10%", "110%"],
                            rotate: 360
                        }}
                        transition={{
                            duration: 20 + Math.random() * 20,
                            repeat: Infinity,
                            delay: Math.random() * 10,
                            ease: "linear"
                        }}
                        className="absolute w-1 h-1 bg-accent/40 rounded-full"
                    />
                ))}
            </div>

            {/* Static Grain Texture Effect */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
}
