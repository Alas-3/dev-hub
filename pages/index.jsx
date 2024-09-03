// pages/index.js
import React, { useState } from 'react';
import ListSection from '../components/ListSection';
import SidePanel from '../components/SidePanel';
import Navbar from '../components/Navbar';
import WelcomePage from '../components/WelcomePage'; // Import the WelcomePage component

export default function Home() {
  const [isWelcomePageVisible, setIsWelcomePageVisible] = useState(true); // State to manage the visibility of the welcome page
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleStart = () => {
    setIsWelcomePageVisible(false); // Hide the welcome page when the button is clicked
  };

  return (
    <>
      {isWelcomePageVisible ? (
        // Render the welcome page if it's visible
        <WelcomePage onStart={handleStart} />
      ) : (
        // Render the main content
        <div className="flex h-screen">
          {/* Sidebar for mobile and desktop */}
          <SidePanel isOpen={isSidebarOpen} onClose={toggleSidebar} />

          {/* Main content area */}
          <div className={`flex flex-col w-full transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
            {/* Conditionally render Navbar */}
            <Navbar toggleSidebar={toggleSidebar} />

            {/* Main content */}
            <div className="flex-1 p-4 bg-gradient-to-r from-purple-500 to-blue-500">
              <h1 className="text-4xl pt-20 text-white font-bold mb-6 text-center">Welcome to DevHub</h1>
              <ListSection />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
