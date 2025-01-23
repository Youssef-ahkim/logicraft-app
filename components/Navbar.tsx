"use client"

import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';

function Navbar() {
    return (
        <>
            <nav className="flex justify-between items-center py-4 px-6 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 shadow-2xl w-full border-b border-purple-900/50">
                {/* Logo */}
                <a href="#home" className='animate-logoSlideIn'>
    <Image
        className="cursor-pointer w-[120px] md:w-[180px] filter brightness-0 invert"
        src="/logo.png"
        alt="Company Logo"
        width={180}
        height={50}
        sizes="(max-width: 800px) 120px, 180px"
    />
</a>

                {/* Navigation Links */}
                <ul className="hidden md:flex gap-8 text-lg font-medium text-purple-100">
                    <li className="hover:text-purple-400 transition animate-linksFadeIn"><a href="#home">Home</a></li>
                    <li className="hover:text-purple-400 transition animate-linksFadeIn"><a href="#services">Our Services</a></li>
                    <li className="hover:text-purple-400 transition animate-linksFadeIn"><a href="#about">About</a></li>
                    <li className="hover:text-purple-400 transition animate-linksFadeIn"><a href="#contact">Contact</a></li>
                </ul>

                {/* WhatsApp Button */}
                <a href="https://wa.me/+212614803118" target="_blank" rel="noopener noreferrer" className="flex animate-buttonBounce">
                    <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded transition shadow-lg">
                        <Image
                            className="w-[20px] animate-iconSpin brightness-125 mr-2"
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