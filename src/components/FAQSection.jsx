import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const faqData = [
    {
        question: "What is Taam AI and how does it work?",
        answer:
            "Taam AI is an API platform that provides seamless access to multiple models for businesses and developers. It enables users to integrate Artificial Intelligence solutions such as chatbots, text generation, voice, and image processing into their applications with minimal effort.",
    },
    {
        question: "What is the Taam AI API Gateway?",
        answer: "The API Gateway allows developers to connect to multiple models through a single, scalable API endpoint. It simplifies integration of Artificial Intelligence, providing unified access to large language models (LLMs) like OpenAI, Llama, and custom model solutions, all with optimized performance and cost efficiency.",
    },
    {
        question: "How does Taam AI ensure security and compliance?",
        answer: "Taam AI is built with enterprise-grade security, featuring end-to-end encryption, role-based access control, and compliance with major standards such as GDPR, HIPAA, and SOC2. The platform also provides detailed logs and monitoring to track API usage securely.",
    },
    {
        question:
            "What are the pricing and scalability options for Taam AI's API Gateway?",
        answer: "Taam AI offers flexible pricing plans, including pay-as-you-go and enterprise subscription models. The API Gateway is designed for scalability, handling everything from small-scale applications to high-demand enterprise workloads of Artificial Intelligence without performance degradation.",
    },
    {
        question: "How do I get started",
        answer: "Sign up at Taam AI Developer Portal Get your API key from the Developer Settings Start making API requests using our documentation",
    },
    {
        question: "Which AI models does it support?",
        answer: "Currently, Taam supports OpenAI, Anthropic (Claude), Google Gemini, and open-source models like Mistral and Meta LLaMA. More are added regularly.",
    },
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(0); // First FAQ open by default

    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true
        });
    }, []);

    const toggleFaq = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="teamWorkFlow">
            <div className="bg-black text-white px-3">
                <div className="container text-center teamWorkFlow-container pt-120 position-relative">
                    <h1 
                        className="teamWorkFlow-heading mb-20"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Frequently Asked <br /> Questions
                    </h1>

                    <div className="faq">
                        <p 
                            className="mb-70 px-20"
                            data-aos="fade-up"
                            data-aos-delay="150"
                        >
                            Have questions about Taam AI? Here are some of the most common inquiries we receive from our users. If you don't find the answer you're looking for, feel free to contact us.
                        </p>
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className={`faq-item ${index === 0 ? "first" : ""} ${activeIndex === index ? "active" : ""}`}
                                data-aos="fade-up"
                                data-aos-delay={200 + (index * 50)}
                            >
                                <div
                                    className="faq-question"
                                    onClick={() => toggleFaq(index)}
                                    aria-expanded={activeIndex === index}
                                >
                                    <span>{item.question}</span>
                                    <span className={`arrow me-4 ${activeIndex === index ? "open" : ""}`}></span>
                                </div>
                                {activeIndex === index && item.answer && (
                                    <div 
                                        className="faq-answer col-11"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;