import React from 'react';

interface ServicesSectionProps {
  textColor: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ textColor }) => {
  return (
    <div id="services" className="h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className={`text-4xl font-bold mb-6 ${textColor}`}>Our Services</h2>
        <p className={`text-lg ${textColor}`}>
          TCL Marketing offers a wide range of services including Digital Media, Traditional Media, GIS, Market Analysis, and more. We tailor our strategies to exceed your expectations.
        </p>
      </div>
    </div>
  );
};

export default ServicesSection;