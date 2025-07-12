import React, { useEffect } from "react";
import AOS from 'aos';
import AiModalSlider from "./AiModalSlider";
import Dashboad1 from '../assets/images/dashboad1.png';
import Dashboad2 from '../assets/images/dashboad2.png';
import Dashboad3 from '../assets/images/dashboad3.png';
import Dashboad4 from '../assets/images/dashboad4.png';

const AiModals = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
    AOS.refresh();
  }, []);

  return (
    <section className="ai-modals-container text-white position-relative mt-90 pt-120">
      <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
        <h2 className="fw-600 display-6">
          200+ AI Models with a Single Unified AI API
        </h2>
        <p className="text-secondary mx-auto">
          Seamlessly connect, manage, and harmonize various AI tools and AI/ML
          models to work together with a single, secure and unified AI API.
        </p>
      </div>

      <div className="row g-2">
        {/* Main Card */}
        <div className="col-md-12 col-lg-8" data-aos="fade-up" data-aos-delay="200">
          <div className="ai-modal-box heading-modal h-100 shadow">
            <div className="dot-container">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <p className="fw-semibold black-and-white-text">
              Taam Cloud is your enterprise-ready gateway to over 100 AI models.
              Connect to OpenAI, Anthropic, Mistral, and more using a single,
              powerful API. Simplify integration, reduce infrastructure costs,
              and scale your AI applications with ease.
            </p>
          </div>
        </div>

        {/* Right Column - Top Card */}
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
          <div className="row slider-holder-row">
            <div className="col-md-12">
              <div className="ai-modal-box h-100 shadow">
                <img
                  src={Dashboad1}
                  className="img-fluid mb-3 rounded"
                  alt="API Logs"
                />
                <h5>API Logs & AI Observability</h5>
                <p className="text-secondary small">
                  Real-time insights into usage of AI API, track performance
                  response, and tweak LLMs for optimization.
                </p>
              </div>
            </div>
            {/* Slider Card */}
            <div className="col-md-12" data-aos="fade-up" data-aos-delay="400">
              <div className="ai-modal-box h-100 shadow px-0 m-0">
                <AiModalSlider />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row Cards */}
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="500">
          <div className="ai-modal-box h-100 shadow">
            <img
              src={Dashboad2}
              className="img-fluid mb-3 rounded"
              alt="AI Models"
            />
            <h5>200+ AI Models with one API</h5>
            <p className="text-secondary small m-0">
              Seamlessly connect, manage, and harmonize various AI tools and AI models to work together with a single, secure and unified AI API.
            </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="600">
          <div className="ai-modal-box h-100 shadow">
            <img
              src={Dashboad4}
              className="img-fluid mb-3 rounded"
              alt="Monitoring"
            />
            <h5>Real-Time Monitoring</h5>
            <p className="text-secondary small m-0">
              Easily track and monitor API usage with Taam Cloud. Gain insights into request volume, error rates, and performance metrics — all in one centralized dashboard.
            </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="700">
          <div className="ai-modal-box h-100 shadow">
            <img
              src={Dashboad3}
              className="img-fluid mb-3 rounded"
              alt="Analytics"
            />
            <h5>Usage Analytics</h5>
            <p className="text-secondary m-0">
              Gain full visibility into your API consumption, credit balance, and model performance — all in one smart dashboard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiModals;