import React from 'react'

import heroImg from '../../public/hero-img.png';
const Hero = () => {
  return (
    <div>
      <section className="hero-section py-5">
                              <div className="hero-container">
                                  <div className="row align-items-center ">
                                      {/* Left Content */}
                                      <div className="col-md-5 mb-4 mb-md-0  ">
                                          <div className="new-feature-badge mb-2">
                                              <span className="badge bg-warning text-dark">New Feature</span>
                                              <span className="d-block mt-1">
                                                  Test All AI models in Playground &gt;
                                              </span>
                                          </div>
                                          <h1 className="mb-3">One API 300+ AI Models Uptime 99%</h1>
                                          <p className="mb-4">
                                              Effortlessly access 1200+ AI models through a single API gateway.
                                              Build smarter, ship faster, and scale AI applications without the
                                              complexity.
                                          </p>
                                          <div className="buttons d-flex gap-2">
                                              <button className="btn btn-primary">Start Free</button>
                                              <button className="btn btn-outline-secondary">
                                                  See All Features
                                              </button>
                                          </div>
                                      </div>
                                      {/* Right Image */}
                                      <div className="col-md-7 ">
                                          <div className="img-wrapper hero-right-img text-center">
                                              <img
                                                  src={heroImg}
                                                  alt="Hero Image"
                                                  className="img-fluid"
                                              />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </section>
    </div>
  )
}

export default Hero
