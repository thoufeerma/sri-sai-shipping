"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Ship, Warehouse, Anchor, Map } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Customs Clearance",
    desc: "Seamless handling of import and export shipments. We navigate complex customs protocols to ensure rapid, compliant clearance without friction or delays.",
    icon: <ShieldCheck size={24} strokeWidth={1.5} />,
    image: "/customs.webp",
  },
  {
    title: "Freight Forwarding",
    desc: "Intelligent global routing across sea and air. We optimise transit times and secure your cargo through a vetted international carrier network.",
    icon: <Ship size={24} strokeWidth={1.5} />,
    image: "/cargo-ship.webp",
  },
  {
    title: "Warehousing & Transport",
    desc: "Secure storage facilities paired with high-velocity inland transportation for seamless end-to-end logistics operations.",
    icon: <Warehouse size={24} strokeWidth={1.5} />,
    image: "/warehouse.webp",
  },
  {
    title: "Devotional Projects",
    desc: "Specialised logistics handling for traditional and religious cargo — prioritising cultural respect, meticulous care, and white-glove treatment.",
    icon: <Anchor size={24} strokeWidth={1.5} />,
    image: "/cochin.webp",
  },
  {
    title: "India to North America",
    desc: "Premium door-to-door delivery connecting the Indian subcontinent directly to USA and Canada markets with unrivalled speed and traceability.",
    icon: <Map size={24} strokeWidth={1.5} />,
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
      <section className="relative h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/hero-port.webp" alt="Services hero" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 w-full">
          <h1 className="fade-elem text-5xl md:text-6xl font-medium text-white tracking-tight max-w-2xl">
            Core <span className="text-white/40">Capabilities</span>
          </h1>
          <p className="fade-elem text-lg text-white/50 mt-4 max-w-xl">
            Advanced logistical solutions engineered for scale, speed, and uncompromising security.
          </p>
        </div>
      </section>


      {/* ─── SERVICES LIST ─── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 space-y-8">
        {services.map((service, idx) => (
          <div key={idx} className="service-card group grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-white/[0.08] hover:border-white/20 transition-colors duration-500">
            {/* Image — alternates left/right */}
            <div className={`relative h-72 md:h-80 ${idx % 2 !== 0 ? "md:order-last" : ""}`}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="bg-white/[0.02] p-10 md:p-12 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 mb-6">
                {service.icon}
              </div>
              <div className="text-xs text-white/30 font-mono mb-2 tracking-widest uppercase">
                0{idx + 1}
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">{service.title}</h3>
              <p className="text-white/50 leading-relaxed">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
