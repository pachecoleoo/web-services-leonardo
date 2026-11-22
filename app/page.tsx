import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f2f1ed] text-[#080808]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Process />
      <Technologies />
      <Contact />
      <Footer />
    </main>
  );
}
