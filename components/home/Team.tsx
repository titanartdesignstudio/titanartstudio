"use client"

import { useState } from "react"

const team = [
  {
    name: "Retd Major Sasankh Khade",
    role: "Founder & Chairperson",
  },
  {
    name: "Ms. Rubina Khade",
    role: "Chief Engineer / Developer",
  },
  {
    name: "Mr. Uzhair Hussain",
    role: "CTO, UI Expert",
  },
  {
    name: "Ms. Sejal Kanur",
    role: "JS Expert / Sr Analytics",
  },
  {
    name: "Mr. T Anirudhram",
    role: "Engineer / Regional Manager - Vietnam",
  },
  {
    name: "Ms. S. Padmaja",
    role: "CRM",
  },
  {
    name: "Mr. Kunal Dande",
    role: "Console Expert",
  },
  {
    name: "Advct. Mohan Krishna",
    role: "Admin & Legal Head",
  },
]

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
}

export default function Team() {
  const [open, setOpen] = useState(false)

  return (
    <section className="relative px-4 py-20 overflow-hidden">

      {/* glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[200px] bg-[#d4af37]/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* 🔥 CLICKABLE HEADER */}
        <div
          onClick={() => setOpen(!open)}
          className="text-center mb-10 cursor-pointer group"
        >
          <h2 className="text-3xl md:text-5xl font-semibold">
            Core <span className="text-[#d4af37]">Team</span>
          </h2>

          <p className="text-gray-400 mt-3">
            Leadership driving innovation and execution.
          </p>

          {/* indicator */}
          <div className="mt-4 text-[#d4af37] text-sm group-hover:scale-105 transition">
            {open ? "Hide Team ↑" : "View Team ↓"}
          </div>
        </div>

        {/* 🔥 COLLAPSIBLE GRID */}
        <div
          className={`
            transition-all duration-500 ease-in-out overflow-hidden
            ${open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">

            {team.map((member, i) => (
              <div
                key={i}
                className="
                  group relative p-5 rounded-2xl
                  border border-white/10
                  bg-white/5 backdrop-blur-xl
                  text-center
                  transition duration-300
                  hover:-translate-y-2
                  hover:border-[#d4af37]/40
                "
              >

                {/* AVATAR */}
                <div className="
                  w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center
                  bg-gradient-to-br from-[#d4af37] to-yellow-600
                  text-black font-semibold text-lg
                  shadow-[0_0_25px_rgba(212,175,55,0.4)]
                ">
                  {getInitials(member.name)}
                </div>

                {/* NAME */}
                <h3 className="font-semibold text-sm">
                  {member.name}
                </h3>

                {/* ROLE */}
                <p className="text-xs text-gray-400 mt-2">
                  {member.role}
                </p>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}