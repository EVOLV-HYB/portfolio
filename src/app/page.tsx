import Navigation from "@/components/shared/Navigation";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import BentoGrid from "@/components/sections/BentoGrid";
import CaseStudies from "@/components/sections/CaseStudies";
import WhyUs from "@/components/sections/WhyUs";
import IntakeForm from "@/components/sections/IntakeForm";

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

      <footer className="border-t border-white/5 py-12 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg" />
            <span className="font-bold tracking-tight">HY AGENCY</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HY Hybrid Problem-Solving. Systematic Excellence.
          </p>
        </div>
      </footer>
    </div>
  );
}
