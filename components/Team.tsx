"use client"

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
    role: "Engineer / Developer, Regional Manager - Vietnam",
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

// 🔥 function for initials
function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
}

export default function Team() {
  return (
    <section className="relative px-4 sm:px-6 py-16 sm:py-20 lg:py-24 reveal overflow-hidden">

      {/* glow */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[350px] sm:w-[600px] h-[150px] sm:h-[200px] bg-[#d4af37]/10 blur-[100px] sm:blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight">
            Core <span className="text-[#d4af37]">Team</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2 sm:mt-3 px-2 sm:px-0">
            Leadership driving innovation and execution.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">

          {team.map((member, i) => (
            <div
              key={i}
              className="
                group relative p-4 sm:p-5 lg:p-6 rounded-2xl
                border border-white/10
                bg-white/5 backdrop-blur-xl
                text-center
                transition duration-300
                hover:-translate-y-2
                hover:border-white/20
              "
              style={{
                animation: `fadeUp 0.6s ease forwards`,
                animationDelay: `${i * 0.1}s`,
                opacity: 0,
              }}
            >

              {/* AVATAR */}
              <div className="
                w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
                mx-auto mb-3 sm:mb-4 rounded-full 
                flex items-center justify-center
                bg-gradient-to-br from-[#d4af37] to-yellow-600
                text-black font-semibold text-sm sm:text-base md:text-lg
                shadow-[0_0_20px_rgba(212,175,55,0.3)]
                group-hover:scale-110 transition
              ">
                {getInitials(member.name)}
              </div>

              {/* NAME */}
              <h3 className="font-semibold text-xs sm:text-sm leading-tight">
                {member.name}
              </h3>

              {/* ROLE */}
              <p className="text-[10px] sm:text-xs text-gray-400 mt-1 sm:mt-2 leading-snug">
                {member.role}
              </p>

              {/* hover glow */}
              <div className="
                absolute inset-0 rounded-2xl opacity-0
                group-hover:opacity-100
                transition duration-300
                bg-gradient-to-t from-[#d4af37]/10 to-transparent
              " />

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}