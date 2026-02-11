"use client";

import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  Hammer,
  Rocket,
  TrendingUp
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "Understand goals, audit systems, and uncover root problems through research, analysis, and stakeholder insights.",
    color: "text-blue-400",
  },
  {
    icon: Lightbulb,
    title: "Strategize",
    description:
      "Design a clear roadmap and solution architecture combining creativity, technology, and growth strategy.",
    color: "text-blue-500",
  },
  {
    icon: Hammer,
    title: "Build",
    description:
      "Develop content, platforms, and systems with precision, turning ideas into real, working solutions.",
    color: "text-blue-600",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Deploy, integrate, and activate solutions across channels to ensure smooth adoption and immediate impact.",
    color: "text-blue-700",
  },
  {
    icon: TrendingUp,
    title: "Optimize",
    description:
      "Measure performance, refine processes, and scale continuously to maximize long-term growth and results.",
    color: "text-blue-800",
  },
];

export default function Process() {
    return (
        <section id="process" className="py-32 px-6 bg-muted/30">
            <div className="container max-w-6xl mx-auto">
                <div className="mb-20 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase">
                        The Process Plan
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        A precise, deliberate methodology designed to move from ambiguity problem to absolute operational solution.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-accent/50 via-accent/20 to-transparent z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative z-10 group"
                        >
                            <div className="mb-6 relative">
                                <div className="w-24 h-24 rounded-2xl bg-card border border-white/5 flex items-center justify-center group-hover:border-accent/50 transition-all group-hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] overflow-hidden">
                                    <step.icon className={`w-10 h-10 ${step.color} group-hover:scale-110 transition-transform`} />
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
                                </div>
                                <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center text-xs font-black">
                                    0{index + 1}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base italic">
                                &quot;{step.description}&quot;
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
