import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = "" }) => (
  <section className={`max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-20 ${className}`}>
    {children}
  </section>
);

export default SectionWrapper; 