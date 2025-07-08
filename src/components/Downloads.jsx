import React, { useState, useEffect } from "react";
import Header from "./Header";
import FeatureHeroImg from "../assets/download.webp";

const faqData = [
  {
    question: "What is Taam AI and how does it work?",
    answer:
      "Taam AI is an API platform that provides seamless access to multiple models for businesses and developers. It enables users to integrate Artificial Intelligence solutions such as chatbots, text generation, voice, and image processing into their applications with minimal effort.",
  },
  {
    question: "What is the Taam AI API Gateway?",
    answer: "",
  },
  {
    question: "How does Taam AI ensure security and compliance?",
    answer: "",
  },
  {
    question:
      "What are the pricing and scalability options for Taam AI's API Gateway?",
    answer: "",
  },
  {
    question: "How do I get started",
    answer: "",
  },
  {
    question: "Which AI models does it support?",
    answer: "",
  },
];

const Downloads = () => {
  const [activeIndex, setActiveIndex] = useState(0); // First FAQ open by default

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      <Header />
      <div className="features-page-content">
        <div className="container">
          <section className="feature-hero-section">
            <h2 className="text-center hero-heaeding">Download Taam AI</h2>
            <p className="text-center hero-desc">
              Available for web, macOS and Windows. Coming soon to iOS and Android.
            </p>
            <button className="free-credit-btn mb-3">Download Taam AI</button>
            <div className="feature-hero-img-wrapper pt-4">
              <img src={FeatureHeroImg} alt="" />
            </div>
          </section>

          <section className="teamWorkFlow">
            <div className="bg-black text-white px-3 min-vh-100">
              <div className="container text-center teamWorkFlow-container">
                <h1 className="teamWorkFlow-heading">
                  Frequently Asked <br /> Questions
                </h1>

                <div className="faq">
                  {faqData.map((item, index) => (
                    <div
                      key={index}
                      className={`faq-item ${index === 0 ? "first" : ""} ${
                        activeIndex === index ? "active" : ""
                      }`}
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
                        <div className="faq-answer col-11">{item.answer}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .faq {
          max-width: 800px;
          margin: 40px auto;
        }

        .faq-item {
          border-top: 1px solid #333;
          border-bottom: 1px solid #333;
          padding: 20px 0;
          text-align: left;
        }

        .faq-item.first {
          border-top: none;
        }

        .faq-question {
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .faq-answer {
          margin-top: 10px;
          font-size: 14px;
          color: #ccc;
          line-height: 1.6;
        }

        .arrow {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-right: 2px solid #fff;
          border-bottom: 2px solid #fff;
          transform: rotate(45deg); /* Right arrow (closed) */
          transition: transform 0.3s ease;
          margin-left: 8px;
        }

        .arrow.open {
          transform: rotate(-45deg); /* Up arrow (open) */
        }
      `}</style>
    </div>
  );
};

export default Downloads;
