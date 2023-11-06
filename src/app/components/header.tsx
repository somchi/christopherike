'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Menu } from './menu';
import { Linkedin } from 'lucide-react';
import { MobileNav } from './mobile-nav';

export const Header = () => {
  const scrollAnimation = () => {
    const header = document.getElementById('header');
    if (!header) return;
    if (window.scrollY === 0) {
      header.style.backgroundColor = 'transparent';
    } else {
      header.style.backgroundColor = '#212529';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollAnimation);
    return () => {
      window.removeEventListener('scroll', scrollAnimation);
    };
  }, []);

  return (
    <header
      id="header"
      className={`fixed top-0 z-20 ${
        window.scrollY === 0 ? 'transparent' : 'bg-[#212529]'
      } w-full bg-transparent transition-all ease-in-out duration-500`}
    >
      <nav className="flex relative items-center h-20 justify-between">
        <div className="flex md:ml-20 ml-8">
          <Link href="/" className="font-bold text-2xl">
            Christopher
          </Link>
        </div>
        <div className="hidden md:flex justify-between">
          <Menu />
        </div>
        <div className="flex gap-3 reltive">
          <MobileNav />
          <Linkedin color="white" strokeWidth={2} className="md:mr-20 mr-8" />
        </div>
      </nav>
    </header>
  );
};
