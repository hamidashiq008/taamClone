import React, { useEffect } from "react";
import { SimpleButton, GradientButton } from '../Partials/CustomButton';
import AOS from 'aos';

const Hero = ({ heading, heroImage }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Longer animation duration
      easing: 'ease-in-out',
      mirror: false
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <section className="hero-section position-relative">
        <div className="hero-container">
          <div className="d-flex gap-2 align-items-center justify-content-between main-hero-content">
            <div className="d-flex flex-column gap-2 align-items-start text-section">
              <div
                className="whats-new-component"
                style={{ backdropFilter: 'blur(4px)', backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '1000px', border: '1px solid rgba(145, 145, 145, 0.1)' }}
                data-aos="zoom-in"
                data-aos-delay="200"  // Increased from 100
              >
                <a href="./" className="text-link">
                  <div className="badge" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '45px' }}>
                    <div className="label" style={{ color: 'rgb(255, 255, 255)' }}>
                      <p>New Feature</p>
                    </div>
                  </div>
                  <div className="label" style={{ color: 'rgb(235, 233, 254)' }}>
                    <p>Test All AI models In playground</p>
                  </div>
                  <div className="right-icon">
                    <svg width="100%" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="rgb(255, 255, 255)" style={{ width: '100%', height: '100%' }}>
                      <path d="M6 12h12.5m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                </a>
              </div>

              <h1 className="mb-3" data-aos="zoom-in" data-aos-delay="400">{heading}</h1>  {/* Increased from 200 */}

              <p className="mb-4 text-gray" data-aos="zoom-in" data-aos-delay="600">  {/* Increased from 300 */}
                Effortlessly access 1200+ AI models through a single API
                gateway. Build smarter, ship faster, and scale AI applications
                without the complexity.
              </p>

              <div className="d-flex" data-aos="zoom-in" data-aos-delay="800">  {/* Increased from 400 */}
                <GradientButton text={'Start Free'} className={'me-2'} />
                <SimpleButton text={'See All Features'} />
              </div>
            </div>

            <div className="hero-image" data-aos="fade-uo" data-aos-duration='500' data-aos-delay="700">  {/* Increased from 500 */}
              <img src={heroImage} alt="Hero Image" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;