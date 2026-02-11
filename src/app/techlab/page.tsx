import TechLabHero from "./_components/TechLabHero";
import PlatformDomains from "./_components/PlatformDomains";
import EngineeringPrinciples from "./_components/EngineeringPrinciples";
import PlatformLifecycle from "./_components/PlatformLifecycle";
import UseCases from "./_components/UseCases";
import TechStack from "./_components/TechStack";
import ContentCTA from "@/components/shared/ContentCTA";

export default function TechLabPage() {
    return (
        <div className="flex flex-col min-h-screen">

            <TechLabHero />
            <PlatformDomains />
            <EngineeringPrinciples />
            <PlatformLifecycle />
            <UseCases />
            <TechStack />
            <ContentCTA />

        </div>
    );
}
