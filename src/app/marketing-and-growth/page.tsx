"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useVelocity } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { VerticalJourneyLine } from "@/app/marketing-and-growth/_components/VerticalJourneyLine";
import { PhilosophyGlow } from "@/app/marketing-and-growth/_components/PhilosophyGlow";
import { MarketingGallery } from "@/app/marketing-and-growth/_components/MarketingGallery";
import { RoleConstellation } from "@/app/marketing-and-growth/_components/RoleConstellation";
import ContentCTA from "@/components/shared/ContentCTA";
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Button({ children, variant = "primary", className, glow = false, spark = false, onClick, ...props }: { children: React.ReactNode; variant?: "primary" | "secondary"; className?: string; glow?: boolean; spark?: boolean; onClick?: () => void;[key: string]: any }) {
  const [sparks, setSparks] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleClick = (e: React.MouseEvent) => {
    if (spark) {
      const rect = e.currentTarget.getBoundingClientRect();
      const newSparks = Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }));
      setSparks(prev => [...prev, ...newSparks]);
      setTimeout(() => setSparks([]), 600);
    }
    onClick?.();
  };

  const baseClasses = "px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95 relative overflow-hidden";
  const variants = {
    primary: "bg-accent text-accent-foreground hover:bg-accent/90",
    secondary: "bg-transparent border border-white/20 text-foreground hover:bg-white/10"
  };

  return (
    <motion.button
      className={cn(baseClasses, variants[variant], glow && "hover:shadow-lg hover:shadow-accent/50", className)}
      onClick={handleClick}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
      {sparks.map(spark => (
        <motion.div
          key={spark.id}
          className="absolute w-1 h-1 bg-accent rounded-full"
          initial={{ x: spark.x, y: spark.y, scale: 0, opacity: 1 }}
          animate={{ x: spark.x + (Math.random() - 0.5) * 50, y: spark.y + (Math.random() - 0.5) * 50, scale: 1, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      ))}
    </motion.button>
  );
}

function Card({ children, className, interactive = false, magnetic = false, onHoverStart, onHoverEnd, ...props }: { children: React.ReactNode; className?: string; interactive?: boolean; magnetic?: boolean; onHoverStart?: () => void; onHoverEnd?: () => void;[key: string]: any }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!magnetic) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left - rect.width / 2, y: e.clientY - rect.top - rect.height / 2 });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [magnetic]);

  const cardContent = (
    <div ref={cardRef} className={cn("glass p-6 rounded-xl border border-white/5 transition-all duration-300", interactive && "hover:shadow-lg hover:shadow-accent/20 hover:border-accent/20", className)}>
      {children}
    </div>
  );

  if (interactive) {
    return (
      <motion.div
        whileHover={{ rotateX: 5, rotateY: 5, scale: 1.02, y: -10 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformStyle: "preserve-3d", x: magnetic ? mousePos.x * 0.1 : 0, y: magnetic ? mousePos.y * 0.1 : 0 }}
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
        {...props}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
}

function TypewriterTitle() {
  const segments = [
    { text: "We Build " },
    { text: "Systems", highlight: true },
    { text: " That Help Ideas, Businesses & Institutions " },
    { text: "Grow", highlight: true }
  ];

  const [displayText, setDisplayText] = useState<{ text: string, highlight?: boolean }[]>([]);
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) return;

    const timeout = setTimeout(() => {
      if (currentSegmentIndex < segments.length) {
        const segment = segments[currentSegmentIndex];

        if (currentCharIndex < segment.text.length) {
          // Add next char
          setDisplayText(prev => {
            const newPrev = [...prev];
            if (newPrev[currentSegmentIndex]) {
              newPrev[currentSegmentIndex] = {
                ...newPrev[currentSegmentIndex],
                text: segment.text.slice(0, currentCharIndex + 1)
              };
            } else {
              newPrev[currentSegmentIndex] = {
                ...segment,
                text: segment.text.slice(0, currentCharIndex + 1)
              };
            }
            return newPrev;
          });
          setCurrentCharIndex(prev => prev + 1);
        } else {
          // Move to next segment
          setCurrentSegmentIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }
      } else {
        setIsTyping(false);
      }
    }, 50 + Math.random() * 30); // Random typing speed

    return () => clearTimeout(timeout);
  }, [currentSegmentIndex, currentCharIndex, isTyping, segments]);

  return (
    <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight min-h-[1.2em]">
      {displayText.map((segment, i) => (
        <span
          key={i}
          className={cn(segment.highlight && "bg-linear-to-r from-accent to-white bg-clip-text text-transparent")}
        >
          {segment.text}
        </span>
      ))}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-2 md:w-4 h-[0.8em] bg-accent ml-1 align-baseline"
      />
    </h1>
  );
}

function DecoderText({ text, trigger }: { text: string; trigger: number }) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

  useEffect(() => {
    let iteration = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(() =>
        text.split("").map((letter, index) => {
          if (index < iteration) {
            return text[index];
          }
          return chars[Math.floor(Math.random() * 26)]; // Only use letters for cleaner look
        }).join("")
      );

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, 30);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [trigger, text]);

  return <span>{displayText}</span>;
}

function HeroTextFX({ text }: { text: string }) {
  const [trigger, setTrigger] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const textRef = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const velocityScale = useTransform(scrollVelocity, [-1000, 1000], [0.98, 1.02]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTrigger(prev => prev + 1);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getFocusStyle = (index: number) => {
    if (!textRef.current) return {};
    const rect = textRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.sqrt((mousePos.x - centerX) ** 2 + (mousePos.y - centerY) ** 2);
    const opacity = Math.max(0.7, 1 - distance / 300);
    return { opacity };
  };

  const words = text.split(' ');

  return (
    <motion.h1
      ref={textRef}
      className="text-6xl md:text-8xl font-bold mb-8 leading-tight cursor-pointer"
      style={{ scale: velocityScale }}
      onHoverStart={() => setTrigger(prev => prev + 1)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={cn("inline-block mr-4", (word === 'Systems' || word === 'Grow') && "bg-linear-to-r from-accent to-white bg-clip-text text-transparent")}
          style={getFocusStyle(i)}
        >
          {word === 'Systems' || word === 'Grow' ? (
            <DecoderText text={word} trigger={trigger} />
          ) : (
            word
          )}
        </motion.span>
      ))}
    </motion.h1>
  );
}

function StatCard({ label, value, trend, trendUp = true }: { label: string; value: string; trend: string; trendUp?: boolean }) {
  return (
    <Card className="flex flex-col justify-between h-full min-h-[180px]" interactive>
      <div className="flex justify-between items-start mb-4">
        <div className="text-4xl font-bold text-foreground">{value}</div>
        <div className={cn("text-xs px-2 py-1 rounded-full border", trendUp ? "bg-green-500/10 text-green-500 border-green-500/20" : "bg-accent/10 text-accent border-accent/20")}>
          {trend}
        </div>
      </div>
      <div>
        <h4 className="font-bold text-muted-foreground uppercase tracking-wider text-xs mb-1">{label}</h4>
        <div className="w-full h-1 bg-white/5 rounded-full mt-4 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="h-full bg-accent"
          />
        </div>
      </div>
    </Card>
  );
}




function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [intensity, setIntensity] = useState(0.03);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      if (target?.closest('button, a, .interactive')) {
        setIntensity(0.1);
      } else {
        setIntensity(0.03);
      }
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(37, 99, 235, ${intensity}), transparent 70%)`
      }}
    />
  );
}

function BackgroundTypography() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.1, 0]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center pointer-events-none z-0"
      style={{ opacity }}
    >
      <div className="text-[20rem] font-bold text-accent/5 select-none transform -translate-y-1/2">
        GROWTH
      </div>
    </motion.div>
  );
}

function StrategyCard({ title, outcome, steps, insight }: { title: string; outcome: string; steps: string[]; insight: string }) {
  const [showInsight, setShowInsight] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleHoverStart = () => {
    timeoutRef.current = setTimeout(() => setShowInsight(true), 1200);
  };

  const handleHoverEnd = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowInsight(false);
  };

  return (
    <Card interactive className="group relative overflow-hidden" onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd}>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-accent mb-4">{outcome}</p>
      <ul className="space-y-2">
        {steps.map((step, i) => (
          <motion.li
            key={i}
            className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100"
            initial={{ y: 10 }}
            whileHover={{ y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            • {step}
          </motion.li>
        ))}
      </ul>
      {showInsight && (
        <motion.div
          className="absolute inset-0 bg-black/80 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-white text-center">{insight}</p>
        </motion.div>
      )}
    </Card>
  );
}

export default function MarketingPage() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <CursorGlow />
      <BackgroundTypography />

      {/* Background Grid */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" />
      </div>

      {/* Main Hero */}
      <section className="min-h-screen flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl px-6"
        >
          <div className="text-accent text-sm font-bold tracking-widest mb-6">EVOLV INNOVATION AGENCY</div>
          <TypewriterTitle />
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            We don't sell services. We solve operational friction and growth bottlenecks using a systematic, cross-domain approach that unites strategy, technology, and execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="#contact">
              <Button glow spark>Grow with us</Button>
            </Link>
            <Link href="#how-we-work">
              <Button variant="secondary">View Our Strategies</Button>
            </Link>
          </div>
        </motion.div>
      </section>


      {/* The Problem */}
      <section className="py-20 px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 {...fadeInUp} className="text-5xl font-bold text-center mb-12">
            Most Problems Are Not Isolated.
          </motion.h2>
          <motion.p {...fadeInUp} className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Businesses face growth issues, poor digital presence, broken systems. Most agencies solve only one piece. Real problems are connected.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Branding without growth", desc: "Pretty logos that don't drive revenue" },
              { title: "Marketing without systems", desc: "Ads that burn budget without process" },
              { title: "Tech without strategy", desc: "Apps built without business context" },
              { title: "Ideas without execution", desc: "Vision trapped in PowerPoint" }
            ].map((item, i) => (
              <motion.div key={i} {...fadeInUp}>
                <Card interactive className="interactive">
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Core Philosophy */}
      <section className="py-10 px-6 bg-muted/20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 {...fadeInUp} className="text-5xl font-bold mb-8">
            We Don't Ask "What Service Do You Want?"
          </motion.h2>
          <motion.div {...fadeInUp} className="text-2xl font-bold text-accent mb-6">
            We ask: "What problem are you facing?"
          </motion.div>
          <motion.p {...fadeInUp} className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            This agency acts as a complete solution partner. Focused on long-term impact. Works as part of the client's organization.
          </motion.p>
          <motion.div {...fadeInUp}>
            <PhilosophyGlow />
          </motion.div>
        </motion.div>
      </section>

      {/* How We Work */}
      <section id="how-we-work" className="py-10 px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 {...fadeInUp} className="text-5xl font-bold text-center mb-16">
            Our Problem-to-Solution Framework
          </motion.h2>
          <VerticalJourneyLine
            steps={[
              { id: 'step1', stepNumber: 1, title: 'Identify systemic friction', description: 'Pinpoint operational bottlenecks' },
              { id: 'step2', stepNumber: 2, title: 'Diagnose root constraints', description: 'Analyze underlying limitations' },
              { id: 'step3', stepNumber: 3, title: 'Design integrated strategy', description: 'Create cross-domain solutions' },
              { id: 'step4', stepNumber: 4, title: 'Build & execute systems', description: 'Implement with precision' },
              { id: 'step5', stepNumber: 5, title: 'Optimize for scale', description: 'Ensure sustainable growth' },
            ]}
          />
        </motion.div>
      </section>

      {/* Growth Strategies */}
      <section id="growth" className="py-20 px-6 bg-muted/20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 {...fadeInUp} className="text-5xl font-bold text-center mb-16">
            How We Market for Growth
          </motion.h2>
          <MarketingGallery />
        </motion.div>
      </section>
      <section className="py-20 px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 {...fadeInUp} className="text-5xl font-bold mb-12">
            Who We Work With
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { title: "Local & medium businesses", desc: "Scaling operations digitally", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { title: "Startups & entrepreneurs", desc: "MVP to market fit", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              { title: "Colleges & institutions", desc: "Modernizing education systems", icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
              { title: "Students & creators", desc: "Personal brand growth", icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" },
              { title: "Organizations & communities", desc: "Event & member management", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
              { title: "Enterprise & Platforms", desc: "Complex system integration", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }
            ].map((item, i) => (
              <motion.div key={i} {...fadeInUp}>
                <Card interactive magnetic className="interactive relative h-full flex flex-col p-6 group">
                  {/* Background Grid Pattern */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]" />

                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-accent opacity-0 scale-95 pointer-events-none"
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="mb-4 text-accent/50 group-hover:text-accent transition-colors">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                  </div>
                  <p className="font-bold text-lg mb-2">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.p {...fadeInUp} className="text-muted-foreground italic">
            If you have a real problem, we're interested.
          </motion.p>
        </motion.div>
      </section>

      {/* Team & Culture */}
      <section className="py-10 px-6 bg-muted/20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 {...fadeInUp} className="text-5xl font-bold mb-8">
            Built by Builders
          </motion.h2>

          <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-12 animate-pulse" />

          <RoleConstellation />
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-stretch"
        >
          <motion.div {...fadeInUp} className="h-full">
            <Card interactive className="h-full relative overflow-hidden group p-10 flex flex-col justify-between">
              <div className="absolute inset-0 bg-linear-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <h2 className="text-4xl font-bold mb-6 relative z-10 flex items-center gap-3">
                  Vision
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                </h2>
                <div className="w-12 h-1 bg-accent mb-8" />
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed relative z-10">
                To become a universal problem-solving and innovation organization that helps individuals and organizations transform ideas, systems, and operations into scalable solutions.
              </p>
            </Card>
          </motion.div>
          <motion.div {...fadeInUp} className="h-full">
            <Card interactive className="h-full relative overflow-hidden group p-10 flex flex-col justify-between">
              <div className="absolute inset-0 bg-linear-to-bl from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <h2 className="text-4xl font-bold mb-6 relative z-10 flex items-center gap-3">
                  Mission
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                </h2>
                <div className="w-12 h-1 bg-accent mb-8" />
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed relative z-10">
                Help growth through technology & creativity. Solve real operational problems. Build long-term digital value. Bridge ideas and execution. Operate across domains. Deliver scalable solutions with measurable impact.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Final CTA */}

      <ContentCTA />


    </div>
  );
}
