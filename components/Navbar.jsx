// components/Navbar.jsx
import React from 'react';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white flex items-center justify-between p-4 z-50">
      {/* Hamburger menu for all screen sizes */}
      <button
        className="p-2 lg:hidden"
        onClick={toggleSidebar}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Optionally, include a similar button for larger screens */}
      <button
        className="hidden lg:block p-2"
        onClick={toggleSidebar}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      
      <span className="text-xl font-bold">DevHub</span>
    </nav>
  );
};

export default Navbar;
