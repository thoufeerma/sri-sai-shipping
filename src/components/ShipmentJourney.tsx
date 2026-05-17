"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Truck, FileCheck, Warehouse, Ship, Globe, PackageCheck } from "lucide-react";

const STAGES = [
  { icon: Truck,       label: "Pickup",               desc: "Cargo collected from your premises with verified documentation and packaging inspection." },
  { icon: FileCheck,   label: "Customs Clearance",    desc: "Expert handling of all export declarations, HS codes, compliance checks, and duty assessments." },
  { icon: Warehouse,   label: "Warehousing",          desc: "Secure interim storage, consolidation, and container stuffing at our bonded facility in Cochin." },
  { icon: Ship,        label: "Freight Forwarding",   desc: "Booking with premier sea and air carriers, vessel assignment, and bill of lading issuance." },
  { icon: Globe,       label: "International Transit",desc: "Real-time cargo tracking across international waters and airways with full-chain visibility." },
  { icon: PackageCheck,label: "Destination Delivery", desc: "Import customs clearance at destination, inland haulage, and final mile door-to-door delivery." },
];

export default function ShipmentJourney() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // Line fills up completely
      tl.to(".sj-fill",  { scaleX: 1, ease: "none" }, 0);
      // Ship moves from left to right end
      tl.to(".sj-ship",  { left: "100%", xPercent: -100, ease: "none" }, 0);
      tl.to(".sj-trail", { opacity: 0.8, ease: "none" }, 0);

      // We have 6 stages (0 to 5).
      STAGES.forEach((_, i) => {
        const prog = i / (STAGES.length - 1);
        
        // Highlight active dot
        tl.to(`.sj-dot-${i}`, { 
          backgroundColor: "#ffffff", 
          scale: 1.5, 
          boxShadow: "0 0 16px rgba(255,255,255,0.8)",
          ease: "power2.out", 
          duration: 0.1 
        }, prog - 0.05);

        // Highlight active card
        tl.to(`.sj-card-${i}`, { 
          borderColor: "rgba(255,255,255,0.3)", 
          backgroundColor: "rgba(255,255,255,0.06)",
          opacity: 1,
          y: -6,
          ease: "power2.out", 
          duration: 0.1 
        }, prog - 0.05);

        // Dim previous dot and card
        if (i > 0) {
          tl.to(`.sj-dot-${i - 1}`, { 
            scale: 1, 
            boxShadow: "none", 
            backgroundColor: "rgba(255,255,255,0.4)",
            duration: 0.1 
          }, prog - 0.05);

          tl.to(`.sj-card-${i - 1}`, { 
            borderColor: "rgba(255,255,255,0.05)", 
            backgroundColor: "rgba(255,255,255,0.02)",
            opacity: 0.6,
            y: 0,
            duration: 0.1 
          }, prog - 0.05);
        }
      });
    }, wrapRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrapRef} className="relative bg-[#070809]" style={{ height: "240vh" }}>
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Top and Bottom ambient gradients */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full relative z-10">
          
          {/* Header */}
          <div className="mb-10 md:mb-16 text-center">
            <p className="text-[10px] md:text-[11px] tracking-[0.4em] text-white/40 uppercase mb-2 md:mb-3 font-medium">The Shipment Journey</p>
            <h2 className="text-3xl md:text-5xl font-medium text-white/90 tracking-tight">
              Origin to <span className="text-white/40">Destination.</span>
            </h2>
          </div>

          {/* ── TRACK ── */}
          <div className="relative mb-10 md:mb-16 px-2 md:px-8" ref={trackRef}>
            <div className="h-[2px] bg-white/[0.06] w-full relative rounded-full">
              {/* Fill */}
              <div className="sj-fill absolute inset-0 origin-left bg-gradient-to-r from-white/10 via-white/50 to-white/90 rounded-full" style={{ transform: "scaleX(0)" }} />

              {/* Ship */}
              <div className="sj-ship absolute top-1/2 -translate-y-1/2 z-20" style={{ left: "0%", transform: "translate(-50%, -50%)" }}>
                <div className="sj-trail absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-8 opacity-0 pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(255,255,255,0.4), transparent 70%)", filter: "blur(6px)" }} />
                
                <svg width="48" height="24" viewBox="0 0 80 28" fill="none" className="drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">
                  <path d="M2 16 L8 11 L68 11 L77 16 L74 22 L5 22 Z" fill="rgba(255,255,255,1)" />
                  <rect x="18" y="6" width="7" height="5" rx="0.4" fill="rgba(255,255,255,0.8)" />
                  <rect x="27" y="6" width="7" height="5" rx="0.4" fill="rgba(255,255,255,0.6)" />
                  <rect x="36" y="6" width="7" height="5" rx="0.4" fill="rgba(255,255,255,0.7)" />
                  <rect x="45" y="6" width="7" height="5" rx="0.4" fill="rgba(255,255,255,0.5)" />
                  <rect x="54" y="6" width="7" height="5" rx="0.4" fill="rgba(255,255,255,0.6)" />
                  <rect x="6" y="3" width="13" height="8" rx="1" fill="rgba(255,255,255,0.9)" />
                  <rect x="8" y="1" width="8" height="3.5" rx="0.5" fill="rgba(255,255,255,0.8)" />
                </svg>
              </div>

              {/* Stage dots & labels */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between z-10 pointer-events-none">
                {STAGES.map((s, i) => (
                  <div key={i} className="flex flex-col items-center justify-center relative">
                    <div
                      className={`sj-dot-${i} w-3 h-3 rounded-full border-2 border-[#070809] absolute`}
                      style={{ backgroundColor: "rgba(255,255,255,0.15)", transform: "scale(1)" }}
                    />
                    {/* Label above dot — hidden on small screens to prevent overflow */}
                    <div className="absolute bottom-6 w-20 md:w-32 text-center hidden sm:block">
                       <p className="text-[9px] md:text-[11px] font-medium text-white/50 leading-tight">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stage cards grid */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 pt-2">
            {STAGES.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <div
                  key={i}
                  className={`sj-card-${i} rounded-xl md:rounded-2xl border border-white/[0.05] p-4 md:p-6 lg:p-8 backdrop-blur-xl transition-none relative overflow-hidden group`}
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    opacity: i === 0 ? 1 : 0.4,
                    transform: "translateY(0px)",
                  }}
                >
                  {/* Subtle gradient glow inside card */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <p className="text-[10px] text-white/30 tracking-widest font-mono uppercase">Stage 0{i + 1}</p>
                    </div>
                    <h4 className="text-lg font-medium text-white/90 mb-3">{stage.label}</h4>
                    <p className="text-sm text-white/50 leading-relaxed font-light">{stage.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
