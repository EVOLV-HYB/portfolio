"use client";

import React from 'react';
import { motion, Variants } from "framer-motion";

const Loader = ({ progress }: { progress?: any }) => {
    const containerVariants: Variants = {
        start: {},
        end: {},
    };

    const circleVariants: Variants = {
        start: { y: '0%', opacity: 0.3 },
        end: { y: '100%', opacity: 1 },
    };

    return (
        <motion.div
            style={loaderStyle as React.CSSProperties}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div style={{ textAlign: 'center' }}>
                <motion.div
                    style={spinnerContainer as React.CSSProperties}
                    variants={containerVariants}
                    initial="start"
                    animate="end"
                >
                    {[0, 1, 2].map((i) => (
                        <motion.span
                            key={i}
                            style={circleStyle as React.CSSProperties}
                            animate={{
                                y: progress ? (Math.sin((progress.get() * 10) + i) * 20) : undefined,
                                scale: progress ? (0.8 + Math.cos((progress.get() * 10) + i) * 0.4) : 1.2,
                                opacity: progress ? (0.4 + Math.sin((progress.get() * 5) + i) * 0.6) : 1
                            }}
                            transition={progress ? { type: "spring", stiffness: 300, damping: 20 } : {
                                duration: 0.5,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                                delay: i * 0.1
                            }}
                        />
                    ))}
                </motion.div>
                <motion.p
                    style={{
                        color: 'white',
                        marginTop: '30px',
                        fontSize: '0.9rem',
                        letterSpacing: '4px',
                        textTransform: 'uppercase',
                        opacity: 0.6
                    }}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    {progress ? "Scroll to Explore" : "Loading Story"}
                </motion.p>
            </div>
        </motion.div>
    );
};

const loaderStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: '#121212',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
};

const spinnerContainer = {
    display: 'flex',
    gap: '10px',
};

const circleStyle = {
    display: 'block',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#007BFF',
};

export default Loader;
