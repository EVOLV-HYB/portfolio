"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { domains } from "@/lib/domains";

export default function BentoGrid() {
    return (
        <section id="domains" className="py-32 px-6">
            <div className="container max-w-6xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase">
                        Multi-Domain Expertise
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Nothing works in isolation. We solve across domains because bottlenecks don&apos;t respect departments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {domains.map((domain, index) => {
                        const getLink = (title: string) => {
                            switch (title) {
                                case "Content and Creative Lab": return "/contentlab";
                                case "Social Media and Community Management": return "/social-media";
                                case "Tech Lab": return "/techlab";
                                case "Consulting and Problem Analysis": return "/consultancy";
                                case "Venture Forge": return "/product";
                                case "Marketing and Growth": return "/marketing";
                                default: return null;
                            }
                        };

                        const href = getLink(domain.title);

                        const CardContent = (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={cn(
                                    "group relative bg-card border border-white/5 rounded-3xl p-8 overflow-hidden transition-all hover:border-accent/30 h-full",
                                    href && "cursor-pointer",
                                    domain.className
                                )}
                            >
                                <div className={cn(
                                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity",
                                    domain.color
                                )} />

                                <div className="relative z-10">
                                    <div className="w-full aspect-video rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-transform border border-white/5 relative">
                                        <Image
                                            src={domain.image}
                                            alt={domain.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{domain.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {domain.description}
                                    </p>

                                    <div className="mt-8 pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-2">
                                            System Interconnect <span className="w-8 h-px bg-accent/30" />
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        );

                        return href ? (
                            <Link key={domain.title} href={href} className="block">
                                {CardContent}
                            </Link>
                        ) : (
                            <div key={domain.title}>
                                {CardContent}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
