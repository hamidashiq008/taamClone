import React from 'react'

import Pricing from "../pages/PricingPage";
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import Features from '../pages/Features';
import Downloads from '../pages/Downloads';
import Blogs from '../pages/Blogs';
import BlogsDetail from '../pages/BlogsDetail';


import Observability from '../pages/Observability';
const CustomRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/Features" element={<Features />} />
            <Route path="/download" element={<Downloads />} />
            <Route path="/Blogs" element={<Blogs />} />

            <Route path="/Observability" element={<Observability />} />
            <Route path="/BlogsDetail" element={<BlogsDetail />} />


        </Routes>
    )
}

export default CustomRouter