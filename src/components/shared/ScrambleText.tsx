"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrambleTextProps {
    text: string;
    className?: string;
    scrambleSpeed?: number;
    revealSpeed?: number;
    delay?: number;
    characterSet?: string;
}

const DEFAULT_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

export default function ScrambleText({
    text,
    className = "",
    scrambleSpeed = 50,
    revealSpeed = 70,
    delay = 0,
    characterSet = DEFAULT_CHARS,
}: ScrambleTextProps) {
    const [displayText, setDisplayText] = useState("");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isInView && !isAnimating) {
            const startTimeout = setTimeout(() => {
                setIsAnimating(true);
                let iterations = 0;

                const interval = setInterval(() => {
                    setDisplayText((prev) =>
                        text
                            .split("")
                            .map((char, index) => {
                                if (index < iterations) {
                                    return text[index];
                                }
                                if (char === " ") return " ";
                                return characterSet[Math.floor(Math.random() * characterSet.length)];
                            })
                            .join("")
                    );

                    if (iterations >= text.length) {
                        clearInterval(interval);
                    }

                    iterations += 1 / (revealSpeed / 10); // Adjusting iteration increment for speed
                }, scrambleSpeed);

                return () => clearInterval(interval);
            }, delay * 1000);

            return () => clearTimeout(startTimeout);
        }
    }, [isInView, text, scrambleSpeed, revealSpeed, delay, characterSet, isAnimating]);

    return (
        <span ref={ref} className={className}>
            {displayText}
        </span>
    );
}
