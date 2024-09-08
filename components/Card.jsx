import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ name, link, logoUrl }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-full aspect-square rounded-lg shadow-md overflow-hidden group">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundImage: `url(${logoUrl})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Card content */}
        <div className="relative flex flex-col items-center justify-end h-full p-2 sm:p-3 text-center">
          <h3 className="text-sm sm:text-base font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-1">
            {name}
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4 sm:w-5 sm:h-5 text-crimson-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </div>
      </div>
    </motion.a>
  );
};

export default Card;