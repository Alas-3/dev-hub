'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Code2, Zap, Wrench, Book } from 'lucide-react'

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute h-1 w-1 bg-blue-500 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  )
}

const TypewriterEffect = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleType = () => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      }
    };

    const timer = setTimeout(handleType, speed);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [index, text, speed]);

  return <span className="font-mono">{displayText}</span>;
};

const FeatureIcon = ({ icon, text }) => (
  <div className="flex flex-col items-center space-y-2 text-gray-300 hover:text-white transition-colors duration-300">
    <div className="p-3 bg-gray-800 rounded-full border border-gray-700 hover:border-blue-500 transition-colors duration-300">
      {icon}
    </div>
    <span className="text-sm">{text}</span>
  </div>
)

export default function LandingPage({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-center px-4 overflow-hidden relative">
      <AnimatedBackground />
      
      <main className="space-y-8 animate-fade-in z-10">
        <h1 className="text-5xl font-bold text-white sm:text-6xl md:text-7xl font-mono">
          DevHub
        </h1>
        <p className="max-w-md mx-auto text-xl text-gray-300 font-light">
          <TypewriterEffect text="Your one-stop web app for all web components, tools, and resources" speed={50}/>
        </p>

        <div className="flex justify-center space-x-8">
          <FeatureIcon icon={<Code2 size={24} />} text="Components" />
          <FeatureIcon icon={<Wrench size={24} />} text="Tools" />
          <FeatureIcon icon={<Book size={24} />} text="Resources" />
        </div>

        {/* Button with onStart handler */}
        <button
          onClick={onStart}
          className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px]"
        >
          Let's Go
          <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
        </button>
      </main>

      <footer className="absolute bottom-4 text-gray-500 text-sm">
        Built with Next.js and Tailwind CSS
      </footer>

      <div className="absolute top-5 right-5 animate-pulse">
        <Zap size={24} className="text-yellow-400" />
      </div>
    </div>
  )
}
