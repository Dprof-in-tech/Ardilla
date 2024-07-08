import React from 'react';

const Card = ({ image, title }) => {
  return (
    <div className="rounded-xl overflow-hidden flex-shrink-0">
      <img loading='lazy' className="w-[300.35px] h-[195.95px]" src={image} alt={title} />
    </div>
  );
};

export default Card;
