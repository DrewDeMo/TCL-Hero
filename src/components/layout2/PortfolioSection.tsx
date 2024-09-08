import React from 'react';

interface PortfolioSectionProps {
  textColor: string;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ textColor }) => {
  return (
    <div id="portfolio" className="h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className={`text-4xl font-bold mb-6 ${textColor}`}>Our Portfolio</h2>
        <p className={`text-lg mb-8 ${textColor}`}>
          Explore our diverse range of successful campaigns and projects. From small businesses to large corporations, we've helped our clients achieve remarkable results.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {/* Add portfolio images or project thumbnails here */}
          <div className="bg-white h-32 rounded-lg shadow-md"></div>
          <div className="bg-white h-32 rounded-lg shadow-md"></div>
          <div className="bg-white h-32 rounded-lg shadow-md"></div>
          <div className="bg-white h-32 rounded-lg shadow-md"></div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;