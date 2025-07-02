import React from 'react';

const AiModals = () => {
    return (
        <section className="container py-5 text-white" style={{ backgroundColor: '#000' }}>
            <div className="text-center mb-5">
                <h2 className="fw-bold display-6">200+ AI Models with a Single Unified AI API</h2>
                <p className="text-secondary mx-auto" style={{ maxWidth: '800px' }}>
                    Seamlessly connect, manage, and harmonize various AI tools and AI/ML models to work together with a single, secure and unified AI API.
                </p>
            </div>

            <div className="row g-4">

                <div className="col-md-12 col-lg-8">
                    <div className="bg-dark rounded p-4 h-100 shadow">
                        <p className="fs-5 fw-semibold">
                            Taam Cloud is your enterprise-ready gateway to over 100 AI models. Connect to OpenAI, Anthropic, Mistral, and more using a single, powerful API. Simplify integration, reduce infrastructure costs, and scale your AI applications with ease.
                        </p>
                    </div>
                </div>

                {/* Smaller Cards */}
                <div className="col-md-6 col-lg-4">
                    <div className="bg-dark rounded p-4 h-100 shadow">
                        <img src="/dashboad1.png" className="img-fluid mb-3 rounded" alt="API Logs" />
                        <h5>API Logs & AI Observability</h5>
                        <p className="text-secondary small">
                            Real-time insights into usage of AI API, track performance response, and tweak LLMs for optimization.
                        </p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="bg-dark rounded p-4 h-100 shadow">
                        <img src="/dashboad2.png" className="img-fluid mb-3 rounded" alt="AI Models" />
                        <h5>200+ AI Models with one API</h5>
                        <p className="text-secondary small">
                            Seamlessly connect, manage, and harmonize various AI tools and models with a single, secure and unified AI API.
                        </p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="bg-dark rounded p-4 h-100 shadow">
                        <img src="/dashboad3.png" className="img-fluid mb-3 rounded" alt="Monitoring" />
                        <h5>Real-Time Monitoring</h5>
                        <p className="text-secondary small">
                            Track API usage, error rates, and performance metrics — all in one centralized dashboard.
                        </p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="bg-dark rounded p-4 h-100 shadow">
                        <img src="/dashboad4.png" className="img-fluid mb-3 rounded" alt="Analytics" />
                        <h5>Usage Analytics</h5>
                        <p className="text-secondary small">
                            Full visibility into API usage, credit balance, and model performance — all in one dashboard.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AiModals;
