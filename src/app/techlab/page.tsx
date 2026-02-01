import TechLabHero from "./_components/TechLabHero";
import PlatformDomains from "./_components/PlatformDomains";
import EngineeringPrinciples from "./_components/EngineeringPrinciples";
import PlatformLifecycle from "./_components/PlatformLifecycle";
import UseCases from "./_components/UseCases";
import TechStack from "./_components/TechStack";
import FinalCTA from "./_components/FinalCTA";
import Navigation from "@/components/shared/Navigation";

export default function TechLabPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <TechLabHero />
            <PlatformDomains />
            <EngineeringPrinciples />
            <PlatformLifecycle />
            <UseCases />
            <TechStack />
            <FinalCTA />

            <footer className="border-t border-white/5 py-12 px-6">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-accent rounded-lg" />
                        <span className="font-bold tracking-tight">HY AGENCY</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} HY Hybrid Problem-Solving. Platform Engineering Excellence.
                    </p>
                </div>
            </footer>
        </div>
    );
}
