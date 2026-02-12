"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Users, Heart, Share2, BarChart3 } from "lucide-react";
import HybridIntelligenceField from "./HybridIntelligenceField";
import ScrambleText from "@/components/shared/ScrambleText";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 px-6 overflow-hidden bg-background">
      {/* Background Abstract Visuals */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <HybridIntelligenceField />

        {/* Floating Cards / Nodes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 right-[10%] w-64 h-40 bg-card border border-white/5 rounded-2xl p-4 rotate-12 pointer-events-none"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-accent/20" />
            <div className="h-2 w-20 bg-white/10 rounded" />
          </div>
          <div className="h-2 w-full bg-white/5 rounded mb-2" />
          <div className="h-2 w-3/4 bg-white/5 rounded" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute bottom-1/3 left-[5%] w-48 h-48 bg-card border border-white/5 rounded-full flex items-center justify-center -rotate-6 pointer-events-none"
        >
          <Users className="w-16 h-16 text-accent/40" />
        </motion.div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      </div>

      <div className="container relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest"
          >
            Social & Community Engineering
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1]">
            <span className="block mb-2">We build social</span>
            <ScrambleText
              text="ecosystems"
              className="text-accent text-glow block"
              delay={0.5}
            />
            <span className="block text-3xl md:text-5xl text-muted-foreground mt-2 font-bold">not just content calendars.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
            We design, produce, and manage social and community systems that attract the right people, keep them engaged, and turn them into long-term advocates.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-accent-foreground px-8 py-4 rounded-xl text-lg font-bold flex items-center gap-2 hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer"
            >
              Let's Grow Together
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        {/* Right Abstract Visual */}
        <div className="relative h-[400px] lg:h-[600px] w-full hidden lg:block">
          {/* Central Node */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="w-32 h-32 bg-card border border-accent/30 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.2)]">
              <Share2 className="w-12 h-12 text-accent" />
            </div>
            {/* Orbiting Elements */}
            <div className="absolute inset-0 -m-8 border border-dashed border-white/10 rounded-full animate-spin-slow" />
          </motion.div>

          {/* Satellite Nodes */}
          {[
            { icon: MessageCircle, color: "text-blue-400", pos: "top-10 left-10", delay: 0 },
            { icon: Users, color: "text-purple-400", pos: "bottom-20 right-10", delay: 1 },
            { icon: Heart, color: "text-red-400", pos: "top-20 right-0", delay: 2 },
            { icon: BarChart3, color: "text-green-400", pos: "bottom-10 left-20", delay: 3 },
          ].map((item, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5 + i, delay: item.delay, ease: "easeInOut" }}
              className={`absolute ${item.pos} bg-card border border-white/5 p-4 rounded-2xl shadow-lg z-10 flex items-center gap-3`}
            >
              <item.icon className={`w-6 h-6 ${item.color}`} />
              <div className="w-12 h-2 bg-white/10 rounded-full" />
            </motion.div>
          ))}

          {/* Chat Bubbles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-1/3 left-0 bg-accent text-accent-foreground px-4 py-2 rounded-t-xl rounded-br-xl text-sm font-bold shadow-lg transform -rotate-12"
          >
            Engagement +400%
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-1/4 right-0 bg-card border border-white/10 px-4 py-2 rounded-t-xl rounded-bl-xl text-sm font-bold shadow-lg transform rotate-6"
          >
            Community Active 🟢
          </motion.div>
        </div>
      </div>
    </section>
  );
}
