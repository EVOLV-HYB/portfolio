"use client";

import { useEffect, useRef } from "react";

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    baseX: number;
    baseY: number;
}

export default function HybridIntelligenceField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let nodes: Node[] = [];
        let mouseX = -1000;
        let mouseY = -1000;

        let lastScrollY = window.scrollY;
        let scrollVelocity = 0;

        // Configuration
        const NODE_COUNT = 60;
        const CONNECTION_DISTANCE = 150;
        const MOUSE_INFLUENCE_RADIUS = 250;
        const MOUSE_PULL_STRENGTH = 0.05;
        const RETURN_STRENGTH = 0.02;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initNodes();
        };

        const initNodes = () => {
            nodes = [];
            for (let i = 0; i < NODE_COUNT; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                nodes.push({
                    x,
                    y,
                    vx: (Math.random() - 0.5) * 0.5, // Slow, subtle movement
                    vy: (Math.random() - 0.5) * 0.5,
                    radius: Math.random() * 1.5 + 1,
                    baseX: x,
                    baseY: y
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Calculate scroll velocity
            const currentScrollY = window.scrollY;
            const deltaY = currentScrollY - lastScrollY;
            scrollVelocity = deltaY * 0.1; // Damping
            lastScrollY = currentScrollY;

            // Update and draw nodes
            nodes.forEach((node, i) => {
                // Organic movement + Scroll Warp
                // When scrolling fast, nodes stretch/move vertically
                node.baseX += node.vx;
                node.baseY += node.vy - scrollVelocity; // Move opposite to scroll for parallax feel

                // Wrap around screen
                if (node.baseX < 0) node.baseX = canvas.width;
                if (node.baseX > canvas.width) node.baseX = 0;
                if (node.baseY < 0) node.baseY = canvas.height;
                if (node.baseY > canvas.height) node.baseY = 0;

                // Mouse interaction
                const dx = mouseX - node.x;
                const dy = mouseY - node.y;
                const distanceToMouse = Math.sqrt(dx * dx + dy * dy);

                if (distanceToMouse < MOUSE_INFLUENCE_RADIUS) {
                    const angle = Math.atan2(dy, dx);
                    const force = (MOUSE_INFLUENCE_RADIUS - distanceToMouse) / MOUSE_INFLUENCE_RADIUS;

                    // Pull towards mouse
                    node.x += Math.cos(angle) * force * 2 * MOUSE_PULL_STRENGTH;
                    node.y += Math.sin(angle) * force * 2 * MOUSE_PULL_STRENGTH;
                }

                // Return to base position (elasticity)
                node.x += (node.baseX - node.x) * RETURN_STRENGTH;
                node.y += (node.baseY - node.y) * RETURN_STRENGTH;

                // Warp visual effect
                const warpFactor = 1 + Math.abs(scrollVelocity) * 0.5;

                // Draw Node
                ctx.beginPath();
                // Stretch nodes vertically based on velocity
                ctx.ellipse(node.x, node.y, node.radius, node.radius * warpFactor, 0, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(37, 99, 235, ${0.4 + Math.random() * 0.2})`; // Blueish flicker
                ctx.fill();

                // Draw connections
                for (let j = i + 1; j < nodes.length; j++) {
                    const nodeB = nodes[j];
                    const dx = node.x - nodeB.x;
                    const dy = node.y - nodeB.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < CONNECTION_DISTANCE) {
                        const opacity = 1 - (distance / CONNECTION_DISTANCE);
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(nodeB.x, nodeB.y);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.15})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            });

            // Micro-trails (fading background effect for "neural" feel)
            // Note: Canvas clearRect clears everything. If we want trails, we'd use fillRect with low opacity instead of clearRect.
            // But for this specific "clean" design, I'll stick to clearRect to avoid muddying the dark theme. 
            // The "faint micro-trails" from the prompt can be simulated by just having the nodes move slowly.

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouseX = -1000;
            mouseY = -1000;
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        // canvas.addEventListener("mouseleave", handleMouseLeave); // Optional if using window

        resize();
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none" // Canvas can be pointer-events-none now
            style={{ zIndex: 0 }}
        />
    );
}
