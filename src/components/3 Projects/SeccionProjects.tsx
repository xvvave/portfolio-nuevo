import ProjectCard from "./Project-card"
import RevealOnScroll from "../reveal-on-scroll"

const projectsData = [
  {
    id: 1,
    slug: "gloryfit",
    image: "/images/gloryfit-logo.png",
    title: "Glory Fit",
    subtitle: "App Redesign",
    description: "Case Study",
    tags: ["Design Research", "Android Prototype", "User Research", "UI Design", "UX Design"],
  },
  {
    id: 2,
    slug: "levelup",
    image: "/images/levelup-logo.png",
    title: "Level Up",
    subtitle: "Web & Content Redesign",
    description: "Case Study",
    tags: ["Design Research", "System Design", "User Research", "Content Design", "UX Design"],
  },
  {
    id: 3,
    slug: "vorterix",
    image: "/images/vorterix-logo.png",
    title: "Vorterix",
    subtitle: "Landing Page",
    description: "Case Study",
    tags: ["Front-end Development", "Web Design", "User Research", "UI Design", "UX Design"],
  },
  {
    id: 4,
    slug: "rectofinal",
    image: "/images/rectofinal-logo.png",
    title: "Recto Final",
    subtitle: "Videojuego físico-digital",
    description: "Experiencia Interactiva",
    tags: ["Unity", "Game Development", "UI Design", "Set Building", "Storytelling"],
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full min-h-screen overflow-hidden py-12 md:py-16 lg:py-20 xl:py-[100px]"
    >
      {/* Header - Static */}
              <RevealOnScroll>
          <div className="container mx-auto flex flex-col items-start text-left mb-12 md:mb-16 lg:mb-20">
            <div className="space-y-2">
              <h2
                className="fluid-text-3xl md:fluid-text-4xl lg:fluid-text-5xl font-semibold leading-tight text-[#F2F2F2] mb-4 md:mb-6"
                style={{ fontFamily: "var(--font-neue-haas)" }}
              >
                De la idea a la acción
              </h2>
              <p
                className="fluid-text-base md:fluid-text-lg font-semibold leading-relaxed text-[#A6A6A6] max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-[778px]"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Proyectos donde construyo soluciones digitales robustas que superan desafíos complejos.
              </p>
            </div>
          </div>
        </RevealOnScroll>

      {/* Projects Container */}
      <div className="w-full">
        <div className="flex flex-col gap-2 md:gap-4 lg:gap-6 px-4 md:px-6 lg:px-10">
          {projectsData.map((project, index) => (
            <RevealOnScroll key={project.id} delay={index * 100}>
              <ProjectCard
                image={project.image}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                tags={project.tags}
                slug={project.slug}
                className="w-full"
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
