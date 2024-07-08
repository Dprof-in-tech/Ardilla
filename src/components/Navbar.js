import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.svg';
import map from '../assets/map.svg';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='max-w-8xl w-full mx-auto flex items-center justify-between px-4 md:px-12 py-4'>
            <div className='h-[35px] w-[100px]'>
                <img loading='lazy' src={Logo} alt='logo' className='h-full' />
            </div>
            <div className='md:hidden'>
                <button onClick={handleMenuToggle}>
                    {isMenuOpen ? <FaTimes className="text-white w-8 h-8" /> : <FaBars className="text-white w-8 h-8" />}
                </button>
            </div>
            <ul className='hidden md:flex items-center justify-evenly gap-[2rem] text-white py-2 px-2 mt-2 ml-[10%]'>
                <li>Products</li>
                <li>Business</li>
                <li>Company</li>
                <li>Learn</li>
            </ul>

            <div className='hidden md:flex items-center justify-evenly gap-4'>
                <img loading='lazy' src={map} alt='map' className='mt-2'/>
                <button className='bg-[#8807F7] rounded-full px-8 py-3 text-white hover:bg-[#6005AE]'>Create Account</button>
            </div>

            {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 w-3/4 h-full bg-white z-50 transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <img loading='lazy' src={Logo} alt="logo" className="h-[35px] w-[100px]" />
          <button onClick={handleMenuToggle} className="text-gray-700">
            <FaTimes size={24} />
          </button>
        </div>
        <ul className="flex flex-col items-start p-4 gap-4 font-bold text-gray-700">
          <li className="flex items-center gap-1">Products</li>
          <li className="flex items-center gap-2">Business</li>
          <li className="flex items-center gap-1">Company </li>
          <li>Learn</li>
        </ul>
        <div className="flex flex-col items-start p-4 gap-4">

          <button className="bg-[#3D0072] rounded-full px-8 py-3 text-white hover:bg-[#6005AE] cursor-pointer font-semibold">Create Account</button>
        </div>
      </div>
        </div>
    );
}

export default Navbar;
