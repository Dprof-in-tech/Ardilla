import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import arrowdown from '../assets/arrowdown.svg';
import maphero from '../assets/maphero.svg';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='max-w-8xl w-full mx-auto flex lg:flex-row flex-col items-center justify-between px-4 lg:px-12 py-4'>
      <div className='h-[35px] w-[100px]'>
        <img src={Logo} alt='Logo' className='h-full' />
      </div>
      <div className='lg:hidden block'>
        <button onClick={toggleMobileMenu} className='text-white focus:outline-none'>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>
      <ul className={`lg:flex ${isMobileMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex-row cursor-pointer items-center justify-evenly gap-4 lg:gap-[3rem] font-bold text-white py-2 px-2 lg:mt-0 mt-2`}>
        <li className='flex items-center gap-1'>Products <img src={arrowdown} alt='arowdown' /></li>
        <li className='flex items-center gap-2'>Business <button className='text-[0.5rem] border border-gray-200 rounded-md px-2 py-0.5'>Beta</button></li>
        <li className='flex items-center gap-1'>Company <img src={arrowdown} alt='arowdown' /></li>
        <li>Learn</li>
      </ul>

      <div className='lg:flex items-center justify-evenly gap-4 hidden'>
        <a href=''><p className='cursor-pointer mr-4 font-semibold text-white'>Sign in</p></a>
        <button className='bg-[#FFFFFF] rounded-full px-8 py-3 text-[#3D0072] hover:bg-[#6005AE] hover:text-white cursor-pointer font-semibold'>Create Account</button>
        <img src={maphero} alt='' className='mt-2' />
      </div>
      {isMobileMenuOpen && (
        <div className='lg:hidden flex flex-col items-center justify-evenly gap-4 mt-4'>
          <a href=''><p className='cursor-pointer font-semibold text-white'>Sign in</p></a>
          <button className='bg-[#FFFFFF] rounded-full px-8 py-3 text-[#3D0072] hover:bg-[#6005AE] hover:text-white cursor-pointer font-semibold'>Create Account</button>
          <img src={maphero} alt='' className='mt-2' />
        </div>
      )}
    </div>
  );
};

export default Nav;