"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/shared/Navigation";
import IntakeForm from "@/components/sections/IntakeForm";
import ProblemSolvingModule from "@/app/consultancy/_components/ProblemSolvingModule";
import { ArrowRight, BarChart3, Brain, LineChart, ShieldCheck, Target, Zap } from "lucide-react";

const services = [
    {
        icon: Brain,
        title: "Strategic Advisory",
        description: "Aligning technology initiatives with core business objectives to drive sustainable growth."
    },
    {
        icon: Zap,
        title: "Digital Transformation",
        description: "Modernizing legacy systems and workflows to improve operational efficiency and agility."
    },
    {
        icon: Target,
        title: "Product Strategy",
        description: "Defining product vision, roadmap, and go-to-market strategies for maximum impact."
    },
    {
        icon: BarChart3,
        title: "Data Intelligence",
        description: "Leveraging data analytics and insights to make informed, evidence-based business decisions."
    },
    {
        icon: ShieldCheck,
        title: "Risk & Compliance",
        description: "Navigating complex regulatory landscapes and managing risks in digital operations."
    },
    {
        icon: LineChart,
        title: "Performance Optimization",
        description: "Enhancing system performance and scalability to handle growing business demands."
    }
];

export default function ConsultancyPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navigation />

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex flex-col items-center justify-center pt-24 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px]" />
                </div>

                <div className="container relative z-10 max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-black tracking-tighter mb-6"
                    >
                        FROM <span className="text-muted-foreground line-through decoration-red-500/50 decoration-4">CHAOS</span><br />
                        TO <span className="text-accent text-glow">CLARITY.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        We partner with visionary leaders to dissect complex challenges and engineer robust, future-proof strategies.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="#intake"
                            className="group bg-accent text-accent-foreground px-8 py-4 rounded-xl text-lg font-bold flex items-center gap-2 hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                        >
                            Start Diagnostic
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 px-6 relative z-10">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 rounded-2xl bg-card/40 border border-white/5 hover:border-accent/20 hover:bg-white/5 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ProblemSolvingModule />

            <IntakeForm />

            <footer className="border-t border-white/5 py-12 px-6">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-accent rounded-lg" />
                        <span className="font-bold tracking-tight">HY AGENCY</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} HY Hybrid Problem-Solving. Systematic Excellence.
                    </p>
                </div>
            </footer>
        </div>
    );
}
