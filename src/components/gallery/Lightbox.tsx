"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Mirroring the labels from GalleryCard for consistency
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

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
  const currentImage = images[currentIndex];
  const label = OPERATIONAL_LABELS[currentIndex % OPERATIONAL_LABELS.length];

  const handlePrevious = useCallback(() => {
    onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, images.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, handlePrevious, handleNext]);

  // Prevent background scrolling
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed inset-0 z-[100] flex items-center justify-center"
      >
        {/* Cinematic Backdrop */}
        <div 
          className="absolute inset-0 bg-slate-900/95 backdrop-blur-2xl" 
          onClick={onClose} 
        />
        
        {/* Subtle Ambient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1E40AF]/15 via-transparent to-transparent pointer-events-none" />

        {/* Top Header */}
        <div className="absolute top-0 inset-x-0 p-6 flex justify-between items-center z-50 pointer-events-none">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-white/80 uppercase tracking-[0.2em] text-xs font-semibold">
              {label}
            </span>
          </div>
          
          <button
            onClick={onClose}
            className="pointer-events-auto p-2 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 text-white/70 hover:text-white transition-all duration-300 backdrop-blur-md"
            aria-label="Close lightbox"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Main Image Container */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.96, filter: "blur(4px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="relative z-10 w-full h-full max-w-7xl max-h-[85vh] mx-4 md:mx-12 px-12 md:px-20 flex items-center justify-center"
        >
          <div className="relative w-full h-full">
            <Image
              src={currentImage}
              alt={`Enterprise logistics ${currentIndex + 1}`}
              fill
              quality={100}
              className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </div>
        </motion.div>

        {/* Navigation Controls */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 text-white/70 hover:text-white transition-all duration-300 backdrop-blur-md z-50"
          aria-label="Previous image"
        >
          <ChevronLeft size={28} strokeWidth={1.5} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 text-white/70 hover:text-white transition-all duration-300 backdrop-blur-md z-50"
          aria-label="Next image"
        >
          <ChevronRight size={28} strokeWidth={1.5} />
        </button>

        {/* Bottom Counter */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs font-medium tracking-widest z-50">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
