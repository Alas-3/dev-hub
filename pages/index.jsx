// pages/index.js
import React, { useState } from 'react';
import ListSection from '../components/ListSection';
import SidePanel from '../components/SidePanel';
import Navbar from '../components/Navbar'; // Import the Navbar component

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar for mobile and desktop */}
      <SidePanel isOpen={isSidebarOpen} onClose={toggleSidebar} />
      
      {/* Main content area */}
      <div className={`flex flex-col w-full transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />
        
        {/* Main content */}
        <div className="flex-1 p-4">
          <h1 className="text-4xl pt-20 font-bold mb-6 text-center">Welcome to DevHub</h1>
          <ListSection />
        </div>
      </div>
    </div>
  );
}
