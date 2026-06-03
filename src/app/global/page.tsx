"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe2, Plane, Ship, MapPin, ArrowRight, Anchor, Globe, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AmbientGradient from "@/components/AmbientGradient";
import AnimatedText from "@/components/AnimatedText";
import MagneticButton from "@/components/MagneticButton";
import WorldMapRoute from "@/components/WorldMapRoute";

export default function GlobalLogisticsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(".fade-elem", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power2.out", delay: 0.2 });
      gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 40 }, { scrollTrigger: { trigger: el, start: "top 85%" }, opacity: 1, y: 0, duration: 1, ease: "power2.out" });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen pb-32">

      {/* ─── HERO ─── */}
      <section className="relative h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden pt-20 bg-[#061A24]">
        <div className="absolute inset-0">
          <Image src="/freight-air.webp" alt="Global air freight" fill priority quality={100} className="object-cover object-center opacity-90 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/0 to-transparent h-48" />
        </div>
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-12">
          <div className="fade-elem inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs text-white/90 font-medium tracking-[0.2em] uppercase">
              Proprietary Logistics Network
            </span>
          </div>
          
          <h1 className="fade-elem text-5xl sm:text-6xl md:text-[6.5rem] tracking-tight text-white leading-[1] mb-8">
            <span className="font-sans font-medium">Global Routing</span> <br />
            <span className="font-serif italic text-white/95">Architecture</span>
          </h1>
          
          <p className="fade-elem text-base md:text-xl text-white/70 max-w-2xl font-light tracking-wide leading-relaxed">
            Optimized shipping corridors, ultra-secure cargo warehousing, and flawless customs compliance engineered for elite trans-continental delivery.
          </p>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-16 border-b theme-border relative">
        <AmbientGradient />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <MapPin size={20} strokeWidth={1.5} />, val: "Cochin HQ", label: "Global Origin Hub" },
              { icon: <Plane size={20} strokeWidth={1.5} />, val: "24 / 7", label: "Aviation Freight" },
              { icon: <Ship size={20} strokeWidth={1.5} />, val: "50+", label: "Global Partners" },
              { icon: <Globe2 size={20} strokeWidth={1.5} />, val: "100%", label: "CBP & CBSA Compliance" },
            ].map((s, i) => (
              <div key={i} className="fade-up text-center">
                <div className="flex justify-center text-[var(--color-accent-cyan)] mb-3">{s.icon}</div>
                <div className="text-3xl font-light theme-heading mb-1">{s.val}</div>
                <div className="text-xs theme-text font-semibold tracking-wide uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WORLD MAP ─── */}
      <section className="py-24 relative overflow-hidden theme-section">
        <AmbientGradient />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="fade-up mb-12">
            <p className="text-xs theme-text tracking-[0.4em] uppercase mb-4">Route Visualization</p>
            <AnimatedText as="h2" className="text-4xl md:text-5xl font-medium theme-heading tracking-tight max-w-xl">
              Connecting three continents.
            </AnimatedText>
          </div>
 
          {/* Map container */}
          <div className="fade-up relative rounded-3xl overflow-hidden border border-[var(--color-accent-cyan)]/20 theme-card">
            <WorldMapRoute />
            {/* Gradient fade at edges */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--color-card-bg)] to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--color-card-bg)] to-transparent pointer-events-none" />
          </div>
 
          {/* Legend */}
          <div className="fade-up mt-8 flex flex-wrap gap-8 justify-center">
            {[
              { city: "Cochin, India", role: "Origin Hub" },
              { city: "Nhava Sheva, India", role: "Western Hub" },
              { city: "Mundra, India", role: "Gujarat Hub" },
              { city: "USA & Canada", role: "Primary Destination Regions" },
            ].map((loc, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent-cyan)]" />
                <div>
                  <span className="theme-heading font-medium">{loc.city}</span>
                  <span className="theme-text ml-2">— {loc.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MAJOR PORTS ─── */}
      <section className="py-20 border-t theme-border relative theme-section">
        <AmbientGradient />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <p className="fade-up text-xs text-[var(--color-accent-cyan)] tracking-[0.4em] uppercase mb-4 font-bold">North American Access</p>
            <AnimatedText as="h2" className="fade-up text-3xl md:text-5xl font-medium theme-heading mb-6 tracking-tight">
              Major Ports in USA & Canada
            </AnimatedText>
            <p className="fade-up theme-text text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Direct access to key maritime gateways ensuring seamless, rapid cargo routing across North America.
            </p>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-24">
            {/* Canada */}
            <div className="fade-up theme-card border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-8 hover:shadow-[0_10px_40px_rgba(0,113,156,0.15)] transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-8 pb-4 md:pb-6 border-b border-white/10">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[var(--color-bg-main)] shadow-sm flex items-center justify-center border border-white/10">
                  <span className="text-xl md:text-2xl drop-shadow-sm">🇨🇦</span>
                </div>
                <h3 className="text-lg md:text-2xl font-bold theme-heading">Canada Ports</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 md:gap-x-6 gap-y-3 md:gap-y-5">
                {[
                  "Port of Vancouver", "Port of Montreal", "Port of Prince Rupert",
                  "Port of Halifax", "Port of Saint John", "Port of Quebec",
                  "Port of Hamilton", "Port of Thunder Bay", "Port of Sept-Îles",
                  "Port of St. John’s", "Port of Toronto"
                ].map((port, i) => (
                  <li key={i} className="flex items-center gap-3 group cursor-default">
                    <Anchor size={14} className="text-white/20 group-hover:text-red-500 transition-colors shrink-0" />
                    <span className="theme-text text-sm font-medium group-hover:text-white transition-colors">{port}</span>
                  </li>
                ))}
              </ul>
            </div>
 
            {/* USA */}
            <div className="fade-up theme-card border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-8 hover:shadow-[0_10px_40px_rgba(0,113,156,0.15)] transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-8 pb-4 md:pb-6 border-b border-white/10">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[var(--color-bg-main)] shadow-sm flex items-center justify-center border border-white/10">
                  <span className="text-xl md:text-2xl drop-shadow-sm">🇺🇸</span>
                </div>
                <h3 className="text-lg md:text-2xl font-bold theme-heading">USA Ports</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 md:gap-x-6 gap-y-3 md:gap-y-5">
                {[
                  "Port of Baltimore", "Port of Texas", "Port of Los Angeles",
                  "Port of Long Beach", "Port of New York and New Jersey", "Port of Savannah",
                  "Port of Houston", "Port of Oakland", "Port of Seattle",
                  "Port of Tacoma", "Port of Virginia", "Port of Charleston",
                  "Port of Miami", "Port of New Orleans", "Port of South Louisiana",
                  "Port of Corpus Christi"
                ].map((port, i) => (
                  <li key={i} className="flex items-center gap-3 group cursor-default">
                    <Anchor size={14} className="text-white/20 group-hover:text-blue-500 transition-colors shrink-0" />
                    <span className="theme-text text-sm font-medium group-hover:text-white transition-colors">{port}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OPERATIONAL GATEWAYS ─── */}
      <section className="py-20 border-t theme-border relative">
        <AmbientGradient />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <p className="fade-up text-xs theme-text tracking-[0.4em] uppercase mb-4">GLOBAL GATEWAY INFRASTRUCTURE</p>
            <AnimatedText as="h2" className="fade-up text-3xl md:text-5xl font-medium theme-heading mb-6 tracking-tight">
              International Maritime Hubs
            </AnimatedText>
            <p className="fade-up theme-text text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Strategically operating from major maritime logistics hubs across India and North America to ensure seamless national and international freight movement.
            </p>
          </div>
 
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                city: "Cochin, Kerala",
                role: "Liner Shipping & Southern Gateway",
                desc: "Serving as our corporate headquarters and primary maritime logistics base with deep custom clearing and project cargo specialization.",
                img: "/cochin.webp"
              },
              {
                city: "Nhava Sheva, Mumbai",
                role: "Western Commercial Freight Gateway",
                desc: "Managing high-frequency ocean container routing, key liner agencies, and rapid customs clearance protocols for India's main commercial corridor.",
                img: "/hero-port.webp"
              },
              {
                city: "Mundra, Gujarat",
                role: "Northern & Western Deep-Draft Terminal",
                desc: "Facilitating massive dry-dock, container leasing, and vessel chartering operations connecting Northern manufacturing hubs with North America.",
                img: "/warehouse.webp"
              },
              {
                city: "North America",
                role: "Primary Destination Network",
                desc: "Managing integrated final-mile delivery, extensive warehousing, and streamlined customs clearance across the United States and Canada.",
                img: "/freight-air.webp"
              }
            ].map((loc, i) => (
              <div key={i} className="fade-up group relative rounded-3xl overflow-hidden border border-white/10 theme-card hover:theme-card-hover hover:border-[var(--color-accent-cyan)]/30 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(0,113,156,0.15)] transition-all duration-500 p-6 flex flex-col justify-between h-[380px] shadow-sm">
                <div className="absolute inset-0 z-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                  <Image src={loc.img} alt={loc.city} fill className="object-cover" />
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-bg-main)] flex items-center justify-center border border-white/10 group-hover:border-[var(--color-accent-cyan)]/30 transition-all duration-500 mb-6">
                    <MapPin size={18} className="text-[var(--color-accent-cyan)] group-hover:text-[var(--color-accent-cyan)] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold theme-heading group-hover:text-[var(--color-accent-cyan)] transition-colors mb-2">{loc.city}</h3>
                  <p className="text-xs text-[var(--color-accent-cyan)] font-semibold tracking-wider uppercase mb-4">{loc.role}</p>
                  <p className="text-sm theme-text leading-relaxed font-light">{loc.desc}</p>
                </div>
                <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs theme-text font-semibold uppercase tracking-widest group-hover:text-[var(--color-accent-cyan)] transition-colors">
                  <span>Operational Hub</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 group-hover:text-[var(--color-accent-cyan)] transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CROSS-BORDER LOGISTICS SECTION ─── */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-main)] border-b theme-border relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-primary)]/10 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-medium theme-heading tracking-tight mb-4">
              Cross-Border Logistics
            </h2>
            <p className="theme-text text-base md:text-lg max-w-2xl mx-auto font-light">
              Reliable freight movement across major international and regional trade corridors.
            </p>
          </div>

          <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-0 items-center justify-between max-w-6xl mx-auto">
            
            {/* Card 1 — USA & Canada */}
            <div className="group relative w-full lg:w-[40%] rounded-2xl bg-[#121212]/80 backdrop-blur-sm border border-[#2a2a2a] p-8 hover:bg-[#181818]/90 hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-400 to-blue-500/0 group-hover:w-full transition-all duration-700 ease-out" />
              
              <div className="mb-6 flex justify-between items-start">
                <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-slate-300">
                  North America Network
                </span>
                <Globe className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent-cyan)] transition-colors duration-500" size={24} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl text-white font-medium mb-4 flex items-center gap-3">
                USA & Canada
                <ArrowRight size={16} className="text-[var(--color-text-secondary)] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
              </h3>
              <p className="text-blue-300/80 text-sm font-medium mb-6">Door-to-Door Logistics</p>
              
              <ul className="space-y-3 text-slate-400 text-sm font-light">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-1.5"></span>
                  Freight pickup to final delivery
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-1.5"></span>
                  Customs clearance support
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-1.5"></span>
                  Ocean & air cargo coordination
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-1.5"></span>
                  Warehousing and distribution
                </li>
              </ul>
            </div>

            {/* Premium Divider Desktop Only */}
            <div className="hidden lg:flex flex-col items-center justify-center w-[20%] relative z-0">
              <div className="w-full flex items-center justify-center space-x-2 whitespace-nowrap">
                <span className="text-[10px] font-semibold text-[var(--color-text-secondary)] tracking-widest uppercase shrink-0">USA & CAN</span>
                <div className="relative w-8 lg:w-16 h-[1px] bg-[#2a2a2a] overflow-hidden shrink-0">
                   <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500/80 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                </div>
                <span className="text-[10px] font-semibold text-[var(--color-text-secondary)] tracking-widest uppercase shrink-0">IND & NEP</span>
              </div>
            </div>
            
            {/* Premium Divider Mobile Only */}
            <div className="flex lg:hidden items-center justify-center w-full py-4 relative z-0">
               <div className="w-[2px] h-12 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
            </div>

            {/* Card 2 — India & Nepal */}
            <div className="group relative w-full lg:w-[40%] rounded-2xl bg-[#121212]/80 backdrop-blur-sm border border-[#2a2a2a] p-8 hover:bg-[#181818]/90 hover:border-amber-500/30 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-amber-500/0 via-amber-400 to-amber-500/0 group-hover:w-full transition-all duration-700 ease-out" />
              
              <div className="mb-6 flex justify-between items-start">
                <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-slate-300">
                  South Asia Corridor
                </span>
                <Truck className="text-[var(--color-text-secondary)] group-hover:text-amber-400 transition-colors duration-500" size={24} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl text-white font-medium mb-4 flex items-center gap-3">
                India & Nepal
                <ArrowRight size={16} className="text-[var(--color-text-secondary)] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
              </h3>
              <p className="text-amber-300/80 text-sm font-medium mb-6">Cross Country Transport</p>
              
              <ul className="space-y-3 text-slate-400 text-sm font-light">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50 mt-1.5"></span>
                  Seamless border cargo movement
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50 mt-1.5"></span>
                  Regional freight coordination
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50 mt-1.5"></span>
                  Commercial goods transportation
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50 mt-1.5"></span>
                  Fast customs processing
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ─── ROUTES DETAIL ─── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="fade-up text-xs theme-text tracking-[0.4em] uppercase mb-4">INDIA TO USA & CANADA</p>
          <h2 className="fade-up text-3xl md:text-5xl font-medium theme-heading mb-6 tracking-tight leading-tight">Our Core Shipping Corridor</h2>
          <p className="fade-up theme-text text-base md:text-lg leading-relaxed mb-12 max-w-2xl">
            We have perfected the intricate logistics corridor between the Indian subcontinent and North America. By merging deep operational knowledge of traditional Indian exports with ultra-modern North American customs protocols, we guarantee flawless delivery.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {[
              { name: "Origin: India", img: "/cochin.webp", desc: "Cargo consolidation and rigorous pre-export compliance auditing at Cochin HQ." },
              { name: "Customs Clearance Protocol", img: "/hero-port.webp", desc: "Flawless documentation handling and submission by our veteran export/import specialists, ensuring zero border friction." },
              { name: "Final-Mile Execution", img: "/freight-air.webp", desc: "Door-to-door delivery execution utilizing our highly vetted North American and global transportation networks." },
            ].map((route, i) => (
              <div key={i} className="fade-up relative h-[280px] md:h-[360px] rounded-2xl md:rounded-3xl overflow-hidden group border border-white/10 theme-card shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1">
                <Image src={route.img} alt={route.name} fill className="object-cover group-hover:scale-105 transition-all duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-main)] via-[var(--color-bg-main)]/60 via-60% to-transparent" />
                <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end">
                  <h3 className="text-sm md:text-xl font-bold theme-heading mb-1 md:mb-2 group-hover:text-[var(--color-accent-cyan)] transition-colors">{route.name}</h3>
                  <p className="text-[10px] md:text-sm theme-text leading-relaxed font-light line-clamp-3 md:line-clamp-none">{route.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
        {/* ─── COMPLIANCE & WAREHOUSING ─── */}
      <section className="py-20 border-t border-b theme-border relative theme-section">
        <AmbientGradient />
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          {/* Compliance Advantage */}
          <div className="fade-up">
            <p className="text-xs theme-text tracking-[0.4em] uppercase mb-4">100% CBP & CBSA COMPLIANT</p>
            <h3 className="text-3xl font-medium theme-heading mb-6">The Compliance Advantage</h3>
            <p className="theme-text text-sm mb-8 leading-relaxed">
              We maintain a perfect record of regulatory compliance, preventing any holds or fines on your international shipments.
            </p>
            <ul className="space-y-4">
              {[
                "Rigorous pre-export documentation audits by former customs experts.",
                "Automated HTS classification and duty optimization.",
                "Direct electronic integration with international port authorities.",
                "Specialized protocols for highly regulated traditional and agricultural goods."
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 text-sm theme-text items-start font-light">
                  <span className="text-[var(--color-accent-cyan)] font-bold font-mono">[{idx + 1}]</span>
                  <span>{item}</span>
                </div>
              ))}
            </ul>
          </div>
 
          {/* Enterprise Warehousing */}
          <div className="fade-up">
            <p className="text-xs theme-text tracking-[0.4em] uppercase mb-4">ENTERPRISE WAREHOUSING</p>
            <h3 className="text-3xl font-medium theme-heading mb-6">Integrated Logistics Hubs</h3>
            <p className="theme-text text-sm mb-8 leading-relaxed">
              Our high-security, climate-controlled warehousing facilities serve as the foundational bedrock of our global routing network, safeguarding cargo at every transition.
            </p>
            <div className="space-y-6">
              {[
                { title: "Intelligent Intake", desc: "Automated scanning and precision inventory logging upon arrival." },
                { title: "Climate-Controlled Sectors", desc: "Specialized zones maintaining exact parameters for sensitive goods." },
                { title: "Rapid Cross-Docking", desc: "Immediate transfer capabilities to minimize static storage time." }
              ].map((item, idx) => (
                <div key={idx} className="border-l-2 border-[var(--color-accent-cyan)]/30 pl-4 py-1">
                  <h4 className="theme-heading font-bold text-sm mb-1">{item.title}</h4>
                  <p className="theme-text text-xs leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
 
      {/* ─── CTA ─── */}
      <section className="fade-up py-16 text-center">
        <MagneticButton>
          <Link href="/contact" className="inline-flex items-center gap-2 theme-heading hover:text-[var(--color-accent-cyan)] transition-colors font-semibold tracking-wide border-b border-transparent hover:border-[var(--color-accent-cyan)] pb-0.5">
            Request Strategic Consultation <ArrowRight size={16} />
          </Link>
        </MagneticButton>
      </section>

    </div>
  );
}
