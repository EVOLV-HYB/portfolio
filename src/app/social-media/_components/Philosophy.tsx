"use client";

import { motion } from "framer-motion";

const principles = [
    {
        title: "Community First, Channel Second",
        description: "We start with who you're serving and why they care—then pick the platforms that fit, not the other way around."
    },
    {
        title: "Consistency Over One-Off Virality",
        description: "We design systems that can ship reliably every week, instead of chasing one viral spike that doesn't convert."
    },
    {
        title: "Human Tone, Systemic Delivery",
        description: "The voice is real and human. The way we produce and publish is structured, efficient, and scalable."
    },
    {
        title: "Data-Informed, Not Data-Obsessed",
        description: "We use metrics to guide decisions—not to obsess over every fluctuation. Depth and quality of engagement matter most."
    }
];

export default function Philosophy() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }}
            />

            <div className="container max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
                        Our Social & Community Principles
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {principles.map((principle, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-4">
                                <span className="text-accent/30 text-5xl font-black -mt-2">0{index + 1}</span>
                                {principle.title}
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed pl-[4.5rem] border-l border-white/10 group-hover:border-accent/50 transition-colors">
                                {principle.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
