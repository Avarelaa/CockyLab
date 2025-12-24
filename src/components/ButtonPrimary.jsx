import React from 'react';

export const ButtonPrimary = ({ children, onClick, className = "" }) => (
  <button 
    onClick={onClick}
    className={`bg-[#00ab85] hover:bg-[#008f6f] text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 ${className}`}
  >
    {children}
  </button>
);
