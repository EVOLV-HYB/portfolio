"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, ArrowRight, Circle } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Teams", href: "#teams" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { scrollY } = useScroll();

    // Logo morph: scales and rotates on scroll
    const logoScale = useTransform(scrollY, [0, 100], [1, 0.8]);
    const logoRotate = useTransform(scrollY, [0, 100], [0, -5]);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 overflow-hidden ${scrolled ? "bg-[#121212]/80 backdrop-blur-xl py-3 border-b border-white/10" : "bg-transparent py-6"
                }`}
        >
            {/* Unique Section Background: Subtle Gradient + Floating Dots */}
            {!scrolled && mounted && (
                <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                    <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                                duration: 3 + i,
                                repeat: Infinity,
                                delay: i * 0.5
                            }}
                            className="absolute w-1 h-1 bg-accent rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`
                            }}
                        />
                    ))}
                </div>
            )}
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.div
                    style={{ scale: logoScale, rotate: logoRotate }}
                    className="text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-2 group"
                >
                    <motion.div
                        animate={{
                            borderRadius: scrolled ? "50%" : "20%",
                            rotate: scrolled ? 360 : 0
                        }}
                        className="w-8 h-8 bg-accent"
                    />
                    <div className="flex">
                        <span className="text-white">Venture</span>
                        <span className="text-accent group-hover:text-white transition-colors">Forge</span>
                    </div>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="relative text-sm font-medium text-white/70 hover:text-white transition-colors group flex items-center gap-2"
                        >
                            <motion.div
                                className="relative w-4 h-4 flex items-center justify-center"
                                whileHover="hover"
                            >
                                <motion.div
                                    variants={{
                                        initial: { opacity: 1, scale: 1, rotate: 0 },
                                        hover: { opacity: 0, scale: 0, rotate: 90 }
                                    }}
                                    className="absolute"
                                >
                                    <ArrowRight size={14} className="text-accent" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0, rotate: -90 }}
                                    variants={{
                                        initial: { opacity: 0, scale: 0, rotate: -90 },
                                        hover: { opacity: 1, scale: 1, rotate: 0 }
                                    }}
                                    className="absolute"
                                >
                                    <Circle size={14} className="text-accent fill-accent/20" />
                                </motion.div>
                            </motion.div>
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#007BFF]" />
                        </motion.a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        className="fixed inset-0 top-0 left-0 w-screen h-screen bg-background z-[100] md:hidden"
                    >
                        <div className="flex flex-col h-full p-12 justify-center items-center space-y-8">
                            <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white"><X size={32} /></button>
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-4xl font-bold text-white hover:text-accent"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
