import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">TCL Hero Layouts</h1>
        <div className="space-y-4">
          <Link to="/layout1" className="block w-full text-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">Layout 1</Link>
          <Link to="/layout2" className="block w-full text-center bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-300">Layout 2</Link>
          <Link to="/layout3" className="block w-full text-center bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition duration-300">Layout 3</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;