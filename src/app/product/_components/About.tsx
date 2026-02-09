"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaLightbulb, FaRocket, FaHistory, FaUserFriends, FaArrowRight } from 'react-icons/fa';
import { motion, Variants } from 'framer-motion';


gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const imgRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.to(imgRef.current, {
            scale: 1.1,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            }
        });
    }, []);

    const iconVariants: Variants = {
        rest: { scale: 1, rotate: 0 },
        hover: {
            scale: 1.2,
            rotate: 360,
            transition: { duration: 0.6, type: "spring" }
        }
    };

    const listContainerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const listItemVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <section className="section about-section" id="about" ref={containerRef}>
            {/* Background Glow Sweep */}
            <div className="glow-sweep"></div>

            <div className="container about-container">
                <div className="about-content">
                    <h2 data-aos="fade-up" className="text-gradient">Who We Are</h2>
                    <p className="lead" data-aos="fade-up" data-aos-delay="100">
                        IdeaForge Hub is where visionaries meet executors. We bridge the gap between abstract ideas and market-ready products.
                    </p>

                    <motion.div
                        className="about-story"
                        variants={listContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.div className="story-item" variants={listItemVariants}>
                            <motion.div variants={iconVariants} initial="rest" whileHover="hover" className="story-icon">
                                <FaHistory />
                            </motion.div>
                            <div>
                                <h4>Our Story</h4>
                                <p>Founded by serial entrepreneurs with 10+ years in tech, we've helped 500+ startups find their footing.</p>
                            </div>
                        </motion.div>
                        <motion.div className="story-item" variants={listItemVariants}>
                            <motion.div variants={iconVariants} initial="rest" whileHover="hover" className="story-icon">
                                <FaUserFriends />
                            </motion.div>
                            <div>
                                <h4>Success Metrics</h4>
                                <p>From a fintech startup raising $2M to a biotech firm securing patents, our track record speaks volumes.</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Used standard AOS for these existing team items to mix it up */}
                    <div className="about-teams">
                        <div className="team-item" data-aos="fade-right" data-aos-delay="300">
                            <FaLightbulb className="team-icon" />
                            <div>
                                <h3>Ideation & Development</h3>
                                <p>Brainstorming, prototyping, and MVP creation.</p>
                            </div>
                        </div>
                        <div className="team-item" data-aos="fade-right" data-aos-delay="400">
                            <FaRocket className="team-icon" />
                            <div>
                                <h3>Presentation & Investment</h3>
                                <p>Pitching, networking, and securing funding.</p>
                            </div>
                        </div>
                    </div>

                    <a href="#teams" className="btn-link underline-sweep" data-aos="fade-up" data-aos-delay="500">
                        Meet the Founders <FaArrowRight />
                    </a>
                </div>

                <div className="about-image" data-aos="fade-left" data-aos-delay="200">
                    <div className="img-wrapper">
                        <img ref={imgRef} src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" alt="Our Team" />
                        <div className="img-overlay">
                            <span>10+ Years of Excellence</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
