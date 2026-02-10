"use client";


import { ReactNode, version } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
    return (
        <ReactLenis root options={{
            lerp: 0.1,
            duration: 1.5,
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        }}>
            {children as any}
        </ReactLenis>
    );
}
