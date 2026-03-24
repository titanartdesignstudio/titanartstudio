"use client"

export default function About() {
  return (
    <section className="relative px-4 sm:px-6 py-16 sm:py-20 reveal overflow-hidden">

      {/* glow */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[350px] sm:w-[600px] h-[150px] sm:h-[200px] bg-[#d4af37]/10 blur-[100px] sm:blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-4 sm:mb-6 tracking-tight px-2 sm:px-0">
          About <span className="text-[#d4af37]">TitanArtStudio</span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-12 px-2 sm:px-0">
          TitanArtStudio is a global digital and media technology company focused on building 
          high-performance web platforms, mobile applications, and scalable digital ecosystems.  
          We partner with brands to transform ideas into impactful digital products that drive growth.
        </p>

        {/* 3 pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

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
                p-5 sm:p-6 rounded-xl 
                bg-white/5 border border-white/10 
                backdrop-blur-md
                hover:bg-white/10 
                transition
              "
            >
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-[#d4af37]">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}