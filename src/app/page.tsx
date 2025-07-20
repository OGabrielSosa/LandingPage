import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Desplegable from "@/components/Desplegable";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-6 py-24">
        <Navbar />
        <Desplegable />
        <HeroSection />
        <AboutSection />
        <Footer />

      </div>
    </main>
  );
}
