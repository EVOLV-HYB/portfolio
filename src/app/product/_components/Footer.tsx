"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import ParticleSystem from "./Extras/ParticleSystem";
import { useState, useEffect } from "react";

export default function Footer() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <footer className="relative py-24 border-t border-white/10 bg-[#121212] overflow-hidden">
            {/* Unique Section Background: Drifting Icons */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
                {mounted && [Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: "110%",
                            rotate: 0
                        }}
                        animate={{
                            y: "-10%",
                            rotate: 360,
                            x: (Math.random() * 100 - 50) + "%"
                        }}
                        transition={{
                            duration: 20 + i * 5,
                            repeat: Infinity,
                            delay: i * 4,
                            ease: "linear"
                        }}
                        className="absolute text-accent/20"
                    >
                        <Icon size={48 + i * 10} />
                    </motion.div>
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2">
                        <h3 className="text-3xl font-bold mb-6 tracking-tighter">
                            <span className="text-white">Venture</span>
                            <span className="text-accent">Forge</span>
                        </h3>
                        <p className="text-white/40 max-w-sm mb-8 text-lg">
                            The premier platform for radical innovation. From concept to scale, we forge the future.
                        </p>
                        <div className="flex gap-4">
                            {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{
                                        y: -10,
                                        color: "#007BFF",
                                        scale: 1.2
                                    }}
                                    initial={{ y: 0 }}
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{
                                        y: { duration: 2 + i, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                    className="p-3 bg-white/5 rounded-2xl text-white/40 hover:text-accent transition-all border border-white/5 hover:border-accent/50 group"
                                >
                                    <Icon size={24} className="group-hover:drop-shadow-[0_0_10px_#007BFF]" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase text-xs tracking-[0.3em] text-white/60">Platform</h4>
                        <ul className="space-y-3 text-sm text-white/40">
                            {["Incubator", "Investor Portal", "Expo 2026", "Resources"].map(item => (
                                <li key={item}>
                                    <motion.a
                                        whileHover="hover"
                                        href="#"
                                        className="transition-all block relative"
                                    >
                                        <motion.span
                                            variants={{
                                                initial: { scale: 0, opacity: 0 },
                                                hover: { scale: 1.2, opacity: 1 }
                                            }}
                                            className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_#007BFF]"
                                        />
                                        <motion.span
                                            whileHover={{ x: 5, color: "#ffffff" }}
                                            className="block"
                                        >
                                            {item}
                                        </motion.span>
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/5 p-6 rounded-3xl border border-white/10"
                    >
                        <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-white/60">Join the Forge</h4>
                        <p className="text-xs text-white/40 mb-6 leading-relaxed">Subscribe to our dispatch for early access to top ideas and investor reports.</p>
                        <div className="flex flex-col gap-3">
                            <input type="email" placeholder="Email" className="bg-background border border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-accent w-full transition-all" />
                            <button className="bg-accent px-6 py-3 rounded-xl text-xs font-bold text-white hover:bg-[#0056b3] transition-all shadow-lg hover:shadow-accent/40">Join Dispatch</button>
                        </div>
                    </motion.div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-[10px] uppercase tracking-[0.2em] text-white/20">
                    <p>© 2026 VentureForge Hub. All rights reserved.</p>
                    <div className="flex gap-8 mt-6 md:mt-0">
                        {["Privacy", "Terms", "Status"].map(item => (
                            <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
