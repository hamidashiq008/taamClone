import React from "react";
import Header from "../components/Header";
import "../assets/price.css";
import CardImage1 from "../assets/pricing.avif";

const PricingPage = () => {
  return (
    <div classNameName="bg-black">
      <Header />
      <div className="pricing-cotianer mt-3">
        <div className="header-pricing">
          <h1 className="text-white display-6">
            AI API Pricing That Suits Every Need
          </h1>
          <p className="text-white">
            Flexible and affordable AI API Pricing models made for every use
            case. An enterprise looking for On-premise infrastructure or cloud
            AI integration.
          </p>
        </div>

        <div className="pricing-cards position-relative">
          <img
            loading="lazy"
            src={CardImage1}
            alt=""
            style={{
              display: "block",
              width: "511px",
              height: "359px",
              borderRadius: "inherit",
              objectPosition: "center center",
              objectFit: "fill",
              position: "absolute",
              borderRadius: "inherit",
              left: "0px",
              bottom: "43px",
              filter: "blur(87px)",
            }}
          />
          <div
            style={{
              backgroundColor: "rgba(99, 249, 255, 0.6)",
              filter: "blur(87px)",
              flex: "0 0 auto",
              height: "269px",
              left: "calc(82.1303% - 180.5px)",
              position: "absolute",
              top: "250px",
              width: "361px",
              zIndex: "0",
            }}
          ></div>
          <div className="adjutst-bg-card card-price card-1">
            <div className=" adjust-border">
              <div className="card-header-image border-0">
                <h2 className="text-white">Developer</h2>
                <p className="text-white py-2 mb-0 card-description-detail">
                  Get started with fast inference, reliability, and no daily
                  rate limits
                </p>
                <div className="price">
                  <span className="text-white pricing-title">$0</span>{" "}
                  <span className="text-white months ms-2">/ month</span>
                </div>
              </div>

              <div className="features">
                <div className="included-title mt-5">What’s included</div>
                <div className="feature-item feature-item-1 text-white">
                  <span>Fully pay as you go</span>
                </div>
                <div className="feature-item feature-item-1 text-white">
                  <span>AI Playground</span>
                </div>
                <div className="feature-item feature-item-1 text-white">
                  <span>AI search Tool</span>
                </div>
                <div className="feature-item feature-item-1 text-white">
                  <span>Monitoring dashboard with 24-hr data</span>
                </div>
              </div>
            </div>

            <div className="developer-wrapper w-50 mx-auto mt-3">
               <a href="#" className="btn developer-btn text-white border p-1">
                Try Now <i class="bi bi-arrow-right"></i>

              </a>
            </div>
          </div>

          <div className="adjutst-bg-card card-price card-2 ">
            <div className="adjust-border1">
              <div className="card-header-image border-0">
                <h2 className="pro-text">Pro</h2>
                <p className="text-white py-2 mb-0 card-description-detail">
                  Suitable for small team and projects
                </p>
                <div className="price">
                  <span className="text-white pricing-title">$15 </span>{" "}
                  <span className="text-white months ms-2">/ month</span>{" "}
                  <span className="discount">-20%</span>
                </div>
              </div>

              <div className="features w-100 my-3 mt-5">
                <div className="included-title ">What’s included</div>
                <div className="feature-item">
                  <span>Everything in Free</span>
                </div>
                <div className="feature-item">
                  <span>All Pro features included</span>
                </div>
                <div className="feature-item">
                  <span>AI Playground with all models</span>
                </div>
                <div className="feature-item">
                  <span>AI search Tools</span>
                </div>
                <div className="feature-item">
                  <span>AI chat App</span>
                </div>
                <div className="feature-item">
                  <span>AI workflow</span>
                </div>
                <div className="feature-item">
                  <span>Live Support 24/7</span>
                </div>
              </div>
            </div>
            <div className="mx-4  addon-wrapper">
              {/* <a href="#" className="btn btn-primary">
                Get Started
              </a> */}
              <div className="addon py-2">
                <input type="checkbox" />
                <span className="workflow">All workflow & advance</span>{" "}
                <span className="addon-price">+ $8 / month</span>
              </div>
              <div className="developer-wrapper w-50 mx-auto">
               <a href="#" className="btn developer-btn text-white border p-1 my-4 lg:my-2">
                Get Started <i class="bi bi-arrow-right"></i>

              </a>
            </div>
              
            </div>
          </div>

          <div className="adjutst-bg-card card-price card-3 ">
            <div className="adjust-border2">
              <div className="card-header-image border-0">
                <h2 className="text-white">Enterprise</h2>
                <p className="text-white py-2 mb-0 card-description-detail">
                  For organizations with custom needs and advanced security
                </p>
                <div className="price-enterprise text-white mb-4 mt-0">
                  Custom
                </div>
              </div>

              <div className="features">
                <div className="included-title my-3 mt-5">What’s included</div>
                <div className="feature-item feature-item-3">
                  <span>Everything in Pro</span>
                </div>
                <div className="feature-item feature-item-3">
                  <span>Dedicated AI gateway Deployment</span>
                </div>
                <div className="feature-item feature-item-3">
                  <span>Custom AI API Solutions</span>
                </div>
                <div className="feature-item feature-item-3">
                  <span>Enterprise Security & Compliance</span>
                </div>
              </div>
            </div>
           <div className="developer-wrapper w-50 mx-auto">
               <a href="#" className="btn developer-btn text-white border p-1 my-2">
                Get Started <i class="bi bi-arrow-right"></i>

              </a>
            </div>
          </div>
        </div>

        <div className="enterprise-link mx-auto py-2 px-1">
          <a href="#">
            Want enterprise features?{" "}
            <span className="text-white ms-1">Contact Us →</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
