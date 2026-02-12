"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { domains } from "@/lib/domains";
import { cn } from "@/lib/utils";

const getLink = (title: string) => {
    switch (title) {
        case "Content and Creative Lab": return "/contentlab";
        case "Social Media and Community Management": return "/social-media";
        case "Tech Lab": return "/techlab";
        case "Consulting and Problem Analysis": return "/consultancy";
        case "Venture Forge": return "/product";
        case "Marketing and Growth": return "/marketing";
        default: return "/";
    }
};

export default function LogoNav() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="fixed top-8 left-8 z-[100] flex flex-col items-center gap-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link
                href="/"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white/20 hover:border-accent/50 transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl relative bg-background"
            >
                <Image
                    src="/Screenshot_20260210_173501.jpg"
                    alt="Logo"
                    fill
                    className="object-cover"
                    priority
                />
            </Link>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex flex-col items-center gap-3 py-2"
                    >
                        {domains.map((domain, index) => (
                            <motion.div
                                key={domain.title}
                                initial={{ opacity: 0, scale: 0, y: -20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{
                                    delay: index * 0.05,
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}
                                className="relative group"
                            >
                                <Link
                                    href={getLink(domain.title)}
                                    className="block w-8 h-8 rounded-full overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 hover:scale-125 bg-background/50 backdrop-blur-sm"
                                >
                                    <Image
                                        src={domain.image}
                                        alt={domain.title}
                                        fill
                                        className="object-cover"
                                    />
                                </Link>

                                {/* Tooltip */}
                                <div className="absolute left-12 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded text-[10px] font-bold text-white uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    {domain.title}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
