import React from 'react';

interface TestimonialsSectionProps {
  textColor: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ textColor }) => {
  return (
    <div id="testimonials" className="h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className={`text-4xl font-bold mb-6 ${textColor}`}>Client Testimonials</h2>
        <div className="space-y-6">
          <blockquote className={`text-lg italic ${textColor}`}>
            "TCL Marketing transformed our online presence. Their strategies led to a 200% increase in leads within just three months!"
            <footer className="text-sm mt-2">- John Doe, CEO of TechCorp</footer>
          </blockquote>
          <blockquote className={`text-lg italic ${textColor}`}>
            "The team at TCL is professional, creative, and results-driven. They're not just a service provider, but a true partner in our success."
            <footer className="text-sm mt-2">- Jane Smith, Marketing Director at GrowthCo</footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;