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
import ContentCTA from "@/components/shared/ContentCTA";
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

                <ContentCTA />
            </div>
        </CausalityProvider>
    );
}
