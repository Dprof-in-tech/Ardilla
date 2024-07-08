import React from 'react';

const Feature = ({ image, title, description, link }) => {
  return (
    <div className="flex flex-col items-start justify-start w-[90%] lg:w-[35%] mb-4 hover:bg-[#43027E] hover:py-4 hover:px-4 hover:rounded-xl group">
      <img className="w-[158.64px] h-auto group-hover:-ml-8" src={image} alt={title} />
      <h1 className='text-white text-[1.5rem] font-semibold pl-12 group-hover:pl-6'>
        {title}
      </h1>
      <p className='text-gray-200 text-start text-[0.95rem] mt-3 pl-12 group-hover:pl-6'>
        {description}
      </p>

      <a href={link}>
        <p className='mt-8 font-semibold text-gray-200 pl-12 group-hover:pl-6'>{link}</p>
      </a>
    </div>
  );
};

export default Feature;
