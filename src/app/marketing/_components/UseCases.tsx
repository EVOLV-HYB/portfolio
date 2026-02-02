"use client";

import { motion } from "framer-motion";
import ResolutionReveal from "./ResolutionReveal";

const useCases = [
    {
        title: "Always-On Social Retainers",
        description: "Day-to-day management of your main channels with a strategy, calendar, and reporting framework behind every post."
    },
    {
        title: "Product & Feature Launch Campaigns",
        description: "Multi-week launch sequences that span social, community, and creators—designed to build awareness and conversion."
    },
    {
        title: "B2B LinkedIn & Personal Branding",
        description: "Building executive and brand presence on LinkedIn with thought leadership content and strategic engagement."
    },
    {
        title: "Creator & Ambassador Programs",
        description: "Structuring and running programs that turn power users, partners, and creators into your extended marketing engine."
    },
    {
        title: "Private Communities & Member Hubs",
        description: "Designing and managing spaces (Discord, Circle, Slack, etc.) where customers, users, or members can connect and get value."
    },
    {
        title: "Support & Feedback Channels",
        description: "Social and community channels that double as support and feedback loops, feeding real insights back into your product and content."
    }
];

export default function UseCases() {
    return (
        <section className="py-24 px-6 bg-muted/10">
            <div className="container max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
                        What We Run for Our Clients
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        From always-on social to high-touch communities, here's how our work shows up in the real world.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {useCases.map((useCase, index) => (
                        <ResolutionReveal key={index} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ rotateX: 5, rotateY: 5, scale: 1.02 }}
                                className="bg-card border border-white/5 p-8 rounded-3xl hover:border-accent/40 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] transition-all transform perspective-1000 relative overflow-hidden group h-full"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <h3 className="text-xl font-bold mb-4 relative z-10">{useCase.title}</h3>
                                <p className="text-muted-foreground leading-relaxed relative z-10 text-sm">
                                    {useCase.description}
                                </p>
                            </motion.div>
                        </ResolutionReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
