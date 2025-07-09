import React from "react";

const TaamAILanding = () => {
    return (
        <div className="landing-container">
            <section className="cta-section pt-120">
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
        </div>
    );
};

export default TaamAILanding;