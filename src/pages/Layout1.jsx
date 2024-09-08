import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Layout1.css';

const Layout1 = () => {
  useEffect(() => {
    import('../scripts/Layout1.js');
  }, []);

  return (
    <div className="layout1 min-h-screen bg-blue-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Layout 1</h1>
      <p className="mb-4">This is a placeholder for Layout 1. Customize this page as needed.</p>
      <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Back to Home</Link>
    </div>
  );
};

export default Layout1;