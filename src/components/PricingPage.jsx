import React from "react";
import Header from "../components/Header";
import "../assets/price.css";

const PricingPage = () => {
  return (
    <div className="bg-black">
      <Header />
      <div className="pricing-wrapper">
        <div>
          <h3 className="pricing-title text-center">AI API Pricing That Suits Every Need</h3>
          <p className="pricing-subtext text-center mx-auto mt-4">
            Flexible and affordable AI API Pricing models made for every use case. An enterprise looking for On-premise infrastructure or cloud AI integration.
          </p>
        </div>
        <div className="pricing-container" style={{marginTop:'100px'}}>
          <div className="pricing-card developer">
            <h3>Developer</h3>
            <p className="subtext">
              Get started with fast inference,<br /> reliability, and no daily rate limits
            </p>
            <h1>$0 <span>/ month</span></h1>
            <ul>
              <li>Fully pay as you go</li>
              <li>AI Playground</li>
              <li>AI search Tool</li>
              <li>Monitoring dashboard<br /> with 24-hr data</li>
            </ul>
            <button className="btn">Try Now →</button>
          </div>

          <div className="pricing-card pro">
            <h3>Pro</h3>
            <p className="subtext">Suitable for small<br /> team and projects</p>
            <div className="price-row">
              <h1>$15 <span>/ month</span></h1>
              <span className="badge">-20%</span>
            </div>
            <ul>
              <li>Everything in Free</li>
              <li>All Pro features included</li>
              <li>AI Playground with all models</li>
              <li>AI search Tools</li>
              <li>AI chat App</li>
              <li>AI workflow</li>
              <li>Live Support 24/7</li>
            </ul>
            <div className="checkbox">
              <input type="checkbox" id="workflow" />
              <label htmlFor="workflow">
                AI workflow & advance + <strong>$8 / month</strong>
              </label>
            </div>
            <button className="btn primary">Get Started →</button>
          </div>

          <div className="pricing-card enterprise">
            <h3>Enterprise</h3>
            <p className="subtext">For organizations with custom<br /> needs and advanced security</p>
            <h1>Custom</h1>
            <ul>
              <li>Everything in Pro</li>
              <li>Dedicated AI gateway Deployment</li>
              <li>Custom AI API Solutions</li>
              <li>Enterprise Security & Compliance</li>
            </ul>
            <button className="btn">Get Started →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
