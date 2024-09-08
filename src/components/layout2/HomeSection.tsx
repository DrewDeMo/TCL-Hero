import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tilt } from 'react-tilt';

interface HomeSectionProps {
  textColor: string;
}

const HomeSection: React.FC<HomeSectionProps> = ({ textColor }) => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "FULL SERVICE TRANSPARENT AGENCY",
    "MARKETERS",
    "DESIGNERS",
    "CREATORS",
    "INNOVATORS",
    "COLLABORATORS"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="relative h-screen flex items-center justify-center">
      <div className="text-center z-10">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`text-5xl md:text-7xl font-bold mb-6 ${textColor}`}
          >
            {texts[currentText]}
          </motion.h1>
        </AnimatePresence>
        <p className={`text-xl md:text-2xl mb-8 ${textColor}`}>
          Innovative solutions for your marketing needs
        </p>
        <Tilt className="inline-block" options={{ max: 25, scale: 1.05 }}>
          <button className="bg-white text-[#cc5500] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
            Get Started
          </button>
        </Tilt>
      </div>
    </div>
  );
};

export default HomeSection;