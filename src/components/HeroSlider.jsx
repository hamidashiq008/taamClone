import React from "react";

import silderImg1 from "../assets/images/slider1.svg";
import silderImg2 from "../assets/images/slider2.svg";
import silderImg3 from "../assets/images/slider3.svg";
import silderImg4 from "../assets/images/slider4.svg";
import silderImg5 from "../assets/images/slider5.svg";
import silderImg6 from "../assets/images/slider6.svg";
const HeroSlider = () => {
  return (
    <div>
      <section className="hero-slider">
        <div className="hero-container">
          <div className="ticker-wrap p-0 ">
            <p className="text-center hero-slider-header">The trust choice of thousands</p>
            <div className="ticker">
              <div className="ticker-content">
                <div className="img-wrapper">
                  <img src={silderImg1} alt="" />
                </div>
                <div className="img-wrapper">
                  <img src={silderImg2} alt="" />
                </div>
                <div className="img-wrapper">
                  <img src={silderImg3} alt="" />
                </div>
                <div className="img-wrapper">
                  <img src={silderImg4} alt="" />
                </div>
                <div className="img-wrapper">
                  <img src={silderImg5} alt="" />
                </div>
                <div className="img-wrapper">
                  <img src={silderImg6} alt="" />
                </div>
              </div>
              {/* Duplicate for seamless scroll */}
              <div className="ticker-content">
                <div className="img-wrapper">
                  <img src={silderImg1} alt="" />
                </div>
                <div className="img-wrapper">
                  <img src={silderImg2} alt="" />
                </div>
                <div className="img-wrapper">
                  <img src={silderImg3} alt="" />
                </div>
                <div className="img-wrapper">
                  <img src={silderImg4} alt="" />
                </div>
                <div className="img-wrapper">
                  <img src={silderImg5} alt="" />
                </div>
                <div className="img-wrapper">
                  <img src={silderImg6} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSlider;
