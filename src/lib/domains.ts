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
    image: string; // Add image path
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
        title: "Content and Creative Lab",
        slug: slugify("Content and Creative Lab"),
        description: "Crafting compelling visuals and stories that capture attention and elevate brand identity.",
        icon: MessageSquare,
        iconName: "MessageSquare",
        className: "md:col-span-2",
        color: "from-blue-500/10 to-transparent",
        image: "/Content and creative lab.png",
        content: {
            overview: "",
            services: [],
            approach: "",
            outcomes: []
        }
    },
    {
        title: "Social Media and Community Management",
        slug: slugify("Social Media and Community Management"),
        description: "Building consistent online presence and engaged communities that turn followers into loyal customers.",
        icon: Share2,
        iconName: "Share2",
        className: "md:col-span-1",
        color: "from-blue-600/10 to-transparent",
        image: "/Social Media Management.png",
        content: {
            overview: "",
            services: [],
            approach: "",
            outcomes: []
        }
    },
    {
        title: "Marketing and Growth",
        slug: slugify("Marketing and Growth"),
        description: "Driving measurable growth through smart strategy, targeted campaigns, and performance-focused marketing.",
        icon: BarChart3,
        iconName: "BarChart3",
        className: "md:col-span-1",
        color: "from-blue-700/10 to-transparent",
        image: "/Marketing and growth.png",
        content: {
            overview: "",
            services: [],
            approach: "",
            outcomes: []
        }
    },
    {
        title: "Tech Lab",
        slug: slugify("Tech Lab"),
        description: "Designing and developing fast, scalable digital platforms that power modern businesses.",
        icon: Code2,
        iconName: "Code2",
        className: "md:col-span-2",
        color: "from-blue-400/10 to-transparent",
        image: "/TECHLAB_20260210_174330_0000.png",
        content: {
            overview: "",
            services: [],
            approach: "",
            outcomes: []
        }
    },
    {
        title: "Venture Forge",
        slug: slugify("Venture Forge"),
        description: "Transforming ideas into real-world products through rapid prototyping, MVPs, and scalable solutions.",
        icon: Cpu,
        iconName: "Cpu",
        className: "md:col-span-1",
        color: "from-blue-800/10 to-transparent",
        image: "/Venture Forge.png",
        content: {
            overview: "",
            services: [],
            approach: "",
            outcomes: []
        }
    },
    {
        title: "Consulting and Problem Analysis",
        slug: slugify("Consulting and Problem Analysis"),
        description: "Analyzing challenges deeply and delivering structured, end-to-end solutions that create lasting impact.",
        icon: Layout,
        iconName: "Layout",
        className: "md:col-span-2",
        color: "from-blue-900/10 to-transparent",
        image: "/Consultancy and problem analysis.png",
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
