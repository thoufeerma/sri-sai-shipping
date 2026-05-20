"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowDown, Globe, Anchor, Ship, FileText, Truck, Boxes, Compass, Plane, HardHat, Shirt, FlaskConical, Cpu, Car, Scale, ShoppingCart } from "lucide-react";
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
      className="group relative h-[360px] sm:h-[400px] rounded-[2rem] overflow-hidden border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.1)] hover:border-blue-500/30 hover:-translate-y-1.5 transition-all duration-500 ease-out"
    >
      <Image
        src={img}
        alt={title}
        fill
        quality={85}
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-0"
      />
      {/* Strong dark bottom gradient overlay to make text highly legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 via-60% to-transparent z-10" />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-500 z-10" />
      
      {/* Top Left Icon Box */}
      <div className="absolute top-8 left-8 z-20 w-14 h-14 bg-white/70 backdrop-blur-md rounded-2xl flex items-center justify-center border border-slate-200 group-hover:border-blue-500/30 group-hover:bg-blue-50/50 transition-all duration-500">
        <Icon className="text-slate-800 group-hover:text-[#1E40AF] group-hover:scale-110 transition-all duration-500" size={24} strokeWidth={1.5} />
      </div>

      {/* Bottom Text Content */}
      <div className="absolute bottom-8 left-8 right-8 z-20 flex flex-col justify-end">
        <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight group-hover:text-blue-200 transition-colors duration-300">
          {title}
        </h3>
        
        <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
          <p className="text-slate-100 text-xs md:text-sm mt-3 leading-relaxed">
            {desc}
          </p>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-blue-300 group-hover:text-blue-200 uppercase mt-4">
            Explore Capability <ArrowRight size={12} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── INDUSTRY DATA ───
const industries = [
  {
    title: "Bulk Cargo",
    desc: "Chartering and coordination for heavy dry and liquid bulk maritime transport.",
    icon: Anchor,
  },
  {
    title: "Project Cargo",
    desc: "End-to-end heavy-lift and out-of-gauge logistics for infrastructure ventures.",
    icon: HardHat,
  },
  {
    title: "Textile",
    desc: "Global supply chain logistics connecting Indian weaving hubs with overseas markets.",
    icon: Shirt,
  },
  {
    title: "Chemicals",
    desc: "Highly secure, compliant transit protocols for hazardous and non-hazardous products.",
    icon: FlaskConical,
  },
  {
    title: "Electronics",
    desc: "Time-sensitive, high-security routing for precision electronic instruments and components.",
    icon: Cpu,
  },
  {
    title: "Automotive",
    desc: "Just-in-time logistics execution for vehicular parts and specialized machinery.",
    icon: Car,
  },
  {
    title: "Commodities",
    desc: "Precision shipping coordination for agricultural, metal, and industrial raw materials.",
    icon: Scale,
  },
  {
    title: "FMCG",
    desc: "High-velocity distribution networks keeping fast-moving consumer goods in constant motion.",
    icon: ShoppingCart,
  },
];

// ─── REUSABLE INDUSTRY CARD COMPONENT ───
interface IndustryCardProps {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string; size?: number; strokeWidth?: number }>;
}

function IndustryCard({ title, desc, icon: Icon }: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative rounded-2xl border border-slate-200 bg-white/60 hover:bg-white p-6 backdrop-blur-sm shadow-sm hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:border-blue-500/20 hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[170px] glass-shimmer"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-200 group-hover:border-blue-400/30 group-hover:bg-blue-50 transition-all duration-500 mb-5">
            <Icon className="text-slate-600 group-hover:text-[#2563EB] group-hover:scale-110 transition-all duration-500" size={20} strokeWidth={1.5} />
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-2 leading-tight group-hover:text-[#1E40AF] transition-colors duration-300">{title}</h3>
          <p className="text-slate-700 text-xs md:text-sm leading-relaxed">{desc}</p>
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
      <section className="hero-section relative min-h-screen flex flex-col justify-end overflow-hidden pt-28 md:pt-36">
        <AmbientGradient />

        <div className="hero-img absolute inset-0 will-change-transform">
          <Image
            src="/hero-port.webp"
            alt="Sri Sai Shipping port — Cochin, India"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Soft overlay to protect text without excessive smoke */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-white/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/40 to-transparent h-[40%] top-auto bottom-0" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full pb-20 md:pb-32">
          <div className="hero-element inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-350 bg-slate-100/80 backdrop-blur-md mb-6 md:mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E40AF]" />
            <span className="text-xs text-slate-800 font-semibold tracking-wide uppercase">• SRI SAI SHIPPING AGENCIES • GLOBAL AUTHORITY</span>
          </div>

          <h1 className="hero-element text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 leading-[1.05] mb-5 md:mb-6 max-w-4xl uppercase">
            ARCHITECTING<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1E40AF] to-blue-700 font-bold">GLOBAL LOGISTICS</span>
          </h1>

          <p className="hero-element text-base md:text-xl text-slate-700 mb-8 md:mb-10 max-w-xl leading-relaxed">
            Delivering Reliable Freight Solutions for 45+ Years. Elevating international trade through uncompromising customs clearance, elite freight forwarding, and specialized enterprise delivery infrastructure from India to North America.
          </p>

          <div className="hero-element flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 h-12 px-7 font-semibold text-sm text-white bg-gradient-to-br from-[#1E40AF] to-[#2563EB] hover:from-[#1D4ED8] hover:to-[#1E40AF] rounded-full shadow-[0_4px_14px_rgba(30,64,175,0.15)] hover:shadow-[0_6px_20px_rgba(30,64,175,0.25)] transition-all duration-300">
              Track Shipment
            </Link>
            <Link href="/global-logistics" className="inline-flex items-center justify-center gap-2 h-12 px-7 font-semibold text-sm text-slate-800 bg-white/70 backdrop-blur-md hover:bg-white border border-slate-200/80 rounded-full shadow-sm hover:shadow transition-all duration-300">
              Explore Enterprise Network
            </Link>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-slate-500"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <ArrowDown size={20} strokeWidth={1.5} />
        </motion.div>
      </section>


      {/* ─── STATS STRIP ─── */}
      <section className="py-16 md:py-20 border-b border-slate-200 bg-white/60 relative">
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
                <div className="text-3xl md:text-5xl font-light text-slate-900 mb-1 md:mb-2">{stat.num}</div>
                <div className="text-xs md:text-sm text-slate-500 tracking-wide">{stat.label}</div>
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
      <section className="svc-section py-16 md:py-24 border-t border-slate-200 bg-[#F8FAFC] relative overflow-hidden">
        <AmbientGradient />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
          <div className="mb-10 md:mb-16">
            <p className="text-slate-500 text-xs tracking-[0.4em] uppercase mb-3 md:mb-4">CORE CAPABILITIES</p>
            <AnimatedText as="h2" className="text-3xl md:text-5xl font-medium text-slate-900 tracking-tight max-w-2xl">
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
              <Link href="/services" className="inline-flex items-center gap-2 text-slate-655 hover:text-[#1E40AF] transition-colors text-sm font-semibold tracking-wide border-b border-transparent hover:border-[#1E40AF] pb-0.5">
                View All Services <ArrowRight size={16} />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES WE SERVE SECTION ─── */}
      <section className="py-12 md:py-20 border-t border-slate-200 bg-white relative overflow-hidden">
        <AmbientGradient />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
          <div className="mb-12 md:mb-16">
            <p className="text-slate-500 text-xs tracking-[0.4em] uppercase mb-3 md:mb-4">INDUSTRY EXPERTISE ACROSS GLOBAL SUPPLY CHAINS</p>
            <AnimatedText as="h2" className="text-3xl md:text-5xl font-medium text-slate-900 tracking-tight max-w-3xl">
              Specialized Logistics for Diverse Sectors
            </AnimatedText>
            <p className="text-slate-600 text-sm mt-4 max-w-2xl">
              Delivering specialized freight forwarding, vessel chartering, and integrated supply chain management solutions customized to distinct industrial requirements.
            </p>
          </div>
 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <IndustryCard key={i} title={ind.title} desc={ind.desc} icon={ind.icon} />
            ))}
          </div>
        </div>
      </section>
 
      {/* ─── CLIENTS / TRUST SECTION ─── */}
      <section className="py-12 md:py-24 relative overflow-hidden border-t border-slate-200 bg-[#F8FAFC]">
        <AmbientGradient />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-slate-500 text-xs tracking-[0.4em] uppercase mb-3 md:mb-4">INTERNATIONAL TRUSTED ORGANIZATIONS</p>
            <AnimatedText as="h2" className="text-2xl md:text-4xl font-medium text-slate-900 tracking-tight mx-auto max-w-2xl">
              Trusted Clients & Organizations
            </AnimatedText>
            <p className="text-slate-600 text-sm mt-4 max-w-xl mx-auto">
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
              <div key={i} className="group relative rounded-2xl md:rounded-3xl border border-slate-200 bg-white/85 p-7 md:p-8 backdrop-blur-sm hover:bg-white shadow-[0_10px_35px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] hover:border-blue-500/20 hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[280px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-colors">
                      <Globe className="text-slate-600 group-hover:text-[#2563EB] transition-colors" size={18} strokeWidth={1.5} />
                    </div>
                    <span className="text-2xl" role="img" aria-label="country flag">{client.flag}</span>
                  </div>
                  <h3 className="text-base md:text-lg font-medium text-slate-900 mb-2 leading-snug group-hover:text-[#1E40AF] transition-colors">{client.name}</h3>
                  <p className="text-slate-500 text-xs mb-3 font-medium">{client.location}</p>
                  <p className="text-slate-700 text-xs leading-relaxed">{client.desc}</p>
                </div>
                <div className="relative z-10 mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">{client.service}</span>
                  <ArrowRight size={14} className="text-slate-500 group-hover:text-[#1E40AF] group-hover:translate-x-1 transition-all" />
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
          <div className="absolute inset-0 bg-slate-950/75" />
        </div>
        <AmbientGradient />
        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <AnimatedText as="h2" className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight mb-4 md:mb-6 uppercase">
            READY TO DOMINATE?
          </AnimatedText>
          <p className="text-base md:text-xl text-white/80 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Partner with Sri Sai Shipping Agencies today and experience the future of elite global trade execution.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center h-14 px-10 font-semibold text-sm text-white bg-gradient-to-br from-[#1E40AF] to-[#2563EB] hover:from-[#1D4ED8] hover:to-[#1E40AF] rounded-full shadow-[0_4px_14px_rgba(30,64,175,0.25)] hover:shadow-[0_6px_20px_rgba(30,64,175,0.35)] transition-all duration-300">
            Initiate Consultation
          </Link>
        </div>
      </section>

    </div>
  );
}
