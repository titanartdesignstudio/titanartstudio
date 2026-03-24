"use client"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
  },
  {
    title: "Fintech Mobile App",
    category: "Mobile App",
  },
  {
    title: "Brand Identity Design",
    category: "UI/UX Design",
  },
  {
    title: "SaaS Dashboard",
    category: "Web App",
  },
]

export default function Portfolio() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 reveal">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">
            Our Work
          </h2>
          <p className="text-white/60 text-sm sm:text-base px-2 sm:px-0">
            A glimpse into our recent projects and capabilities.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">

          {projects.map((project, i) => (
            <div
              key={i}
              className="
                group relative 
                h-52 sm:h-60 md:h-64 
                rounded-xl border border-white/10 
                bg-white/5 backdrop-blur-md 
                overflow-hidden 
                hover:bg-white/10 
                transition duration-300
              "
            >
              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90" />

              {/* content */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 pr-4">
                <p className="text-xs sm:text-sm text-white/60 mb-1">
                  {project.category}
                </p>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold leading-tight">
                  {project.title}
                </h3>
              </div>

              {/* hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-transparent" />
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}