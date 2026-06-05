"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function HoverShinyText({ children }: { children: React.ReactNode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const textRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!textRef.current) return;
    const rect = textRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <strong
      ref={textRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative font-medium inline-block cursor-default group"
    >
      {/* Base Gold Text */}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 drop-shadow-sm">
        {children}
      </span>
      
      {/* Shiny Highlight that follows mouse */}
      <motion.span
        className="absolute inset-0 text-transparent bg-clip-text pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 100%)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.span>
    </strong>
  );
}
