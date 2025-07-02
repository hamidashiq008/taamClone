import React from 'react';

import Header from "../components/Header"
import Hero from '../components/Hero'
import HeroSlider from '../components/HeroSlider';
import AiModals from '../components/AiModals';



const Home = () => {
    return (
        <div>
            <>

                <div className="hero-background">
                    <Header />
                    {/* HERO Section */}
                    <Hero />
                    
                    {/* SLIDER Section */}
                   <HeroSlider/>
                    {/* Section */}

                </div>
                {/* AiModal Section */}
                <AiModals/>

                {/* Bootstrap JS (with Popper) */}
            </>

        </div>
    )
}

export default Home
