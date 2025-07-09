import React from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import HeroSlider from "../components/HeroSlider";
import AiModals from "../components/AiModals";
import Cards from "../components/CodeSection";
import AiAgentsSection from "../components/AiAgentsSection";
import FaqSection from '../components/FAQSection';
import Services from '../components/ServicesSection';
import CTA from '../components/CTASection';
import ContactUs from '../components/ContactUsSection';

import BGImage from '../assets/images/BG-Image-2.avif';

const Home = () => {
  return (
    <>
      <img className='hero-background' src={BGImage} alt="" />
      <Header />
      <Hero />
      <HeroSlider />
      <AiModals />
      <Cards />
      <AiAgentsSection />
      <Services />
      <FaqSection />
      <CTA />
      <ContactUs />
    </>
  );
};

export default Home;
