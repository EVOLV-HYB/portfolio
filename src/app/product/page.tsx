"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Services from "./_components/Services";
import HowItWorks from "./_components/HowItWorks";
import Teams from "./_components/Teams";
import ParticleTrail from "./_components/Extras/ParticleTrail";
import ContentCTA from "@/components/shared/ContentCTA";
// Load custom cursor client-side only
const BlueCircleCursor = dynamic(() => import("./_components/Extras/BlueCircleCursor"), { ssr: false });

const sections = [
    { id: "hero", component: Hero },
    { id: "about", component: AboutUs },
    { id: "services", component: Services },
    { id: "how", component: HowItWorks },
    { id: "teams", component: Teams },
];

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <main ref={containerRef} className="min-h-screen bg-[#121212] text-foreground selection:bg-accent selection:text-white overflow-hidden relative">
            <ParticleTrail />
            <BlueCircleCursor />
            {sections.map(({ id, component: Component }, i) => {
                const yRange = i % 2 === 0 ? [0, -100] : [0, 100];
                const y = useTransform(scrollYProgress, [0, 1], yRange);

                return (
                    <motion.div
                        key={id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        style={{ y }}
                        className="relative z-10"
                    >
                        <Component />
                    </motion.div>
                );
            })}
            <ContentCTA />
        </main>
    );
}
