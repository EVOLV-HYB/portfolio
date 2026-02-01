import { notFound } from "next/navigation";
import Navigation from "@/components/shared/Navigation";
import DomainDetail from "@/components/domains/DomainDetail";
import { getDomainBySlug } from "@/lib/domains";

// Allow dynamic routes in dev mode
export const dynamicParams = true;
export const dynamic = 'force-dynamic';

export default async function DomainPage({ 
    params 
}: { 
    params: Promise<{ slug: string }> 
}) {
    const { slug } = await params;
    const domain = getDomainBySlug(slug);

    if (!domain) {
        notFound();
    }

    // Create a serializable version without the icon component
    const domainData = {
        title: domain.title,
        slug: domain.slug,
        description: domain.description,
        iconName: domain.iconName,
        className: domain.className,
        color: domain.color,
        content: domain.content
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <DomainDetail domain={domainData} />
        </div>
    );
}
