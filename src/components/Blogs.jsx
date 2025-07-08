import React from 'react'
import Header from './Header';
import ButtonBg from '../assets/buttonBg.png';
import Blog1 from '../assets/blog1.png'
import Blog2 from '../assets/blog2.png'
import Blog3 from '../assets/blog3.png'
import Blog4 from '../assets/blog4.png'
import Blog5 from '../assets/blog5.png'
import User1 from '../assets/user1.png'

const Blogs = () => {
    return (
        <div>
            <Header />
            <div className="blogs-page-wrapper">

                <div className="container">
                    <h2 className='text-center hero-heading'>Explore and Learn AI With Taam AI Blogs</h2>
                    <p className='text-center hero-desc'>A collection of the latest insights, product enhancements, important bugfixes and more. </p>
                    <div className="buttons-wrapper d-flex justify-content-center gap-4   ">
                        <input type="email" placeholder='jane@taam.ai' />
                        <button className='subscribe-btn' >Subscribe</button>

                    </div>
                    <div className="border-line">

                    </div>

                    <div className="content-area">
                        <div className="article-card ">
                            <div className="main-img-wrapper">
                                <img src={Blog1} alt="Preview" className="article-image" />
                            </div>

                            <div className="article-content">
                                <h2 className="article-title">
                                    Maximizing Productivity with AI-Powered Code Suggestions
                                </h2>

                                <div className="article-meta">
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
                        <div className="article-card ">
                            <div className="main-img-wrapper">
                                <img src={Blog2} alt="Preview" className="article-image" />
                            </div>

                            <div className="article-content">
                                <h2 className="article-title">
                                    Maximizing Productivity with AI-Powered Code Suggestions
                                </h2>

                                <div className="article-meta">
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
                        <div className="article-card ">
                            <div className="main-img-wrapper">
                                <img src={Blog3} alt="Preview" className="article-image" />
                            </div>

                            <div className="article-content">
                                <h2 className="article-title">
                                    Maximizing Productivity with AI-Powered Code Suggestions
                                </h2>

                                <div className="article-meta">
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
                        <div className="article-card ">
                            <div className="main-img-wrapper">
                                <img src={Blog4} alt="Preview" className="article-image" />
                            </div>

                            <div className="article-content">
                                <h2 className="article-title">
                                    Maximizing Productivity with AI-Powered Code Suggestions
                                </h2>

                                <div className="article-meta">
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
                        <div className="article-card ">
                            <div className="main-img-wrapper">
                                <img src={Blog5} alt="Preview" className="article-image" />
                            </div>

                            <div className="article-content">
                                <h2 className="article-title">
                                    Maximizing Productivity with AI-Powered Code Suggestions
                                </h2>

                                <div className="article-meta">
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

        </div>
    )
}

export default Blogs
