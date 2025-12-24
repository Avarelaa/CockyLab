import React from 'react';

export const SectionTitle = ({ children, align = "center" }) => (
  <h2 className={`text-3xl md:text-4xl font-bold text-[#283a42] mb-6 text-${align} leading-tight`}>
    {children}
  </h2>
);
