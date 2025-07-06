import Link from "next/link"
import OptimizedImage from "../optimized-image"

interface ProjectCardProps {
  image: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  slug: string
  className?: string
}

export default function ProjectCard({
  image,
  title,
  subtitle,
  description,
  tags,
  slug,
  className = "",
}: ProjectCardProps) {
  return (
    <div className={`w-full ${className}`}>
      <Link href={`/${slug}`} className="block relative w-full group cursor-pointer">
        {/* Card Background */}
        <div
          className="relative bg-[#0D0D0D]/80 backdrop-blur-sm border border-[#9C96A4] rounded-2xl md:rounded-3xl lg:rounded-[50px] p-4 md:p-6 lg:p-8 transition-all duration-300 group-hover:border-[#9D00E0] group-hover:shadow-[0px_8px_35px_rgba(115,0,165,0.35)] w-full"
          style={{
            boxShadow: "0px 4px_25px rgba(115, 0, 165, 0.25)",
          }}
        >
          {/* Mobile Layout */}
          <div className="flex flex-col md:hidden gap-6">
            {/* Project Image */}
            <div className="w-24 h-24 mx-auto">
              <OptimizedImage src={image} alt={title} className="w-full h-full rounded-full object-cover" />
            </div>

            {/* Project Info */}
            <div className="text-center">
              <h3
                className="fluid-text-xl font-semibold leading-tight text-[#F2F2F2] mb-2 group-hover:text-[#9D00E0] transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {title}
              </h3>
              <p
                className="fluid-text-lg font-normal leading-tight text-[#A6A6A6] mb-2"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {subtitle}
              </p>
              <p
                className="fluid-text-base font-normal text-[#A6A6A6] mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex gap-2 overflow-x-auto justify-center">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center px-3 py-1 border border-[#595959] rounded-full group-hover:border-[#9D00E0] transition-colors flex-shrink-0"
                >
                  <span
                    className="fluid-text-sm font-semibold text-[#595959] whitespace-nowrap group-hover:text-[#9D00E0] transition-colors"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-start gap-6 lg:gap-8">
            {/* Project Image */}
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 flex-shrink-0 mt-4">
              <OptimizedImage src={image} alt={title} className="w-full h-full rounded-full object-cover" />
            </div>

            {/* Project Info */}
            <div className="flex-1 min-w-0 mt-4">
              <h3
                className="fluid-text-xl md:fluid-text-2xl lg:fluid-text-3xl font-semibold leading-tight text-[#F2F2F2] mb-2 md:mb-3 lg:mb-4 group-hover:text-[#9D00E0] transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {title}
              </h3>
              <p
                className="fluid-text-lg md:fluid-text-xl font-normal leading-tight text-[#A6A6A6] mb-2 md:mb-3"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {subtitle}
              </p>
              <p
                className="fluid-text-base md:fluid-text-lg font-normal text-[#A6A6A6] mb-3 md:mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {description}
              </p>

              {/* Tags */}
              <div className="flex gap-2 lg:gap-3 xl:gap-4 overflow-x-auto">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center px-3 py-1 md:px-4 md:py-2 lg:px-4 lg:py-2 border border-[#595959] rounded-full group-hover:border-[#9D00E0] transition-colors flex-shrink-0"
                  >
                    <span
                      className="fluid-text-xs md:fluid-text-sm font-semibold text-[#595959] whitespace-nowrap group-hover:text-[#9D00E0] transition-colors"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex items-start justify-center w-16 h-16 lg:w-20 lg:h-20 xl:w-[136px] xl:h-[118px] flex-shrink-0">
              <span
                className="fluid-text-4xl lg:fluid-text-5xl font-bold leading-none text-center transition-transform duration-200 group-hover:translate-x-2"
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontWeight: "bold",
                  background: "linear-gradient(180deg, #F2F2F2 0%, #9D00E0 66%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ➜
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
