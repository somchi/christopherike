'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu } from './menu';
import { Linkedin } from 'lucide-react';
import { MobileNav } from './mobile-nav';

export const Header = () => {
  const [activeNav, setActiveNav] = useState<string>('');
  const [scrollY, setScrollY] = useState<boolean>(false);

  const scrollAnimation = () => {
    const header = document.getElementById('header');
    if (!header) return;
    if (window.scrollY === 0) {
      setScrollY(false);
    } else {
      setScrollY(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollAnimation);
    return () => {
      window.removeEventListener('scroll', scrollAnimation);
    };
  }, []);

  const observerTabs = (observer: IntersectionObserver) => {
    const home = document.querySelector('#home');
    const about = document.querySelector('#about');
    const services = document.querySelector('#services');
    const portfolio = document.querySelector('#portfolio');
    const client = document.querySelector('#client');
    const contact = document.querySelector('#contact');

    if (home) observer.observe(home);
    if (about) observer.observe(about);
    if (services) observer.observe(services);
    if (portfolio) observer.observe(portfolio);
    if (client) observer.observe(client);
    if (contact) observer.observe(contact);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visibility = entry.isIntersecting;
        if (visibility) {
          setActiveNav(entry.target.id);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      }
    );
    observerTabs(observer);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      id="header"
      className="fixed top-0 z-20  w-full transition-all ease-in-out duration-500"
      style={{
        backgroundColor:
          typeof window === 'undefined'
            ? '#212529'
            : !scrollY
            ? 'transparent'
            : '#212529',
      }}
    >
      <nav className="flex relative items-center h-20 justify-between">
        <div className="flex md:ml-20 ml-8">
          <Link href="/" className="font-bold text-2xl">
            Christopher
          </Link>
        </div>
        <div className="hidden md:flex justify-between">
          <Menu
            activeNav={activeNav}
            setActiveNav={(nav) => setActiveNav(nav)}
          />
        </div>
        <div className="flex gap-3 reltive">
          <MobileNav />
          <Linkedin color="white" strokeWidth={2} className="md:mr-20 mr-8" />
        </div>
      </nav>
    </header>
  );
};
