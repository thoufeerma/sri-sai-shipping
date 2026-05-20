"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe2, Plane, Ship, MapPin, ArrowRight } from "lucide-react";
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
      <section className="relative h-[65vh] flex items-end overflow-hidden pt-28 md:pt-32">
        <AmbientGradient />
        <div className="absolute inset-0">
          <Image src="/freight-air.webp" alt="Global air freight" fill priority quality={100} className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-white/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/40 to-transparent h-[40%] top-auto bottom-0" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 w-full">
          <div className="fade-elem inline-block px-3 py-1 rounded-full border border-slate-355 bg-slate-100/80 backdrop-blur text-xs text-slate-800 font-semibold tracking-widest uppercase mb-4">
            PROPRIETARY LOGISTICS NETWORK
          </div>
          <h1 className="fade-elem text-5xl md:text-7xl font-bold text-slate-900 tracking-tight uppercase">
            GLOBAL ROUTING <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1E40AF] to-blue-700 font-bold">ARCHITECTURE</span>
          </h1>
          <p className="fade-elem text-lg text-slate-700 mt-4 max-w-xl">
            Optimized shipping corridors, ultra-secure cargo warehousing, and flawless customs compliance engineered for elite trans-continental delivery.
          </p>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-16 border-b border-slate-200 relative">
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
                <div className="flex justify-center text-[#1E40AF] mb-3">{s.icon}</div>
                <div className="text-3xl font-light text-slate-900 mb-1">{s.val}</div>
                <div className="text-xs text-slate-600 font-semibold tracking-wide uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WORLD MAP ─── */}
      <section className="py-24 relative overflow-hidden">
        <AmbientGradient />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="fade-up mb-12">
            <p className="text-xs text-slate-500 tracking-[0.4em] uppercase mb-4">Route Visualization</p>
            <AnimatedText as="h2" className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight max-w-xl">
              Connecting three continents.
            </AnimatedText>
          </div>
 
          {/* Map container */}
          <div className="fade-up relative rounded-3xl overflow-hidden border border-slate-200 bg-[#F8FAFC]">
            <WorldMapRoute />
            {/* Gradient fade at edges */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F8FAFC] to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F8FAFC] to-transparent pointer-events-none" />
          </div>
 
          {/* Legend */}
          <div className="fade-up mt-8 flex flex-wrap gap-8 justify-center">
            {[
              { city: "Cochin, India", role: "Origin Hub" },
              { city: "Nhava Sheva, India", role: "Western Hub" },
              { city: "Mundra, India", role: "Gujarat Hub" },
              { city: "New York, USA", role: "Primary Destination" },
              { city: "Toronto, Canada", role: "Secondary Destination" },
            ].map((loc, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-blue-600" />
                <div>
                  <span className="text-slate-700 font-medium">{loc.city}</span>
                  <span className="text-slate-400 ml-2">— {loc.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OPERATIONAL GATEWAYS ─── */}
      <section className="py-20 border-t border-slate-200 relative">
        <AmbientGradient />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <p className="fade-up text-xs text-slate-500 tracking-[0.4em] uppercase mb-4">NATIONAL GATEWAY INFRASTRUCTURE</p>
            <AnimatedText as="h2" className="fade-up text-3xl md:text-5xl font-medium text-slate-900 mb-6 tracking-tight">
              India's Major Maritime Hubs
            </AnimatedText>
            <p className="fade-up text-slate-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Strategically operating from India’s major maritime logistics hubs including Cochin, Nhava Sheva, and Mundra to ensure seamless national and international freight movement.
            </p>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              }
            ].map((loc, i) => (
              <div key={i} className="fade-up group relative rounded-3xl overflow-hidden border border-slate-200 bg-white hover:bg-white hover:border-blue-500/20 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(15,23,42,0.06)] transition-all duration-500 p-6 flex flex-col justify-between h-[380px] shadow-sm">
                <div className="absolute inset-0 z-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                  <Image src={loc.img} alt={loc.city} fill className="object-cover" />
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-200 group-hover:border-blue-300 group-hover:bg-blue-50/50 transition-all duration-500 mb-6">
                    <MapPin size={18} className="text-[#2563EB] group-hover:text-[#1E40AF] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1E40AF] transition-colors mb-2">{loc.city}</h3>
                  <p className="text-xs text-[#1E40AF] font-semibold tracking-wider uppercase mb-4">{loc.role}</p>
                  <p className="text-sm text-slate-700 leading-relaxed font-light">{loc.desc}</p>
                </div>
                <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold uppercase tracking-widest group-hover:text-slate-700 transition-colors">
                  <span>Operational Hub</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 group-hover:text-[#1E40AF] transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ROUTES DETAIL ─── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="fade-up text-xs text-slate-500 tracking-[0.4em] uppercase mb-4">INDIA TO USA & CANADA</p>
          <h2 className="fade-up text-3xl md:text-5xl font-medium text-slate-900 mb-6 tracking-tight leading-tight">Our Core Shipping Corridor</h2>
          <p className="fade-up text-slate-600 text-base md:text-lg leading-relaxed mb-12 max-w-2xl">
            We have perfected the intricate logistics corridor between the Indian subcontinent and North America. By merging deep operational knowledge of traditional Indian exports with ultra-modern North American customs protocols, we guarantee flawless delivery.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Origin: India", img: "/cochin.webp", desc: "Cargo consolidation and rigorous pre-export compliance auditing at Cochin HQ." },
              { name: "Customs Clearance Protocol", img: "/hero-port.webp", desc: "Flawless documentation handling and submission by our veteran export/import specialists, ensuring zero border friction." },
              { name: "Final-Mile Execution", img: "/freight-air.webp", desc: "Door-to-door delivery execution utilizing our highly vetted North American and global transportation networks." },
            ].map((route, i) => (
              <div key={i} className="fade-up relative h-[360px] rounded-3xl overflow-hidden group border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1">
                <Image src={route.img} alt={route.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 via-60% to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">{route.name}</h3>
                  <p className="text-sm text-slate-100/90 leading-relaxed font-light">{route.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
        {/* ─── COMPLIANCE & WAREHOUSING ─── */}
      <section className="py-20 border-t border-b border-slate-200 relative">
        <AmbientGradient />
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          {/* Compliance Advantage */}
          <div className="fade-up">
            <p className="text-xs text-slate-500 tracking-[0.4em] uppercase mb-4">100% CBP & CBSA COMPLIANT</p>
            <h3 className="text-3xl font-medium text-slate-900 mb-6">The Compliance Advantage</h3>
            <p className="text-slate-700 text-sm mb-8 leading-relaxed">
              We maintain a perfect record of regulatory compliance, preventing any holds or fines on your international shipments.
            </p>
            <ul className="space-y-4">
              {[
                "Rigorous pre-export documentation audits by former customs experts.",
                "Automated HTS classification and duty optimization.",
                "Direct electronic integration with international port authorities.",
                "Specialized protocols for highly regulated traditional and agricultural goods."
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 text-sm text-slate-800 items-start font-light">
                  <span className="text-[#1E40AF] font-bold font-mono">[{idx + 1}]</span>
                  <span>{item}</span>
                </div>
              ))}
            </ul>
          </div>
 
          {/* Enterprise Warehousing */}
          <div className="fade-up">
            <p className="text-xs text-slate-500 tracking-[0.4em] uppercase mb-4">ENTERPRISE WAREHOUSING</p>
            <h3 className="text-3xl font-medium text-slate-900 mb-6">Integrated Logistics Hubs</h3>
            <p className="text-slate-700 text-sm mb-8 leading-relaxed">
              Our high-security, climate-controlled warehousing facilities serve as the foundational bedrock of our global routing network, safeguarding cargo at every transition.
            </p>
            <div className="space-y-6">
              {[
                { title: "Intelligent Intake", desc: "Automated scanning and precision inventory logging upon arrival." },
                { title: "Climate-Controlled Sectors", desc: "Specialized zones maintaining exact parameters for sensitive goods." },
                { title: "Rapid Cross-Docking", desc: "Immediate transfer capabilities to minimize static storage time." }
              ].map((item, idx) => (
                <div key={idx} className="border-l-2 border-blue-200 pl-4 py-1">
                  <h4 className="text-slate-900 font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-slate-700 text-xs leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
 
      {/* ─── CTA ─── */}
      <section className="fade-up py-16 text-center">
        <MagneticButton>
          <Link href="/contact" className="inline-flex items-center gap-2 text-slate-900 hover:text-[#1E40AF] transition-colors font-semibold tracking-wide border-b border-transparent hover:border-[#1E40AF] pb-0.5">
            Request Strategic Consultation <ArrowRight size={16} />
          </Link>
        </MagneticButton>
      </section>

    </div>
  );
}
