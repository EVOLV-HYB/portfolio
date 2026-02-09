import Navigation from "@/components/shared/Navigation";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import BentoGrid from "@/components/sections/BentoGrid";
import CaseStudies from "@/components/sections/CaseStudies";
import WhyUs from "@/components/sections/WhyUs";
import IntakeForm from "@/components/sections/IntakeForm";
import Footer from "@/components/shared/Footer";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <Hero />
      <Process />
      <BentoGrid />
      <CaseStudies />
      <WhyUs />
      <IntakeForm />
      <Footer />
    </div>
  );
}
