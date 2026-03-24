import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Stats from "@/components/stats"
import CTA from "@/components/cta"
import Customers from "@/components/customers"
import Footers from "@/components/footers"
import Team from "@/components/Team"
import Partners from "@/components/Partners"
import Portfolio from "@/components/portfolio"

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="overflow-x-hidden">

        {/* HERO */}
        <Hero />

        {/* TRUST (logos first = credibility) */}
        <Customers />

        {/* ABOUT */}
        <About />

        {/* SERVICES */}
        <Services />
        
      {/* PARNERS */}
        <Partners />


        {/* PORTFOLIO (IMPORTANT - missing tha) */}
        <Portfolio />

        {/* STATS */}
        <Stats />

        {/* TEAM */}
        <Team />
       

        {/* CTA */}
        <CTA />

        {/* FOOTER */}
        <Footers />

      </main>
    </>
  )
}