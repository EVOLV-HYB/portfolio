import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    randomOffset: number;
}

interface ParticleBackgroundProps {
    count?: number;
    color?: string;
    opacity?: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
    count = 20,
    color = "rgba(0, 123, 255, 0.3)",
    opacity = 0.5
}) => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        // Generate random particles only on the client
        const newParticles = Array.from({ length: count }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 15 + 5,
            duration: Math.random() * 20 + 10,
            randomOffset: Math.random() * 50 - 25,
        }));
        setParticles(newParticles);
    }, [count]);

    if (particles.length === 0) return null;

    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                pointerEvents: 'none',
                zIndex: 0
            }}
        >
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    style={{
                        position: 'absolute',
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                        backgroundColor: color,
                        borderRadius: '50%',
                        opacity: opacity,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, p.randomOffset, 0],
                        opacity: [opacity, opacity * 0.5, opacity]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
};

export default ParticleBackground;
