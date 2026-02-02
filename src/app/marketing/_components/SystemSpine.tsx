"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
    { id: "hero", label: "Start" },
    { id: "domains", label: "Domains" },
    { id: "philosophy", label: "Principles" },
    { id: "lifecycle", label: "Process" },
    { id: "use-cases", label: "Work" },
    { id: "tools", label: "Tech" },
    { id: "signals", label: "Impact" },
];

export default function SystemSpine() {
    const [activeSection, setActiveSection] = useState("hero");
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map(s => document.getElementById(s.id));

            // Find the section that is currently most visible
            let current = "hero";
            let maxVisibleHeight = 0;

            sectionElements.forEach(section => {
                if (!section) return;
                const rect = section.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Calculate how much of the section is visible
                const visibleTop = Math.max(0, rect.top);
                const visibleBottom = Math.min(windowHeight, rect.bottom);
                const visibleHeight = Math.max(0, visibleBottom - visibleTop);

                if (visibleHeight > maxVisibleHeight) {
                    maxVisibleHeight = visibleHeight;
                    current = section.id;
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-12 h-[60vh]">
            {/* The Spine Line Background */}
            <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-white/5 -z-10" />

            {/* The Active Progress Line */}
            {/* Note: Simply mapping progress to height might not align perfectly with nodes if spacing varies, 
                but for a "spine" feel, a glowing pulse or just tracking active nodes is often cleaner than a full progress bar overlay. 
                Let's stick to the prompt's "pulse of light" and active node glow. */}

            {sections.map((section) => {
                const isActive = activeSection === section.id;

                return (
                    <div key={section.id} className="relative group flex items-center">
                        <button
                            onClick={() => scrollToSection(section.id)}
                            className="relative z-10 focus:outline-none"
                            aria-label={`Scroll to ${section.label}`}
                        >
                            <motion.div
                                animate={{
                                    scale: isActive ? 1.5 : 1,
                                    backgroundColor: isActive ? "#2563eb" : "#262626", // accent vs border color
                                    borderColor: isActive ? "rgba(37,99,235,0.5)" : "rgba(255,255,255,0.1)",
                                }}
                                className={`w-4 h-4 rounded-full border-2 transition-colors duration-500 shadow-[0_0_10px_rgba(0,0,0,0.5)] ${isActive ? 'shadow-[0_0_15px_rgba(37,99,235,0.6)]' : ''}`}
                            />
                        </button>

                        {/* Label (Tooltip style) */}
                        <div className={`absolute left-8 px-3 py-1 bg-card border border-white/10 rounded-md text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 pointer-events-none
                            ${isActive ? 'opacity-100 translate-x-0 text-accent' : 'opacity-0 -translate-x-2 text-muted-foreground group-hover:opacity-100 group-hover:translate-x-0'}
                        `}>
                            {section.label}
                        </div>

                        {/* Pulse effect when active */}
                        {isActive && (
                            <motion.div
                                layoutId="spine-pulse"
                                className="absolute left-[7px] -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-accent/0 via-accent to-accent/0"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: [0, 1, 0], y: [-40, 40] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
