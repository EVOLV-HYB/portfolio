"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import IntakeForm from "@/components/sections/IntakeForm";
import { cn } from "@/lib/utils";
import ContentCTA from "@/components/shared/ContentCTA";
import {
    ArrowRight,
    BarChart3,
    Brain,
    LineChart,
    ShieldCheck,
    Target,
    Zap,
    CheckCircle2,
    Search,
    AlertCircle,
    Layers,
    Users,
    Lightbulb,
    Rocket,
    XCircle,
    Phone
} from "lucide-react";

// --- DATA ---

const painPoints = [
    { icon: LineChart, title: "Stagnant Growth", description: "Revenue has barely moved despite increased effort and investment." },
    { icon: Layers, title: "Operational Chaos", description: "Inefficient workflows and manual processes are choking your ability to scale." },
    { icon: Target, title: "Strategy Drift", description: "Lack of clear direction leads to conflicting initiatives and wasted resources." },
    { icon: AlertCircle, title: "Tech Debt", description: "Legacy systems and poor technology decisions are slowing you down." },
    { icon: Users, title: "Execution Gap", description: "Great ideas but struggling to bridge the gap between vision and reality." },
    { icon: BarChart3, title: "Unclear ROI", description: "Marketing and initiatives aren't delivering measurable, predictable results." }
];

const frameworkSteps = [
    {
        id: 0,
        title: "Discover",
        subtitle: "Deep Understanding",
        description: "We don't guess. We immerse ourselves in your ecosystem to understand your core business, goals, and hidden constraints.",
        icon: Search,
        color: "from-blue-500/20 to-cyan-500/20",
        accent: "text-blue-400"
    },
    {
        id: 1,
        title: "Diagnose",
        subtitle: "Root Cause Analysis",
        description: "We cut through the noise to identify the atomic truths—the single constraints actually holding you back.",
        icon: AlertCircle,
        color: "from-red-500/20 to-orange-500/20",
        accent: "text-red-400"
    },
    {
        id: 2,
        title: "Design",
        subtitle: "Strategic Roadmap",
        description: "We engineer a first-principles bridge from your current state to your objective, designing a tailored solution.",
        icon: Target,
        color: "from-purple-500/20 to-pink-500/20",
        accent: "text-purple-400"
    },
    {
        id: 3,
        title: "Execute",
        subtitle: "Systemic Implementation",
        description: "Strategy without execution is hallucination. We deploy the systems, tech, and workflows to build at scale.",
        icon: Rocket,
        color: "from-emerald-500/20 to-teal-500/20",
        accent: "text-emerald-400"
    },
    {
        id: 4,
        title: "Optimize",
        subtitle: "Continuous Refinement",
        description: "We don't just launch and leave. We analyze data loops to refine, improve, and compound growth over time.",
        icon: LineChart,
        color: "from-yellow-500/20 to-amber-500/20",
        accent: "text-yellow-400"
    }
];

const differentiators = [
    { title: "Practical Solutions", description: "We don't give theoretical advice. We design deployable, real-world solutions." },
    { title: "Hybrid Expertise", description: "We combine high-level strategy with deep technical understanding and creative execution." },
    { title: "Strategic Partners", description: "We aren't just vendors. We act as an extension of your leadership team." },
    { title: "Outcome Obsessed", description: "We focus purely on measurable outcomes, not hours billed or slides created." }
];

const services = [
    { icon: Brain, title: "Business & Growth Strategy", description: "Architecting the path to sustainable scaling and market dominance." },
    { icon: Layers, title: "Operations Optimization", description: "Streamlining workflows to remove friction and increase velocity." },
    { icon: Zap, title: "Technology Direction", description: "Aligning your tech stack with long-term business objectives." },
    { icon: Rocket, title: "Digital Transformation", description: "Modernizing legacy businesses for the digital-first economy." },
    { icon: Target, title: "Go-to-Market Strategy", description: "Launching new products with precision and maximum impact." },
    { icon: Lightbulb, title: "Product Validation", description: "Testing and refining ideas before investing in full-scale build." },
    { icon: CheckCircle2, title: "System Integration", description: "Connecting disparate tools into a unified, automated ecosystem." }
];

const idealClients = [
    "Startups preparing to scale aggressively",
    "Growing businesses facing operational complexity",
    "Founders needing strategic clarity and focus",
    "Organizations modernizing legacy systems",
    "Institutions seeking radical efficiency"
];

const engagementProcess = [
    { step: "01", title: "Initial Consultation" },
    { step: "02", title: "Business Assessment" },
    { step: "03", title: "Strategic Roadmap" },
    { step: "04", title: "Execution Support" }
];

// --- COMPONENTS ---

// 1. HERO SECTION
function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px]" />
                <div className="absolute inset-0 grid-pattern opacity-10" />
            </div>

            <div className="container relative z-10 max-w-4xl mx-auto text-center mt-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1a1f2e] border border-blue-900/30 text-accent text-xs font-bold tracking-widest uppercase mb-6"
                >
                    <Zap className="w-3 h-3 fill-current" />
                    Systemic Problem Solving
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-[0.9] uppercase"
                >
                    FROM <span className="text-muted-foreground">CHAOS</span><br />
                    TO <span className="text-accent relative inline-block">
                        CLARITY
                        <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="absolute -bottom-2 left-0 h-[6px] bg-accent"
                        />
                    </span><span className="text-white">.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Strategic Consulting & Problem Solving. We analyze businesses, identify root challenges, and design strategic solutions to unlock growth.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a
                        href="#intake"
                        className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl text-lg font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(37,99,235,0.4)]"
                    >
                        Schedule a Consultation
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

// 2. CLIENT PAIN POINTS
function PainPointsSection() {
    return (
        <section className="py-32 px-6 bg-muted/30 relative">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight uppercase">
                        Are These Challenges <br />
                        <span className="text-accent">Holding Your Business Back?</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Growth creates complexity. If you're facing these issues, you need a systemic solution, not a band-aid.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {painPoints.map((point, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-2xl bg-card border border-white/5 hover:border-accent/40 transition-all duration-300 group"
                        >
                            <point.icon className="w-10 h-10 text-muted-foreground mb-4 group-hover:text-accent transition-colors" />
                            <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{point.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 3. OUR APPROACH (Modified ProblemSolvingModule)
function FrameworkSection() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="py-32 px-6 border-t border-white/5 bg-background">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    {/* Left: Interactive List */}
                    <div className="flex-1 space-y-8 sticky top-24">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">
                                Our <span className="text-accent">Problem-Solving Framework</span>.
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                A systematic, 5-step methodology designed to dismantle complexity and engineer growth.
                            </p>
                        </motion.div>

                        <div className="space-y-3">
                            {frameworkSteps.map((step) => (
                                <div
                                    key={step.id}
                                    onClick={() => setActiveStep(step.id)}
                                    className={cn(
                                        "group cursor-pointer p-5 rounded-xl border transition-all duration-300 relative overflow-hidden",
                                        activeStep === step.id
                                            ? "bg-accent/5 border-accent/20"
                                            : "bg-card border-white/5 hover:border-white/10"
                                    )}
                                >
                                    <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${activeStep === step.id ? "bg-accent" : "bg-transparent"}`} />
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded-lg transition-colors ${activeStep === step.id ? "bg-accent/10 text-accent" : "bg-white/5 text-muted-foreground"}`}>
                                            <step.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className={cn(
                                                "text-lg font-bold transition-colors uppercase tracking-tight",
                                                activeStep === step.id ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                                            )}>
                                                {step.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <AnimatePresence>
                                        {activeStep === step.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden pl-[60px]"
                                            >
                                                <p className="pt-2 text-sm text-muted-foreground leading-relaxed pb-2">
                                                    {step.description}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visual Display */}
                    <div className="flex-1 w-full aspect-square md:aspect-auto md:min-h-[600px] relative perspective-1000">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl blur-2xl" />
                        <div className="relative w-full h-full bg-card/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center p-12">
                            <div className="absolute inset-0 grid-pattern opacity-20" />
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="relative z-10 text-center"
                                >
                                    <div className={`w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-tr ${frameworkSteps[activeStep].color} flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.5)]`}>
                                        {(() => {
                                            const Icon = frameworkSteps[activeStep].icon;
                                            return <Icon className="w-12 h-12 text-white" />;
                                        })()}
                                    </div>
                                    <div className={`text-sm font-bold tracking-widest uppercase mb-2 ${frameworkSteps[activeStep].accent}`}>Step {activeStep + 1}</div>
                                    <h3 className="text-3xl font-black uppercase tracking-tight mb-4">
                                        {frameworkSteps[activeStep].subtitle}
                                    </h3>
                                    <div className="h-1 w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto" />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// 4. WHAT MAKES US DIFFERENT
function DifferentiatorsSection() {
    return (
        <section className="py-32 px-6 relative overflow-hidden bg-muted/20">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-20">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight uppercase">
                        Not Just Advisory. <br /><span className="text-accent">Strategic Partners.</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {differentiators.map((diff, idx) => (
                        <div key={idx} className="p-8 rounded-2xl bg-card border border-white/5 hover:border-accent/30 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-3 text-white uppercase tracking-tight">{diff.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{diff.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 5. TYPES OF PROBLEMS WE SOLVE
function ServicesSection() {
    return (
        <section className="py-32 px-6 bg-background">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight uppercase">Types of Problems We Solve</h2>
                    <p className="text-muted-foreground text-lg">Comprehensive solutions for critical business domains.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-card border border-white/5 hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{service.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 6. WHO WE WORK BEST WITH
function IdealClientsSection() {
    return (
        <section className="py-32 px-6 bg-muted/30">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-tight uppercase">Who We Work Best With</h2>
                <div className="grid gap-4">
                    {idealClients.map((client, idx) => (
                        <div key={idx} className="p-6 rounded-xl border border-white/10 bg-card flex items-center justify-center hover:border-accent/30 transition-all">
                            <span className="text-lg md:text-xl font-medium text-white">{client}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 7. ENGAGEMENT PROCESS
function EngagementSection() {
    return (
        <section className="py-32 px-6 border-y border-white/5 bg-background">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-20 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight uppercase">How We Engage</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {engagementProcess.map((item, idx) => (
                        <div key={idx} className="relative p-6 group">
                            <span className="text-6xl font-black text-muted/10 absolute top-0 left-0 -z-10 transition-colors group-hover:text-accent/10">{item.step}</span>
                            <div className="text-xl font-bold mt-8 mb-2 text-accent uppercase tracking-tight">{item.title}</div>
                            {idx < engagementProcess.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 right-0 w-8 h-[1px] bg-white/10" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 8. TRUST BUILDING & 9. FINAL CTA
function FinalSection() {
    return (
        <section className="py-40 px-6 relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
            </div>
            <div className="container mx-auto max-w-3xl text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-none">
                    "Think of us as your strategic partner."
                </h2>
                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Every complex problem has a strategic solution. Let's build yours.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href="#intake"
                        className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl text-lg font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(37,99,235,0.4)]"
                    >
                        Book a Strategic Consultation
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}

// 9. DIRECT CONTACT
function DirectContactSection() {
    return (
        <section className="py-12 px-6 bg-background">
            <div className="container mx-auto max-w-4xl">
                <div className="rounded-2xl bg-accent/5 border border-accent/20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left transition-all hover:bg-accent/10 hover:border-accent/30 group">
                    <div>
                        <h3 className="text-2xl font-black uppercase tracking-tight mb-2">
                            Need Immediate Assistance?
                        </h3>
                        <p className="text-muted-foreground">
                            Skip the form. Call our strategy team directly.
                        </p>
                    </div>
                    <a
                        href="tel:+15551234567"
                        className="flex items-center gap-4 text-2xl md:text-3xl font-black text-accent hover:text-white transition-colors uppercase tracking-tight"
                    >
                        <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                            <Phone className="w-6 h-6" />
                        </div>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">+1 (555) 123-4567</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default function ConsultancyPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
        
            <HeroSection />
            <PainPointsSection />
            <FrameworkSection />
            <DifferentiatorsSection />
            <ServicesSection />
            <IdealClientsSection />
            <EngagementSection />
            <FinalSection />
            <DirectContactSection />
            <ContentCTA />
        </div>
    );
}
