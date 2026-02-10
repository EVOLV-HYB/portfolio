"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
    const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [mounted, setMounted] = useState(false);
    React.useEffect(() => setMounted(true), []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 5000);
        }, 2000);
    };

    const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = Date.now();
        setRipples((prev) => [...prev, { x, y, id }]);
        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== id));
        }, 1000);
    };

    const Skeleton = ({ className = "h-14" }: { className?: string }) => (
        <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`w-full bg-white/5 rounded-xl ${className}`}
        />
    );

    return (
        <section id="contact" className="py-24 bg-[#121212] relative overflow-hidden">
            {/* Unique Section Background: Ripple Waves */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-50 flex items-center justify-center">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{
                            scale: [0.5, 2.5],
                            opacity: [0, 0.3, 0]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            delay: i * 1.5,
                            ease: "easeOut"
                        }}
                        className="absolute w-[50vw] h-[50vw] border-2 border-accent/20 rounded-full"
                    />
                ))}
            </div>
            {/* Success Particle Explosion */}
            <AnimatePresence>
                {success && mounted && (
                    <div className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center">
                        {Array.from({ length: 40 }).map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0, x: 0, y: 0 }}
                                animate={{
                                    scale: Math.random() * 2,
                                    x: (Math.random() - 0.5) * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                                    y: (Math.random() - 0.5) * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                                    rotate: 360,
                                    opacity: 0
                                }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                className="absolute w-2 h-2 bg-accent rounded-full"
                            />
                        ))}
                    </div>
                )}
            </AnimatePresence>

            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Let&apos;s Build It</h2>
                        <p className="text-white/40">Ready to forge your idea? Target locked.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            {[
                                { icon: MapPin, label: "Headquarters", text: "Coimbatore, Tamil Nadu" },
                                { icon: Phone, label: "Direct Line", text: "ratish no" },
                                { icon: Mail, label: "Dispatch", text: "ventureforge@gmail.com" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 10, scale: 1.02 }}
                                    className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/0 hover:border-accent/30 transition-all cursor-default"
                                >
                                    <div className="p-4 bg-accent/10 text-accent rounded-2xl shadow-lg">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{item.label}</h4>
                                        <p className="text-white/40 text-sm">{item.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            layout
                            className="bg-card/50 backdrop-blur-md border border-white/5 p-8 rounded-3xl shadow-3xl relative overflow-hidden"
                        >
                            <style jsx>{`
                                @keyframes shimmer {
                                    0% { transform: translateX(-100%); }
                                    100% { transform: translateX(100%); }
                                }
                                .shimmer-focus:focus-within::after {
                                    content: '';
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 100%;
                                    background: linear-gradient(90deg, transparent, rgba(0, 123, 255, 0.2), transparent);
                                    animation: shimmer 1.5s infinite;
                                    pointer-events: none;
                                }
                            `}</style>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2 relative shimmer-focus">
                                        <label className="text-sm font-medium text-white/60">Full Name</label>
                                        {loading ? <Skeleton /> : (
                                            <motion.input
                                                whileFocus={{ scale: 1.02, borderColor: "#007BFF" }}
                                                type="text"
                                                className="w-full bg-card/80 border border-white/10 rounded-xl p-4 outline-none transition-all shadow-[0_0_0px_rgba(0,123,255,0)] focus:shadow-[0_0_20px_rgba(0,123,255,0.2)]"
                                            />
                                        )}
                                    </div>
                                    <div className="space-y-2 relative shimmer-focus">
                                        <label className="text-sm font-medium text-white/60">Email Address</label>
                                        {loading ? <Skeleton /> : (
                                            <motion.input
                                                whileFocus={{ scale: 1.02, borderColor: "#007BFF" }}
                                                type="email"
                                                className="w-full bg-card/80 border border-white/10 rounded-xl p-4 outline-none transition-all shadow-[0_0_0px_rgba(0,123,255,0)] focus:shadow-[0_0_20px_rgba(0,123,255,0.2)]"
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="space-y-2 relative shimmer-focus">
                                    <label className="text-sm font-medium text-white/60">Project Brief</label>
                                    {loading ? <Skeleton className="h-32" /> : (
                                        <motion.textarea
                                            whileFocus={{ scale: 1.01, borderColor: "#007BFF" }}
                                            rows={4}
                                            className="w-full bg-card/80 border border-white/10 rounded-xl p-4 outline-none transition-all shadow-[0_0_0px_rgba(0,123,255,0)] focus:shadow-[0_0_20px_rgba(0,123,255,0.2)]"
                                        />
                                    )}
                                </div>

                                <div className="flex justify-center">
                                    <motion.button
                                        layout
                                        type="submit"
                                        style={{ borderRadius: success ? "100px" : "12px", width: success ? "80px" : "100%" }}
                                        className={`relative py-4 font-bold overflow-hidden group shadow-[0_0_20px_#007BFF] transition-all flex items-center justify-center ${success ? "bg-green-500 shadow-green-500" : "bg-accent"} ${loading ? "opacity-70 cursor-wait" : ""}`}
                                        onClick={handleRipple}
                                        disabled={loading || success}
                                    >
                                        <AnimatePresence mode="wait">
                                            {success ? (
                                                <motion.div
                                                    key="success"
                                                    initial={{ scale: 0, rotate: -90 }}
                                                    animate={{ scale: 1, rotate: 0 }}
                                                    className="z-10"
                                                >
                                                    <CheckCircle size={32} />
                                                </motion.div>
                                            ) : loading ? (
                                                <motion.div
                                                    key="loading"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    className="z-10"
                                                >
                                                    Forging...
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key="idle"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    className="z-10 flex items-center gap-2"
                                                >
                                                    Send Transmission <Send size={18} />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {ripples.map((ripple) => (
                                            <motion.span
                                                key={ripple.id}
                                                initial={{ scale: 0, opacity: 0.5 }}
                                                animate={{ scale: 4, opacity: 0 }}
                                                transition={{ duration: 1 }}
                                                style={{
                                                    position: "absolute",
                                                    left: ripple.x,
                                                    top: ripple.y,
                                                    width: 20,
                                                    height: 20,
                                                    backgroundColor: "rgba(255,255,255,0.3)",
                                                    borderRadius: "50%",
                                                    pointerEvents: "none",
                                                    transform: "translate(-50%, -50%)",
                                                }}
                                            />
                                        ))}
                                    </motion.button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
