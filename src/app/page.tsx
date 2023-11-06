import React from 'react';
import { Banner } from './components/sections/banner';
import { About } from './components/sections/about';
import { Services } from './components/sections/services';
import { Portfolio } from './components/sections/portfolio';

export default function Home() {
  return (
    <>
      <main>
        <Banner />
        <About />
        <Services />
        <Portfolio />
      </main>
    </>
  );
}
