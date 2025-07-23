import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/AboutSection";
import Button from "@/components/Button";
import Input from "@/ui/Input";
import Textarea from "@/ui/Textarea";
import Tecnologias from "@/components/Tecnologias";
import QueHacemosSection from "@/components/QueHacemosSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-6 items-start">
      <HeroSection />
      <div className="container mx-auto px-6 py-24">
        <HeroSection />
        <AboutSection />
        <QueHacemosSection />
        <p>Input y Textarea</p>
        <Input/>
        <br />
        <br />
        <Textarea/>
        <p>Button</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          <Button className="btn-size-xs cursor-pointer">Enviar mensaje XS</Button>
          <Button className="btn-size-sm cursor-pointer">Enviar mensaje SM</Button>
          <Button className="btn-size-md cursor-pointer">Enviar mensaje MD</Button>
          <Button className="btn-size-lg cursor-pointer">Enviar mensaje LG</Button>
          <Button className="btn-size-xl cursor-pointer">Enviar mensaje XL</Button>
          <Button className="btn-size-2xl cursor-pointer">Enviar mensaje 2XL</Button>
          <Button className="btn-size-3xl cursor-pointer">Enviar mensaje 3XL</Button>
          <Button className="btn-size-4xl cursor-pointer">Enviar mensaje 4XL</Button>
          <Button className="btn-size-5xl cursor-pointer">Enviar mensaje 5XL</Button>
        </div>
      </div>
    </main>
  );
}