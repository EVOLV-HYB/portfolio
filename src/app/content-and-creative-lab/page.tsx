import DomainOverview from "./_components/DomainOverview";
import ShootingProduction from "./_components/ShootingProduction";
import GraphicDesign from "./_components/GraphicDesign";
import VideoEditing from "./_components/VideoEditing";
import ContentCTA from "./_components/ContentCTA";

export default function ContentPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-accent/30 selection:text-white">
        

            <main>
                {/* Section 1: Domain Overview */}
                <DomainOverview />

                {/* Section 2: Shooting & Production */}
                <ShootingProduction />

                {/* Section 3: Graphic Design */}
                <GraphicDesign />

                {/* Section 4: Video Editing */}
                <VideoEditing />

                {/* Section 5: Final CTA */}
                <ContentCTA />
            </main>
        </div>
    );
}
