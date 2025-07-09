import React from "react";
import {SimpleButton} from '../Partials/CustomButton';

const TaamAILanding = () => {
    return (
        <section className="simplified-subscription-section pb-80">
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
                            {/* <button className="simplified-subscribe-button">
                                Subscribe
                                <svg className="arrow-icon" viewBox="0 0 256 256" focusable="false">
                                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                                </svg>
                            </button> */}
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