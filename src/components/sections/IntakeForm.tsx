"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ClipboardCheck, MessageSquare, Target, Loader2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const steps = [
    {
        title: "The Problem Space",
        description: "What is the primary friction point in your operations?",
        icon: Target,
        fields: ["Growth Stagnation", "Operational Inefficiency", "Technical Debt", "Product Velocity"],
    },
    {
        title: "The Constraint",
        description: "What have you tried that didn't work?",
        icon: MessageSquare,
        fields: ["Traditional Agencies", "In-house Band-aids", "Static Strategy Docs", "Nothing Yet"],
    },
    {
        title: "The Objective",
        description: "If we solve this, what is the #1 outcome?",
        icon: ClipboardCheck,
        fields: ["Scale Leverage", "Zero Manual Overhead", "Total Market Authority", "Sustainable Speed"],
    }
];

export default function IntakeForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [selections, setSelections] = useState<string[]>([]);
    const [showStep4, setShowStep4] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        description: ""
    });

    // Save selections to localStorage whenever they change
    useEffect(() => {
        if (typeof window !== "undefined" && selections.length > 0) {
            selections.forEach((selection, index) => {
                if (selection) {
                    localStorage.setItem(`intake_step_${index + 1}`, selection);
                }
            });
        }
    }, [selections]);

    const handleSelect = (field: string) => {
        const newSelections = [...selections];
        newSelections[currentStep] = field;
        setSelections(newSelections);

        if (currentStep < steps.length - 1) {
            setTimeout(() => setCurrentStep(prev => prev + 1), 300);
        } else {
            setTimeout(() => setShowStep4(true), 300);
        }
    };

    const handleFinalSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        setErrorMessage(null);

        const step1 = localStorage.getItem("intake_step_1") || selections[0] || "Not selected";
        const step2 = localStorage.getItem("intake_step_2") || selections[1] || "Not selected";
        const step3 = localStorage.getItem("intake_step_3") || selections[2] || "Not selected";

        const templateParams = {
            name: formData.name,
            email: formData.email,
            title: "New Portfolio Inquiry",
            message: `
Name: ${formData.name}
Email: ${formData.email}

Project Description:
${formData.description}

Intake Responses:
1. The Problem Space: ${step1}
2. The Constraint: ${step2}
3. The Objective: ${step3}
            `.trim(),
        };

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error("Missing EmailJS Environment Variables. Check .env.local");
            setErrorMessage("Configuration Error: Missing email credentials. Please contact support.");
            setIsSending(false);
            return;
        }

        try {
            await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );
            setSubmitted(true);
        } catch (error) {
            console.log(error);
            setErrorMessage("Failed to send inquiry. Please try again or email us directly at evolvhybagency@gmail.com");
        } finally {
            setIsSending(false);
        }
    };

    const isStep4Valid =
        formData.name.trim() !== "" &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
        formData.description.trim() !== "";

    return (
        <section id="intake" className="py-32 px-6">
            <div className="container max-w-4xl mx-auto">
                <div className="glass rounded-[3rem] p-8 md:p-16 border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Target className="w-32 h-32 text-accent" />
                    </div>

                    {!submitted ? (
                        <div>
                            {!showStep4 ? (
                                <>
                                    <div className="flex items-center gap-4 mb-12">
                                        {steps.map((_, i) => (
                                            <div
                                                key={i}
                                                className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${i <= currentStep ? "bg-accent" : "bg-white/10"
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentStep}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-8"
                                        >
                                            {(() => {
                                                const StepIcon = steps[currentStep].icon;
                                                return (
                                                    <div className="flex items-center gap-4 text-accent uppercase tracking-widest font-black text-sm">
                                                        <StepIcon className="w-5 h-5" />
                                                        Step {currentStep + 1}
                                                    </div>
                                                );
                                            })()}

                                            <div>
                                                <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase">{steps[currentStep].title}</h2>
                                                <p className="text-muted-foreground text-lg">{steps[currentStep].description}</p>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {steps[currentStep].fields.map((field) => (
                                                    <button
                                                        key={field}
                                                        onClick={() => handleSelect(field)}
                                                        className={`p-6 rounded-2xl border transition-all text-left font-bold ${selections[currentStep] === field
                                                            ? "bg-accent border-accent text-accent-foreground shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                                                            : "bg-white/5 border-white/10 hover:border-accent/50 text-foreground"
                                                            }`}
                                                    >
                                                        {field}
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>

                                    {currentStep > 0 && (
                                        <button
                                            onClick={() => setCurrentStep(prev => prev - 1)}
                                            className="mt-12 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
                                        >
                                            Back to previous step
                                        </button>
                                    )}
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="space-y-8"
                                >
                                    <div className="flex items-center gap-4 text-accent uppercase tracking-widest font-black text-sm">
                                        <MessageSquare className="w-5 h-5" />
                                        Step 4
                                    </div>

                                    <div>
                                        <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase">Final Details</h2>
                                        <p className="text-muted-foreground text-lg">Tell us a bit about yourself.</p>
                                    </div>

                                    {errorMessage && (
                                        <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-center gap-3 text-red-500">
                                            <AlertCircle className="w-5 h-5 shrink-0" />
                                            <p className="text-sm font-medium">{errorMessage}</p>
                                        </div>
                                    )}

                                    <form onSubmit={handleFinalSubmit} className="space-y-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest">Name</label>
                                            <input
                                                id="name"
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-accent outline-none transition-colors"
                                                placeholder="Your Name"
                                                required
                                                disabled={isSending}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest">Email</label>
                                            <input
                                                id="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-accent outline-none transition-colors"
                                                placeholder="your@email.com"
                                                required
                                                disabled={isSending}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="description" className="text-sm font-bold uppercase tracking-widest">Project Description</label>
                                            <textarea
                                                id="description"
                                                value={formData.description}
                                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-accent outline-none transition-colors min-h-[120px]"
                                                placeholder="Tell us more about your needs..."
                                                required
                                                disabled={isSending}
                                            />
                                        </div>

                                        <div className="flex gap-4 pt-4">
                                            <button
                                                type="button"
                                                onClick={() => setShowStep4(false)}
                                                disabled={isSending}
                                                className="px-8 py-4 rounded-xl border border-white/10 hover:bg-white/5 font-bold uppercase tracking-widest transition-colors disabled:opacity-50"
                                            >
                                                Back
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={!isStep4Valid || isSending}
                                                className={`flex-1 px-8 py-4 rounded-xl font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${isStep4Valid && !isSending
                                                    ? "bg-accent text-accent-foreground shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
                                                    : "bg-white/5 text-muted-foreground cursor-not-allowed"
                                                    }`}
                                            >
                                                {isSending ? (
                                                    <>
                                                        <Loader2 className="w-5 h-5 animate-spin" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    "Submit Inquiry"
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </motion.div>
                            )}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-12"
                        >
                            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(37,99,235,0.5)]">
                                <CheckCircle2 className="w-10 h-10 text-accent-foreground" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">Submission Logged.</h2>
                            <p className="text-muted-foreground text-xl max-w-xl mx-auto mb-12">
                                Our system is analyzing your constraints. A partner will reach out within 24 hours to schedule a deep-dive diagnostic.
                            </p>
                            <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent bg-accent/10 px-6 py-3 rounded-full border border-accent/20">
                                <span className="w-2 h-2 rounded-full bg-accent animate-ping" /> Analyzing Friction Points
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}
