"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MoveRight, Sparkles, User, Send } from "lucide-react";
import { useState } from "react";

export default function ContentCTA() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        description: ""
    });

    return (
        <section id="contact" className="py-40 px-6 relative overflow-hidden bg-black">

            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-blue-600/5 opacity-50 z-0" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Pulsing Core Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full animate-pulse-slow pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center lg:items-start text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-12">
                            <Sparkles className="w-3 h-3" />
                            Next Steps
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.85] tracking-tighter uppercase mb-8">
                            Let’s build <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600">
                                Something Great.
                            </span>
                        </h2>

                        <p className="text-gray-500 max-w-xl text-lg font-light uppercase tracking-widest leading-relaxed mb-12">
                            Ready to elevate your digital presence? We are ready to shoot, edit, and deliver excellence.
                        </p>

                        <div className="hidden lg:flex items-center gap-4 text-white/20 pt-8 border-t border-white/5 w-full">
                            <div className="flex items-center gap-3">
                                <MoveRight className="w-4 h-4" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Global Delivery</span>
                            </div>
                            <div className="w-1.5 h-1.5 bg-blue-500/20 rounded-full" />
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-black uppercase tracking-widest">24/7 Support</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Structured Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2rem] relative group"
                    >
                        <div className="absolute inset-0 bg-blue-500/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <form className="relative z-10 space-y-8" onSubmit={(e) => e.preventDefault()}>
                            {/* Name Field */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-[10px] font-black text-blue-400 uppercase tracking-widest ml-1">
                                    <User className="w-3 h-3" />
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 transition-all font-light"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            {/* Email Field */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-[10px] font-black text-blue-400 uppercase tracking-widest ml-1">
                                    <Mail className="w-3 h-3" />
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 transition-all font-light"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            {/* Description Field */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-[10px] font-black text-blue-400 uppercase tracking-widest ml-1">
                                    <ArrowRight className="w-3 h-3 rotate-90" />
                                    Project Description
                                </label>
                                <textarea
                                    placeholder="Tell us about your project goals..."
                                    rows={4}
                                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 transition-all font-light resize-none"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                />
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black uppercase text-xs tracking-[0.3em] py-5 rounded-2xl transition-all shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] flex items-center justify-center gap-3 group"
                            >
                                Send Message
                                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.button>
                        </form>
                    </motion.div>

                </div>

                {/* Mobile Accents */}
                <div className="mt-20 flex lg:hidden items-center justify-center gap-12 text-white/20 pt-16 border-t border-white/5 w-full">
                    <div className="flex items-center gap-3">
                        <MoveRight className="w-4 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Global Delivery</span>
                    </div>
                </div>

            </div>

            <style jsx global>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
                    50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}
