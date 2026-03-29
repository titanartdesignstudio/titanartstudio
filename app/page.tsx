import Navbar from "@/components/layout/navbar"
import Hero from "@/components/home/hero"
import About from "@/components/home/about"
import Services from "@/components/home/services"
import Stats from "@/components/home/stats"
import CTA from "@/components/common/cta"
import Customers from "@/components/home/customers"
import Footers from "@/components/layout/footers"
import Team from "@/components/home/Team"
import Partners from "@/components/home/Partners"
import Portfolio from "@/components/home/portfolio"
import Contact from "@/components/common/Contact"

// 🔥 NEW
import ProductsPreview from "@/components/product/ProductsPreview"

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">

        {/* HERO */}
        <Hero />

        {/* TRUST */}
        <Customers />

        {/* 🔥 PRODUCTS (GAME CHANGER SECTION) */}
        <ProductsPreview />

        {/* ABOUT */}
        <About />

        {/* SERVICES */}
        <Services />

        {/* PARTNERS */}
        <Partners />


        {/* STATS */}
        <Stats />

        {/* TEAM */}
        <Team />

       
        
    {/* CONTACT */}
      <Contact />

        {/* FOOTER */}
        <Footers />

      </main>
    </>
  )
}