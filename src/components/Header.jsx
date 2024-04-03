import React, { useState } from 'react'
import logoImage from '../assets/nest.svg';
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className='flex-1 bg-white py-5 px-10 border-b-[1px]'>
                <div className='flex flex-row justify-between items-center'>
                    <div className=''>
                        <img src={logoImage} alt='not found' className='w-[140px] lg:w-[180px] md:w-[180px] ' />
                    </div>
                    <div className='hidden md:contents lg:contents'>
                        <ul className='flex flex-row gap-14'>
                            <li className='text-[16px] duration-500 hover:text-[#3BB77E] text-[#000] font-semibold p-2 cursor-pointer'>Home</li>
                            <li className='text-[16px] duration-500 hover:text-[#3BB77E] text-[#000] font-semibold p-2 cursor-pointer'>About</li>
                            <li className='text-[16px] duration-500 hover:text-[#3BB77E] text-[#000] font-semibold p-2 cursor-pointer'>Shop</li>
                            <li className='text-[16px] duration-500 hover:text-[#3BB77E] text-[#000] font-semibold p-2 cursor-pointer'>Vendor</li>
                        </ul>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <IoMdMenu className='text-3xl' />
                            ) : (
                                <IoMdClose className='text-3xl' />
                            )}
                        </button>
                    </div>
                </div>

                {isOpen && <div>
                    <ul className='flex-col py-5'>
                        <li className='text-[16px] duration-500 hover:text-[#3BB77E] text-[#000] font-semibold p-2'>Home</li>
                        <li className='text-[16px] duration-500 hover:text-[#3BB77E] text-[#000] font-semibold p-2'>About</li>
                        <li className='text-[16px] duration-500 hover:text-[#3BB77E] text-[#000] font-semibold p-2'>Shop</li>
                        <li className='text-[16px] duration-500 hover:text-[#3BB77E] text-[#000] font-semibold p-2'>Vendor</li>
                    </ul>
                </div>}
            </nav>
        </>

    );
};

export default Header