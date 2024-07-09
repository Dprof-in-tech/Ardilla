import React from "react";
import Navbar from "./Navbar";
import hero from "../assets/hero.svg";
import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <div className="max-w-8xl w-full mx-auto bg-[#240053] h-[748px] lg:h-[fit-content] px-4 font-[Cabinet Grotesk]">
            <Navbar />

            <div className="flex flex-col items-center">
                <h1 className="text-white text-[3.5rem] lg:text-[5rem] font-bold text-center mt-10">Your Access To More</h1>
                <p className="text-white text-center lg:max-w-[60%]">Ardilla helps you save and invest in achieving your financial goals, we have the most flexible and seamless way to grow your funds.</p>
                <div className="flex justify-center mt-8">
                    <Link to='/interest'><button className="bg-[#ffffff] rounded-full px-12 py-3 text-[#240053] hover:bg-[#8807F7] hover:text-white">Get Started</button></Link>
                </div>

                <div className="flex  items-center justify-center h-[460px] lg:w-auto w-[full]">
                    <img loading='lazy' src={hero} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Hero;