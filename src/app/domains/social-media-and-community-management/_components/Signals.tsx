"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Heart, Users, MousePointerClick, MessageSquare } from "lucide-react";

const signals = [
    {
        title: "Depth of Engagement",
        description: "Saves, shares, comments, replies, DMs—not just likes or impressions.",
        icon: MessageSquare,
        value: 400,
        suffix: "%",
        color: "text-blue-400"
    },
    {
        title: "Community Health",
        description: "Active members, quality of conversations, participation in rituals.",
        icon: Users,
        value: 85,
        suffix: "%",
        color: "text-green-400"
    },
    {
        title: "Conversion Signals",
        description: "Click-throughs, feature adoption, and renewal signals.",
        icon: MousePointerClick,
        value: 3.5,
        suffix: "x",
        color: "text-purple-400"
    },
    {
        title: "Brand Affinity",
        description: "Mentions, referrals, UGC, and organic advocacy.",
        icon: Heart,
        value: 120,
        suffix: "+",
        color: "text-red-400"
    }
];

function Counter({ from, to, duration }: { from: number; to: number; duration: number }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true });

    useEffect(() => {
        if (!inView) return;

        let startTime: number;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

            if (nodeRef.current) {
                nodeRef.current.textContent = Math.floor(progress * (to - from) + from).toString();
            }

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    }, [inView, from, to, duration]);

    return <span ref={nodeRef} />;
}

export default function Signals() {
    return (
        <section className="py-24 px-6 bg-accent/5 overflow-hidden">
            <div className="container max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
                        What We Aim to Improve
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Real impact, measured by signals that actually drive business growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {signals.map((signal, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-card border border-white/5 p-8 rounded-3xl group hover:border-accent/30 transition-all text-center flex flex-col items-center"
                        >
                            <div className={`w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${signal.color}`}>
                                <signal.icon className="w-8 h-8" />
                            </div>

                            <div className="text-4xl font-black mb-2 flex items-baseline justify-center">
                                <Counter from={0} to={signal.value} duration={2} />
                                <span className="text-accent ml-1">{signal.suffix}</span>
                            </div>

                            <h3 className="font-bold uppercase tracking-tight mb-3">{signal.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {signal.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
