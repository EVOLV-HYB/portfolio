"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface Trail {
    id: string; // unique ID for the trail instance
    startX: number;
    startY: number;
    targetId: string; // The ID of the DOM element to travel to
    timestamp: number;
}

interface CausalityContextType {
    trails: Trail[];
    triggerTrail: (startX: number, startY: number, targetId: string) => void;
}

const CausalityContext = createContext<CausalityContextType | undefined>(undefined);

export function CausalityProvider({ children }: { children: ReactNode }) {
    const [trails, setTrails] = useState<Trail[]>([]);

    const triggerTrail = (startX: number, startY: number, targetId: string) => {
        const id = Math.random().toString(36).substr(2, 9);
        const trail = {
            id,
            startX,
            startY,
            targetId,
            timestamp: Date.now()
        };

        setTrails(prev => [...prev, trail]);

        // Cleanup trail after animation duration (e.g., 2000ms)
        setTimeout(() => {
            setTrails(prev => prev.filter(t => t.id !== id));
        }, 2000);
    };

    return (
        <CausalityContext.Provider value={{ trails, triggerTrail }}>
            {children}
        </CausalityContext.Provider>
    );
}

export function useCausality() {
    const context = useContext(CausalityContext);
    if (!context) {
        throw new Error("useCausality must be used within a CausalityProvider");
    }
    return context;
}
