import React, { useEffect } from 'react'
import Header from '../components/Header'
import FeatureHeroImg from "../assets/images/FeatureHeroImg.png";
import CpuImg from "../assets/images/cpu.png";
import gatewayImg1 from "../assets/images/gateway1.png";
import gatewayImg2 from "../assets/images/gateway2.png";
import gatewayImg3 from "../assets/images/gateway3.png";
import img1 from "../assets/images/circleAnimationImg1.svg";
import img2 from "../assets/images/circleAnimationImg2.svg";
import img3 from "../assets/images/circleAnimationImg3.svg";
import img4 from "../assets/images/circleAnimationImg4.svg";
import img5 from "../assets/images/circleAnimationImg5.svg";
import img6 from "../assets/images/circleAnimationImg6.svg";
import img7 from "../assets/images/circleAnimationImg7.svg";
import img8 from "../assets/images/circleAnimationImg8.svg";
import img9 from "../assets/images/centerAnimation.png";

import { SimpleButton, SimpleLink, GradientButton, GradientLink } from '../Partials/CustomButton';
import {
    IconDatabase,
    IconCloudUpload,
    IconWaveSine,
    IconFileText,
    IconCode,
    IconChevronRight,
    IconLoader,
    IconCpu,
    IconLink
} from "@tabler/icons-react";
const Features = () => {

    const items = [img1, img2, img3, img4, img5, img6, img7, img8];

    return (
        <div>
            <Header />
            <div className="features-page-content">
                <div className="container" data-aos="fade-up">
                    <section className="feature-hero-section">
                        <h2 className='text-center hero-heaeding'>All Your AI Build with  Taam AI</h2>
                        <p className='text-center hero-desc'>The Enterprise AI API platform that unifies access to LLMs  Simplify development, reduce costs, and scale faster with one powerful API.</p>
                        <GradientButton text={'Start Free With 500K Credits'} className={'mx-auto d-flex my-20'} />
                        <div className="feature-hero-img-wrapper pt-4">
                            <img src={FeatureHeroImg} alt="" />
                        </div>
                    </section>
                    <section className="teamWorkFlow">
                        <div className="bg-black text-white  px-3 min-vh-100">
                            <div className="container text-center teamWorkFlow-container">
                                {/* Tag button */}
                                <div className="badge-div  mb-3 ">
                                    <button className="btn btn-outline-light rounded-pill smallpx-3 py-1 main-badge">
                                        Taam AI Workflow
                                    </button>

                                </div>
                                {/* Title */}
                                <h1 className=" teamWorkFlow-heading  ">
                                    Taam AI Workflow – Automate <br /> Smarter, Not Harder
                                </h1>

                                {/* Card Section */}
                                <div className="row g-4">
                                    {/* Card 1 */}
                                    <div className="col-md-4 ">
                                        <div className="card-wrapper first-card-wrapper h-100">
                                            <p className="card-heading">Scalable AI solutions</p>
                                            <p className="text-secondary card-desc me-4">
                                                Experience the enchanting magic of AI as it transforms data into insights.
                                            </p>

                                            <div className="tiles-main-wrapper">
                                                <div className="tile-wrapper d-flex align-items-center justify-content-between first-tile">
                                                    <div className="logo-wrapper">
                                                        <IconCode style={{ color: 'rgb(127 127 127)' }} />

                                                    </div>
                                                    <div className="content-wrapper">
                                                        <div className="top-heading">
                                                            Try the latest Modal
                                                            <span>Model-3</span>
                                                        </div>
                                                        <div className="bottom-desc">
                                                            <p className='inner-top-p m-0'>TOP </p>
                                                            <p className='inner-bottom-p m-0'>BOTTOM </p>
                                                        </div>
                                                    </div>
                                                    <div className="arrow-svg-wrapper">
                                                        <IconChevronRight size={20} stroke={1} className='chevron  chev-right' />

                                                    </div>
                                                </div>
                                                <div className="tile-wrapper d-flex align-items-center justify-content-between mt-3 ms-4 second-tile">
                                                    <div className="logo-wrapper ">
                                                        <IconWaveSine style={{ color: 'rgb(127 127 127)' }} />

                                                    </div>
                                                    <div className="content-wrapper">
                                                        <div className="top-heading">
                                                            Create new asset


                                                            <span>new</span>
                                                        </div>
                                                        <div className="bottom-desc">
                                                            <p className='inner-top-p m-0'>TOP </p>
                                                            <p className='inner-bottom-p m-0'>BOTTOM </p>
                                                        </div>
                                                    </div>
                                                    <div className="arrow-svg-wrapper">
                                                        <IconChevronRight size={20} stroke={1} className='chevron chev-right' />

                                                    </div>
                                                </div>
                                                <div className="tile-wrapper d-flex align-items-center justify-content-between mt-3 ms-5 third-tile">

                                                    <div className="content-wrapper w-100 ">
                                                        <div className="top-heading d-flex justify-content-between">
                                                            <div className="logo-heding d-flex gap-2">
                                                                <div className="arrow-svg-wrapper">
                                                                    <IconWaveSine size={20} stroke={2} className='chevron' />

                                                                </div>
                                                                <div className="heading">
                                                                    Create new asset
                                                                </div>
                                                            </div>


                                                            <div className="span-div">
                                                                <span>Updated</span>
                                                            </div>
                                                        </div>
                                                        <div className="text-to-audio text-start">
                                                            Text to Audio
                                                        </div>
                                                        <p className='text-start '>Quick create an Audio message</p>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="col-md-4 ">
                                        <div className="card-wrapper centered-card h-100">
                                            <p className="card-heading mx-3">API & integrations</p>
                                            <p className="text-secondary card-desc mx-3">
                                                Connect with different services to automate your product.
                                            </p>

                                            <div className="logo-wrapper mt-5">
                                                <div className="top-icon icon">
                                                    <IconFileText size={20} stroke={1} className='' />

                                                </div>
                                                <div className="center-icons d-flex justify-content-center gap-2 align-items-center">
                                                    <div className="left icon">
                                                        <IconWaveSine size={20} stroke={1} className='' />
                                                    </div>
                                                    <div className="center-badge center-badge-one mt-2">
                                                        <IconLoader size={15} stroke={1} className="loading-icon me-2" />
                                                        CONNECTIONG
                                                    </div>
                                                    <div className="center-badge center-badge-two mt-2">
                                                        <IconLink size={15} stroke={1} className="loading-icon me-2" />
                                                        CONNECTED
                                                    </div>
                                                    <div className="right icon">
                                                        <IconCode size={20} stroke={1} className='' />
                                                    </div>



                                                </div>

                                                <div className="d-flex justify-content-center  align-items-start  gap-4 ">
                                                    <div className="left icon mt-3">
                                                        <IconWaveSine size={20} stroke={1} className='' />
                                                    </div>
                                                    <div className="center-image-wrapper mb-2">
                                                        <div className='d1'></div>
                                                        <div className='d2'></div>
                                                        <div className='d3'></div>
                                                        <div className='d4'></div>
                                                        <div className='d5'></div>

                                                        <div className="img-wrapper">

                                                            <img src={CpuImg} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="right icon mt-3">
                                                        <IconCode size={20} stroke={1} className='' />
                                                    </div>



                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="col-md-4 ">
                                        <div className="card-wrapper last-card h-100">
                                            <p className="card-heading mx-3">Integrated workflow</p>
                                            <p className="text-secondary card-desc mb-5 mx-3">
                                                Enhance productivity with AI that connects your systems and automates complex workflows.
                                            </p>

                                            <div className="d-flex flex-wrap gap-2 pt-4 pills-wrapper">
                                                <span className="badge first d-flex align-items-center">
                                                    <div className="icons-wrapper" >
                                                        <div className="first-icon d-block">
                                                            <IconCode size={20} stroke={1} className='' />
                                                        </div>
                                                        <div className="second-icon  d-block">
                                                            <IconCpu size={20} stroke={1} className='' color='rgb(127 247 189)' />
                                                        </div>
                                                    </div>
                                                    <div className="content d-flex">
                                                        <div className="afterBefore">
                                                            <div className="before">
                                                                Edit
                                                            </div>
                                                            <div className="after">
                                                                Edited
                                                            </div>
                                                        </div>
                                                        <div className="spna-div">
                                                            <span>  page.</span>
                                                        </div>
                                                    </div>
                                                </span>
                                                <span className="badge ">  <IconCode size={20} stroke={1} className='' /> Transcribe <span>voiceclips.</span></span>
                                                <div className="center-content d-flex gap-2  my-2">
                                                    <span className="badge ">  <IconCode size={20} stroke={1} className='' /> Simplify <span>code.</span></span>
                                                    {/* <span className="badge fourth">  <IconCode size={20} stroke={1} className='' /> Improve <span> slides.</span></span> */}
                                                    <span className="badge first d-flex align-items-center">
                                                        <div className="icons-wrapper" >
                                                            <div className="first-icon d-block">
                                                                <IconCode size={20} stroke={1} className='' />
                                                            </div>
                                                            <div className="second-icon  d-block">
                                                                <IconCpu size={20} stroke={1} className='' color='rgb(127 247 189)' />
                                                            </div>
                                                        </div>
                                                        <div className="content d-flex">
                                                            <div className="afterBefore">
                                                                <div className="before">
                                                                    Improve
                                                                </div>
                                                                <div className="after">
                                                                    Improved
                                                                </div>
                                                            </div>
                                                            <div className="spna-div">
                                                                <span className='ms-2'>  slides.</span>
                                                            </div>
                                                        </div>
                                                    </span>
                                                    <div className="icon">
                                                        <IconCpu size={20} stroke={1} className='' color='rgb(127 247 189)' />
                                                    </div>

                                                </div>
                                                {/* <span className="badge fifth">  <IconCode size={20} stroke={1} className='' /> Create <span> a podcast draft.</span></span> */}
                                                <span className="badge first d-flex align-items-center">
                                                    <div className="icons-wrapper" >
                                                        <div className="first-icon d-block">
                                                            <IconCode size={20} stroke={1} className='' />
                                                        </div>
                                                        <div className="second-icon  d-block">
                                                            <IconCpu size={20} stroke={1} className='' color='rgb(127 247 189)' />
                                                        </div>
                                                    </div>
                                                    <div className="content d-flex">
                                                        <div className="afterBefore">
                                                            <div className="before">
                                                                Create
                                                            </div>
                                                            <div className="after">
                                                                Created
                                                            </div>
                                                        </div>
                                                        <div className="spna-div">
                                                            <span className='ms-2'>  a podcast draft.</span>
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="gate-way-section">
                        <div className="bg-black text-white ">
                            <div className="container gate-way-container">
                                {/* Heading */}
                                <div className="text-center d-flex justify-content-between">
                                    <h1 className="top-heading m-0 ">Enterprise-grade AI Gateway</h1>
                                    <p className="text-secondary  m-0 top-desc">
                                        Connect, Manage, And Secure AI Interactions Across 1k+ LLMs — With Control, Monitoring
                                    </p>
                                </div>

                                {/* Feature Cards */}
                                <div className="row g-4 mt-5 mb-3">
                                    {/* Card 1 */}
                                    <div className="col-md-4  mt-3">
                                        <div className=" cards-main-wrapper h-100">
                                            <div className="img-wrapper">
                                                <img src={gatewayImg1} alt="Integrate" className="img-fluid rounded mb-3" />
                                            </div>
                                            <p className="text-purple small fw-bold styled-text">EASILY SETUP</p>
                                            <h5 className="heading-tile mb-2">Integrate in a minute</h5>
                                            <p className="text-secondary small desc-text">
                                                Integrate Taam AI In Just 3 Lines Of Code - No Changes To Your Existing Stack.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="col-md-4 mt-3">
                                        <div className="cards-main-wrapper  h-100">
                                            <div className="img-wrapper">
                                                <img src={gatewayImg2} alt="Models Access" className="img-fluid rounded mb-3" />
                                            </div>
                                            <p className="text-purple small fw-bold styled-text">AI MODELS</p>
                                            <h5 className="heading-tile mb-2">AI Models Access</h5>
                                            <p className="text-secondary small desc-text">
                                                Taam AI Lets You Access 1,600+ LLMs Via A Unified API, So You Can Focus On Building, Not Managing.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="col-md-4 mt-3">
                                        <div className="cards-main-wrapper h-100">
                                            <div className="img-wrapper">
                                                <img src={gatewayImg3} alt="Build Agents" className="img-fluid rounded mb-3" />
                                            </div>
                                            <p className="text-purple small fw-bold styled-text">AI AGENTS</p>
                                            <h5 className="heading-tile mb-2">Build AI Agents</h5>
                                            <p className="text-secondary small desc-text">
                                                Build AI Agents That Can Use 1000+ Tools With Taam's Model Context Protocol Client.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats Row */}
                                <div className="row text-center text-white mt-5 updates-section">
                                    <div className="col-6 col-md-3">
                                        <div className="modal-updates">5M+</div>
                                        <div className="text-secondary names mt-2">Tokens Processed Daily</div>
                                    </div>
                                    <div className="col-6 col-md-3 mb-3">
                                        <div className="modal-updates">99%</div>
                                        <div className="text-secondary names mt-2">Uptime</div>
                                    </div>
                                    <div className="col-6 col-md-3 mb-3">
                                        <div className="modal-updates">24/7</div>
                                        <div className="text-secondary names mt-2">Support</div>
                                    </div>
                                    <div className="col-6 col-md-3 mb-3">
                                        <div className="modal-updates">1200+</div>
                                        <div className="text-secondary names mt-2">AI Models</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="circle-animation">
                        <div className="container">

                            <div className="  vh-100">
                                <div className="top-content">
                                    <div className="badge-wrapper">
                                        <div className="badge">
                                            AI Models
                                        </div>
                                    </div>
                                    <h3 className='heading'>Connect to the Models You Need</h3>
                                    <p className='desc'>Seamlessly integrate with 200+ leading AI models across providers—LLMs, vision, voice, and more. Power your workflows with unified API access to the models that fit your use case.</p>
                                    <div className="badge-wrapper-2">
                                        <div className="badge-2">
                                            See all <IconChevronRight stroke={2} size={'15px'} />
                                        </div>
                                    </div>
                                </div>
                                <div className="orbit-container ">
                                    {/* <div className="gradient-bg"></div> */}
                                    <div className="center-object">
                                        <div class="framer-143kh33"></div>
                                        <div class="framer-8jf8ke"></div>
                                        <div class="framer-a9uzhz"></div>
                                        <div class="framer-ppd9z0"></div>
                                        <div class="framer-12hpzgp"></div>
                                        <div class="framer-6li7ng"></div>
                                        <div class="framer-1n0mvn2"></div>
                                        <div className="img-wrapper">
                                            <img src={img9} alt="" />
                                        </div>
                                    </div>
                                    {items.map((imgSrc, index) => (
                                        <div
                                            key={index}
                                            className="orbiting-object"
                                            style={{ "--i": index }}
                                        >
                                            <img src={imgSrc} alt={`orbit-img-${index}`} className="orbit-image" />
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </div>
    )
}

export default Features
