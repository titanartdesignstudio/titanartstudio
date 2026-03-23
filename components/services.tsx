"use client"

import { Code, Palette, Smartphone, Rocket } from "lucide-react"

const services = [
  {
    title: "Web Development",
    desc: "High-performance websites built with modern technologies.",
    icon: Code,
  },
  {
    title: "UI/UX Design",
    desc: "Beautiful and intuitive user experiences.",
    icon: Palette,
  },
  {
    title: "Mobile Apps",
    desc: "Fast, scalable applications for iOS & Android.",
    icon: Smartphone,
  },
  {
    title: "Product Launch",
    desc: "End-to-end product development strategy.",
    icon: Rocket,
  },
]

export default function Services() {
  return (
    <section className="relative py-24 px-6 reveal">

      {/* 🔥 subtle animated glow */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute right-1/2 top-0 translate-x-1/2 w-[600px] h-[200px] bg-[#d4af37]/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
            Our Services
          </h2>

          <p className="text-white/60 max-w-xl mx-auto">
            We provide end-to-end digital solutions to help brands scale globally.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, i) => {
            const Icon = service.icon

            return (
              <div
                key={i}
                className="
                  group relative overflow-hidden
                  p-7 rounded-2xl 
                  border border-white/10 
                  bg-white/5 backdrop-blur-xl
                  transition duration-300

                  hover:bg-white/10
                  hover:border-white/20
                  hover:-translate-y-2
                  hover:shadow-[0_10px_40px_rgba(212,175,55,0.15)]
                "
              >

                {/* 💡 gradient glow layer */}
                <div className="
                  absolute inset-0 rounded-2xl 
                  opacity-0 group-hover:opacity-100 
                  transition duration-500 
                  bg-gradient-to-br from-[#d4af37]/10 via-transparent to-transparent
                " />

                {/* ⚡ top shine effect */}
                <div className="
                  absolute -top-10 left-0 w-full h-20 
                  bg-white/10 blur-2xl opacity-0 
                  group-hover:opacity-100 transition duration-500
                " />

                {/* Icon */}
                <Icon className="
                  w-7 h-7 text-[#d4af37] mb-5 
                  transition duration-300
                  group-hover:scale-110 group-hover:rotate-3
                " />

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">
                  {service.title}
                </h3>

                {/* Desc */}
                <p className="text-white/60 text-sm leading-relaxed">
                  {service.desc}
                </p>

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}