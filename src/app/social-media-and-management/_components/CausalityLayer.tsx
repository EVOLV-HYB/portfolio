"use client";

import { useEffect, useState } from "react";
import { useCausality } from "../_context/CausalityContext";
import { motion, AnimatePresence } from "framer-motion";

export default function CausalityLayer() {
    const { trails } = useCausality();
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <svg className="w-full h-full">
                <AnimatePresence>
                    {trails.map((trail) => (
                        <TrailItem key={trail.id} trail={trail} />
                    ))}
                </AnimatePresence>
            </svg>
        </div>
    );
}

function TrailItem({ trail }: { trail: any }) {
    const [pathD, setPathD] = useState("");

    useEffect(() => {
        const targetEl = document.getElementById(trail.targetId);
        if (targetEl) {
            const targetRect = targetEl.getBoundingClientRect();

            // Start Coordinates (relative to viewport)
            const sx = trail.startX;
            const sy = trail.startY;

            // End Coordinates (center of target)
            const ex = targetRect.left + targetRect.width / 2;
            const ey = targetRect.top + targetRect.height / 2;

            // Control Point for Curve (offset to the right/left depending on direction)
            const cx = (sx + ex) / 2 + (Math.random() > 0.5 ? 100 : -100);
            const cy = (sy + ey) / 2;

            setPathD(`M ${sx} ${sy} Q ${cx} ${cy} ${ex} ${ey}`);
        }
    }, [trail]);

    if (!pathD) return null;

    return (
        <>
            {/* The Path (Optional: visible faint line) */}
            <motion.path
                d={pathD}
                stroke="url(#gradient-trail)"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.2 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            />

            {/* The Orb */}
            <motion.circle
                r="3"
                fill="#2563eb"
                filter="url(#glow)"
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                style={{ offsetPath: `path('${pathD}')` } as any}
                transition={{ duration: 1, ease: "easeInOut" }}
            />

            <defs>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <linearGradient id="gradient-trail" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0" />
                    <stop offset="50%" stopColor="#2563eb" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                </linearGradient>
            </defs>
        </>
    );
}
