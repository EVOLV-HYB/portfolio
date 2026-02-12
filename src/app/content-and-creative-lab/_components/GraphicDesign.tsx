"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { PenTool, Layers, Layout, ArrowRight, MoveRight } from "lucide-react";

const designSteps = [
    {
        id: 1,
        title: "Brand Strategy and Visuals",
        desc: "We define the core essence of your brand, creating a visual language that resonates with your target audience through logos, typography, and color theory.",
        icon: Layers,
        image: "/e690e216-740d-46fc-b192-39b7f88b3569.jpeg", // Use available asset
        color: "bg-blue-500"
    },
    {
        id: 2,
        title: "Marketing Collaterals",
        desc: "From social media sets to high-conversion ads, we design assets that drive engagement and tell your brand story across all digital touchpoints.",
        icon: Layers,
        image: "/825b491b-071a-492d-8690-beb7ca0f800b.jpeg",
        color: "bg-cyan-500"
    },
    {
        id: 3,
        title: "Presentation Engineering",
        desc: "Transforming complex data into persuasive narratives. We build investor decks and internal presentations that win hearts and minds.",
        icon: Layers,
        image: "/graphic designer.jpeg",
        color: "bg-indigo-500"
    }
];

export default function GraphicDesign() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="relative bg-[#0a0a0a] py-32 overflow-hidden">

            {/* Background Details */}
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* 1. High-Impact Lab Header */}
                <div className="flex flex-col items-center text-center mb-32">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                        <MoveRight className="w-3 h-3" />
                        Visual Engineering
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase mb-6"
                    >
                        Graphic <br />
                        <span className="text-blue-500">Design Lab.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-gray-500 max-w-xl text-lg font-light uppercase tracking-widest"
                    >
                        Turning abstract concepts into pixel-perfect reality.
                    </motion.p>
                </div>

                {/* Vertical Sliding Graph (Progress Bar) */}
                <div className="absolute left-1/2 top-[400px] bottom-32 -translate-x-1/2 w-px bg-white/5 hidden md:block">
                    <motion.div
                        style={{ scaleY }}
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 via-cyan-400 to-indigo-500 origin-top shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                    />
                </div>

                {/* Zigzag Steps */}
                <div className="space-y-48 relative">
                    {designSteps.map((step, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div key={step.id} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-32`}>

                                {/* Text Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="flex-1 space-y-6"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center text-white shadow-lg`}>
                                            <step.icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-blue-400 font-black text-xs uppercase tracking-widest">Step 0{step.id}</span>
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed font-light">
                                        {step.desc}
                                    </p>
                                    <div className="pt-4">
                                    </div>
                                </motion.div>

                                {/* Image / Component Side with Zoom Animation */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, x: isEven ? 50 : -50 }}
                                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="flex-1 relative aspect-square md:aspect-video w-full"
                                >
                                    <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-2xl group-hover:bg-blue-500/20 transition-all" />
                                    <div className="relative w-full h-full rounded-2xl border border-white/10 overflow-hidden bg-zinc-900 group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                        />

                                        {/* Corner Accents */}
                                        <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/30" />
                                        <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/30" />
                                    </div>

                                    {/* Scroll Progress Dot attached to line */}
                                    <div className={`absolute top-1/2 ${isEven ? '-left-16' : '-right-16'} -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full hidden md:block z-20`}>
                                        <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-30" />
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>

            </div>

        </section>
    );
}
