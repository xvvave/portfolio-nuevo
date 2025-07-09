import React from "react";
import SectionWrapper from "./SectionWrapper";

interface SectionIntroProps {
  title: string;
  subtitle?: string;
  secondaryText?: string;
  description?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
  titleClassName?: string;
  subtitleClassName?: string;
  secondaryTextClassName?: string;
  descriptionClassName?: string;
  isMainTitle?: boolean;
}

const SectionIntro: React.FC<SectionIntroProps> = ({
  title,
  subtitle,
  secondaryText,
  description,
  className = "",
  align = "left",
  titleClassName = "text-4xl md:text-6xl lg:text-8xl font-semibold text-[#F2F2F2]",
  subtitleClassName = "text-xl xl:text-[28px] font-semibold text-[#F2F2F2] mt-4",
  secondaryTextClassName = "text-lg text-[#A6A6A6] mt-2",
  descriptionClassName = "text-base text-[#A6A6A6] mt-4",
}) => (
  <SectionWrapper>
    <div className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <h1 className={titleClassName}>{title}</h1>
      {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
      {secondaryText && <p className={secondaryTextClassName}>{secondaryText}</p>}
      {description && <p className={descriptionClassName}>{description}</p>}
    </div>
  </SectionWrapper>
);

export default SectionIntro; 