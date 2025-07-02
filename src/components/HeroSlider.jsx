import React from 'react'

import silderImg1 from '../../public/slider1.svg';
import silderImg2 from '../../public/slider2.svg';
import silderImg3 from '../../public/slider3.svg';
import silderImg4 from '../../public/slider4.svg';
import silderImg5 from '../../public/slider5.svg';
import silderImg6 from '../../public/slider6.svg';
const HeroSlider = () => {
  return (
    <div>
       <section className="hero-slider">
                        <div className="hero-container">
                            <div className="ticker-wrap ">
                                <p className="text-center pb-4">The trust choice of thousands</p>
                                <div className="ticker">
                                    <div className="ticker-content">
                                        <div className="img-wrapper">
                                            <img src={silderImg1} alt="" />
                                        </div>
                                        <div className="img-wrapper">
                                            <img src={silderImg2} alt="" />
                                        </div>
                                        <div className="img-wrapper">
                                            <img src={silderImg3} alt="" />
                                        </div>
                                        <div className="img-wrapper">
                                            <img src={silderImg4} alt="" />
                                        </div>
                                        <div className="img-wrapper">
                                            <img src={silderImg5} alt="" />
                                        </div>
                                        <div className="img-wrapper">
                                            <img src={silderImg6} alt="" />
                                        </div>
                                    </div>
                                    {/* Duplicate for seamless scroll */}
                                    <div className="ticker-content">
                                        <div className="img-wrapper">
                                            <img src={silderImg1} alt="" />
                                        </div>
                                        <div className="img-wrapper">
                                            <img src={silderImg2} alt="" />
                                        </div>
                                        <div className="img-wrapper">
                                            <img src={silderImg3} alt="" />
                                        </div>
                                        <div className="img-wrapper">
                                            <img src={silderImg4} alt="" />
                                        </div>
                                        <div className="img-wrapper">
                                            <img src={silderImg5} alt="" />
                                        </div>
                                        <div className="img-wrapper">
                                            <img src={silderImg6} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
    </div>
  )
}

export default HeroSlider
