'use client';

import React, { useState, useEffect } from 'react';
import { Separator } from './separetor';
import { Tabs } from '../_libs/enums';

export const Menu = () => {
  const [activeNav, setActiveNav] = useState<string>('home');

  const onClick = (e: any) => {
    const section = e.target.name;
    const elem = document.getElementById(section);
    if (!elem) return;
    elem.scrollIntoView({ behavior: 'smooth' });
    setActiveNav(section);
  };

  const observerTabs = (observer: IntersectionObserver) => {
    const home = document.querySelector('#home');
    const about = document.querySelector('#about');
    const services = document.querySelector('#services');
    const portfolio = document.querySelector('#portfolio');
    const client = document.querySelector('#client');
    const contact = document.querySelector('#contact');
    if (!home || !about || !services || !portfolio || !client || !contact)
      return;
    observer.observe(home);
    observer.observe(about);
    observer.observe(services);
    observer.observe(portfolio);
    observer.observe(client);
    observer.observe(contact);
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
    <div className="grid md:flex items-center md:gap-10 gap-2 font-medium text-lg">
      <button
        name="home"
        className={`${activeNav === 'home' ? 'text-green-400' : 'text-white'}`}
        onClick={onClick}
      >
        Home
      </button>
      <Separator className="md:hidden !bg-slate-700" />
      <button
        name="about"
        className={`${
          activeNav === Tabs.About ? 'text-green-400' : 'text-white'
        }`}
        onClick={onClick}
      >
        About
      </button>
      <Separator className="md:hidden !bg-slate-700" />
      <button
        name="services"
        className={`${
          activeNav === Tabs.Services ? 'text-green-400' : 'text-white'
        }`}
        onClick={onClick}
      >
        Services
      </button>
      <Separator className="md:hidden !bg-slate-700" />
      <button
        name="portfolio"
        className={`${
          activeNav === Tabs.Portfolio ? 'text-green-400' : 'text-white'
        }`}
        onClick={onClick}
      >
        Portfolio
      </button>
      <Separator className="md:hidden !bg-slate-700" />
      <button
        name="client"
        className={`${
          activeNav === Tabs.Client ? 'text-green-400' : 'text-white'
        }`}
        onClick={onClick}
      >
        Clients
      </button>
      <Separator className="md:hidden !bg-slate-700" />
      <button
        name="contact"
        className={`${
          activeNav === Tabs.Contact ? 'text-green-400' : 'text-white'
        }`}
        onClick={onClick}
      >
        Contact
      </button>
    </div>
  );
};
