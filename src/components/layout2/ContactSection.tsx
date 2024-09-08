import React from 'react';
import { Tilt } from 'react-tilt';

interface ContactSectionProps {
  textColor: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ textColor }) => {
  return (
    <div id="contact" className="h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className={`text-4xl font-bold mb-6 ${textColor}`}>Contact Us</h2>
        <p className={`text-lg mb-8 ${textColor}`}>
          Ready to elevate your marketing strategy? Get in touch with us today.
        </p>
        <Tilt className="inline-block" options={{ max: 25, scale: 1.05 }}>
          <button className="bg-[#cc5500] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#b54a00] transition duration-300">
            Contact Us
          </button>
        </Tilt>
      </div>
    </div>
  );
};

export default ContactSection;