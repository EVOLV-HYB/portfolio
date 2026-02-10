"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MARKETING_ITEMS = [
    {
        title: "Market Positioning",
        subtitle: "Narrative Control",
        desc: "Own your category story. Stories drive 65% of purchase decisions.",
        color: "from-blue-600 to-indigo-600",
        id: 1
    },
    {
        title: "System Design",
        subtitle: "Conversion Oriented",
        desc: "Turn visitors into customers. Well-designed systems increase conversion by 300%.",
        color: "from-purple-600 to-pink-600",
        id: 2
    },
    {
        title: "Growth Loops",
        subtitle: "Performance Led",
        desc: "Data-driven scaling. Experimentation drives 20x faster growth.",
        color: "from-emerald-600 to-teal-600",
        id: 3
    },
    {
        title: "Distribution Engines",
        subtitle: "Content Strategy",
        desc: "Self-sustaining growth. Flywheels compound growth exponentially.",
        color: "from-orange-600 to-red-600",
        id: 4
    },
    {
        title: "Data Optimization",
        subtitle: "Continuous Iteration",
        desc: "Iterative improvement. Data loops improve efficiency by 40%.",
        color: "from-cyan-600 to-blue-600",
        id: 5
    }
];

export function MarketingGallery() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            scrollContainerRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="relative max-w-7xl mx-auto px-4">
            {/* Navigation Buttons */}
            <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110 shadow-lg"
                aria-label="Scroll left"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110 shadow-lg"
                aria-label="Scroll right"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Scrollable Container */}
            <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12 py-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {MARKETING_ITEMS.map((item, index) => (
                    <motion.figure
                        key={index}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:translate-y-[-5px] hover:shadow-2xl flex-shrink-0 w-[350px]"
                    >
                        {/* Image Area Placeholder */}
                        <div className={`h-48 w-full relative overflow-hidden bg-gradient-to-br ${item.color} opacity-80 group-hover:opacity-100 transition-all`}>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2),transparent_70%)]" />
                            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />

                            <div className="absolute bottom-4 left-6">
                                <span className="text-xs font-bold tracking-widest text-white/60 uppercase mb-1 block">Strategy 0{item.id}</span>
                                <h3 className="text-2xl font-bold text-white leading-tight">{item.title}</h3>
                            </div>
                        </div>

                        <div className="p-6 pt-4 flex-1 flex flex-col">
                            <div className="w-12 h-1 bg-white/10 mb-4 group-hover:w-24 group-hover:bg-accent transition-all duration-500" />
                            <figcaption className="space-y-2">
                                <h4 className="text-lg font-semibold text-white/90">{item.subtitle}</h4>
                                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                            </figcaption>

                            <div className="mt-auto pt-6 flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                                <span className="mr-2">Explore Step</span>
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </motion.figure>
                ))}

                {/* Add the stat card or extra card as the last item */}
                <figure className="group relative flex flex-col justify-center items-center overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-accent/5 transition-all hover:shadow-lg hover:shadow-accent/20 cursor-pointer flex-shrink-0 w-[350px] min-h-[400px]">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">View All Frameworks</h3>
                    <p className="text-sm text-gray-500">Explore our full case studies</p>
                </figure>
            </div>

            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}
