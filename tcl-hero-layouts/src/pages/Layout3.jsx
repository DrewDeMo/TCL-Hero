import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Layout3.css';

const Layout3 = () => {
  useEffect(() => {
    import('../scripts/Layout3.js');
  }, []);

  return (
    <div className="layout3 min-h-screen bg-purple-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Layout 3</h1>
      <p className="mb-4">This is a placeholder for Layout 3. Customize this page as needed.</p>
      <Link to="/" className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition duration-300">Back to Home</Link>
    </div>
  );
};

export default Layout3;