"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import ParticleBackground from './ui/ParticleBackground';
import GradientText from './ui/GradientText';


gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Hero = () => {
    const heroRef = useRef(null);
    const headlineRef = useRef(null);
    const btnGroupRef = useRef(null);
    const statsRef = useRef(null);
    const bgRef = useRef(null);

    const [ctaClicked, setCtaClicked] = useState(false);

    useEffect(() => {
        // Typing Effect
        // Typing Effect with Stagger
        const text = "Innovate, Build, Present – Your Startup Launchpad";
        // Reset content to be empty initially handled by CSS/JS ensuring span is target

        gsap.to(headlineRef.current, {
            duration: 2,
            text: {
                value: text,
                delimiter: ""
            },
            ease: "none",
            delay: 0.5,
        });

        // Add a subtle float to the stats
        gsap.to(statsRef.current, {
            y: -10,
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: "sine.inOut",
            delay: 4 // Start after entrance
        });

        // Content Fade In
        const tl = gsap.timeline({ delay: 3.5 });
        tl.from(btnGroupRef.current, { y: 20, opacity: 0, duration: 0.8, ease: "power2.out" })
            .from(statsRef.current, { y: 20, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.4");

        // Background Gradient Shift on Scroll
        gsap.to(bgRef.current, {
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
            filter: "hue-rotate(90deg)",
            ease: "none"
        });

    }, []);

    const handleCtaClick = () => {
        setCtaClicked(true);
        setTimeout(() => setCtaClicked(false), 2000); // Revert after 2s
    };

    return (
        <section className="hero" id="home" ref={heroRef}>
            {/* Particle Background with High Visibility */}
            <div className="blob-container" ref={bgRef} style={{ opacity: 1, filter: 'none' }}>
                <ParticleBackground count={30} color="#007BFF" opacity={0.7} />
            </div>

            <div className="hero-overlay"></div>

            <div className="hero-content container">
                {/* Gradient Text for Headline */}
                <h1 className="hero-title">
                    <GradientText colors={["#fff", "#007BFF", "#fff"]} duration={5}>
                        <span ref={headlineRef}></span>
                    </GradientText>
                </h1>

                <p className="subheadline" data-aos="fade-up" data-aos-delay="3000">
                    From ideation to investment, we help you launch your dream.
                </p>

                <div className="hero-btns" ref={btnGroupRef}>
                    {/* Button Morph Interaction */}
                    <AnimatePresence mode="wait">
                        {!ctaClicked ? (
                            <motion.button
                                key="cta-btn"
                                className="btn hero-btn primary-btn"
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ scale: 1.05 }}
                                onClick={handleCtaClick}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                layout
                            >
                                Get Started Today
                            </motion.button>
                        ) : (
                            <motion.button
                                key="cta-success"
                                className="btn hero-btn success-btn"
                                initial={{ width: 50, opacity: 0 }}
                                animate={{ width: "auto", opacity: 1 }}
                                exit={{ width: 50, opacity: 0 }}
                                layout
                                style={{ backgroundColor: '#28a745', cursor: 'default' }}
                            >
                                <FaCheck style={{ marginRight: '8px' }} /> Redirecting...
                            </motion.button>
                        )}
                    </AnimatePresence>

                    <button className="btn hero-btn secondary-btn">
                        View Case Studies
                    </button>
                </div>

                {/* Stats Bar */}
                <div className="hero-stats" ref={statsRef}>
                    <div className="stat-item">
                        <span className="stat-number text-gradient">500+</span>
                        <span className="stat-label">Ideas Built</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number text-gradient">100+</span>
                        <span className="stat-label">Investors Connected</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number text-gradient">50+</span>
                        <span className="stat-label">Expos Presented</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
