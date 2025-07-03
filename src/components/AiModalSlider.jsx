import React from "react";

const AiModalSlider = () => {
  return (
    <div>
      <section className="hero-slider ai-modal-slider">
        <div className="hero-container">
          <div className="ticker-wrap p-0 ">
            <div className="ticker">
              <div className="ticker-content">
                <span>Real-Time Debugging Tools</span>
                <span>Full Request and Response History</span>
                <span>Real-Time Debugging Tools</span>
                <span>Full Request and Response History</span>
                <span>Real-Time Debugging Tools</span>
                <span>Full Request and Response History</span>
              </div>
              {/* Duplicate for seamless scroll */}
              <div className="ticker-content">
                <span>Real-Time Debugging Tools</span>
                <span>Full Request and Response History</span>
                <span>Real-Time Debugging Tools</span>
                <span>Full Request and Response History</span>
                <span>Real-Time Debugging Tools</span>
                <span>Full Request and Response History</span>
              </div>
            </div>
          </div>

          <div className="ticker-wrap">
            <div className="swipper">
              <div className="ticker-content">
                <span>Real-Time Debugging Tools</span>
                <span>Full Request and Response History</span>
                <span>Real-Time Debugging Tools</span>
                <span>Full Request and Response History</span>
                <span>Real-Time Debugging Tools</span>
                <span>Full Request and Response History</span>
              </div>
              {/* Duplicate for seamless scroll */}
              <div className="ticker-content">
                <span>Real-Time Debugging Tools</span>
                <span>Full Request and Response History</span>
                <span>Real-Time Debugging Tools</span>
                <span>Full Request and Response History</span>
                <span>Real-Time Debugging Tools</span>
                <span>Full Request and Response History</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiModalSlider;
