import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';

function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 px-6 bg-gray-100 shadow-sm fixed z-10 top-0 w-full ">
            {/* Logo */}
            <a href="#home">
                <Image
                    className="cursor-pointer"
                    src="/logo.png"
                    alt="Company Logo"
                    width={180}  
                    height={50}  
                    sizes="(max-width: 800px) 120px, 180px"  
                />
            </a>


            {/* Navigation Links */}
            <ul className="hidden md:flex gap-8 text-lg font-medium text-gray-700">
                <li className="hover:text-blue-500 transition"><a href="#home">Home</a></li>
                <li className="hover:text-blue-500 transition"><a href="#about">About</a></li>
                <li className="hover:text-blue-500 transition"><a href="#services">Our Services</a></li>
                <li className="hover:text-blue-500 transition"><a href="#contact">Contact</a></li>
            </ul>

            {/* WhatsApp Button */}
            <a href="https://wa.me/+212614803118" target="_blank" rel="noopener noreferrer" className='flex '>
                <Button className=" bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition">
                <Image
                className='w-[20px]'
                    src="/whatssap.png"
                    alt="Company Logo"
                    width={60}  
                    height={60}  
                />
                    Contact us
                </Button>
            </a>
        </nav>
    );
}

export default Navbar;
