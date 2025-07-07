import React from "react";
import Header from "../components/Header";
import "../assets/price.css";

const PricingPage = () => {
  return (
    <div classNameName="bg-black">
      <Header />
      <div className="pricing-cotianer mt-5">
        <div className="header">
            <h1 className="text-white display-6">AI API Pricing That Suits Every Need</h1>
            <p className="text-white">Flexible and affordable AI API Pricing models made for every use case. An enterprise looking for On-premise infrastructure or cloud AI integration.</p>
        </div>
        
        <div className="pricing-cards">
            <div className="card card-1">
                <div className="card-header">
                    <h2 className="text-white">Developer</h2>
                    <p className="text-white py-3 card-description-detail">Get started with fast inference, reliability, and no daily rate limits</p>
                    <div className="price"><span className="text-white pricing-title">$0</span>  <span className="text-white fs-5">/ month</span></div>
                </div>
                
                <div className="features">
                    <div className="included-title my-3">What’s included</div>
                    <div className="feature-item feature-item-1 text-white">Fully pay as you go</div>
                    <div className="feature-item feature-item-1 text-white">AI Playground</div>
                    <div className="feature-item feature-item-1 text-white">AI search Tool</div>
                    <div className="feature-item feature-item-1 text-white">Monitoring dashboard with 24-hr data</div>
                </div>
                
                <a href="#" className="btn btn-outline">Try Now</a>
            </div>
            
            <div className="card card-2">
                <div className="card-header">
                    <h2 className="text-white">Pro</h2>
                    <p className="text-white py-3 card-description-detail">Suitable for small team and projects</p>
                    <div className="price"><span className="text-white pricing-title">$15 </span> <span className="text-white">/ month</span> <span className="discount">-20%</span></div>
                </div>
                
                <div className="features">
                    <div className="included-title my-3">What’s included</div>
                    <div className="feature-item text-white">Everything in Free</div>
                    <div className="feature-item text-white">All Pro features included</div>
                    <div className="feature-item text-white">AI Playground with all models</div>
                    <div className="feature-item text-white">AI search Tools</div>
                    <div className="feature-item text-white">AI chat App</div>
                    <div className="feature-item text-white">AI workflow</div>
                    <div className="feature-item text-white">Live Support 24/7</div>
                </div>
                
                <a href="#" className="btn btn-primary">Get Started</a>
                <div className="addon">[All workflow & advance + $8 / month]</div>
            </div>
            
            <div className="card card-3">
                <div className="card-header">
                    <h2 className="text-white">Enterprise</h2>
                    <p className="text-white py-3 card-description-detail">For organizations with custom needs and advanced security</p>
                    <div className="price-enterprise text-white my-4">Custom</div>
                </div>
                
                <div className="features">
                    <div className="feature-item feature-item-3 text-white">Everything in Pro</div>
                    <div className="feature-item feature-item-3 text-white">Dedicated AI gateway Deployment</div>
                    <div className="feature-item feature-item-3 text-white">Custom AI API Solutions</div>
                    <div className="feature-item feature-item-3 text-white">Enterprise Security & Compliance</div>
                </div>
                
                <a href="#" className="btn btn-primary">Get Started</a>
            </div>
        </div>
        
        <div className="enterprise-link">
            <a href="#">Want enterprise features? Contact Us →</a>
        </div>
        
    </div>
    </div>
  );
};

export default PricingPage;
