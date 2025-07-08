import React, { useState, useEffect } from "react";
import Header from "./Header";
import FeatureHeroImg from "../assets/download.webp";
import FaqSection from './FAQSection';

const Downloads = () => {
  

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
          <FaqSection />          
        </div>
      </div>
    </div>
  );
};

export default Downloads;
