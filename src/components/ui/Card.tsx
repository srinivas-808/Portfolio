import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  isDarkMode?: boolean;
};

const Card: React.FC<CardProps> = ({ children, className = '', isDarkMode = false }) => {
  return (
    <div
      className={`rounded-lg overflow-hidden transition-all duration-300 ${
        isDarkMode
          ? 'bg-gray-800 shadow-lg hover:shadow-xl hover:shadow-gray-800/30'
          : 'bg-white shadow-md hover:shadow-xl hover:shadow-gray-200/70'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;