"use client"

import Image from "next/image"

const partners = [
  { name: "Railway", logo: "/logos/railway.png" },
  { name: "Vercel", logo: "/logos/vercel.png" },
  { name: "Microsoft", logo: "/logos/microsoft.png" },
  { name: "AWS", logo: "/logos/aws.png" },
  { name: "Meta", logo: "/logos/meta.png" },
  { name: "Google", logo: "/logos/google.png" },
]

export default function Partners() {
  return (
    <section className="relative px-6 reveal">

      {/* glow */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[150px] bg-[#d4af37]/10 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <p className="text-xs text-white/40 uppercase tracking-[0.3em] mb-14">
          Trusted Technologies & Platforms
        </p>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 items-center">

          {partners.map((partner, i) => (
            <div
              key={i}
              className="
                group flex items-center justify-center
                opacity-60 hover:opacity-100
                transition duration-300
                animate-float
              "
              style={{ animationDelay: `${i * 0.2}s` }}
            >

              {/* FIXED SIZE BOX */}
              <div className="
                w-[120px] h-[60px] 
                flex items-center justify-center
              ">

                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={100}
                  height={40}
                  className="
                    object-contain
                    grayscale group-hover:grayscale-0
                    transition duration-300
                  "
                />

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}