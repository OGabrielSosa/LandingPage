import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Desplegable from "@/components/Desplegable";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-24">
        <Desplegable />
        <HeroSection />
        <AboutSection />

      </div>
    </main>
  );
}
