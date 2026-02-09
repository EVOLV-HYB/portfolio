"use client";

import { motion } from "framer-motion";

const categories = [
    {
        title: "Channels",
        items: ["Instagram", "TikTok", "LinkedIn", "Twitter / X", "YouTube", "Facebook", "Reddit", "Email & Newsletters"]
    },
    {
        title: "Formats",
        items: ["Short-form video", "Carousels", "Threads", "Stories", "Livestreams", "Memes", "UGC Collaborations"]
    },
    {
        title: "Community Platforms",
        items: ["Discord", "Slack", "Telegram", "Circle", "Geneva", "Facebook Groups", "Custom Spaces"]
    },
    {
        title: "Tools & Ops",
        items: ["Buffer / Later", "Brandwatch", "GA4 / Looker Studio", "Discord Bots", "Figma / Canva", "Notion / Asana"]
    }
];

export default function Tools() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="container max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
                        Where and How We Operate
                    </h2>
                    <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {categories.map((category, index) => (
                        <div key={index}>
                            <h3 className="text-xl font-bold mb-6 text-accent uppercase tracking-widest">{category.title}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: (index * 0.1) + (i * 0.05) }}
                                        whileHover={{ y: -5 }}
                                        className="px-4 py-2 bg-card border border-white/10 rounded-full text-sm font-medium hover:bg-accent/10 hover:border-accent/40 hover:text-accent transition-all cursor-default shadow-sm"
                                    >
                                        {item}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
