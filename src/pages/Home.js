import React from "react";
import Access from "../components/Access";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Investment from "../components/Investment";
import Products from "../components/Products";
import Testimonial from "../components/Testimonial";

const Home = () => {
    return (
        <div className="max-w-8xl mx-auto">
            <Hero />
            <Products />
            <Access />
            <Investment />
            <Testimonial />
            <Footer />
        </div>
    );
}

export default Home;