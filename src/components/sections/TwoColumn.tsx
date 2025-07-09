import React from "react";
import SectionWrapper from "./SectionWrapper";

interface TwoColumnProps {
  left: React.ReactNode;
  right: React.ReactNode;
  reverse?: boolean;
  className?: string;
}

const TwoColumn: React.FC<TwoColumnProps> = ({ left, right, reverse = false, className = "" }) => (
  <SectionWrapper className={className}>
    <div className={`grid grid-cols-1 md:grid-cols-12 gap-12 items-center space-y-8 md:space-y-0`}>
      <div className={`col-span-12 md:col-span-6 ${reverse ? 'md:order-2' : ''}`}>{left}</div>
      <div className={`col-span-12 md:col-span-6 ${reverse ? 'md:order-1' : ''}`}>{right}</div>
    </div>
  </SectionWrapper>
);

export default TwoColumn; 