import React, { useState, useEffect } from 'react';
import ListSection from '../components/ListSection';
import WelcomePage from '../components/WelcomePage';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Terminal, Database, Zap } from 'lucide-react';

const AnimatedBackground = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 bg-blue-500 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: Math.random(),
            scale: Math.random() * 2,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
    </div>
  );
};

const FloatingIcon = ({ Icon, delay }) => (
  <motion.div
    className="absolute text-blue-400"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 1 }}
  >
    <Icon size={24} />
  </motion.div>
);

export default function Home() {
  const [isWelcomePageVisible, setIsWelcomePageVisible] = useState(true);

  const handleStart = () => {
    setIsWelcomePageVisible(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <AnimatedBackground />
      <AnimatePresence>
        {isWelcomePageVisible ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <WelcomePage onStart={handleStart} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col min-h-screen relative z-10"
          >
            <header className="bg-gray-800 bg-opacity-80 py-4 px-6 shadow-lg backdrop-blur-sm">
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl text-blue-400 font-bold text-center"
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <span className="text-green-400">&lt;</span>
                DevHub
                <span className="text-green-400">/&gt;</span>
              </motion.h1>
            </header>
            <main className="flex-grow p-4 sm:p-6 md:p-8 relative">
              <FloatingIcon Icon={Code} delay={0.5} />
              <FloatingIcon Icon={Terminal} delay={0.7} />
              <FloatingIcon Icon={Database} delay={0.9} />
              <FloatingIcon Icon={Zap} delay={1.1} />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <ListSection />
              </motion.div>
            </main>
            <footer className="bg-gray-800 bg-opacity-80 py-4 px-6 text-center text-sm text-gray-400 backdrop-blur-sm">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                © 2023 DevHub. All rights reserved.
              </motion.p>
              <motion.p
                className="mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <span className="text-blue-400">const</span>{" "}
                <span className="text-green-400">developer</span> = {"{"}
                <span className="text-yellow-400">passion</span>: 
                <span className="text-red-400">'coding'</span>,{" "}
                <span className="text-yellow-400">tool</span>: 
                <span className="text-red-400">'DevHub'</span>
                {"}"};
              </motion.p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
