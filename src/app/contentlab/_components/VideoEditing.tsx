"use client";

import { motion } from "framer-motion";
import { Play, Film, MoveRight, Monitor, Cpu, Sparkles } from "lucide-react";

const workflow = [
    { step: "01", title: "Ingestion", desc: "RAW footage sync & organization" },
    { step: "02", title: "Editing", desc: "A-Roll cutting & narrative flow" },
    { step: "03", title: "Motion", desc: "VFX, Titles & dynamic graphics" },
    { step: "04", title: "Color", desc: "Cinematic grading & correction" },
    { step: "05", title: "Sound", desc: "SFX, Music & master mixing" },
    { step: "06", title: "Export", desc: "Multi-platform delivery optimization" },
];

const capabilities = [
    { icon: Monitor, text: "4K/8K Editing" },
    { icon: Cpu, text: "High-End Rendering" },
    { icon: Sparkles, text: "AI Enhancement" },
    { icon: Film, text: "ProRes RAW Support" }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
    }
};

export default function VideoEditing() {
    return (
        <section className="relative bg-[#050505] py-32 overflow-hidden border-t border-white/5">

            {/* Background Details */}
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
            <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* 1. Header (Lab Style) */}
                <div className="flex flex-col items-center text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                        <MoveRight className="w-3 h-3" />
                        Post-Production Excellence
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase mb-8"
                    >
                        Video <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600">
                            Editing Lab.
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-gray-500 max-w-2xl text-lg font-light uppercase tracking-widest leading-relaxed"
                    >
                        Precision cutting and cinematic storytelling for the digital age.
                    </motion.p>
                </div>

                {/* 2. Featured Showreel Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32 h-auto"
                >
                    {/* Main Video */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-8 relative rounded-3xl overflow-hidden bg-zinc-900 group cursor-pointer border border-white/10"
                    >
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                        <img src="/content/portfolio_visual.png" alt="Featured Showreel" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />

                        {/* Play Button Pulse */}
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-30 scale-150" />
                                <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-all duration-500 shadow-[0_0_50px_-10px_rgba(59,130,246,0.5)]">
                                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-8 left-8 z-20">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="px-3 py-1 bg-blue-500 text-white text-[10px] font-black uppercase tracking-tighter rounded-full">Primary Reel</span>
                                <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest">4K CINEMATIC</span>
                            </div>
                            <h4 className="text-3xl font-black text-white uppercase tracking-tighter">Brand Storytelling</h4>
                        </div>
                    </motion.div>

                    {/* Secondary Clips */}
                    <div className="md:col-span-4 flex flex-col gap-6">
                        {[1, 2].map((i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                className="relative flex-1 rounded-3xl overflow-hidden bg-zinc-900 group cursor-pointer border border-white/10"
                            >
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                                <img src="/content/portfolio_visual.png" alt={`Clip ${i}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <div className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-all">
                                        <Play className="w-5 h-5 text-white fill-white ml-1" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* 3. Process Timeline */}
                <div className="mb-32">
                    <div className="flex items-center gap-4 mb-16 px-4">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                        <h3 className="text-xs font-black text-blue-400 uppercase tracking-[0.5em]">The Workflow</h3>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
                    >
                        {workflow.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group relative bg-zinc-900/40 border border-white/5 p-8 rounded-3xl backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500"
                            >
                                <div className="text-5xl font-black text-blue-500/60 group-hover:text-blue-500/90 transition-colors mb-4">{item.step}</div>
                                <h4 className="text-white font-black uppercase text-sm tracking-tight mb-2">{item.title}</h4>
                                <p className="text-gray-500 text-[10px] leading-relaxed lowercase">{item.desc}</p>

                                {/* Hover Indicator */}
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 group-hover:w-full transition-all duration-500 rounded-b-3xl" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* 4. Tech Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-6"
                >
                    {capabilities.map((tech, index) => (
                        <div key={index} className="flex items-center gap-3 px-8 py-4 bg-zinc-900/50 rounded-2xl border border-white/5 text-gray-400 hover:text-white hover:border-blue-500/20 transition-all cursor-default group">
                            <tech.icon className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
                            <span className="font-black text-[10px] uppercase tracking-widest">{tech.text}</span>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
