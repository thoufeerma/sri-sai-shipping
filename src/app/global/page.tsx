"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe2, Plane, Ship, MapPin, ArrowRight, Anchor, Globe, Truck, Star, CheckCircle2, ShieldCheck, Radar, Clock, Activity } from "lucide-react";
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#061324] opacity-50 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-semibold theme-heading tracking-tight mb-4">
              Cross-Border Logistics
            </h2>
            <p className="theme-text text-base md:text-xl max-w-2xl mx-auto font-light text-slate-300">
              Reliable freight movement across major international and regional trade corridors.
            </p>
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-center w-full pb-10">
            
            {/* Card 1 — USA & Canada */}
            <div className="relative z-10 w-full lg:w-[28%] shrink-0 rounded-[24px] bg-[#061324] border border-white/5 p-8 shadow-2xl h-[440px] flex flex-col group hover:-translate-y-2 transition-transform duration-500 ease-out">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F36]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px]" />
              <div className="relative z-10 mb-8 flex justify-between items-start">
                <span className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-medium uppercase tracking-[0.2em] text-[#F8FAFC]/80">
                  North America Network
                </span>
                <Globe className="text-[#F8FAFC]/30 group-hover:text-[#F8FAFC]/60 transition-colors" size={26} strokeWidth={1.5} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-[30px] text-[#F8FAFC] font-semibold mb-2 tracking-tight">USA & Canada</h3>
                <p className="text-[#60A5FA] text-[15px] font-medium mb-10">Door-to-Door Logistics</p>
              </div>
              
              <ul className="relative z-10 space-y-5 text-[#F8FAFC]/70 text-[15px] font-light flex-grow">
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] shrink-0"></span>
                  Freight pickup to final delivery
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] shrink-0"></span>
                  Customs clearance support
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] shrink-0"></span>
                  Ocean & air cargo coordination
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] shrink-0"></span>
                  Warehousing and distribution
                </li>
              </ul>
            </div>

            {/* Connection Line 1 */}
            <div className="hidden lg:flex items-center justify-center w-[8%] relative z-30 shrink-0">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-bg-main)] px-3 text-[10px] font-medium text-white/60 tracking-[0.2em] text-center leading-[1.2] whitespace-nowrap backdrop-blur-sm border border-white/5 rounded-full py-1">
                  USA & EUROPE
                </div>
              </div>
            </div>

            {/* Card 2 — Cross Country Logistics */}
            <div className="relative z-20 w-full lg:w-[40%] shrink-0 rounded-[28px] bg-[#07111D] border border-white/5 p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] h-[580px] flex flex-col overflow-hidden transform lg:scale-105 group">
              {/* Grid background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] mask-image-[radial-gradient(ellipse_at_center,black,transparent_80%)] opacity-100" style={{ WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)' }} />
              
              {/* Top Arched Route Graphic */}
              <div className="relative w-full h-[80px] flex justify-center items-center pointer-events-none mt-4 mb-4">
                   <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 300 80" preserveAspectRatio="none">
                     <path d="M 60 60 Q 150 10 240 60" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" className="animate-dash-flow" />
                   </svg>
                   <MapPin className="absolute top-[60px] left-[20%] text-[#F8FAFC] fill-[#0B1F36] -translate-x-1/2 -translate-y-1/2" size={20} />
                   <MapPin className="absolute top-[60px] left-[80%] text-[#F8FAFC] fill-[#0B1F36] -translate-x-1/2 -translate-y-1/2" size={26} />
              </div>
              
              <div className="relative z-10 mb-10 text-center">
                <h3 className="text-[34px] text-[#F8FAFC] font-bold mb-2 leading-tight tracking-tight drop-shadow-md">Global Trade Corridors</h3>
                <p className="text-[#64748B] text-[16px] font-medium tracking-wide">USA & Europe</p>
              </div>
              
              <ul className="space-y-6 text-[#F8FAFC]/90 text-[16px] font-light relative z-10 flex-grow px-4 md:px-8">
                <li className="flex items-center gap-6">
                  <div className="bg-[#122238] border border-white/10 p-2.5 rounded-xl shrink-0"><Truck className="text-[#D4AF37]" size={20} strokeWidth={1.5} /></div>
                  Reliable transcontinental freight
                </li>
                <li className="flex items-center gap-6">
                  <div className="bg-[#122238] border border-white/10 p-2.5 rounded-xl shrink-0"><Plane className="text-[#D4AF37]" size={20} strokeWidth={1.5} /></div>
                  Air, ocean & multimodal solutions
                </li>
                <li className="flex items-center gap-6">
                  <div className="bg-[#122238] border border-white/10 p-2.5 rounded-xl shrink-0"><ShieldCheck className="text-[#D4AF37]" size={20} strokeWidth={1.5} /></div>
                  Customs & compliance support
                </li>
                <li className="flex items-center gap-6">
                  <div className="bg-[#122238] border border-white/10 p-2.5 rounded-xl shrink-0"><Radar className="text-[#D4AF37]" size={20} strokeWidth={1.5} /></div>
                  End-to-end visibility & tracking
                </li>
                <li className="flex items-center gap-6">
                  <div className="bg-[#122238] border border-white/10 p-2.5 rounded-xl shrink-0"><Clock className="text-[#D4AF37]" size={20} strokeWidth={1.5} /></div>
                  Time-critical shipments
                </li>
              </ul>
            </div>

            {/* Connection Line 2 */}
            <div className="hidden lg:flex items-center justify-center w-[8%] relative z-30 shrink-0">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-bg-main)] px-3 text-[10px] font-medium text-white/60 tracking-[0.2em] text-center leading-[1.2] whitespace-nowrap backdrop-blur-sm border border-white/5 rounded-full py-1">
                  IND & NEP
                </div>
              </div>
            </div>

            {/* Card 3 — India & Nepal */}
            <div className="relative z-10 w-full lg:w-[28%] shrink-0 rounded-[24px] bg-[#061324] border border-white/5 p-8 shadow-2xl h-[440px] flex flex-col group hover:-translate-y-2 transition-transform duration-500 ease-out">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F36]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px]" />
              <div className="relative z-10 mb-8 flex justify-between items-start">
                <span className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-medium uppercase tracking-[0.2em] text-[#F8FAFC]/80">
                  South Asia Corridor
                </span>
                <Truck className="text-[#F8FAFC]/30 group-hover:text-[#F8FAFC]/60 transition-colors" size={26} strokeWidth={1.5} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-[30px] text-[#F8FAFC] font-semibold mb-2 tracking-tight">India & Nepal</h3>
                <p className="text-[#D4AF37] text-[15px] font-medium mb-10">Cross-Border Transport</p>
              </div>
              
              <ul className="relative z-10 space-y-5 text-[#F8FAFC]/70 text-[15px] font-light flex-grow">
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0"></span>
                  Seamless border cargo movement
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0"></span>
                  Regional freight coordination
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0"></span>
                  Commercial goods transportation
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0"></span>
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
                  <span className="text-[var(--color-accent-cyan)] font-bold ">[{idx + 1}]</span>
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
