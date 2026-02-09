import React from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
    children: React.ReactNode;
    className?: string;
    colors?: string[];
    duration?: number;
}

const GradientText: React.FC<GradientTextProps> = ({
    children,
    className = "",
    colors = ["#4d4d4d", "#fff", "#4d4d4d"],
    duration = 3
}) => {
    return (
        <motion.span
            className={className}
            style={{
                backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
                backgroundSize: "200% auto",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent", // Fallback
                display: "inline-block"
            }}
            animate={{
                backgroundPosition: "200% center"
            }}
            transition={{
                repeat: Infinity,
                duration: duration,
                ease: "linear"
            }}
        >
            {children}
        </motion.span>
    );
};

export default GradientText;
