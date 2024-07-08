import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.svg';
import arrowdown from '../assets/arrowdown.svg';
import maphero from '../assets/maphero.svg';

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative max-w-8xl w-full mx-auto flex items-center justify-between px-12 py-4">
      <div className="h-[35px] w-[100px]">
        <img loading='lazy' src={Logo} alt="logo" className="h-full" />
      </div>
      <ul className="hidden lg:flex cursor-pointer items-center justify-evenly gap-[3rem] font-bold text-white py-2 px-2 mt-2 -ml-[10%]">
        <li className="flex items-center gap-1">Products <img loading='lazy' src={arrowdown} alt="arrowdown" /></li>
        <li className="flex items-center gap-2">Business <button className="text-[0.5rem] border border-gray-200 rounded-md px-2 py-0.5">Beta</button></li>
        <li className="flex items-center gap-1">Company <img loading='lazy' src={arrowdown} alt="arrowdown" /></li>
        <li>Learn</li>
      </ul>
      <div className="hidden md:flex items-center justify-evenly gap-4">
        <a href="#"><p className="cursor-pointer mr-4 font-semibold text-white">Sign in</p></a>
        <button className="bg-[#FFFFFF] rounded-full px-8 py-3 text-[#3D0072] hover:bg-[#6005AE] hover:text-white cursor-pointer font-semibold">Create Account</button>
        <img loading='lazy' src={maphero} alt="maphero" className="mt-2" />
      </div>
      <div className="md:hidden">
        <button onClick={toggleSidebar} className="text-white">
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 w-3/4 h-full bg-white z-50 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <img loading='lazy' src={Logo} alt="logo" className="h-[35px] w-[100px]" />
          <button onClick={toggleSidebar} className="text-gray-700">
            <FaTimes size={24} />
          </button>
        </div>
        <ul className="flex flex-col items-start p-4 gap-4 font-bold text-gray-700">
          <li className="flex items-center gap-1">Products <img loading='lazy' src={arrowdown} alt="arrowdown" /></li>
          <li className="flex items-center gap-2">Business <button className="text-[0.5rem] border border-gray-200 rounded-md px-2 py-0.5">Beta</button></li>
          <li className="flex items-center gap-1">Company <img loading='lazy' src={arrowdown} alt="arrowdown" /></li>
          <li>Learn</li>
        </ul>
        <div className="flex flex-col items-start p-4 gap-4">
          <a href="#"><p className="cursor-pointer font-semibold text-gray-700">Sign in</p></a>
          <button className="bg-[#3D0072] rounded-full px-8 py-3 text-white hover:bg-[#6005AE] cursor-pointer font-semibold">Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
