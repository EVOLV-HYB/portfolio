"use client";

import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

interface Point {
    id: number;
    x: number;
    y: number;
    color: string;
}

export default function ParticleTrail() {
    const [points, setPoints] = useState<Point[]>([]);
    const colors = ["#007BFF", "#66B2FF", "#B3D9FF", "#ffffff"];

    const addPoint = useCallback((x: number, y: number) => {
        const id = Date.now() + Math.random();
        const color = colors[Math.floor(Math.random() * colors.length)];
        setPoints((prev) => [...prev.slice(-20), { id, x, y, color }]);

        setTimeout(() => {
            setPoints((prev) => prev.filter((p) => p.id !== id));
        }, 800);
    }, []);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            addPoint(e.clientX, e.clientY);
        };
        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, [addPoint]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[10000] overflow-hidden">
            {points.map((p, i) => (
                <motion.div
                    key={p.id}
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute w-2 h-2 rounded-full blur-[1px]"
                    style={{
                        left: p.x - 4,
                        top: p.y - 4,
                        backgroundColor: p.color,
                        boxShadow: `0 0 10px ${p.color}`,
                    }}
                />
            ))}
        </div>
    );
}
