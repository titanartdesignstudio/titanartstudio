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
export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="overflow-x-hidden">

        <Hero />
<Customers />
 <About />
 <Partners />
<Services />
          <Stats />
          <Team/>
        <CTA />
<Footers/>
      </main>
    </>
  )
}