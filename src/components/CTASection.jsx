import React from "react";

const TaamAILanding = () => {
  return (
    <div className="landing-container">
      {/* CTA Section */}
      <section className="cta-section py-120">
        <div className="cta-content">
          <div className="cta-heading">
            <h3>Get Started with Taam AI Today!</h3>
          </div>
          <div className="cta-description">
            <p>
              Power up your applications with cutting-edge Artificial Intelligence models, a seamless API gateway, and enterprise-grade scalability.
            </p>
          </div>
          <div className="cta-button-container">
            <a className="cta-button" href="./download">
              <div className="button-content">
                <p>Get Started Now</p>
                <div className="button-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false">
                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                  </svg>
                </div>
              </div>
              <div className="button-glow"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="subscription-section">
        <div className="subscription-content">
          <div className="subscription-heading">
            <p>Subscribe to our newsletter</p>
            <div className="subscription-description">
              <p>
                Get a summary of what we've shipped during the last month, behind the scenes updates, and team picks.
              </p>
            </div>
          </div>
          <div className="subscription-form">
            <form>
              <label>
                <div className="form-input-wrapper">
                  <input type="email" name="Email" placeholder="jane@gmail.com" />
                </div>
              </label>
              <div className="subscribe-button-container">
                <button type="submit" className="subscribe-button">
                  <div className="button-content">
                    <p>Subscribe</p>
                    <div className="button-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false">
                        <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="button-glow"></div>
                </button>
              </div>
            </form>
            <div className="form-disclaimer">
              <p>
                By submitting your email address, you agree to receive Taam AI monthly newsletter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .landing-container {
          font-family: "Inter", sans-serif;
          color: white;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        /* CTA Section Styles */
        .cta-section {
          margin-bottom: 3rem;
        }

        .cta-content {
          text-align: center;
        }

        .cta-heading h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #d9d9d9;
        }

        .cta-description p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .cta-button-container {
          display: flex;
          justify-content: center;
        }

        .cta-button {
          position: relative;
          text-decoration: none;
          display: inline-block;
        }

        .button-content {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          background-color: rgba(0, 0, 0, 0.4);
          border-radius: 8px;
          box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1), 
                      0 4px 4px rgba(0, 0, 0, 0.05), 
                      0 1px 0 rgba(0, 0, 0, 0.05);
        }

        .button-content p {
          font-size: 14px;
          font-weight: 500;
          margin: 0;
        }

        .button-icon svg {
          width: 16px;
          height: 16px;
          fill: currentColor;
        }

        .button-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 10px;
          filter: blur(10px);
          opacity: 0.4;
          z-index: -1;
          background: linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.3));
        }

        /* Subscription Section Styles */
        .subscription-section {
          margin-top: 3rem;
        }

        .subscription-heading p {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .subscription-description p {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1.5rem;
        }

        .subscription-form {
          max-width: 500px;
          margin: 0 auto;
        }

        .form-input-wrapper input {
          width: 100%;
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: white;
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .form-input-wrapper input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .subscribe-button-container {
          margin-bottom: 1rem;
        }

        .subscribe-button {
          position: relative;
          border: none;
          background: none;
          cursor: pointer;
          padding: 0;
          width: 100%;
        }

        .form-disclaimer p {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </div>
  );
};

export default TaamAILanding;