"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, XCircle } from "lucide-react";

export default function WhyUs() {
    return (
        <section className="py-32 px-6 bg-accent/5">
            <div className="container max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase leading-none">
                            Traditional Agencies <br />
                            <span className="text-red-500 underline decoration-2 underline-offset-8">Fail By Design.</span>
                        </h2>
                        <div className="space-y-6 text-lg text-muted-foreground">
                            <p>
                                They do one thing well. Marketing firms buy ads. Software shops ship code. Strategy firms make slides.
                            </p>
                            <p className="font-bold text-foreground italic">
                                None of them own the result.
                            </p>
                            <p>
                                When execution is siloed from strategy, the system breaks. Your business doesn&apos;t need more tactics; it needs an integrated engine.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                text: "Strategy without Builders dies in decks.",
                                icon: XCircle,
                                color: "text-red-500"
                            },
                            {
                                text: "Execution without Strategy is expensive motion without progress.",
                                icon: AlertCircle,
                                color: "text-amber-500"
                            },
                            {
                                text: "Hybrid Systems thinking wins every single time.",
                                icon: CheckCircle2,
                                color: "text-accent"
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-card border border-white/5 p-6 rounded-2xl flex items-center gap-6 group hover:border-accent/30 transition-all"
                            >
                                <item.icon className={`w-8 h-8 ${item.color} shrink-0`} />
                                <span className="text-lg font-bold tracking-tight">{item.text}</span>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="mt-12 p-8 bg-accent text-accent-foreground rounded-3xl"
                        >
                            <p className="text-xl font-black mb-4 uppercase italic tracking-tighter">The Bottom Line:</p>
                            <p className="text-lg opacity-90 leading-relaxed font-medium">
                                We are partners, not vendors.We unite strategy, design, and technology under one roof to create real business impact.
Partner with us to launch smarter, grow faster, and evolve continuously.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
