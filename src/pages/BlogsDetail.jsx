import React, { useEffect } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogsDetailImg from '../assets/images/blogDetail.png'
import BlogsDetailBottom1 from '../assets/images/blogsDetailBottom1.png'

import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogsDetail = () => {

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
      <div className="blogs-detail-page">
        <section className="top-section">
          <div className="container">
            <h1 data-aos="fade-up"
              data-aos-delay="100">Maximizing <span className='h-iner-spain'>Productivity</span> with AI-Powered <span className='h-iner-spain'> Code Suggestions </span></h1>
            <p data-aos="fade-up"
              data-aos-delay="100">Apr 8, 2022</p>
            <div className="img-wrapper">
              <img src={BlogsDetailImg} className='img' alt="" />
            </div>
            <div className="inner-content">
              <p className='first-p'>
                As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development. The prediction is that by 2029, the job outlook for these two fields will grow by 8%—significantly faster than average. Whether you’re seeking salaried employment or aiming to work in a freelance capacity, a career in web design can offer a variety of employment arrangements, competitive salaries, and opportunities to utilize both technical and creative skill sets.


              </p>
              <h1 className='first-h'>What does a career in web design involve?</h1>
              <p>A career in website design can involve the design, creation, and coding of a range of website types. Other tasks will typically include liaising with clients and discussing website specifications, incorporating feedback, working on graphic design and image editing, and enabling multimedia features such as audio and video.  Requiring a range of creative and technical skills, web designers may be involved in work across a range of industries, including software companies, IT consultancies, web design companies, corporate organizations, and more. In contrast with web developers, web designers tend to play a more creative role, crafting the overall vision and design of a site, and determining how to best incorporate the necessary functionality. However, there can be significant overlap between the roles.</p>
              <h1>Full-stack, back-end, and front-end web development</h1>
              <p>The U.S. Bureau of Labor Statistics (BLS) Occupational Outlook Handbook tends to group web developers and digital designers into one category. However, they define them separately, stating that web developers create and maintain websites and are responsible for the technical aspects including performance and capacity.  Web or digital designers, on the other hand, are responsible for the look and functionality of websites and interfaces. They develop, create, and test the layout, functions, and navigation for usability. Web developers can focus on the back-end, front-end, or full-stack development, and typically utilize a range of programming languages, libraries, and frameworks to do so. Web designers may work more closely with front-end engineers to establish the user-end functionality and appearance of a site.</p>
              <h1>Are web designers in demand in 2022?</h1>
              <p>In our ever-increasingly digital environment, there is a constant need for websites—and therefore for web designers and developers. With 17.4 billion websites in existence as of January 2020, the demand for web developers is only expected to rise.Web designers with significant coding experience are typically in higher demand, and can usually expect a higher salary. Like all jobs, there are likely to be a range of opportunities, some of which are better paid than others. But certain skill sets are basic to web design, most of which are key to how to become a web designer in 2022.</p>
            </div>

          </div>
        </section>
        <section className="bootom-area">
          <div className="container">
            <h2 className='intro-heading'>Latest Article</h2>
            <div className="row">
              <div className="col-md-4 ">
                <div className="card-wrapper" onClick={pageChange}>
                  <div className="content-wrapper">
                    <div className="img-wrapper">
                      <img src={BlogsDetailBottom1} alt="" />
                    </div>
                    <h4>
                      Integrating Enigma Code-ai with Visual Studio Code
                    </h4>
                    <p>Jan 12, 2022</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="card-wrapper" onClick={pageChange}>
                  <div className="content-wrapper">
                    <div className="img-wrapper">
                      <img src={BlogsDetailBottom1} alt="" />
                    </div>
                    <h4>
                      Integrating Enigma Code-ai with Visual Studio Code
                    </h4>
                    <p>Jan 12, 2022</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="card-wrapper" onClick={pageChange}>
                  <div className="content-wrapper">
                    <div className="img-wrapper">
                      <img src={BlogsDetailBottom1} alt="" />
                    </div>
                    <h4>
                      Integrating Enigma Code-ai with Visual Studio Code
                    </h4>
                    <p>Jan 12, 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer className="p-0" />
    </div>
  )
}

export default BlogsDetail
