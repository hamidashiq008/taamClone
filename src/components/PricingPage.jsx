import React from "react";
import Header from "../components/Header";
import "../assets/price.css";
import CardImage1 from '../assets/pricing.avif';


const PricingPage = () => {
    return (
        <div classNameName="bg-black">
            <Header />
            <div className="pricing-cotianer mt-5">
                <div className="header">
                    <h1 className="text-white display-6">AI API Pricing That Suits Every Need</h1>
                    <p className="text-white">Flexible and affordable AI API Pricing models made for every use case. An enterprise looking for On-premise infrastructure or cloud AI integration.</p>
                </div>

                <div className="pricing-cards position-relative">
                    <img loading="lazy" src={CardImage1} alt=""
                        style={{
                            display: 'block', width: '511px',
                            height: '359px', borderRadius: 'inherit',
                            objectPosition: 'center center', objectFit: 'fill',
                            position: 'absolute', borderRadius: 'inherit',
                            left: '0px', bottom: '43px', filter: 'blur(87px)'
                        }} />
                    <div style={{
                        backgroundColor: 'rgba(99, 249, 255, 0.6)',
                        filter: 'blur(87px)',
                        flex: '0 0 auto',
                        height: '269px',
                        left: 'calc(82.1303% - 180.5px)',
                        position: 'absolute',
                        top: '250px',
                        width: '361px',
                        zIndex: '0',
                    }}></div>
                    <div className="adjutst-bg-card card card-1 adjust-border">
                        <div className="card-header border-0">
                            <h2 className="text-white">Developer</h2>
                            <p className="text-white py-3 card-description-detail">Get started with fast inference, reliability, and no daily rate limits</p>
                            <div className="price"><span className="text-white pricing-title">$0</span>  <span className="text-white months ms-2">/  month</span></div>
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

                    <div className="adjutst-bg-card card card-2 adjust-border1">
                        <div className="card-header border-0">
                            <h2 className="pro-text">Pro</h2>
                            <p className="text-white py-3 card-description-detail">Suitable for small team and projects</p>
                            <div className="price"><span className="text-white pricing-title">$15 </span> <span className="text-white months ms-2">/  month</span> <span className="discount">-20%</span></div>
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

                    <div className="adjutst-bg-card card card-3 adjust-border2">
                        <div className="card-header border-0">
                            <h2 className="text-white">Enterprise</h2>
                            <p className="text-white py-3 card-description-detail">For organizations with custom needs and advanced security</p>
                            <div className="price-enterprise text-white mb-4 mt-0">Custom</div>
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
        </div >
    );
};

export default PricingPage;
