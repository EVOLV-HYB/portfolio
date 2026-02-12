import Navigation from "@/components/shared/Navigation";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import BentoGrid from "@/components/sections/BentoGrid";
import WhyUs from "@/components/sections/WhyUs";
import IntakeForm from "@/components/sections/IntakeForm";
export default function Home(){
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <Hero />
      <Process />
      <BentoGrid />
      <WhyUs />
      <IntakeForm />
    </div>
  );
}