"use client";
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { FaChevronRight, FaCheck, FaInfoCircle } from 'react-icons/fa';
import GradientText from './ui/GradientText';
import ParticleBackground from './ui/ParticleBackground';


const HowItWorks = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]); // Extended scroll range

    const steps = [
        {
            id: 1,
            number: '01',
            title: 'Consultation',
            desc: 'Deep dive session to map out your startup roadmap.',
            example: 'Outcome: 5-year strategic plan.',
            hidden: 'We analyze your market, competitors, and technical feasibility to ensure a solid foundation.'
        },
        {
            id: 2,
            number: '02',
            title: 'Ideation',
            desc: 'We brainstorm innovative solutions tailored to you.',
            example: 'Outcome: 3 Unique Value Propositions.',
            hidden: 'Our design thinking workshops generate creative solutions that stand out in the crowded market.'
        },
        {
            id: 3,
            number: '03',
            title: 'Prototyping',
            desc: 'Rapid wireframing and clickable mockups.',
            example: 'Outcome: High-fidelity Figma Prototype.',
            hidden: 'Visualize the end product before writing a single line of code. Save time and reduce risk.'
        },
        {
            id: 4,
            number: '04',
            title: 'Development',
            desc: 'Agile development with bi-weekly sprints.',
            example: 'Outcome: Scalable MVP ready for launch.',
            hidden: 'We use the latest tech stack (React, Node, Python) to build secure and scalable applications.'
        },
        {
            id: 5,
            number: '05',
            title: 'Launch',
            desc: 'Go-to-market strategy and deployment.',
            example: 'Outcome: 10k+ Signups in Day One.',
            hidden: 'From AWS setup to App Store submission, we handle the entire launch process.'
        },
    ];

    return (
        <section ref={targetRef} className="works-section-wrapper" id="how-it-works">
            <div className="works-sticky-container">

                {/* New Particle Background Component */}
                <ParticleBackground count={15} color="rgba(0, 123, 255, 0.4)" opacity={0.3} />

                <h2 className="section-title text-gradient mobile-title">How It Works</h2>
                <ProgressRing progress={scrollYProgress} />

                <div className="horizontal-track-container">
                    <motion.div style={{ x }} className="horizontal-track">


                        {steps.map((step) => (
                            <StepCard key={step.id} step={step} />
                        ))}

                        <div className="launch-text">
                            READY TO LAUNCH
                        </div>

                        <div className="cta-card">
                            <h3>Ready to Launch?</h3>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn"
                            >
                                Start Now
                            </motion.button>
                        </div>

                        {/* Spacer to ensure full visibility */}
                        <div style={{ minWidth: '200px', height: '1px' }}></div>
                    </motion.div>
                </div>
            </div>

            <div className="mobile-works-list">
                <h2 className="section-title text-gradient">How It Works</h2>
                {steps.map((step) => (
                    <MobileStepKey key={step.id} step={step} />
                ))}
            </div>
        </section>
    );
};

const StepCard = ({ step }: { step: any }) => {
    const controls = useAnimation();

    const handleDragEnd = (event: any, info: any) => {
        // If dragged more than 50px to left, snap to -200 (reveal)
        // Otherwise snap back to 0 (close)
        if (info.offset.x < -50) {
            controls.start({ x: -280 }); // Fully reveal content
        } else {
            controls.start({ x: 0 });
        }
    };

    return (
        <div className="step-card-wrapper">
            {/* Hidden Layer (Revealed by Drag) */}
            <div className="card-hidden-layer">
                <FaInfoCircle className="info-icon" />
                <p>{step.hidden}</p>
                <button
                    className="close-reveal-btn"
                    onClick={() => controls.start({ x: 0 })}
                >
                    Close
                </button>
            </div>

            {/* Draggable Top Layer */}
            <motion.div
                className="step-card-horizontal"
                drag="x"
                dragConstraints={{ left: -280, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                animate={controls}
                whileHover={{ scale: 1.02 }}
                whileTap={{ cursor: 'grabbing' }}
            >
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                    <h3><GradientText colors={["#fff", "#007BFF", "#fff"]}>{step.title}</GradientText></h3>
                    <p>{step.desc}</p>
                    <div className="step-example-tag">
                        <FaCheck size={12} /> {step.example}
                    </div>
                </div>

                <div className="drag-hint">
                    &larr; Drag to Reveal
                </div>
            </motion.div>

            <div className="card-connector">
                <FaChevronRight />
            </div>
        </div>
    );
};

const MobileStepKey = ({ step }: { step: any }) => {
    return (
        <div className="mobile-step-item">
            <div className="mobile-step-number">{step.number}</div>
            <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
            </div>
        </div>
    )
}

const ProgressRing = ({ progress }: { progress: any }) => {
    return (
        <div className="progress-ring-container">
            <svg width="60" height="60" viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="26" stroke="#333" strokeWidth="4" fill="transparent" />
                <motion.circle
                    cx="30"
                    cy="30"
                    r="26"
                    stroke="#007BFF"
                    strokeWidth="4"
                    fill="transparent"
                    style={{ pathLength: progress }}
                />
            </svg>
            <span className="progress-text">Flow</span>
        </div>
    );
};

export default HowItWorks;
