import React from 'react';

interface AboutSectionProps {
  textColor: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ textColor }) => {
  return (
    <div id="about" className="h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className={`text-4xl font-bold mb-6 ${textColor}`}>Why Choose Us</h2>
        <ul className={`list-disc list-inside text-lg ${textColor}`}>
          <li>94% client retention rate</li>
          <li>Over 25 million households reached</li>
          <li>1,700+ media partners</li>
          <li>Transparent client relationships</li>
          <li>Data-driven insights and strategies</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutSection;