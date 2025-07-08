import React from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import HeroSlider from "../components/HeroSlider";
import AiModals from "../components/AiModals";
import Cards from "../components/CodeSection";
import AiAgentsSection from "../components/AiAgentsSection";
import BGImage from '../assets/images/hero-bg-img.png';
import FaqSection from '../components/FAQSection';
import Services from '../components/ServicesSection';


const Home = () => {
  return (
    <div>
      <>
        <div className="hero-background">
          <div className="main-bg-image" style={{overflow: 'hidden', position: 'absolute', top: '0', left: '0', right: '0', zIndex: '-1'}}>
            <img src={BGImage} alt="" />
          </div>
          <Header />
          <Hero />
          <HeroSlider />
        </div>
        <AiModals />
        <Cards />
        <AiAgentsSection />
        <Services />
        <FaqSection />
      </>
    </div>
  );
};

export default Home;
