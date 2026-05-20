"use client";

import { motion } from "framer-motion";
import { ArrowRight, Anchor } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AmbientGradient from "./AmbientGradient";

// ─── SUBCOMPONENT: SECTION HEADER ───
export function SectionHeader() {
  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-2"
      >
        <span className="w-1 h-5 bg-[#1E40AF] rounded-full" />
        <span className="text-xs font-semibold tracking-[0.2em] text-[#1E40AF] uppercase">
          THE INDUSTRY AUTHORITY
        </span>
      </motion.div>
 
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 uppercase leading-[1.05]"
      >
        REDEFINING<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E40AF] to-[#2563EB]">
          GLOBAL TRADE
        </span>
      </motion.h2>
    </div>
  );
}

// ─── SUBCOMPONENT: TRUST INDICATOR ───
export function TrustIndicator() {
  return (
    <div className="flex -space-x-3 items-center">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="w-8 h-8 rounded-full border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-655 ring-1 ring-slate-200/50"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      ))}
      <div className="w-8 h-8 rounded-full border border-slate-255 bg-[#1E40AF] flex items-center justify-center text-[10px] font-bold text-white ring-1 ring-slate-200/50">
        +50
      </div>
    </div>
  );
}

// ─── SUBCOMPONENT: CTA ROW ───
export function CTARow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      className="flex flex-wrap items-center gap-6 sm:gap-10 pt-4"
    >
      <Link
        href="/about"
        className="group inline-flex items-center gap-2 text-slate-900 hover:text-[#1E40AF] transition-colors text-sm font-semibold tracking-wider uppercase border-b border-slate-350 pb-1 hover:border-[#1E40AF]"
      >
        Read Our Heritage
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </Link>

      <TrustIndicator />
    </motion.div>
  );
}

// ─── SUBCOMPONENT: FLOATING INFO CARD ───
export function FloatingInfoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex items-center gap-4 bg-white/90 backdrop-blur-md border border-slate-200/50 p-4 rounded-xl shadow-[0_10px_40px_rgba(15,23,42,0.08)]"
    >
      <div className="bg-[#1E40AF] text-white flex items-center justify-center rounded-lg w-10 h-10 shrink-0 shadow-lg shadow-blue-500/20">
        <Anchor size={18} strokeWidth={2} />
      </div>
      <div className="text-left">
        <h4 className="text-slate-900 font-semibold text-sm">Tier-1 Port Access</h4>
        <p className="text-slate-600 text-xs mt-0.5 leading-normal">
          Direct integration with major global maritime networks.
        </p>
      </div>
    </motion.div>
  );
}

// ─── MAIN SHOWCASE COMPONENT ───
export default function AuthorityShowcase() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-[#F8FAFC] border-b border-slate-200">
      <AmbientGradient />
      
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Side Content */}
        <div className="lg:col-span-7 space-y-6">
          <SectionHeader />

          {/* Highlight/Blockquote section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="border-l border-slate-300 pl-4"
          >
            <p className="text-slate-900 text-lg md:text-xl font-semibold leading-relaxed">
              Based in the historic logistics hub of Cochin, India, Sri Sai Shipping Agencies is not merely a freight forwarder—we are architects of global supply chains.
            </p>
          </motion.div>

          {/* Detailed Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.25 }}
            className="text-slate-700 text-sm md:text-base leading-relaxed"
          >
            For 45+ years since the 1980s, we have flawlessly integrated traditional Indian business values—unshakeable trust, profound respect for cargo, and personalized executive support—with ultra-modern, high-tech logistics infrastructure. Whether managing massive commercial enterprise shipments or highly sensitive traditional devotional items, our execution is characterized by absolute precision and zero-delay compliance.
          </motion.p>

          <CTARow />
        </div>

        {/* Right Side Visual Card */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="border border-slate-200 p-3 rounded-[32px] bg-white/60 backdrop-blur-sm shadow-[0_20px_50px_rgba(15,23,42,0.06)] relative"
          >
            <div className="relative h-[320px] sm:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden glass-shimmer">
              <Image
                src="/cochin.webp"
                alt="High-tech container shipping port represent global trade"
                fill
                quality={90}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-transparent pointer-events-none" />
              
              <FloatingInfoCard />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
