"use client";

import { motion } from "framer-motion";
import { Hammer } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navigation() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="glass px-6 py-3 rounded-full flex items-center gap-8 border-white/10"
            >
                <Link href="/" className="flex items-center gap-2 group">
                    <Hammer className="w-5 h-5 text-accent transition-transform group-hover:rotate-12" />
                    <span className="font-bold tracking-tight text-lg">EVOLV</span>
                </Link>

                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                    <Link href="/#process" className="hover:text-foreground transition-colors">Diagnostic</Link>
                    <Link href="/#domains" className="hover:text-foreground transition-colors">Domains</Link>
                    <Link href="/#work" className="hover:text-foreground transition-colors">Case Studies</Link>
                </div>

                <Link
                    href="/#intake"
                    className="bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-bold hover:bg-accent/90 transition-all hover:scale-105 active:scale-95"
                >
                    Contact
                </Link>
            </motion.div>
        </nav>
    );
}
