import React from "react";
import Footer from "../components/Footer";
import InterestHero from "../components/interestHero";
import InterestBreakdown from "../components/InterestBreakdown";
import Target from '../components/Target';


const Interest = () => {
    return (
        <div className="max-w-8xl w-full mx-auto">
            <InterestHero />
            <InterestBreakdown />
            <Target />
            <Footer />
        </div>
    );
}

export default Interest;