import React from "react";
import TestimonialCard from "./TestimonialComponent";
import testimonial1 from "../assets/testimonial1.svg";
import testimonial2 from "../assets/testimonial2.svg";
import testimonial3 from "../assets/testimonial3.svg";

const testimonials = [
    { image: testimonial1, title: 'MD - Miss Oyinye Dallas ', description: 'What is Ardilla and its benefits?' },
    { image: testimonial2, title: 'MD - Miss Oyinye Dallas ', description: 'What is Ardilla and its benefits?' },
    { image: testimonial3, title: 'MD - Miss Oyinye Dallas ', description: 'What is Ardilla and its benefits?' }
];

const Testimonial = () => {
    return (
        <div className="flex flex-col max-w-8xl w-full mx-auto px-4 md:px-16 py-8 md:py-[5rem] h-[fit-content] md:h-[1000px] bg-[#F3F4F6]">
            <div className="flex flex-row md:flex-row text-[1.8rem] md:text-[4rem] gap-2 font-bold self-start items-start text-[#3D0072]">
                Don't Take Our
                <p className="text-[#E8358D]">Word</p>
                For It
            </div>
            <p className="self-start font-serif text-[#3D0072] text-[0.85rem] md:text-[0.95rem] mt-4">
                Listen to testimonials from Ardilla users building wealth
            </p>

            <div className="flex flex-col md:flex-row gap-8 justify-center md:justify-evenly items-center overflow-hidden mt-12 mb-[5rem] md:mb-0">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} image={testimonial.image} name={testimonial.title} description={testimonial.description} />
                ))}
            </div>
        </div>
    );
}

export default Testimonial;
