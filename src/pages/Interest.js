import React from "react";
import Footer from "../components/Footer";
import InterestHero from "../components/interestHero";
import InterestBreakdown from "../components/InterestBreakdown";

const Interest = () => {
    return (
        <div className="max-w-8xl w-full mx-auto">
            <InterestHero />
            <InterestBreakdown />
            <Footer />
        </div>
    );
}

export default Interest;