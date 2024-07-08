import React from "react";
import productbanner from '../assets/productbanner.svg';
import rightarrow from '../assets/rightarrow.svg';
import feature1 from '../assets/feature1.svg';
import feature2 from '../assets/feature2.svg';
import feature3 from '../assets/feature3.svg';
import feature4 from '../assets/feature4.svg';
import feature5 from '../assets/feature5.svg';
import feature6 from '../assets/feature6.svg';
import feature7 from '../assets/feature7.svg';
import feature8 from '../assets/feature8.svg';
import Card from "./CardComponent";

const images = [
    { src: feature1, title: 'Feature 1' },
    { src: feature2, title: 'Feature 2' },
    { src: feature3, title: 'Feature 3' },
    { src: feature4, title: 'Feature 4' },
    { src: feature5, title: 'Feature 5' },
    { src: feature6, title: 'Feature 6' },
    { src: feature7, title: 'Feature 7' },
    { src: feature8, title: 'Feature 8' },
];

const Products = () => {
    return (
        <div className="max-w-8xl  w-full mx-auto h-[fit-content] px-4 lg:px-8 py-4">
            <img src={productbanner} alt="Product Banner" className="mt-12"/>
            <div className="flex self-end justify-end items-end mt-4 mb-4">
                <img src={rightarrow} alt="Right Arrow" />
            </div>

            <div className="flex gap-4 items-center overflow-x-auto scrollbar-hide w-full px-2 mt-4">
                {images.map((image, index) => (
                    <Card
                        key={index}
                        image={image.src}
                        title={image.title}
                    />
                ))}
            </div>
            <div className="border-b-2 border-b-purple-800 w-[290.35px] mx-3 mb-12 mt-8">

            </div>
        </div>
    );
}

export default Products;
