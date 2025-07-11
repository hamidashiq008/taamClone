import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import FeatureHeroImg from "../assets/images/download.webp";
import FaqSection from '../components/FAQSection';

import { SimpleButton, SimpleLink, GradientButton, GradientLink } from '../Partials/CustomButton';


const Downloads = () => {


  return (
    <>
      <div>
        <Header />
        <div className="features-page-content">
          <div className="container">
            <section className="feature-hero-section">
              <h2 className="text-center hero-heaeding">Download Taam AI</h2>
              <p className="text-center hero-desc">
                Available for web, macOS and Windows. Coming soon to iOS and Android.
              </p>
              {/* <button className="free-credit-btn mb-3">Download Taam AI</button> */}
              <GradientButton text={'Download Taam AI'} className={'mx-auto d-block mt-3 mb-30'} />
              <div className="feature-hero-img-wrapper pt-4">
                <img src={FeatureHeroImg} alt="" />
              </div>
            </section>
            <FaqSection />
          </div>
        </div>
      </div>

      <style>
        {`
          .teamWorkFlow-container::before {
            content: unset !important;
          }
        `}
      </style>
    </>
  );
};

export default Downloads;
