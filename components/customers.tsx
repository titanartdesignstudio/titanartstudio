"use client"

import Image from "next/image"

const clients = [
  { name: "Amazon", logo: "/logos/amazon.png" },
  { name: "Bharat Taxi", logo: "/logos/bharattaxi.png" },
  { name: "NIC India", logo: "/logos/nic.png" },
  { name: "mAadhaar", logo: "/logos/maadhaar.png" },
  { name: "Sony", logo: "/logos/sony.png" },
  { name: "Uber", logo: "/logos/uber.png" },
  { name: "Urban Company", logo: "/logos/urban.png" },
  { name: "Zee", logo: "/logos/zee.png" },
  { name: "NepalNetwork TV", logo: "/logos/nntv.png" },
  { name: "Zomato", logo: "/logos/zomato.png" },
  { name: "NNTV Kids", logo: "/logos/nntvkids.png" },
  { name: "Tamilnadu Government", logo: "/logos/tamilnadu.png" },
  { name: "Election Commission", logo: "/logos/ECI.png" },
  { name: "NationPath", logo: "/logos/nationpath.png" },
  { name: "Homelynn", logo: "/logos/homelynn.png" },
]

export default function Customers() {
  return (
    <section className="relative py-16 px-6 overflow-hidden reveal">

      {/* top divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

      {/* glow */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[150px] bg-[#d4af37]/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <p className="text-xs text-white/40 uppercase tracking-[0.35em] mb-10">
          Trusted by leading brands
        </p>

        {/* fade edges */}
        <div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

        {/* LOGO STRIP */}
        <div className="relative overflow-hidden">

          <div className="flex gap-16 animate-marquee items-center">

            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="
                  flex items-center justify-center
                  opacity-40
                  grayscale
                  transition duration-500

                  hover:opacity-100
                  hover:grayscale-0
                  hover:scale-110
                "
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="
                    object-contain
                    transition duration-500
                  "
                />
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}