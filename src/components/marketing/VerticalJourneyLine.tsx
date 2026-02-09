"use client";

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface JourneyStep {
    id: string;
    stepNumber: number;
    title: string;
    description: string;
}

interface VerticalJourneyLineProps {
    steps: JourneyStep[];
}

export function VerticalJourneyLine({ steps }: VerticalJourneyLineProps) {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);

    // Scroll-based animation for progressive reveal
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.7", "end 0.3"]
    });

    // Map scroll progress to spine drawing (0 to 1)
    const spineProgress = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

    return (
        <div ref={containerRef} className="relative w-full py-20">
            {/* Ambient Field - Subtle Horizontal Gradient Glow */}
            <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{
                    width: '100%',
                    height: '400px',
                    background: 'radial-gradient(ellipse 80% 200px at 50% 50%, rgba(59, 130, 246, 0.08), transparent 70%)',
                    opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.6, 0.6, 0.3]),
                }}
            />

            {/* Centered Horizontal Spine Container */}
            <div className="relative flex justify-center items-center min-h-[300px] px-8">
                <div className="relative max-w-5xl w-full">
                    {/* Central Horizontal Line - Draws from Left to Right */}
                    <motion.div
                        className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-white/10 origin-left"
                        style={{
                            width: '100%',
                            scaleX: spineProgress,
                        }}
                    />

                    {/* Steps Container */}
                    <div className="relative flex justify-between items-center py-12">
                        {steps.map((step, index) => {
                            const isHovered = hoveredStep === step.stepNumber;

                            // Sequential fade-in based on scroll progress
                            const nodeDelay = index * 0.12;
                            const nodeOpacity = useTransform(
                                scrollYProgress,
                                [nodeDelay, nodeDelay + 0.2],
                                [0, 1]
                            );

                            return (
                                <motion.div
                                    key={step.id}
                                    className="relative flex flex-col items-center"
                                    style={{
                                        opacity: nodeOpacity,
                                        flex: '0 0 auto',
                                    }}
                                    onHoverStart={() => setHoveredStep(step.stepNumber)}
                                    onHoverEnd={() => setHoveredStep(null)}
                                >
                                    {/* Soft Halo on Hover */}
                                    {isHovered && (
                                        <motion.div
                                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/15 rounded-full blur-2xl pointer-events-none"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                        />
                                    )}

                                    {/* Brightened Line Segment on Hover */}
                                    {isHovered && index < steps.length - 1 && (
                                        <motion.div
                                            className="absolute left-1/2 top-1/2 -translate-y-1/2 h-1 bg-accent/40 rounded-full"
                                            style={{
                                                width: `calc((100vw - 40rem) / ${steps.length - 1})`,
                                                transformOrigin: 'left',
                                            }}
                                            initial={{ opacity: 0, scaleX: 0 }}
                                            animate={{ opacity: 1, scaleX: 1 }}
                                            exit={{ opacity: 0, scaleX: 0 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        />
                                    )}

                                    {/* Node Circle */}
                                    <motion.div
                                        className="relative z-10 cursor-pointer mb-6"
                                        animate={{
                                            scale: isHovered ? 1.15 : 1,
                                        }}
                                        transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                                    >
                                        <motion.div
                                            className="w-16 h-16 rounded-full border-2 flex items-center justify-center font-bold text-xl relative"
                                            animate={{
                                                borderColor: isHovered ? 'rgb(59, 130, 246)' : 'rgba(255, 255, 255, 0.2)',
                                                backgroundColor: isHovered ? 'rgba(59, 130, 246, 0.12)' : 'rgba(0, 0, 0, 0.85)',
                                                color: isHovered ? 'rgb(59, 130, 246)' : 'rgba(255, 255, 255, 0.7)',
                                            }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        >
                                            {step.stepNumber}

                                            {/* Subtle Outer Ring on Hover */}
                                            {isHovered && (
                                                <motion.div
                                                    className="absolute inset-0 rounded-full border border-accent/40"
                                                    initial={{ scale: 1, opacity: 0.6 }}
                                                    animate={{ scale: 1.6, opacity: 0 }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                                                />
                                            )}
                                        </motion.div>
                                    </motion.div>

                                    {/* Content - Title and Description */}
                                    <motion.div
                                        className="flex flex-col items-center text-center max-w-[200px]"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{
                                            opacity: 1,
                                            y: isHovered ? -5 : 0,
                                        }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                        {/* Title */}
                                        <motion.h3
                                            className="text-base font-medium mb-2"
                                            animate={{
                                                color: isHovered ? 'rgb(255, 255, 255)' : 'rgba(255, 255, 255, 0.85)',
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {step.title}
                                        </motion.h3>

                                        {/* Description - Fades In on Hover */}
                                        <motion.p
                                            className="text-sm text-muted-foreground"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{
                                                opacity: isHovered ? 0.9 : 0,
                                                height: isHovered ? 'auto' : 0,
                                            }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        >
                                            {step.description}
                                        </motion.p>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
