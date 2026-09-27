import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Services from "@/components/Services";
import OurPhilosophy from "@/components/OurPhilosophy";
import OurTeam from "@/components/OurTeam";
import TrackRecord from "@/components/TrackRecord";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* 导航 */}
      <Navbar />


      {/* 主视觉 */}
      <Hero />

      <Portfolio />

      <About />
      
      <Services />

      <OurPhilosophy />

      <OurTeam />  

      <TrackRecord />

      <Testimonials />

      <Pricing />

      <Contact />

      <Footer />

      {/* 服务 */}
      {/* 
      <section className="px-10 py-20">

        <h3 className="text-4xl font-bold">
          Our Services
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10">

          <div className="border p-6 lg:p-8 rounded-xl hover:shadow-lg transition">
            Asset Management
          </div>

          <div className="border p-6 lg:p-8 rounded-xl hover:shadow-lg transition">
            Quant Strategy
          </div>

          <div className="border p-6 lg:p-8 rounded-xl hover:shadow-lg transition">
            Risk Management
          </div>

        </div>

      </section>
      


      <footer className="px-6 md:px-10 py-10 border-t text-sm text-gray-500">
        © 2026 QIG Investment Group
      </footer>
      */}
      
    </main>
  );
}