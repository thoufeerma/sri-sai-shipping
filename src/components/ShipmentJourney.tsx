"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Truck, FileCheck, Warehouse, Ship, Globe, PackageCheck } from "lucide-react";

const STAGES = [
  { icon: Truck,       label: "Strategic Consultation", desc: "Detailed analysis of cargo specifications, rigorous route optimization modeling, and preventative compliance verification." },
  { icon: FileCheck,   label: "Secure Consolidation",    desc: "Cargo collected and received at our high-tech facilities for precision inventory logging and specialized export packing." },
  { icon: Warehouse,   label: "Customs Clearance Protocol", desc: "Flawless documentation handling and submission by veteran specialists, ensuring 100% border compliance." },
  { icon: Ship,        label: "Freight Forwarding",   desc: "Booking premium tier-1 ocean or air routing, securing guaranteed cargo capacity with premier carriers." },
  { icon: Globe,       label: "International Transit",desc: "Optimized routing featuring 24/7 enterprise-grade monitoring and predictive arrival analytics across oceans and airways." },
  { icon: PackageCheck,label: "Final-Mile Execution", desc: "Import customs clearance at destination, final mile haulage, and door-to-door delivery to your enterprise doorstep." },
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

      // Line fills up completely over duration 1
      tl.to(".sj-fill",  { scaleX: 1, ease: "none", duration: 1 }, 0);
      // Ship moves from left to right end over duration 1, retaining original transform alignment
      tl.to(".sj-ship",  { left: "100%", ease: "none", duration: 1 }, 0);
      tl.to(".sj-trail", { opacity: 0.8, ease: "none", duration: 1 }, 0);

      // We have 6 stages (0 to 5).
      STAGES.forEach((_, i) => {
        const prog = i / (STAGES.length - 1);
        const duration = 0.15;
        const start = Math.max(0, prog - duration / 2);

        // Highlight active dot and card exactly when ship passes by
        tl.to(`.sj-dot-${i}`, { 
          backgroundColor: "#1E40AF", 
          scale: 1.5, 
          boxShadow: "0 0 16px rgba(30,64,175,0.6)",
          ease: "power2.out", 
          duration: duration 
        }, start);

        tl.to(`.sj-card-${i}`, { 
          borderColor: "rgba(30,64,175,0.2)", 
          backgroundColor: "rgba(255,255,255,0.95)",
          opacity: 1,
          y: -8,
          boxShadow: "0 10px 40px rgba(15,23,42,0.06)",
          ease: "power2.out", 
          duration: duration 
        }, start);

        // Dim as ship moves away towards the next stages
        if (i < STAGES.length - 1) {
          const nextProg = (i + 1) / (STAGES.length - 1);
          const dimStart = nextProg - duration / 2;

          tl.to(`.sj-dot-${i}`, { 
            scale: 1, 
            boxShadow: "none", 
            backgroundColor: "#CBD5E1",
            duration: duration 
          }, dimStart);

          tl.to(`.sj-card-${i}`, { 
            borderColor: "rgba(15,23,42,0.06)", 
            backgroundColor: "rgba(255,255,255,0.4)",
            opacity: 0.4,
            y: 0,
            boxShadow: "none",
            duration: duration 
          }, dimStart);
        }
      });
    }, wrapRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrapRef} className="relative bg-[#EEF2F7]" style={{ height: "240vh" }}>
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Top and Bottom ambient gradients */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#EEF2F7]/60 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full relative z-10">
          
          {/* Header */}
          <div className="mb-10 md:mb-16 text-center">
            <p className="text-[10px] md:text-[11px] tracking-[0.4em] text-slate-500 uppercase mb-2 md:mb-3 font-medium">The Shipment Journey</p>
            <h2 className="text-3xl md:text-5xl font-medium text-slate-900 tracking-tight">
              Origin to <span className="text-slate-400">Destination.</span>
            </h2>
          </div>

          {/* ── TRACK ── */}
          <div className="relative mb-10 md:mb-16 px-2 md:px-8" ref={trackRef}>
            <div className="h-[2px] bg-slate-300 w-full relative rounded-full">
              {/* Fill */}
              <div className="sj-fill absolute inset-0 origin-left bg-gradient-to-r from-blue-350 via-[#2563EB] to-[#1E40AF] rounded-full" style={{ transform: "scaleX(0)" }} />

              {/* Ship */}
              <div className="sj-ship absolute top-1/2 -translate-y-1/2 z-20" style={{ left: "0%", transform: "translate(-50%, -50%)" }}>
                <div className="sj-trail absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-8 opacity-0 pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(30,64,175,0.25), transparent 70%)", filter: "blur(6px)" }} />
                
                <svg width="48" height="24" viewBox="0 0 80 28" fill="none" className="drop-shadow-[0_0_8px_rgba(30,64,175,0.25)]">
                  <path d="M2 16 L8 11 L68 11 L77 16 L74 22 L5 22 Z" fill="#1E40AF" />
                  <rect x="18" y="6" width="7" height="5" rx="0.4" fill="#0F172A" />
                  <rect x="27" y="6" width="7" height="5" rx="0.4" fill="#2563EB" />
                  <rect x="36" y="6" width="7" height="5" rx="0.4" fill="#F59E0B" />
                  <rect x="45" y="6" width="7" height="5" rx="0.4" fill="#10B981" />
                  <rect x="54" y="6" width="7" height="5" rx="0.4" fill="#EF4444" />
                  <rect x="6" y="3" width="13" height="8" rx="1" fill="#FFFFFF" />
                  <rect x="8" y="1" width="8" height="3.5" rx="0.5" fill="#64748B" />
                </svg>
              </div>

              {/* Stage dots & labels */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between z-10 pointer-events-none">
                {STAGES.map((s, i) => (
                  <div key={i} className="flex flex-col items-center justify-center relative">
                    <div
                      className={`sj-dot-${i} w-3 h-3 rounded-full border-2 border-[#EEF2F7] absolute`}
                      style={{ backgroundColor: "#CBD5E1", transform: "scale(1)" }}
                    />
                    {/* Label above dot — hidden on small screens to prevent overflow */}
                    <div className="absolute bottom-6 w-20 md:w-32 text-center hidden sm:block">
                       <p className="text-[9px] md:text-[11px] font-medium text-slate-500 leading-tight">{s.label}</p>
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
                  className={`sj-card-${i} rounded-xl md:rounded-2xl border border-[rgba(15,23,42,0.06)] p-4 md:p-6 lg:p-8 backdrop-blur-xl transition-none relative overflow-hidden group`}
                  style={{
                    background: "rgba(255,255,255,0.4)",
                    opacity: i === 0 ? 1 : 0.4,
                    transform: "translateY(0px)",
                  }}
                >
                  {/* Subtle gradient glow inside card */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1E40AF]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <p className="text-[10px] text-slate-500 tracking-widest font-mono uppercase font-semibold">Stage 0{i + 1}</p>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-3">{stage.label}</h4>
                    <p className="text-sm text-slate-700 leading-relaxed font-light">{stage.desc}</p>
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
