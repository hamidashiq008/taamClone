import React from "react";

import heroImg from "../assets/hero-img.png";
const Hero = () => {
  return (
    <div>
      <section className="hero-section ">
        <div className="hero-container">
          <div className="row align-items-center px-3">
            {/* Left Content */}
            <div className="col-md-5 mb-4 mb-md-0  ">
              <div className="new-feature-badge mb-2">
                <div className="badge-inner-wrapper">
                  <span className=" feature-badge badge  text-light me-2">
                    New Feature
                  </span>
                  <span>
                  Test All AI models in Playground
                  </span>
                </div>
              </div>
              <h1 className="mb-3">One API 300+ AI Models Uptime 99%</h1>
              <p className="mb-4">
                Effortlessly access 1200+ AI models through a single API
                gateway. Build smarter, ship faster, and scale AI applications
                without the complexity.
              </p>
              <div className="buttons d-flex gap-2">
                <button className="btn start-free-btn rounded-lg">Start Free</button>
                <button className="btn btn-outline-secondary features-btn">
                  See All Features <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
            {/* Right Image */}
            <div className="col-md-7 ">
              <div className="img-wrapper hero-right-img text-center">
                <img src={heroImg} alt="Hero Image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
