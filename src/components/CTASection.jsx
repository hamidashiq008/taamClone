import React from "react";
import {SimpleButton} from '../Partials/CustomButton';

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
                        <SimpleButton text={'Get Started Now'} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TaamAILanding;