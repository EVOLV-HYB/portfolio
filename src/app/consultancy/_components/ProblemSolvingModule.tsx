"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, Search, Target } from "lucide-react";

const steps = [
  {
    id: 0,
    title: "Diagnostic Deep Dive",
    subtitle: "Deconstruction",
    description: "We don't guess. We relentlessly deconstruct your operational context to identify the root constraint choking your growth.",
    icon: Search,
    color: "from-blue-500/20 to-cyan-500/20",
    accent: "text-blue-400"
  },
  {
    id: 1,
    title: "Strategic Roadmap",
    subtitle: "Reconstruction",
    description: "Once the root cause is isolated, we engineer a first-principles bridge from your current state to your objective.",
    icon: Target,
    color: "from-purple-500/20 to-pink-500/20",
    accent: "text-purple-400"
  },
  {
    id: 2,
    title: "Systemic Execution",
    subtitle: "Acceleration",
    description: "Strategy is useless without velocity. We deploy the systems, tech, and workflows to execute at scale.",
    icon: CheckCircle2,
    color: "from-emerald-500/20 to-teal-500/20",
    accent: "text-emerald-400"
  }
];

export default function ProblemSolvingModule() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 px-6 border-t border-white/5 bg-black/40">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-16 items-center">

          {/* Left: Narrative Control */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                Built on <br />
                <span className="text-accent underline decoration-4 underline-offset-8">First Principles</span>.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Most agencies apply templates. We apply physics.
                We break your problem down to its atomic truths and rebuild a custom solution.
              </p>
            </motion.div>

            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden ${activeStep === step.id
                    ? "bg-accent/5 border-accent/20"
                    : "bg-white/5 border-white/5 hover:border-white/10"
                    }`}
                >
                  <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${activeStep === step.id ? "bg-accent" : "bg-transparent"
                    }`} />

                  <div className="flex items-start gap-4">
                    <div className={`mt-1 p-2 rounded-lg transition-colors ${activeStep === step.id ? "bg-accent/10 text-accent" : "bg-white/5 text-muted-foreground"
                      }`}>
                      <step.icon className="w-5 h-5" />
                    </div>

                    <div>
                      <h3 className={`text-lg font-bold transition-colors ${activeStep === step.id ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                        }`}>
                        {step.title}
                      </h3>
                      <AnimatePresence>
                        {activeStep === step.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="pt-2 text-sm text-muted-foreground leading-relaxed">
                              {step.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual State Machine */}
          <div className="flex-1 w-full aspect-square md:aspect-auto md:h-[600px] relative perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl blur-2xl" />

            <div className="relative w-full h-full bg-card/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center p-12">
              <div className="absolute inset-0 grid-pattern opacity-20" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 1.1, rotateY: -10 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 text-center"
                >
                  <div className={`w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-tr ${steps[activeStep].color} flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.5)]`}>
                    {(() => {
                      const Icon = steps[activeStep].icon;
                      return <Icon className="w-12 h-12 text-white" />;
                    })()}
                  </div>
                  <h3 className="text-4xl font-black uppercase tracking-widest mb-4">
                    {steps[activeStep].subtitle}
                  </h3>
                  <div className="h-1 w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto" />
                </motion.div>
              </AnimatePresence>

              {/* Animated Particles / Chaos Representation */}
              {activeStep === 0 && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: Math.random() * 400 - 200, y: Math.random() * 400 - 200, opacity: 0 }}
                      animate={{
                        x: Math.random() * 400 - 200,
                        y: Math.random() * 400 - 200,
                        opacity: [0, 0.5, 0],
                        scale: [0, 1.5, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
                      className="absolute left-1/2 top-1/2 w-2 h-2 bg-red-500/30 rounded-full blur-sm"
                    />
                  ))}
                </div>
              )}

              {activeStep === 1 && (
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-dashed border-accent/20 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-accent/20 rounded-full"
                  />
                </div>
              )}

              {activeStep === 2 && (
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 1.5 }}
                    className="absolute left-1/2 top-0 w-[1px] bg-emerald-500/50"
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5 }}
                    className="absolute top-1/2 left-0 h-[1px] bg-emerald-500/50"
                  />
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
