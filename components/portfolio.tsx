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
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">
            Our Work
          </h2>
          <p className="text-white/60">
            A glimpse into our recent projects and capabilities.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative h-64 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:bg-white/10 transition"
            >
              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />

              {/* content */}
              <div className="absolute bottom-6 left-6">
                <p className="text-sm text-white/60">
                  {project.category}
                </p>
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}