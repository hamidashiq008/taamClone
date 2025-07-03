import React from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import HeroSlider from "../components/HeroSlider";
import AiModals from "../components/AiModals";
import Cards from "../components/Cards";
import AiAgentsSection from "../components/AiAgentsSection";

const Home = () => {
  return (
    <div>
      <>
        <div className="hero-background">
          <Header />
          {/* HERO Section */}
          <Hero />

          {/* SLIDER Section */}
          <HeroSlider />

          {/* Section */}
        </div>
        {/* AiModal Section */}
        <AiModals />
        <Cards />
        <AiAgentsSection />
        {/* Bootstrap JS (with Popper) */}
      </>
    </div>
  );
};

export default Home;
