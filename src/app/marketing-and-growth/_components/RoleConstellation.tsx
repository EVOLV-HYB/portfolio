"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Role {
    id: string;
    label: string;
    value: string;
    description: string;
    position: { x: number; y: number }; // Percentage-based positioning
    connections: string[]; // IDs of connected roles
}

const roles: Role[] = [
    {
        id: 'Design',
        label: 'Systems Designerss',
        value: 'Plan',
        description: 'Building robust system architectures',
        position: { x: 20, y: 30 },
        connections: ['code', 'scale'],
    },
    {
        id: 'code',
        label: 'Full Stack Devs',
        value: 'Code',
        description: 'Crafting scalable applications',
        position: { x: 80, y: 25 },
        connections: ['arch', 'scale', 'art'],
    },
    {
        id: 'scale',
        label: 'Growth Hackers',
        value: 'Scale',
        description: 'Driving exponential growth',
        position: { x: 75, y: 75 },
        connections: ['arch', 'code', 'art'],
    },
    {
        id: 'art',
        label: 'Creative Directors',
        value: 'Art',
        description: 'Designing compelling experiences',
        position: { x: 25, y: 70 },
        connections: ['code', 'scale'],
    },
];

export function RoleConstellation() {
    const [hoveredRole, setHoveredRole] = useState<string | null>(null);

    const isRelated = (roleId: string) => {
        if (!hoveredRole) return false;
        const hovered = roles.find(r => r.id === hoveredRole);
        return hovered?.connections.includes(roleId) || false;
    };

    return (
        <div className="relative w-full h-[500px] max-w-4xl mx-auto">
            {/* SVG for Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(255, 255, 255, 0.1)" />
                        <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
                        <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
                    </linearGradient>
                </defs>

                {roles.map(role =>
                    role.connections.map(connId => {
                        const connectedRole = roles.find(r => r.id === connId);
                        if (!connectedRole) return null;

                        // Only draw each line once (avoid duplicates)
                        if (role.id > connId) return null;

                        const isHighlighted =
                            hoveredRole === role.id ||
                            hoveredRole === connId ||
                            (hoveredRole && (isRelated(role.id) || isRelated(connId)));

                        return (
                            <motion.line
                                key={`${role.id}-${connId}`}
                                x1={`${role.position.x}%`}
                                y1={`${role.position.y}%`}
                                x2={`${connectedRole.position.x}%`}
                                y2={`${connectedRole.position.y}%`}
                                stroke={isHighlighted ? "url(#lineGradient)" : "rgba(255, 255, 255, 0.05)"}
                                strokeWidth={isHighlighted ? "2" : "1"}
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{
                                    pathLength: 1,
                                    opacity: isHighlighted ? 0.8 : 0.3,
                                }}
                                transition={{
                                    pathLength: { duration: 1.5, ease: "easeInOut" },
                                    opacity: { duration: 0.3 },
                                }}
                            />
                        );
                    })
                )}
            </svg>

            {/* Roles */}
            {roles.map(role => {
                const isHovered = hoveredRole === role.id;
                const isRelatedRole = isRelated(role.id);
                const isActive = hoveredRole !== null;

                return (
                    <motion.div
                        key={role.id}
                        className="absolute cursor-pointer"
                        style={{
                            left: `${role.position.x}%`,
                            top: `${role.position.y}%`,
                            transform: 'translate(-50%, -50%)',
                            zIndex: isHovered ? 20 : 10,
                        }}
                        onHoverStart={() => setHoveredRole(role.id)}
                        onHoverEnd={() => setHoveredRole(null)}
                    >
                        {/* Glow Effect */}
                        {(isHovered || isRelatedRole) && (
                            <motion.div
                                className="absolute inset-0 rounded-full blur-2xl pointer-events-none"
                                style={{
                                    width: '120px',
                                    height: '120px',
                                    left: '50%',
                                    top: '50%',
                                    transform: 'translate(-50%, -50%)',
                                }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: isHovered ? 0.4 : 0.2,
                                    scale: isHovered ? 1.2 : 1,
                                    backgroundColor: isHovered ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.15)',
                                }}
                                transition={{ duration: 0.4 }}
                            />
                        )}

                        {/* Role Circle */}
                        <motion.div
                            className="relative flex flex-col items-center justify-center"
                            animate={{
                                scale: isHovered ? 1.15 : isRelatedRole ? 1.05 : 1,
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <motion.div
                                className="w-20 h-20 rounded-full border-2 flex items-center justify-center relative"
                                animate={{
                                    borderColor: isHovered
                                        ? 'rgb(59, 130, 246)'
                                        : isRelatedRole
                                            ? 'rgba(59, 130, 246, 0.5)'
                                            : 'rgba(255, 255, 255, 0.15)',
                                    backgroundColor: isHovered
                                        ? 'rgba(59, 130, 246, 0.15)'
                                        : isRelatedRole
                                            ? 'rgba(59, 130, 246, 0.05)'
                                            : 'rgba(0, 0, 0, 0.6)',
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <span className="text-2xl font-bold text-accent">{role.value}</span>

                                {/* Pulsing Ring on Hover */}
                                {isHovered && (
                                    <motion.div
                                        className="absolute inset-0 rounded-full border-2 border-accent"
                                        initial={{ scale: 1, opacity: 0.6 }}
                                        animate={{ scale: 1.6, opacity: 0 }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                                    />
                                )}
                            </motion.div>

                            {/* Role Label - Always Visible */}
                            <motion.div
                                className="mt-3 text-center"
                                animate={{
                                    opacity: isActive && !isHovered && !isRelatedRole ? 0.4 : 1,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <p className="text-xs uppercase tracking-widest text-muted-foreground whitespace-nowrap">
                                    {role.label}
                                </p>
                            </motion.div>

                            {/* Description - Appears on Hover */}
                            <motion.div
                                className="absolute top-full mt-6 text-center whitespace-nowrap"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{
                                    opacity: isHovered ? 1 : 0,
                                    y: isHovered ? 0 : -10,
                                }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <p className="text-sm text-white/90 font-medium px-4 py-2 bg-black/60 backdrop-blur-sm rounded-lg border border-accent/20">
                                    {role.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                );
            })}
        </div>
    );
}
