export default function Stats() {
  return (
    <section className="py-16 px-6 text-center">

      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[200px] bg-[#d4af37]/10 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Heading (added for structure) */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 tracking-tight">
            Our Impact
          </h2>
          <p className="text-gray-400">
            Delivering measurable results across global markets.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {[
            { value: "250+", label: "Experts" },
            { value: "100+", label: "Clients" },
            { value: "10+", label: "Years Experience" },
            { value: "Global", label: "Presence" },
          ].map((item, i) => (
            <div
              key={i}
              className="
                group p-6 rounded-xl
                border border-white/10
                bg-white/5 backdrop-blur-md
                hover:bg-white/10
                transition duration-300
              "
            >

              {/* Number */}
              <h3 className="
                text-3xl md:text-4xl font-semibold 
                text-[#d4af37] 
                mb-2
                group-hover:scale-105
                transition
              ">
                {item.value}
              </h3>

              {/* Label */}
              <p className="text-gray-400 text-sm">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}