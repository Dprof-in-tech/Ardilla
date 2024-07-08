import React from 'react';
import Logo from '../assets/logo.svg';
import maphero from '../assets/maphero.svg';
import arrowdown from '../assets/arrowdown.svg';

const Nav = () => {
    return (
        <div className='max-w-8xl  w-full mx-auto flex items-center justify-between px-12 py-4 '>
            <div className='h-[35px] w-[100px]'>
                <img src={Logo} alt='' className='h-full' />
            </div>
            <ul className='flex cursor-pointer items-center justify-evenly gap-[3rem] font-bold text-white py-2 px-2 mt-2 -ml-[10%]'>
                <li className='flex items-center gap-1'>Products <img src={arrowdown} alt='arowdown' /></li>
                <li className='flex items-center gap-2'>Business <button className='text-[0.5rem] border border-gray-200 rounded-md px-2 py-0.5'>Beta</button></li>
                <li className='flex items-center gap-1'>Company <img src={arrowdown} alt='arowdown' /></li>
                <li>Learn</li>
            </ul>

            <div className='flex items-center justify-evenly gap-4'>
                <a href=''><p className='cursor-pointer mr-4 font-semibold text-white'>Sign in</p></a>
                <button className='bg-[#FFFFFF] rounded-full px-8 py-3 text-[#3D0072] hover:bg-[#6005AE] hover:text-white cursor-pointer font-semibold'>Create Account</button>
                <img src={maphero} alt='' className='mt-2'/>
            </div>
        </div>
    );
}
export default Nav;

