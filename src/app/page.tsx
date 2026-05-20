"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowDown, Globe, Anchor, Ship, FileText, Truck, Boxes, Compass, Plane } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AmbientGradient from "@/components/AmbientGradient";
import MagneticButton from "@/components/MagneticButton";
import AnimatedText from "@/components/AnimatedText";
import ShipmentJourney from "@/components/ShipmentJourney";
import AuthorityShowcase from "@/components/AuthorityShowcase";

// ─── CAPABILITY DATA ───
const capabilities = [
  {
    title: "Shipping Agency (Liner)",
    desc: "Expert local representation and vessel management for global ocean liners.",
    icon: Ship,
    img: "/cargo-ship.webp",
  },
  {
    title: "Customs Broking & Logistics Services",
    desc: "Expert customs clearance and integrated document compliance orchestration.",
    icon: FileText,
    img: "/customs.webp",
  },
  {
    title: "Freight Forwarding",
    desc: "Reliable end-to-end global cargo coordination and shipping solutions.",
    icon: Globe,
    img: "/cochin.webp",
  },
  {
    title: "Transportation",
    desc: "Secure and timely domestic road haulage, first-mile, and last-mile delivery.",
    icon: Truck,
    img: "/hero-port.webp",
  },
  {
    title: "Equipment Leasing",
    desc: "Flexible high-grade logistics and container lease provisions for bulk cargo.",
    icon: Boxes,
    img: "/warehouse.webp",
  },
  {
    title: "Coastal Services",
    desc: "Seamless coastal shipping and domestic maritime transit along the Indian coastline.",
    icon: Anchor,
    img: "/cargo-ship.webp",
  },
  {
    title: "Vessel Chartering",
    desc: "Bespoke chartering solutions for bulk, breakbulk, and heavy-lift project cargo.",
    icon: Compass,
    img: "/cochin.webp",
  },
  {
    title: "Air Freight",
    desc: "Expedited global air transport for time-sensitive, high-value enterprise cargo.",
    icon: Plane,
    img: "/freight-air.webp",
  },
];

// ─── REUSABLE CAPABILITY CARD COMPONENT ───
interface CapabilityCardProps {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string; size?: number; strokeWidth?: number }>;
  img: string;
}

function CapabilityCard({ title, desc, icon: Icon, img }: CapabilityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative h-[360px] sm:h-[400px] rounded-[2rem] overflow-hidden border border-white/10 bg-slate-950 shadow-2xl"
    >
      <Image
        src={img}
        alt={title}
        fill
        quality={85}
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent z-10" />
      <div className="absolute inset-0 bg-slate-950/15 group-hover:bg-slate-950/30 transition-colors duration-500 z-10" />
      
      {/* Top Left Icon Box */}
      <div className="absolute top-8 left-8 z-20 w-14 h-14 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-blue-500/30 group-hover:bg-blue-500/5 transition-all duration-500">
        <Icon className="text-white/80 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-500" size={24} strokeWidth={1.5} />
      </div>

      {/* Bottom Text Content */}
      <div className="absolute bottom-8 left-8 right-8 z-20 flex flex-col justify-end">
        <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        
        <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
          <p className="text-white/60 text-xs md:text-sm mt-3 leading-relaxed">
            {desc}
          </p>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-blue-400 uppercase mt-4">
            Explore Capability <ArrowRight size={12} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero stagger reveal
      gsap.fromTo(
        ".hero-element",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.14, ease: "power3.out", delay: 0.2 }
      );

      // Parallax hero image on scroll
      gsap.to(".hero-img", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: 1 },
      });

      // Stats count-up feel
      gsap.utils.toArray<HTMLElement>(".stat-num").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%" } }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col w-full">

      {/* ─── HERO ─── */}
      <section className="hero-section relative min-h-screen flex flex-col justify-end overflow-hidden">
        <AmbientGradient />

        <div className="hero-img absolute inset-0 will-change-transform">
          <Image
            src="/hero-port.webp"
            alt="Sri Sai Shipping port — Cochin, India"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full pb-20 md:pb-32">
          <div className="hero-element inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md mb-6 md:mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
            <span className="text-xs text-white/60 font-medium tracking-wide uppercase">• SRI SAI SHIPPING AGENCIES • GLOBAL AUTHORITY</span>
          </div>

          <h1 className="hero-element text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.05] mb-5 md:mb-6 max-w-4xl">
            ARCHITECTING<br />
            <span className="text-white/40">GLOBAL LOGISTICS</span>
          </h1>

          <p className="hero-element text-base md:text-xl text-white/55 mb-8 md:mb-10 max-w-xl leading-relaxed">
            Delivering Reliable Freight Solutions for 45+ Years. Elevating international trade through uncompromising customs clearance, elite freight forwarding, and specialized enterprise delivery infrastructure from India to North America.
          </p>

          <div className="hero-element flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 h-12 px-7 font-medium text-sm text-black bg-white rounded-full hover:bg-white/90 transition-colors">
              Track Shipment
            </Link>
            <Link href="/global-logistics" className="inline-flex items-center justify-center gap-2 h-12 px-7 font-medium text-sm text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-full backdrop-blur-sm transition-colors">
              Explore Enterprise Network
            </Link>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/25"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <ArrowDown size={20} strokeWidth={1.5} />
        </motion.div>
      </section>


      {/* ─── STATS STRIP ─── */}
      <section className="py-16 md:py-20 border-b border-white/[0.05] relative">
        <AmbientGradient />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { num: "45+", label: "Years Experience" },
              { num: "1980s", label: "Established Since" },
              { num: "100%", label: "International Logistics Expertise" },
              { num: "50+", label: "Global Freight Operations" },
            ].map((stat, i) => (
              <div key={i} className="stat-num">
                <div className="text-3xl md:text-5xl font-light text-white mb-1 md:mb-2">{stat.num}</div>
                <div className="text-xs md:text-sm text-white/35 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── SHOWCASE STRIP ─── */}
      <AuthorityShowcase />


      {/* ─── SHIPMENT JOURNEY (pinned scroll) ─── */}
      <ShipmentJourney />


      {/* ─── SERVICES VISUAL GRID ─── */}
      <section className="svc-section py-20 md:py-32 border-t border-white/[0.04] relative overflow-hidden">
        <AmbientGradient />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
          <div className="mb-10 md:mb-16">
            <p className="text-white/35 text-xs tracking-[0.4em] uppercase mb-3 md:mb-4">CORE CAPABILITIES</p>
            <AnimatedText as="h2" className="text-3xl md:text-5xl font-medium text-white tracking-tight max-w-2xl">
              Precision-Engineered Logistics Services
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <CapabilityCard key={i} title={cap.title} desc={cap.desc} icon={cap.icon} img={cap.img} />
            ))}
          </div>

          <div className="mt-8 md:mt-10 text-center">
            <MagneticButton>
              <Link href="/services" className="inline-flex items-center gap-2 text-white/45 hover:text-white transition-colors text-sm font-medium">
                View All Services <ArrowRight size={16} />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>


      {/* ─── CLIENTS / TRUST SECTION ─── */}
      <section className="py-16 md:py-24 relative overflow-hidden border-t border-white/[0.04]">
        <AmbientGradient />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-white/35 text-xs tracking-[0.4em] uppercase mb-3 md:mb-4">INTERNATIONAL TRUSTED ORGANIZATIONS</p>
            <AnimatedText as="h2" className="text-2xl md:text-4xl font-medium text-white tracking-tight mx-auto max-w-2xl">
              Trusted Clients & Organizations
            </AnimatedText>
            <p className="text-white/50 text-sm mt-4 max-w-xl mx-auto">
              Our logistics architecture supports premium institutions, global relief organizations, and major international worship centers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "ST JAMES MARTHOMA CHURCH OF ROCKLAND INC",
                location: "New York, United States of America",
                service: "Devotional Cargo Handling",
                flag: "🇺🇸",
                desc: "Orchestrating precision door-to-door transit and customs clearance for sacred traditional artifacts and institutional goods."
              },
              {
                name: "Blossom Foundation",
                location: "Dallas, United States of America",
                service: "Global Freight Coordination",
                flag: "🇺🇸",
                desc: "Managing complex supply chain movements and international logistics for institutional community welfare distribution."
              },
              {
                name: "Guruvayurappan Temple of Brampton",
                location: "Ontario, Canada",
                service: "Institutional Logistics Support",
                flag: "🇨🇦",
                desc: "Executing complex custom clearing and high-frequency cargo movements for traditional temple artifacts."
              }
            ].map((client, i) => (
              <div key={i} className="group relative rounded-2xl md:rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 md:p-8 backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[280px]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
                      <Globe className="text-white/70 group-hover:text-white transition-colors" size={18} strokeWidth={1.5} />
                    </div>
                    <span className="text-2xl" role="img" aria-label="country flag">{client.flag}</span>
                  </div>
                  <h3 className="text-base md:text-lg font-medium text-white mb-2 leading-snug group-hover:text-blue-400 transition-colors">{client.name}</h3>
                  <p className="text-white/40 text-xs mb-3">{client.location}</p>
                  <p className="text-white/55 text-xs leading-relaxed">{client.desc}</p>
                </div>
                <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] text-white/30 uppercase tracking-wider">{client.service}</span>
                  <ArrowRight size={14} className="text-white/30 group-hover:text-white/70 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── CTA ─── */}
      <section className="relative py-28 md:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/cargo-ship.webp"
            alt="Sri Sai Shipping contact background"
            fill
            quality={80}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-matte-black/80" />
        </div>
        <AmbientGradient />
        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <AnimatedText as="h2" className="text-3xl sm:text-4xl md:text-6xl font-medium text-white tracking-tight mb-4 md:mb-6">
            READY TO DOMINATE?
          </AnimatedText>
          <p className="text-base md:text-xl text-white/50 mb-8 md:mb-10">
            Partner with Sri Sai Shipping Agencies today and experience the future of elite global trade execution.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center h-13 md:h-14 px-8 md:px-10 font-medium text-black bg-white rounded-full hover:bg-white/90 transition-colors shadow-[0_0_60px_rgba(255,255,255,0.08)]">
            Initiate Consultation
          </Link>
        </div>
      </section>

    </div>
  );
}
