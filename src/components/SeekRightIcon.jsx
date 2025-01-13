import React from 'react';

const SeekRightIcon = ({ width = "32", height = "32", className = "" }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Magnifying Glass */}
      <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      {/* Arrow/Handle */}
      <path d="M20 20L26 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Right Arrow */}
      <path d="M14 10L18 14L14 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default SeekRightIcon; 