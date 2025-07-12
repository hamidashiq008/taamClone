import React, { useEffect } from 'react';
import '../assets/css/ServicesSection.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Service1 from '../assets/images/service-1.png';
import Service2 from '../assets/images/service-2.png';
import Service3 from '../assets/images/service-3.png';
import Service4 from '../assets/images/service-4.png';

import Icon1 from '../assets/images/icon-1.png';
import Icon2 from '../assets/images/icon-2.png';
import Icon3 from '../assets/images/icon-3.png';
import Icon4 from '../assets/images/icon-4.png';

const ServicesSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true
        });
    }, []);

    return (
        <div className="services-section bg-light">
            <div className='services-top-line'></div>
            <div className="container services-left-line services-right-line p-60 position-relative">
                {/* Plus icons without animation */}
                <div className="top-left-plus">
                    <div className="plus">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33"><path d="M 17.167 28.834 L 17.167 5.5 M 28.834 17.167 L 5.5 17.167" fill="transparent" stroke-width="1.5" stroke="rgb(222,224,227)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>
                    </div>
                </div>
                <div className="top-right-plus">
                    <div className="plus">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33"><path d="M 17.167 28.834 L 17.167 5.5 M 28.834 17.167 L 5.5 17.167" fill="transparent" stroke-width="1.5" stroke="rgb(222,224,227)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>
                    </div>
                </div>

                {/* Header with animations */}
                <div className="services-header">
                    <div className="header-content">
                        <div className="header-wrapper">
                            <div className="label" data-aos="fade-up" data-aos-delay="100">
                                <p className='f-kode'>\\ AI API Gateway \\</p>
                            </div>
                            <div className="title" data-aos="fade-up" data-aos-delay="150">
                                <h2>200+ AI Models with a Single Unified AI API</h2>
                            </div>
                            <div className="description" data-aos="fade-up" data-aos-delay="200">
                                <p>Seamlessly connect, manage, and harmonize various AI tools and AI/ML models to work together with a single, secure and unified AI API.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services bento grid */}
                <div className="services-bento">
                    <div className="top-row">
                        <ServiceCard
                            iconSrc={Icon1}
                            title="Get complete visibility with detailed logging"
                            description="Taam AI's observability records every request and response with performance, and accuracy."
                            imageSrc={Service1}
                            delay="250"
                        />
                        <ServiceCard
                            iconSrc={Icon2}
                            title="Simplify debugging with tracing & logs"
                            description="Monitor the lifecycle of your LLM requests in a unified, chronological view"
                            imageSrc={Service2}
                            delay="300"
                        />
                    </div>
                    <div className="bottom-row">
                        <ServiceCard
                            iconSrc={Icon3}
                            title="Fastest Inference"
                            description="Top-tier serverless infrastructure reduces deployment and maintenance costs."
                            imageSrc={Service3}
                            delay="350"
                        />
                        <ServiceCard
                            iconSrc={Icon4}
                            title="Multiple LLM providers"
                            description="AI Gateway supports multiple LLMs, ensuring your AI applications are adaptable to diverse scenarios."
                            imageSrc={Service4}
                            delay="400"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const ServiceCard = ({ iconSrc, title, description, imageSrc, delay }) => {
    return (
        <div className="service-card" data-aos="fade-up" data-aos-delay={delay}>
            <a className="card-link" href="#">
                <div className="card-container">
                    {/* Icon without animation */}
                    <div className="icon-container mt-30 mx-30">
                        <div className="icon-wrapper">
                            <div className="icon">
                                <img src={iconSrc} alt="" />
                            </div>
                        </div>
                    </div>
                    
                    {/* Content with animations */}
                    <div className="card-content px-30">
                        <h4 className=''>{title}</h4>
                        <p>{description}</p>
                    </div>
                    
                    {/* Learn more button with animation */}
                    <div className="learn-more-container px-30 pb-20">
                        <div className="learn-more-button">
                            <p>Learn More</p>
                            <div className="arrow-container">
                                <div className="arrow-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5588f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Image without animation */}
                    <div className="card-image">
                        <img src={imageSrc} alt="" />
                    </div>
                </div>
            </a>
        </div>
    );
};

export default ServicesSection;