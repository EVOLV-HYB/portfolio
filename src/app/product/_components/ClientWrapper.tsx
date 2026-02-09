"use client";
'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring, Variants } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import HowItWorks from './HowItWorks';

import Contact from './Contact';

import Loader from './Loader';

// Helper component for cursor
const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        const handleMouseEnter = () => setCursorVariant("text");
        const handleMouseLeave = () => setCursorVariant("default");

        window.addEventListener("mousemove", mouseMove);

        // Add event listeners for hoverable elements dynamically
        const hoverables = document.querySelectorAll('a, button, input, .service-card');
        hoverables.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        const globalMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('.service-card') || target.closest('.team-card')) {
                setCursorVariant("text");
            } else {
                setCursorVariant("default");
            }
        };

        window.removeEventListener("mousemove", mouseMove);
        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", globalMouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", globalMouseOver);
            hoverables.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        }
    }, []);

    const variants: Variants = {
        default: {
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            height: 24,
            width: 24,
            backgroundColor: "transparent",
            border: "3px solid var(--primary-blue)",
        },
        text: {
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            height: 80,
            width: 80,
            backgroundColor: "rgba(0, 123, 255, 0.1)",
            border: "2px solid var(--primary-blue)",
            mixBlendMode: "difference" as const // Type assertion for stricter string literal
        }
    }

    return (
        <motion.div
            className="cursor-follower"
            variants={variants}
            animate={cursorVariant}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
    );
};

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '40px',
                        right: '40px',
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        fontSize: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                        zIndex: 1000,
                        transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    ↑
                </button>
            )}
        </>
    );
};

export default function ClientWrapper() {
    const [loading, setLoading] = useState(true);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setLoading(false);
            }
        };

        const timer = setTimeout(() => setLoading(false), 3000);

        window.addEventListener('scroll', handleScroll);

        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic',
        });

        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="App">
            <Cursor />
            <motion.div
                className="progress-bar"
                style={{ scaleX }}
            />
            <AnimatePresence mode="wait">
                {loading && (
                    <motion.div
                        key="loader-overlay"
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            zIndex: 10000,
                            pointerEvents: 'none'
                        }}
                    >
                        <Loader progress={scrollYProgress} />
                    </motion.div>
                )}
            </AnimatePresence>
            <div style={{ opacity: loading ? 0.3 : 1, transition: 'opacity 1s ease', pointerEvents: loading ? 'none' : 'auto' }}>
                <Header />
                {/* Main content was rendered here in App.jsx */}
                <main>
                    <Hero />
                    <About />
                    <Services />
                    <HowItWorks />

                    <Contact />
                </main>

                <ScrollToTop />
            </div>
        </div>
    );
}
