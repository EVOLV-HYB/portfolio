"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FileText, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function FinalCTA() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
    const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
            {/* Cinematic animated background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5"
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            {/* Architectural grid overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(37, 99, 235, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 99, 235, 0.2) 1px, transparent 1px)
          `,
                    backgroundSize: '100px 100px'
                }} />
            </div>

            {/* Floating orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px]"
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-[100px]"
                animate={{
                    x: [0, -50, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="container max-w-5xl mx-auto relative z-10 text-center"
                style={{ opacity }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{ scale, y }}
                    className="relative glass rounded-[3rem] p-12 md:p-16 border border-white/10 overflow-hidden"
                >
                    {/* Architectural corner accents */}
                    <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                            <motion.path
                                d="M 0 0 L 100 0 L 0 100 Z"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="0.5"
                                className="text-accent"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            />
                        </svg>
                    </div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20 rotate-180">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                            <motion.path
                                d="M 0 0 L 100 0 L 0 100 Z"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="0.5"
                                className="text-accent"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2 }}
                            />
                        </svg>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative z-10"
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-8"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Sparkles className="w-3 h-3" />
                            Let&apos;s Build Together
                        </motion.div>

                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase leading-[0.95]">
                            Ready to Build a Platform<br />
                            <span className="text-accent">That Actually Scales?</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light relative z-10"
                    >
                        Let&apos;s discuss how we can engineer a platform tailored to your operational needs. No generic solutions—only systems thinking.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10"
                    >
                        <Link
                            href="/#intake"
                            className="group relative bg-accent text-accent-foreground px-8 py-4 rounded-xl text-lg font-bold flex items-center gap-2 overflow-hidden transition-all hover:scale-105 active:scale-95"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.6 }}
                            />
                            <span className="relative z-10">Start a Platform Conversation</span>
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="relative z-10"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </motion.div>
                            <div className="absolute inset-0 shadow-[0_0_30px_rgba(37,99,235,0.6)] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>

                        <Link
                            href="/#work"
                            className="group relative bg-card/50 backdrop-blur-sm border border-white/10 text-foreground px-8 py-4 rounded-xl text-lg font-bold flex items-center gap-2 hover:border-accent/50 transition-all hover:scale-105 active:scale-95"
                        >
                            <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            View Our Work
                        </Link>
                    </motion.div>

                    {/* Cinematic pulse */}
                    <motion.div
                        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>
            </motion.div>

            {/* Bottom architectural divider */}
            <div className="absolute bottom-0 left-0 w-full">
                <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-accent/30 to-transparent" />
            </div>
        </section>
    );
}
