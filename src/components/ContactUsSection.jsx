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
        <section 
            className="simplified-subscription-section pb-80"
            data-aos="fade-up"
            data-aos-delay="100"
        >
            <div className="simplified-content d-flex gap-2">
                <div className="d-flex flex-column gap-0 align-items-start flex-grow-1">
                    <h3 className="simplified-heading">Subscribe to our newsletter</h3>

                    <p className="simplified-description">
                        Get a summary of what we've shipped during the last <br />
                        month, behind the scenes updates, and team picks.
                    </p>
                </div>
                <div className="simplified-form flex-grow-1">
                    <div className="d-flex flex-column gap-3 align-items-start">
                        <div className="d-flex gap-2 align-items-center">
                            <input
                                type="email"
                                placeholder="jane@gmail.com"
                                className="simplified-input flex-grow-1"
                            />
                            <SimpleButton text={'Subscribe'} />
                        </div>

                        <p className="simplified-disclaimer">
                            By submitting your email address, you agree<br />
                            to receive Taam AI monthly newsletter.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TaamAILanding;