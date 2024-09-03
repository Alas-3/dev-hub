// components/WelcomePage.js
import React from 'react';

const WelcomePage = ({ onStart }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-white opacity-10 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="z-10 text-center p-8 space-y-6">
        <h1 className="text-6xl font-extrabold">Welcome to DevHub</h1>
        <p className="text-lg max-w-xl mx-auto">
          Your one-stop web app for all web components, tools, and resources.
        </p>
        <button
          onClick={onStart}
          className="mt-8 px-8 py-4 bg-white text-black font-bold rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Let's Go
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
