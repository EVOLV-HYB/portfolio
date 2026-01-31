"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cases = [
    {tag:"System Over Slides", 
        problem:"Most teams suffer from information silos where data exists but nobody knows how to use it to grow.",
    constraint:"Traditional agencies sell you a dream but leave you with a manual. We leave you with a machine.",
    solution:"We focus on Infrastructure First. We bridge the gap between your high-level goals and the actual code/workflows required to hit them.",
    outcome:"Total visibility, zero technical debt, and a scalable foundation from Day 1." 
},
    {
        tag: "Operational Velocity",
        problem: "Fast-growing teams usually break because their internal processes can't keep up.",
        constraint:"Most consultants suggest hiring more people to fix a broken process. We believe adding more people to a mess only creates a more expensive mess.",
        solution: "We automate the boring stuff so your best people can focus on high-leverage creative work.",
        outcome: "CAC dropped by 42%. Organic loop resonance increased by 3x within 6 months.",
    },
    {
        tag: "Product Velocity",
        problem: "The team had fast ideas but slow execution. The bridge between concept and deployment was broken.",
        constraint: "Consultancies gave slides. Software houses built features without understanding the business logic.",
        solution: "Embedded an Integrated Product Pipeline that automated the path from idea to production-ready code.",
        outcome: "Feature shipping velocity increased by 200%. Zero technical debt accumulation on new systems.",
    }
];

export default function CaseStudies() {
    return (
        <section id="work" className="py-32 px-6">
            <div className="container max-w-6xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase">
                        From Root to Result
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl italic">
                        Theoretical strategy is a liability. We only care about systems that work in the wild.
                    </p>
                </div>

                <div className="space-y-12">
                    {cases.map((cs, index) => (
                        <motion.div
                            key={cs.tag}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group border border-white/5 rounded-3xl p-8 md:p-12 hover:border-accent/40 transition-all bg-card/50"
                        >
                            <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8 flex items-center gap-4">
                                {cs.tag} <div className="h-px w-20 bg-accent/30" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="text-sm font-bold text-foreground mb-2 uppercase opacity-50">The Problem</h4>
                                        <p className="text-xl font-medium leading-relaxed">{cs.problem}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-red-500/70 mb-2 uppercase italic">The Constraint</h4>
                                        <p className="text-muted-foreground italic">&quot;{cs.constraint}&quot;</p>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div>
                                        <h4 className="text-sm font-bold text-accent mb-2 uppercase">The Hybrid Solution</h4>
                                        <p className="text-xl font-medium leading-relaxed">{cs.solution}</p>
                                    </div>
                                    <div className="p-6 bg-accent/5 rounded-2xl border border-accent/10">
                                        <h4 className="text-sm font-bold text-accent mb-2 uppercase">The Outcome</h4>
                                        <p className="text-2xl font-black text-glow">{cs.outcome}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
