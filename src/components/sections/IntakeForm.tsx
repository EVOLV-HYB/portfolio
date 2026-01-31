"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ClipboardCheck, MessageSquare, Target } from "lucide-react";

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

    const handleSelect = (field: string) => {
        const newSelections = [...selections];
        newSelections[currentStep] = field;
        setSelections(newSelections);

        if (currentStep < steps.length - 1) {
            setTimeout(() => setCurrentStep(prev => prev + 1), 300);
        } else {
            setTimeout(() => setSubmitted(true), 300);
        }
    };

    return (
        <section id="intake" className="py-32 px-6">
            <div className="container max-w-4xl mx-auto">
                <div className="glass rounded-[3rem] p-8 md:p-16 border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Target className="w-32 h-32 text-accent" />
                    </div>

                    {!submitted ? (
                        <div>
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
