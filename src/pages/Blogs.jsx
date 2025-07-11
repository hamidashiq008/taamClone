import React, { useEffect } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ButtonBg from '../assets/buttonBg.png';
import Blog1 from '../assets/blog1.png'
import Blog2 from '../assets/blog2.png'
import Blog3 from '../assets/blog3.png'
import Blog4 from '../assets/blog4.png'
import Blog5 from '../assets/blog5.png'
import User1 from '../assets/user1.png'
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


import { SimpleButton, SimpleLink, GradientButton, GradientLink } from '../Partials/CustomButton';

const Blogs = () => {
    const navigate = useNavigate();

    const pageChange = () => {
        navigate('/BlogsDetail')
    }

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        });
    }, []);
    return (
        <div>
            <Header />
            <div className="blogs-page-wrapper">

                <div className="container">
                    <h2 className='text-center hero-heading fw-600' data-aos="fade-up"
                        data-aos-delay="100">Explore and Learn AI With Taam AI Blogs</h2>
                    <p className='text-center hero-desc' data-aos="fade-up"
                        data-aos-delay="100">A collection of the latest insights, product enhancements, important bugfixes and more. </p>
                    <div className="d-flex gap-3 justify-content-center align-items-center flex-column flex-lg-row">
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
                        <SimpleButton text={'Subscribe'} className={'px-4'} />
                    </div>
                    <div className="border-line">

                    </div>

                    <div className="content-area">
                        <div className="article-card cursor-pointer" onClick={pageChange}>
                            <div className="main-img-wrapper">
                                <img src={Blog1} alt="Preview" className="article-image" />
                            </div>

                            <div className="article-content">
                                <h2 className="article-title">
                                    Maximizing Productivity with AI-Powered Code Suggestions
                                </h2>

                                <div className="article-meta col-12 col-md-8">
                                    <div className="meta-section">
                                        <span className="meta-label">Writer</span>
                                        <div className="meta-value left-side">
                                            <img
                                                src={User1}
                                                alt="Author"
                                                className="author-avatar left-side"
                                            />
                                            Risky Adongan
                                        </div>
                                    </div>

                                    <div className="meta-section">
                                        <span className="meta-label">Published</span>
                                        <div className="meta-value">Apr 8, 2022</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="article-card cursor-pointer" onClick={pageChange}>
                            <div className="main-img-wrapper">
                                <img src={Blog2} alt="Preview" className="article-image" />
                            </div>

                            <div className="article-content">
                                <h2 className="article-title">
                                    Maximizing Productivity with AI-Powered Code Suggestions
                                </h2>

                                <div className="article-meta col-12 col-md-8">
                                    <div className="meta-section">
                                        <span className="meta-label">Writer</span>
                                        <div className="meta-value left-side">
                                            <img
                                                src={User1}
                                                alt="Author"
                                                className="author-avatar left-side"
                                            />
                                            Risky Adongan
                                        </div>
                                    </div>

                                    <div className="meta-section">
                                        <span className="meta-label">Published</span>
                                        <div className="meta-value">Apr 8, 2022</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="article-card cursor-pointer" onClick={pageChange}>
                            <div className="main-img-wrapper">
                                <img src={Blog3} alt="Preview" className="article-image" />
                            </div>

                            <div className="article-content">
                                <h2 className="article-title">
                                    Maximizing Productivity with AI-Powered Code Suggestions
                                </h2>

                                <div className="article-meta col-12 col-md-8">
                                    <div className="meta-section">
                                        <span className="meta-label">Writer</span>
                                        <div className="meta-value left-side">
                                            <img
                                                src={User1}
                                                alt="Author"
                                                className="author-avatar left-side"
                                            />
                                            Risky Adongan
                                        </div>
                                    </div>

                                    <div className="meta-section">
                                        <span className="meta-label">Published</span>
                                        <div className="meta-value">Apr 8, 2022</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="article-card cursor-pointer" onClick={pageChange}>
                            <div className="main-img-wrapper">
                                <img src={Blog4} alt="Preview" className="article-image" />
                            </div>

                            <div className="article-content">
                                <h2 className="article-title">
                                    Maximizing Productivity with AI-Powered Code Suggestions
                                </h2>

                                <div className="article-meta col-12 col-md-8">
                                    <div className="meta-section">
                                        <span className="meta-label">Writer</span>
                                        <div className="meta-value left-side">
                                            <img
                                                src={User1}
                                                alt="Author"
                                                className="author-avatar left-side"
                                            />
                                            Risky Adongan
                                        </div>
                                    </div>

                                    <div className="meta-section">
                                        <span className="meta-label">Published</span>
                                        <div className="meta-value">Apr 8, 2022</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="article-card cursor-pointer" onClick={pageChange}>
                            <div className="main-img-wrapper">
                                <img src={Blog5} alt="Preview" className="article-image" />
                            </div>

                            <div className="article-content">
                                <h2 className="article-title">
                                    Maximizing Productivity with AI-Powered Code Suggestions
                                </h2>

                                <div className="article-meta col-12 col-md-8">
                                    <div className="meta-section">
                                        <span className="meta-label">Writer</span>
                                        <div className="meta-value left-side">
                                            <img
                                                src={User1}
                                                alt="Author"
                                                className="author-avatar left-side"
                                            />
                                            Risky Adongan
                                        </div>
                                    </div>

                                    <div className="meta-section">
                                        <span className="meta-label">Published</span>
                                        <div className="meta-value">Apr 8, 2022</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blogs