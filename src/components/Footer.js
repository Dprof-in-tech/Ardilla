import React from 'react';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import footer from '../assets/footer.svg';

const Footer = () => {
    return (
        <footer className="bg-[#8807F7] py-10 px-4 lg:px-8 relative flex flex-col items-center w-full max-w-8xl">
            <img loading='lazy' src={footer} alt='' className='flex w-[85%] h-auto lg:w-auto absolute -top-[4rem] lg:-top-[10rem] self-center' />
            <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-2 lg:gap-8 mt-[5rem] lg:mt-[12rem] border-b border-b-gray-200">
                <div className='flex flex-col items-start w-full md:w-[400px]'>
                    <h3 className="text-white text-[1rem] font-bold">Products</h3>
                    <ul className='text-gray-200 mt-4 gap-3 flex flex-col items-start mb-6 lg:mb-12 text-[0.8rem]'>
                        <a href=""><li className="">Savings</li></a>
                        <a href=""><li className="">Dilla</li></a>
                        <a href=""><li className="">Financial Coach</li></a>
                        <a href=""><li className="">Halal</li></a>
                        <a href=""><li className="flex justify-center gap-2">Budgetting <button className='border-white border rounded-full ml-2 px-2 py-1 text-[0.5rem]'>Coming Soon</button></li></a>
                        <a href=""><li className="flex justify-center gap-2">Investment <button className='border-white border rounded-full ml-2 px-2 py-1 text-[0.5rem]'>Coming Soon</button></li></a>
                        <a href=""><li className="flex justify-center gap-2">Insurance <button className='border-white border rounded-full ml-2 px-2 py-1 text-[0.5rem]'>Coming Soon</button></li></a>
                    </ul>
                </div>

                <div className='flex flex-col items-start'>
                    <h3 className="text-white text-[1rem] font-bold">Company</h3>
                    <ul className='text-gray-200 mt-4 gap-3 flex flex-col items-start mb-6 lg:mb-12 text-[0.8rem]'>
                        <a href=""><li className="">About Us</li></a>
                        <a href=""><li className="">Careers</li></a>
                        <a href=""><li className="">FAQS</li></a>
                        <a href=""><li className="">Press</li></a>
                    </ul>
                </div>

                <div className='flex flex-col items-start'>
                    <h3 className="text-white text-[1rem] font-bold">Transparency</h3>
                    <ul className='text-gray-200 mt-4 gap-3 flex flex-col items-start mb-6 lg:mb-12 text-[0.8rem]'>
                        <a href=""><li className="">Terms & Conditions</li></a>
                        <a href=""><li className="">Information Security Policy</li></a>
                        <a href=""><li className="">Privacy Policy</li></a>
                        <a href=""><li className="">Interest Tool</li></a>
                    </ul>
                </div>
                <div className='flex flex-col items-start'>
                    <h3 className="text-white text-[1rem] font-bold">Developer</h3>
                    <ul className='text-gray-200 mt-4 gap-3 flex flex-col items-start mb-6 lg:mb-12 text-[0.8rem]'>
                        <a href=""><li className="flex justify-center gap-2">Connect API <button className='border-white border rounded-full ml-2 px-2 py-1 text-[0.5rem]'>Coming Soon</button></li></a>
                    </ul>
                </div>
                <div className='flex flex-col items-start mb-8 lg:mb-0'>
                    <h3 className="text-white text-[1rem] font-bold">Address</h3>
                    <p className='text-gray-200 text-[0.8rem] text-start mb-8'>
                        33B, Ogundana street, Allen, Ikeja.
                    </p>

                    <h3 className="text-white text-[1rem] font-bold mb-2">Contact</h3>
                    <p className='text-gray-200 text-[0.8rem] text-start mb-2'>
                        support@ardilla.africa
                    </p>
                    <p className='text-gray-200 text-[0.8rem] text-start'>
                        (234)801 000 1234
                    </p>
                </div>
            </div>
            <div className='mt-1 lg:mt-3 w-[95%]'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <p className='text-gray-200 text-[1rem] text-start mt-4 md:mt-0'>© 2023 Ardilla. All rights reserved</p>
                    <div className='flex items-center gap-2 mt-4 md:mt-0'>
                        <img loading='lazy' src={instagram} alt='Instagram logo' className='w-8 h-8' />
                        <img loading='lazy' src={facebook} alt='Instagram logo' className='w-8 h-8' />
                        <img loading='lazy' src={linkedin} alt='Instagram logo' className='w-8 h-8' />
                        <img loading='lazy' src={twitter} alt='Instagram logo' className='w-8 h-8' />
                    </div>
                </div>
                <p className='text-gray-200 text-[0.8rem] text-start mt-4 lg:mt-2'>Ardilla operates under the coorperative license of Ardilla Multipurpose Cooperative Society, LSC 18245, We provide Savings and Fixed deposit services to our users</p>
            </div>
        </footer>
    );
};

export default Footer;
