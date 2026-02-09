import Navigation from "@/components/shared/Navigation";
import Hero from "./_components/Hero";
import DomainPillars from "./_components/DomainPillars";
import Philosophy from "./_components/Philosophy";
import Lifecycle from "./_components/Lifecycle";
import UseCases from "./_components/UseCases";
import Tools from "./_components/Tools";
import Signals from "./_components/Signals";
import SystemSpine from "./_components/SystemSpine";
import { CausalityProvider } from "./_context/CausalityContext";
import CausalityLayer from "./_components/CausalityLayer";
export default function MarketingPage() {
    return (
        <CausalityProvider>
            <div className="flex flex-col min-h-screen bg-background text-foreground relative">
                <CausalityLayer />
                <Navigation />
                <SystemSpine />

                <main className="flex-grow">
                    <section id="hero">
                        <Hero />
                    </section>
                    <section id="domains">
                        <DomainPillars />
                    </section>
                    <section id="philosophy">
                        <Philosophy />
                    </section>
                    <section id="lifecycle">
                        <Lifecycle />
                    </section>
                    <section id="use-cases">
                        <UseCases />
                    </section>
                    <section id="tools">
                        <Tools />
                    </section>
                    <section id="signals">
                        <Signals />
                    </section>
                </main>

                <footer className="border-t border-white/5 py-12 px-6 mt-20 relative z-10 bg-background">
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
        </CausalityProvider>
    );
}
