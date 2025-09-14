// components/SectionWrapper.jsx
import React from 'react';

const SectionWrapper = ({ children, className = '', style = {} }) => {
  return (
    // <section
    //   className={`min-h-screen flex flex-col justify-center items-center px-6 text-center bg-gradient-to-br from-gray-900 via-black to-gray-800 ${className}`}
    //   style={style}
    // >
    <section
      className={`min-h-screen flex flex-col justify-center items-center px-6 text-center bg-gray-800 ${className}`}
      style={style}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
