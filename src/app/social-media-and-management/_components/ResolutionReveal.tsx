"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ResolutionRevealProps {
    children: ReactNode;
    delay?: number;
    className?: string; // Allow passing styles/classes for the wrapper
}

export default function ResolutionReveal({ children, delay = 0, className = "" }: ResolutionRevealProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                filter: "blur(12px)",
                scale: 0.96,
                y: 20
            }}
            whileInView={{
                opacity: 1,
                filter: "blur(0px)",
                scale: 1,
                y: 0
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.25, 0.4, 0.25, 1] // Smooth ease-out
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
