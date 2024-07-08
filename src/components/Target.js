import React from 'react';
import phone1 from '../assets/phone1.svg';
import phone2 from '../assets/phone2.svg';
import phone3 from '../assets/phone3.svg';
import Faq from '../components/Faq';

const Target = () => {
    return (
        <div className='max-w-8xl mx-auto h-[fit-content] lg:h-[1300px]'>
            <h1 className="text-3xl text-[#3D0072] font-bold text-start px-8 py-2">How It Works</h1>
            <div className='flex flex-col items-center justify-center gap-4 px-4 py-4 lg:flex-row lg:justify-evenly lg:gap-4'>
                <div className='w-full lg:w-[32%] h-[fit-content]'>
                    <img src={phone1} alt='phone1' className='w-full h-auto lg:h-full' />
                </div>
                <div className='w-full lg:w-[32%] h-[fit-content]'>
                    <img src={phone2} alt='phone2' className='w-full h-auto lg:h-full' />
                </div>
                <div className='w-full lg:w-[32%] h-[fit-content]'>
                    <img src={phone3} alt='phone3' className='w-full h-auto lg:h-full' />
                </div>
            </div>
            <Faq />
        </div>
    );
}

export default Target;
