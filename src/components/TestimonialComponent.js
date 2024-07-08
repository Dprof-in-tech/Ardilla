import React from 'react';
import playButton from '../assets/playbutton.svg';

const TestimonialCard = ({ image, name, description }) => {
  return (
    <div className="relative cursor-pointer group w-[381.72px] hover:w-[523.87px] h-[340.19px] hover:h-[454.52px] overflow-hidden rounded-xl transform transition-transform duration-500">
      <img className="w-full h-full rounded-xl object-cover" src={image} alt={name} />
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50 opacity-0 transform transition-opacity duration-500 ease-in-out group-hover:opacity-100 flex items-center justify-center">
        <img src={playButton} alt="Play" className="w-[50px] h-[50px]" />
      </div>
      <div className="absolute bottom-8 left-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
        <h1 className='text-white font-sans text-[1.2rem]'>{name}</h1>
        <p className='text-gray-200 font-serif text-[0.85rem]'>{description}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
