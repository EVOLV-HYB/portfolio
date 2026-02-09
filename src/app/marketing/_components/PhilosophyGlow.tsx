"use client";

import React, { useEffect } from 'react';
import gsap from 'gsap';

// Hook to track pointer and update CSS variables
const useGlowPointer = () => {
    useEffect(() => {
        const update = (e: PointerEvent) => {
            const x = e.clientX;
            const y = e.clientY;
            document.documentElement.style.setProperty('--x', x.toFixed(2));
            document.documentElement.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
            document.documentElement.style.setProperty('--y', y.toFixed(2));
            document.documentElement.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
        };
        document.body.addEventListener('pointermove', update);
        return () => document.body.removeEventListener('pointermove', update);
    }, []);
};

export function PhilosophyGlow() {
    useGlowPointer();

    return (
        <div className="w-full flex justify-center py-32 relative overflow-hidden">
            {/* Styles injected to handle the complex glow logic without external CSS file */}
            <style jsx global>{`
        :root {
          --backdrop: hsl(0 0% 10% / 0.5);
          --radius: 24;
          --border: 2;
          --backup-border: hsl(0 0% 30% / 0.2);
          --size: 400;
          --bg-spot-opacity: 0.16;
          --border-light-opacity: 1;
          --border-spot-opacity: 0.75;
          --base: 220;
          --spread: 500;
        }
        
        [data-glow] {
            background: var(--backdrop);
            border-radius: calc(var(--radius) * 1px);
            position: relative;
            box-shadow: 0 1rem 2rem -1rem rgba(0,0,0,0.5);
        }

        [data-glow]::before {
            content: "";
            position: absolute;
            inset: calc(var(--border) * -1px);
            border-radius: calc(var(--radius) * 1px);
            padding: calc(var(--border) * 1px);
            background: radial-gradient(
                calc(var(--size) * 1px) circle at calc(var(--x) * 1px) calc(var(--y) * 1px),
                hsl(var(--base) 80% 90% / var(--border-light-opacity)),
                transparent
            ),
            radial-gradient(
                calc(var(--size) * 1px) circle at calc(var(--x) * 1px) calc(var(--y) * 1px),
                hsl(var(--base) 80% 90% / var(--border-spot-opacity)),
                transparent
            );
            -webkit-mask:
                linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
        }

        [data-glow] > [data-glow] {
            position: absolute;
            inset: 0;
            background: radial-gradient(
                calc(var(--size) * 1px) circle at calc(var(--x) * 1px) calc(var(--y) * 1px),
                hsl(var(--base) 80% 70% / var(--bg-spot-opacity)),
                transparent
             );
            opacity: 0.5;
            z-index: 0;
        }
      `}</style>

            <article className="card max-w-4xl w-full mx-auto" data-glow>
                <div data-glow></div>
                <div className="relative z-10 p-16 flex flex-col items-center justify-center text-center">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/50">
                        "We integrate into your company and help drive <span className="text-accent">real growth</span>."
                    </h2>
                    <div className="flex gap-4">
                        <div className="h-2 w-20 bg-accent rounded-full animate-pulse" />
                        <div className="h-2 w-4 bg-accent/50 rounded-full" />
                        <div className="h-2 w-2 bg-accent/20 rounded-full" />
                    </div>
                </div>
            </article>
        </div>
    );
}
