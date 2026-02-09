"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaLightbulb, FaHandshake, FaChartLine, FaBullhorn, FaArrowRight } from 'react-icons/fa';


const Services = () => {
    const services = [
        {
            icon: <FaLightbulb />,
            title: 'Idea Development',
            description: 'Refine your concept, build prototypes, and validate market fit.',
            example: 'Example: Built a SaaS tool that scaled to 10K users in 3 months.',
            delay: 0
        },
        {
            icon: <FaHandshake />,
            title: 'Investor Outreach',
            description: 'Connect with angel investors and VCs who believe in your vision.',
            example: 'Example: Connected a MedTech startup with $2M seed funding.',
            delay: 100
        },
        {
            icon: <FaChartLine />,
            title: 'Market Analysis',
            description: 'Data-driven insights to position your startup for success.',
            example: 'Example: Identified a niche market for a logistics AI platform.',
            delay: 200
        },
        {
            icon: <FaBullhorn />,
            title: 'Pitch Perfect',
            description: 'Craft compelling pitch decks and presentation coaching.',
            example: 'Example: Helped founders win "Best Pitch" at TechCrunch Disrupt.',
            delay: 300
        }
    ];

    return (
        <section className="section services-section" id="services">
            <div className="container">
                <h2 className="section-title text-gradient" data-aos="fade-up">Our Services</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card"
                            data-aos="fade-up"
                            data-aos-delay={service.delay}
                        >
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <p className="service-example">{service.example}</p>
                        </div>
                    ))}
                </div>

                <div className="services-cta" data-aos="fade-up" data-aos-delay="400">
                    <h3>Ready to Scale?</h3>
                    <p>Get a custom roadmap for your startup today.</p>
                    <button className="btn">
                        Free Consultation <FaArrowRight style={{ marginLeft: '10px' }} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;
