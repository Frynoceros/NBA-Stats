import React from 'react';
import Main from './MainDiv/Main';
import Hero from './MainDiv/Hero';
import Footer from './Footer';

export default function MainContainer() {
  return (
    <div className="flex flex-col w-screen h-screen border border-yellow">
      <div className="flex basis-1/3 m-1">
        <Hero />
      </div>
      <div className="flex basis-2/3 m-1">
        <Main />
      </div>
      <Footer />
    </div>
  );
}
