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
      <section className="relative h-[65vh] flex items-end overflow-hidden">
        <AmbientGradient />
        <div className="absolute inset-0">
          <Image src="/freight-air.png" alt="Global air freight" fill priority className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 w-full">
          <Globe2 className="fade-elem text-white/35 mb-4" size={40} strokeWidth={1} />
          <h1 className="fade-elem text-5xl md:text-7xl font-medium text-white tracking-tight">
            Global <span className="text-white/35">Network</span>
          </h1>
          <p className="fade-elem text-lg text-white/50 mt-4 max-w-xl">
            Live infrastructure connecting the Indian subcontinent to the world — optimised for every mode of transport.
          </p>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-16 border-b border-white/[0.04] relative">
        <AmbientGradient />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <MapPin size={20} strokeWidth={1.5} />, val: "3", label: "Primary Hubs" },
              { icon: <Plane size={20} strokeWidth={1.5} />, val: "24 / 7", label: "Air Operations" },
              { icon: <Ship size={20} strokeWidth={1.5} />, val: "86+", label: "Sea Routes" },
              { icon: <Globe2 size={20} strokeWidth={1.5} />, val: "<24 hrs", label: "Clearance Time" },
            ].map((s, i) => (
              <div key={i} className="fade-up text-center">
                <div className="flex justify-center text-white/30 mb-3">{s.icon}</div>
                <div className="text-3xl font-light text-white mb-1">{s.val}</div>
                <div className="text-xs text-white/35 tracking-wide uppercase">{s.label}</div>
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
            <p className="text-xs text-white/30 tracking-[0.4em] uppercase mb-4">Route Visualization</p>
            <AnimatedText as="h2" className="text-4xl md:text-5xl font-medium text-white tracking-tight max-w-xl">
              Connecting three continents.
            </AnimatedText>
          </div>

          {/* Map container */}
          <div className="fade-up relative rounded-3xl overflow-hidden border border-white/[0.07] bg-[#06090f]">
            <WorldMapRoute />
            {/* Gradient fade at edges */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#06090f] to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#06090f] to-transparent pointer-events-none" />
          </div>

          {/* Legend */}
          <div className="fade-up mt-8 flex flex-wrap gap-8 justify-center">
            {[
              { city: "Cochin, India", role: "Origin Hub" },
              { city: "New York, USA", role: "Primary Destination" },
              { city: "Toronto, Canada", role: "Secondary Destination" },
            ].map((loc, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-white/70" />
                <div>
                  <span className="text-white/70 font-medium">{loc.city}</span>
                  <span className="text-white/30 ml-2">— {loc.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ROUTES DETAIL ─── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="fade-up text-3xl font-medium text-white mb-12">Key corridors.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "India Origin", img: "/cochin.png", desc: "Our command hub in Cochin — the gateway to global Indian logistics." },
              { name: "United States", img: "/hero-port.png", desc: "Direct delivery routes to major US ports and door-to-door inland destinations." },
              { name: "Canada", img: "/freight-air.png", desc: "Established air and sea pipelines into Toronto, Vancouver, and beyond." },
            ].map((route, i) => (
              <div key={i} className="fade-up relative h-[360px] rounded-3xl overflow-hidden group glass-shimmer">
                <Image src={route.img} alt={route.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-xl font-medium text-white mb-2">{route.name}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{route.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="fade-up py-16 text-center">
        <MagneticButton>
          <Link href="/contact" className="inline-flex items-center gap-2 text-white hover:text-white/60 transition-colors font-medium">
            Get a shipping quote <ArrowRight size={16} />
          </Link>
        </MagneticButton>
      </section>

    </div>
  );
}
