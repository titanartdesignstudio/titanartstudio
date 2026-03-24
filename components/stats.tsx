export default function Stats() {
  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 text-center overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[300px] sm:w-[600px] h-[120px] sm:h-[200px] bg-[#d4af37]/10 blur-[100px] sm:blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-3 tracking-tight">
            Our Impact
          </h2>
          <p className="text-gray-400 text-sm sm:text-base px-2 sm:px-0">
            Delivering measurable results across global markets.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">

          {[
            { value: "250+", label: "Experts" },
            { value: "100+", label: "Clients" },
            { value: "10+", label: "Years Experience" },
            { value: "Global", label: "Presence" },
          ].map((item, i) => (
            <div
              key={i}
              className="
                group p-4 sm:p-5 lg:p-6 rounded-xl
                border border-white/10
                bg-white/5 backdrop-blur-md
                hover:bg-white/10
                transition duration-300
              "
            >

              {/* Number */}
              <h3
                className="
                text-2xl sm:text-3xl md:text-4xl font-semibold 
                text-[#d4af37] 
                mb-1 sm:mb-2
                group-hover:scale-105
                transition
              "
              >
                {item.value}
              </h3>

              {/* Label */}
              <p className="text-gray-400 text-[11px] sm:text-sm leading-tight">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}