import React from 'react';

const Card = ({ name, link, logoUrl }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="relative w-full aspect-w-1 aspect-h-1 h-64 bg-black rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${logoUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        
        {/* Glass effect */}
        <div className="absolute inset-0 bg-white bg-opacity-15 backdrop-blur-sm rounded-sm"></div>

        {/* Card content */}
        <div className="relative flex items-center justify-center h-full text-center">
        <h3 className="text-3xl font-bold text-white" style={{
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.9), 0 4px 30px rgba(0, 0, 0, 0.7)', // Darker shadow
        }}>
            {name}
          </h3>
        </div>
      </div>
    </a>
  );
};

export default Card;
