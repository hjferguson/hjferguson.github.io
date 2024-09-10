import React from 'react';
import Hero from './hero/Hero';
import About from './about/About';
import HighlightedProjects from './HighlightedProjects';
import Contact from './contact/Contact';

const HomePage = () => (
  <div>
    <Hero />
    <About />
    <HighlightedProjects />
    <Contact />
  </div>
);

export default HomePage;
