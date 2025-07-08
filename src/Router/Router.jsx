import React from 'react'

import Pricing from "../pages/PricingPage";
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import Features from '../pages/Features';
import Downloads from '../pages/Downloads';
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