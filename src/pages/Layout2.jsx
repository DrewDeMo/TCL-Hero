import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import ViteNavigation from '../components/layout2/navigation';
import HomeSection from '../components/layout2/HomeSection';
import ServicesSection from '../components/layout2/ServicesSection';
import AboutSection from '../components/layout2/AboutSection';
import PortfolioSection from '../components/layout2/PortfolioSection';
import TestimonialsSection from '../components/layout2/TestimonialsSection';
import ContactSection from '../components/layout2/ContactSection';
import '../styles/Layout2.css';

const Layout2 = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex(ref => ref === entry.target);
          setCurrentSection(index);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleNavClick = (href) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sectionColors = [
    'bg-orange-500',
    'bg-white', 
    'bg-black', 
    'bg-[#cc5500]',
    'bg-gray-900',
    'bg-gray-100'
  ];
  const textColors = ['text-white', 'text-[#cc5500]', 'text-white', 'text-white', 'text-white', 'text-[#cc5500]'];

  const sections = [
    { Component: HomeSection, id: 'home' },
    { Component: ServicesSection, id: 'services' },
    { Component: AboutSection, id: 'about' },
    { Component: PortfolioSection, id: 'portfolio' },
    { Component: TestimonialsSection, id: 'testimonials' },
    { Component: ContactSection, id: 'contact' }
  ];

  return (
    <div className={`h-screen overflow-y-scroll snap-y snap-mandatory ${sectionColors[currentSection]} transition-colors duration-1000`}>
      <div className="sticky top-0 z-50">
        <ViteNavigation 
          currentSection={currentSection} 
          sectionColors={sectionColors}
          onNavClick={handleNavClick}
        />
      </div>

      {sections.map(({ Component, id }, index) => (
        <div 
          key={id}
          id={id}
          ref={(el) => (sectionRefs.current[index] = el)}
          className="relative snap-start h-screen flex items-center justify-center"
        >
          <Component textColor={textColors[index]} />
        </div>
      ))}
    </div>
  );
};

export default Layout2;