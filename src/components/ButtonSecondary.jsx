import React from 'react';

export const ButtonSecondary = ({ children, onClick, className = "" }) => (
  <button 
    onClick={onClick}
    className={`border-2 border-[#00ab85] text-[#00ab85] hover:bg-[#00ab85] hover:text-white font-bold py-3 px-8 rounded-full transition-all flex items-center justify-center gap-2 ${className}`}
  >
    {children}
  </button>
);