"use client"

export default function About() {
  return (
    <section className="relative px-6 reveal">

      {/* glow */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[200px] bg-[#d4af37]/10 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
          About <span className="text-[#d4af37]">TitanArtStudio</span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
          TitanArtStudio is a global digital and media technology company focused on building 
          high-performance web platforms, mobile applications, and scalable digital ecosystems.  
          We partner with brands to transform ideas into impactful digital products that drive growth.
        </p>

        {/* 3 pillars */}
        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Innovation First",
              desc: "We combine creativity with cutting-edge technology to build future-ready solutions.",
            },
            {
              title: "Scalable Systems",
              desc: "Our platforms are designed to grow with your business without compromising performance.",
            },
            {
              title: "Global Vision",
              desc: "We help brands expand and operate seamlessly across international markets.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                p-6 rounded-xl 
                bg-white/5 border border-white/10 
                backdrop-blur-md
                hover:bg-white/10 
                transition
              "
            >
              <h3 className="text-lg font-semibold mb-2 text-[#d4af37]">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}