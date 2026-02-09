"use client";
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaAward } from 'react-icons/fa';


const Teams = () => {
    // const containerRef = useRef(null); // Removed as it was only for cursor

    const teamMembers = [
        {
            name: 'Sarah Jenkins',
            title: 'Head of Ideation',
            img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            expertise: 'Product Strategy, UX Research',
            bio: 'Former Product Lead at Google. Sarah has guided over 200 startups from napkin sketches to MVP.',
            stat: '50+ Patents Filed'
        },
        {
            name: 'Michael Chen',
            title: 'Lead Developer',
            img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            expertise: 'Full-stack Dev, AI Integration',
            bio: 'Michael specializes in scalable architecture. He built the core infrastructure for a unicorn fintech app.',
            stat: '1M+ Lines of Code'
        },
        {
            name: 'Jessica Lee',
            title: 'Investment Director',
            img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            expertise: 'Venture Capital, Pitch Coaching',
            bio: 'With 15 years in VC, Jessica knows what investors want. She helps founders craft irresistible pitches.',
            stat: '$50M+ Raised'
        },
        {
            name: 'David Ross',
            title: 'Marketing Specialist',
            img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            expertise: 'Growth Hacking, Brand Strategy',
            bio: 'David led growth for 3 successful exits. He turns quiet launches into viral events.',
            stat: '200% Avg Growth'
        },
    ];

    return (
        <section
            className="section teams-section"
            id="teams"
        >
            <div className="container">
                <h2 className="section-title text-gradient" data-aos="fade-up">Meet The Experts</h2>
                <div className="teams-grid">
                    {teamMembers.map((member, index) => (
                        <div className="team-card-container" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                            <motion.div
                                className="team-card"
                                initial={false}
                                whileHover={{ rotateY: 180 }}
                                transition={{ duration: 0.8, type: "spring", stiffness: 200, damping: 25 }} // Smoother transition
                                style={{ transformStyle: "preserve-3d" }} // Explicitly set for Safari
                            >
                                <div className="card-front">
                                    {/* Optimized Image Swap: Opacity instead of Filter */}
                                    <div className="img-container">
                                        {/* Grayscale Version (Bottom) */}
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="img-bw"
                                        />
                                        {/* Color Version (Top - fades in) */}
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="img-color"
                                        />
                                    </div>
                                    <div className="front-info">
                                        <h3 className="underline-sweep">{member.name}</h3>
                                        <p>{member.title}</p>
                                    </div>
                                </div>
                                <div className="card-back">
                                    <div className="back-content">
                                        <h3>{member.name}</h3>
                                        <p className="expertise-label">Expertise: {member.expertise}</p>
                                        <p className="bio">{member.bio}</p>
                                        <div className="stat-badge">
                                            <FaAward /> {member.stat}
                                        </div>
                                        <div className="social-links">
                                            <FaLinkedin />
                                            <FaTwitter />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                <div className="join-team-cta" data-aos="fade-up">
                    <p>Do you have what it takes to guide the next generation of founders?</p>
                    <a href="#contact" className="text-gradient link-underline">Join Our Team</a>
                </div>
            </div>
        </section>
    );
};

export default Teams;
