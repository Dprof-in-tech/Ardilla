import React from 'react';
import Logo from '../assets/logo.svg';
import map from '../assets/map.svg';

const Navbar = () => {
    return (
        <div className='max-w-8xl  w-full mx-auto flex items-center justify-between px-12 py-4 '>
            <div className='h-[35px] w-[100px]'>
                <img src={Logo} alt='' className='h-full' />
            </div>
            <ul className='flex items-center justify-evenly gap-[2rem] text-white py-2 px-2 mt-2 ml-[10%]'>
                <li>Products</li>
                <li>Business</li>
                <li>Company</li>
                <li>Learn</li>
            </ul>

            <div className='flex items-center justify-evenly gap-4'>
                <img src={map} alt='' className='mt-2'/>
                <button className='bg-[#8807F7] rounded-full px-8 py-3 text-white hover:bg-[#6005AE]'>Create Account</button>
            </div>
        </div>
    );
}
export default Navbar;

