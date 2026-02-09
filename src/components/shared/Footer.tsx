"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Github, Youtube, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const sections = {
        services: [
            "Content Creation",
            "Social Media Management",
            "Digital Marketing",
            "Web & App Development",
            "Product Building",
            "Consulting",
        ],
        quickLinks: [
            { name: "Home", href: "/" },
            { name: "About", href: "#about" },
            { name: "Services", href: "#services" },
            { name: "Portfolio", href: "#work" },
            { name: "Contact", href: "#intake" },
        ],
        socials: [
            { icon: Instagram, href: "#", label: "Instagram" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Youtube, href: "#", label: "YouTube" },
        ],
    };

    return (
        <footer className="relative z-10 pt-20 pb-10 px-6 border-t border-white/5 bg-background">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Section 1 – Brand Overview */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-bold tracking-tighter text-glow">EVOLV</span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            EVOLV is a hybrid problem-solving agency helping businesses, startups, and individuals grow through technology, creativity, and marketing.
                        </p>
                        <p className="text-accent font-medium text-sm tracking-wide uppercase">
                            Innovate. Build. Evolve.
                        </p>
                    </div>

                    {/* Section 2 – Services */}
                    <div>
                        <h4 className="text-foreground font-semibold mb-6">Services</h4>
                        <ul className="space-y-3">
                            {sections.services.map((service) => (
                                <li key={service}>
                                    <Link
                                        href="#services"
                                        className="text-muted-foreground hover:text-accent transition-colors text-sm flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-accent transition-all mr-0 group-hover:mr-2" />
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Section 3 – Quick Links */}
                    <div>
                        <h4 className="text-foreground font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {sections.quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Section 4 – Contact */}
                    <div className="space-y-6">
                        <h4 className="text-foreground font-semibold mb-4">Contact</h4>
                        <div className="space-y-4">
                            <a href="mailto:hello@evolv.xyz" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors group">
                                <Mail className="w-4 h-4" />
                                hello@evolv.xyz
                            </a>
                            <a href="tel:+910000000000" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors">
                                <Phone className="w-4 h-4" />
                                +91 (WhatsApp)
                            </a>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4" />
                                India
                            </div>
                        </div>

                        <Link
                            href="#intake"
                            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-xl text-sm font-bold hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 group"
                        >
                            Start a Project
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>

                        <div className="flex items-center gap-4 pt-4">
                            {sections.socials.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    className="p-2 rounded-lg border border-white/5 hover:border-accent/50 hover:bg-accent/5 transition-all group"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">
                        © {currentYear} EVOLV. All rights reserved.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                        Built with clarity and purpose.
                    </p>
                </div>
            </div>

            {/* Subtle background glow effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        </footer>
    );
};

export default Footer;
