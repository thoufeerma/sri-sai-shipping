"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Ship, FileText, Globe, Truck, Boxes, Anchor, Compass, Plane } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Shipping Agency (Liner)",
    desc: "Expert local representation and vessel management for global ocean liners. We handle port agency functions, container tracking, vessel operations, and documentation compliance with utmost precision.",
    icon: <Ship size={24} strokeWidth={1.5} />,
    image: "/cargo-ship.webp",
  },
  {
    title: "Customs Broking & Logistics Services",
    desc: "Expert customs clearance and integrated document compliance orchestration. Our certified customs specialists navigate complex tariff codes, tax calculations, and regulatory mandates for seamless port exits.",
    icon: <FileText size={24} strokeWidth={1.5} />,
    image: "/customs.webp",
  },
  {
    title: "Freight Forwarding",
    desc: "Reliable end-to-end global cargo coordination and shipping solutions. Leveraging key steamship line agreements and international alliances, we deliver flexible routes tailored to your commercial needs.",
    icon: <Globe size={24} strokeWidth={1.5} />,
    image: "/cochin.webp",
  },
  {
    title: "Transportation",
    desc: "Secure and timely domestic road haulage, first-mile, and last-mile delivery. We manage a robust container transport fleet to guarantee reliable overland haulage between ports, rail heads, and inland warehouses.",
    icon: <Truck size={24} strokeWidth={1.5} />,
    image: "/hero-port.webp",
  },
  {
    title: "Equipment Leasing",
    desc: "Flexible high-grade logistics and container lease provisions for bulk cargo. We provide short-term and long-term rental options for standard dry vans, flat racks, open tops, and high-cube containers.",
    icon: <Boxes size={24} strokeWidth={1.5} />,
    image: "/warehouse.webp",
  },
  {
    title: "Coastal Services",
    desc: "Seamless coastal shipping and domestic maritime transit along the Indian coastline. We offer cost-effective coastal cargo services connecting all major hubs along the east and west coast ports.",
    icon: <Anchor size={24} strokeWidth={1.5} />,
    image: "/cargo-ship.webp",
  },
  {
    title: "Vessel Chartering",
    desc: "Bespoke chartering solutions for bulk, breakbulk, and heavy-lift project cargo. Our brokers match specific cargo requirements to appropriate vessels, managing negotiation, loading supervision, and voyage chartering.",
    icon: <Compass size={24} strokeWidth={1.5} />,
    image: "/cochin.webp",
  },
  {
    title: "Air Freight",
    desc: "Expedited global air transport for time-sensitive, high-value enterprise cargo. Our air logistics network coordinates with premium airlines for rapid door-to-door transit and customs pre-clearance.",
    icon: <Plane size={24} strokeWidth={1.5} />,
    image: "/freight-air.webp",
  },
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(".fade-elem", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power2.out", delay: 0.2 });
      gsap.utils.toArray<HTMLElement>(".service-card").forEach((card) => {
        gsap.fromTo(card, { opacity: 0, y: 40 }, { scrollTrigger: { trigger: card, start: "top 85%" }, opacity: 1, y: 0, duration: 1, ease: "power2.out" });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen pb-32">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden pt-36 md:pt-48 pb-16 md:pb-20">
        <div className="absolute inset-0">
          <Image src="/hero-port.webp" alt="Services hero" fill priority quality={100} className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-white/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/40 to-transparent h-[40%] top-auto bottom-0" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 w-full">
          <div className="fade-elem inline-block px-3 py-1 rounded-full border border-slate-350 bg-slate-100/80 backdrop-blur text-xs text-slate-800 font-semibold tracking-widest uppercase mb-4">
            ENTERPRISE CAPABILITIES
          </div>
          <h1 className="fade-elem text-5xl md:text-6xl font-bold text-slate-900 tracking-tight max-w-2xl uppercase">
            ARCHITECTURAL <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1E40AF] to-blue-700 font-bold">SOLUTIONS</span>
          </h1>
          <p className="fade-elem text-lg text-slate-700 mt-4 max-w-xl">
            Comprehensive, enterprise-grade supply chain solutions designed for modern global trade, scale, and absolute deterministic reliability.
          </p>
        </div>
      </section>


      {/* ─── SERVICES LIST ─── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 space-y-8">
        {services.map((service, idx) => (
          <div key={idx} className="service-card group grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-slate-200 hover:border-blue-500/20 hover:shadow-[0_15px_40px_rgba(15,23,42,0.06)] hover:-translate-y-1 bg-white transition-all duration-500">
            {/* Image — alternates left/right */}
            <div className={`relative h-72 md:h-80 overflow-hidden ${idx % 2 !== 0 ? "md:order-last" : ""}`}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
            </div>
 
            {/* Content */}
            <div className="bg-white/60 p-10 md:p-12 flex flex-col justify-center backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-[#2563EB] group-hover:text-[#1E40AF] group-hover:border-blue-300 transition-colors mb-6">
                {service.icon}
              </div>
              <div className="text-xs text-slate-500 font-mono font-bold mb-2 tracking-widest uppercase">
                0{idx + 1}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#1E40AF] transition-colors mb-4">{service.title}</h3>
              <p className="text-slate-700 leading-relaxed font-light">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
