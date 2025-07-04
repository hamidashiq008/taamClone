import React from 'react'

import Pricing from "../components/PricingPage";
import { Routes,Route } from 'react-router-dom';
import Home from "../pages/Home";
const CustomRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/pricing" element={<Pricing />} />
        </Routes>
    )
}

export default CustomRouter