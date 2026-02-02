"use client";

import { motion } from "framer-motion";
import { useCausality } from "../_context/CausalityContext";

const steps = [
    {
        step: "01",
        label: "Discover & Listen",
        description: "Map your audience, current channels, competitors, and existing communities. We look for real conversations, not just follower counts."
    },
    {
        step: "02",
        label: "Strategy & Narrative Design",
        description: "Define your positioning, content pillars, and channel roles. Decide what you talk about, where, and how often."
    },
    {
        step: "03",
        label: "Systems & Setup",
        description: "Set up content calendars, workflows, tools, and community spaces. Align design, templates, and publishing processes."
    },
    {
        step: "04",
        label: "Launch & Activate",
        description: "Roll out campaigns, content series, and community activations. Make it clear why people should follow, join, and engage now."
    },
    {
        step: "05",
        label: "Nurture & Operate",
        description: "Manage daily/weekly operations: posts, replies, moderation, programming, and ecosystem health."
    },
    {
        step: "06",
        label: "Optimize & Scale",
        description: "Review performance, gather insights, run experiments, and scale what works across channels and formats."
    }
];

export default function Lifecycle() {
    const { triggerTrail } = useCausality();

    const handleMouseEnter = (e: React.MouseEvent, targetId: string) => {
        const rect = e.currentTarget.getBoundingClientRect();
        triggerTrail(rect.left + rect.width / 2, rect.top + rect.height / 2, targetId);
    };

    return (
        <section className="py-24 px-6 bg-card border-y border-white/5">
            <div className="container max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
                        From Insight to Living Community
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        We don't just post—we design a pipeline from understanding your audience to running a healthy, evolving social ecosystem.
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[3.5rem] left-0 w-full h-px bg-white/10">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            className="h-full bg-accent"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                        {steps.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                onMouseEnter={(e) => handleMouseEnter(e, "signals")}
                                className="relative group cursor-default"
                            >
                                {/* Node Point */}
                                <div className="hidden lg:block w-4 h-4 rounded-full bg-card border-2 border-white/20 absolute top-[3.25rem] -translate-y-1/2 left-0 group-hover:border-accent group-hover:scale-125 transition-all z-10">
                                    <div className="w-full h-full rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <div className="space-y-4 pt-4 lg:pt-20 border-l lg:border-l-0 border-white/10 pl-6 lg:pl-0">
                                    <div className="text-sm font-black text-accent tracking-widest">{item.step}</div>
                                    <h3 className="text-lg font-bold uppercase leading-tight group-hover:text-accent transition-colors">
                                        {item.label}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
