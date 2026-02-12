"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
            {/* Background system animation */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] opacity-30 animate-pulse" />
            </div>

            <div className="container relative z-10 max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-8"
                >
                    <Zap className="w-3 h-3" /> EVOLV HYBRID AGENCY
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]"
                >
                    CREATE  <span className="text-accent underline decoration-4 underline-offset-8">CONNECT</span><br />
                    AND <span className="text-glow">CONVERT</span>.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    EVOLV is a Hybrid innovation agency that combines strategy, creativity and technology to solve real world problems.
                    We work as a growth partner- building systems, content and solutions that drive measurable results.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.a
                        href="#intake"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group bg-accent text-accent-foreground px-8 py-4 rounded-xl text-lg font-bold flex items-center gap-2 hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer"
                    >
                        Book the Slot
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                    <div className="text-sm text-muted-foreground font-medium">
                        <span className="text-foreground">3</span> Exclusive Questions
                    </div>
                </motion.div>
            </div>

            {/* Decorative Grid Lines */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-accent/50 to-transparent" />
        </section>
    );
}
