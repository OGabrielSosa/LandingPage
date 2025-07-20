import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Desplegable from "@/components/Desplegable";
import Input from "@/ui/Input";
import Textarea from "@/ui/Textarea";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-6 py-24">
        <Desplegable />
        <HeroSection />
        <AboutSection />
        <p>Input y Textarea</p>
        <Input/>
        <br />
        <br />
        <Textarea/>

      </div>
    </main>
  );
}
