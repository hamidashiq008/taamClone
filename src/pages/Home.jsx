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
          <Hero />
          <HeroSlider />
        </div>
        <AiModals />
        <Cards />
        <AiAgentsSection />
      </>
    </div>
  );
};

export default Home;
