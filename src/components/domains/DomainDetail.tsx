"use client";

import { motion } from "framer-motion";
import {
    ArrowLeft, Code2, Clapperboard, Users, TrendingUp,
    Rocket,
    Search
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface DomainDetailProps {
    domain: {
        title: string;
        slug: string;
        description: string;
        iconName: string;
        className: string;
        color: string;
        image: string;
        content?: {
            overview?: string;
            services?: string[];
            approach?: string;
            outcomes?: string[];
        };
    };
}

const iconMap: Record<string, typeof Clapperboard> = {
    Clapperboard,
    Users,
    TrendingUp,
    Code2,
    Rocket,
    Search
};

export default function DomainDetail({ domain }: DomainDetailProps) {
    const IconComponent = iconMap[domain.iconName] || Clapperboard;

    return (
        <section className="relative min-h-screen pt-32 pb-32 px-6 overflow-hidden">
            {/* Background system animation */}
            <div className="absolute inset-0 z-0">
                <div className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] opacity-30 animate-pulse bg-gradient-to-br",
                    domain.color
                )} />
            </div>

            <div className="container relative z-10 max-w-5xl mx-auto">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <Link
                        href="/#domains"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Domains
                    </Link>
                </motion.div>

                {/* Header Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="glass rounded-[3rem] p-8 md:p-16 border-white/10 relative overflow-hidden mb-16"
                >
                    <div className={cn(
                        "absolute top-0 right-0 p-8 opacity-20 w-1/2 h-full",
                        domain.color.replace("from-", "from-").replace("to-transparent", "to-transparent")
                    )}>
                        <Image
                            src={domain.image}
                            alt=""
                            fill
                            className="object-cover opacity-20 blur-sm mask-gradient"
                        />
                    </div>

                    <div className="relative z-10">
                        <div className="w-24 h-24 rounded-2xl overflow-hidden mb-8 border border-white/10 relative">
                            <Image
                                src={domain.image}
                                alt={domain.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase leading-tight">
                            {domain.title}
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                            {domain.description}
                        </p>
                    </div>
                </motion.div>

                {/* Content Sections */}
                <div className="space-y-12">
                    {domain.content?.overview && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="glass rounded-3xl p-8 md:p-12 border-white/10"
                        >
                            <h2 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tight">
                                Overview
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {domain.content.overview}
                            </p>
                        </motion.div>
                    )}

                    {domain.content?.services && domain.content.services.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="glass rounded-3xl p-8 md:p-12 border-white/10"
                        >
                            <h2 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tight">
                                Services
                            </h2>
                            <ul className="space-y-4">
                                {domain.content.services.map((service, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                                        <p className="text-lg text-muted-foreground leading-relaxed">{service}</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}

                    {domain.content?.approach && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="glass rounded-3xl p-8 md:p-12 border-white/10"
                        >
                            <h2 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tight">
                                Our Approach
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {domain.content.approach}
                            </p>
                        </motion.div>
                    )}

                    {domain.content?.outcomes && domain.content.outcomes.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="glass rounded-3xl p-8 md:p-12 border-white/10 bg-accent/5 border-accent/20"
                        >
                            <h2 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tight text-accent">
                                Expected Outcomes
                            </h2>
                            <ul className="space-y-4">
                                {domain.content.outcomes.map((outcome, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                                        <p className="text-lg text-foreground leading-relaxed font-medium">{outcome}</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}

                    {/* Placeholder for when no content is provided */}
                    {!domain.content?.overview &&
                        !domain.content?.services?.length &&
                        !domain.content?.approach &&
                        !domain.content?.outcomes?.length && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="glass rounded-3xl p-8 md:p-12 border-white/10 text-center"
                            >
                                <p className="text-lg text-muted-foreground italic">
                                    Content will be added here. This page is ready for your content.
                                </p>
                            </motion.div>
                        )}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 glass rounded-3xl p-8 md:p-12 border-accent/20 bg-accent/5 text-center"
                >
                    <h2 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight">
                        Ready to Solve This?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Let&apos;s discuss how we can apply this domain expertise to your specific challenges.
                    </p>
                    <Link
                        href="/#intake"
                        className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl text-lg font-bold hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                    >
                        Submit Your Problem
                    </Link>
                </motion.div>
            </div>

            {/* Decorative Grid Lines */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </section>
    );
}
