import React, { useEffect } from "react";
import { SimpleButton } from '../Partials/CustomButton';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TaamAILanding = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        });
    }, []);

    return (
        <div className="landing-container">
            <section 
                className="cta-section pt-120"
                data-aos="fade-up"
                data-aos-delay="100"
            >
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