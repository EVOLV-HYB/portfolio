import {
    BarChart3,
    Code2,
    Layout,
    MessageSquare,
    Share2,
    Cpu
} from "lucide-react";
import { slugify } from "./utils";

export interface Domain {
    title: string;
    slug: string;
    description: string;
    icon: typeof MessageSquare;
    iconName: string; // Add icon name for client component
    className: string;
    color: string;
    // Extended content for detail page
    content?: {
        overview?: string;
        services?: string[];
        approach?: string;
        outcomes?: string[];
    };
}

export const domains: Domain[] = [
    {
        title: "Content and Creative Systems",
        slug: slugify("Content and Creative Systems"),
        description: "Architecting high-volume content engines that drive authority without manual overhead.",
        icon: MessageSquare,
        iconName: "MessageSquare",
        className: "md:col-span-2",
        color: "from-blue-500/10 to-transparent",
        content: {
            overview: "",
            services: [],
            approach: "",
            outcomes: []
        }
    },
    {
        title: "Social Media and Community Management",
        slug: "social-media-and-community-management",
        description: "Systematic distribution protocols that scale reach and resonance across every platform.",
        icon: Share2,
        iconName: "Share2",
        className: "md:col-span-1",
        color: "from-blue-600/10 to-transparent",
        content: {
            overview: "",
            services: [],
            approach: "",
            outcomes: []
        }
    },
    {
        title: "Marketing Infrastructure",
        slug: slugify("Marketing Infrastructure"),
        description: "The plumbing of growth. CRM, automation, and funnel orchestration built for scale.",
        icon: BarChart3,
        iconName: "BarChart3",
        className: "md:col-span-1",
        color: "from-blue-700/10 to-transparent",
        content: {
            overview: "",
            services: [],
            approach: "",
            outcomes: []
        }
    },
    {
        title: "Web & Platform Engineering",
        slug: slugify("Web & Platform Engineering"),
        description: "High-performance digital foundations. Fast, accessible, and system-integrated.",
        icon: Code2,
        iconName: "Code2",
        className: "md:col-span-2",
        color: "from-blue-400/10 to-transparent",
        content: {
            overview: "",
            services: [],
            approach: "",
            outcomes: []
        }
    },
    {
        title: "Product and Startup Building",
        slug: slugify("Product and Startup Building"),
        description: "From concept to MVP to scale. We build tools that solve specific operational needs.",
        icon: Cpu,
        iconName: "Cpu",
        className: "md:col-span-1",
        color: "from-blue-800/10 to-transparent",
        content: {
            overview: "",
            services: [],
            approach: "",
            outcomes: []
        }
    },
    {
        title: "Consulting & Advisory",
        slug: slugify("Consulting & Advisory"),
        description: "Partner-level strategy to navigate bottlenecks and architect growth loops.",
        icon: Layout,
        iconName: "Layout",
        className: "md:col-span-2",
        color: "from-blue-900/10 to-transparent",
        content: {
            overview: "",
            services: [],
            approach: "",
            outcomes: []
        }
    }
];

export function getDomainBySlug(slug: string): Domain | undefined {
    return domains.find(domain => domain.slug === slug);
}
