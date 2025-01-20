"use client"

import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';

function Navbar() {
    return (
        <>
            <nav className="flex justify-between items-center py-4 px-6 bg-gray-100 shadow-sm absolute z-10 top-0 w-full animate-fadeIn">
                {/* Logo */}
                <a href="#home" className='animate-logoSlideIn'>
                    <Image
                        className="cursor-pointer w-[120px] md:w-[180px] lg:w-[200px] sm:w-[120px]"
                        src="/logo.png"
                        alt="Company Logo"
                        width={180}
                        height={50}
                        sizes="(max-width: 800px) 120px, 180px"
                    />
                </a>

                {/* Navigation Links */}
                <ul className="hidden md:flex gap-8 text-lg font-medium text-gray-700">
                    <li className="hover:text-blue-500 transition animate-linksFadeIn"><a href="#home">Home</a></li>
                    <li className="hover:text-blue-500 transition animate-linksFadeIn"><a href="#about">About</a></li>
                    <li className="hover:text-blue-500 transition animate-linksFadeIn"><a href="#services">Our Services</a></li>
                    <li className="hover:text-blue-500 transition animate-linksFadeIn"><a href="#contact">Contact</a></li>
                </ul>

                {/* WhatsApp Button */}
                <a href="https://wa.me/+212614803118" target="_blank" rel="noopener noreferrer" className="flex animate-buttonBounce">
                    <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition">
                        <Image
                            className="w-[20px] animate-iconSpin"
                            src="/whatssap.png"
                            alt="WhatsApp Icon"
                            width={60}
                            height={60}
                        />
                        Contact us
                    </Button>
                </a>
            </nav>

        </>
    );
}

export default Navbar;