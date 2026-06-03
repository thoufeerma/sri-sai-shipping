"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const OPERATIONAL_LABELS = [
  "Maritime Operations",
  "Freight Handling",
  "Cargo Movement",
  "Warehouse Logistics",
  "Port Infrastructure",
  "International Shipping",
  "Enterprise Supply Chain",
  "Customs Clearance",
];

interface GalleryCardProps {
  image: string;
  category?: string;
  index: number;
  onClick: () => void;
  className?: string;
}

export default function GalleryCard({ image, category, index, onClick, className = "" }: GalleryCardProps) {
  // Use category or deterministically assign a label based on the index
  const label = category || OPERATIONAL_LABELS[index % OPERATIONAL_LABELS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: (index % 5) * 0.1 }}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-[0_4px_20px_rgba(0,113,156,0.1)] hover:shadow-[0_15px_35px_rgba(0,113,156,0.25)] hover:-translate-y-1 transition-all duration-500 bg-[var(--color-bg-alt)] border border-white/10 theme-card ${className}`}
      onClick={onClick}
    >
      {/* 
        Image layer with subtle tonal consistency (sepia/contrast) 
        This unifies photos of different lighting/qualities into a cohesive cinematic look.
      */}
      <div className="relative w-full h-full pb-[75%] sm:pb-[66%] lg:pb-0">
        <Image
          src={image}
          alt={`Gallery image ${index + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-105 opacity-80 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal"
        />
      </div>
 
      {/* Elegant dark gradient overlay for text readability, only shows smoothly on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-main)]/90 via-[var(--color-bg-main)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Subtle border inner glow */}
      <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
 
      {/* Floating Operational Label */}
      <div className="absolute bottom-0 left-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-cyan)]" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--color-accent-cyan)]">
            {label}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
