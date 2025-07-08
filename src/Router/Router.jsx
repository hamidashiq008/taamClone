import React from 'react'

import Pricing from "../components/PricingPage";
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import ContactUs from "../components/ContactUs";
import Features from '../components/Features';
import Downloads from '../components/Downloads';
const CustomRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/Features" element={<Features />} />
            <Route path="/download" element={<Downloads />} />

        </Routes>
    )
}

export default CustomRouter