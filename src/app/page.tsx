"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowDown, Globe, Anchor, Ship, FileText, Truck, Boxes, Compass, Plane, HardHat, Shirt, FlaskConical, Cpu, Car, Scale, ShoppingCart, Warehouse } from "lucide-react";
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
    title: "Customs Broking & Logistics Services",
    desc: "Expert customs clearance and integrated document compliance orchestration.",
    icon: FileText,
    img: "/services/coastal-logistics.webp",
  },
  {
    title: "Freight Forwarding",
    desc: "Reliable end-to-end global cargo coordination and shipping solutions.",
    icon: Globe,
    img: "/services/freight-forwarding.webp",
  },
  {
    title: "Air Freight",
    desc: "Expedited global air transport for time-sensitive, high-value enterprise cargo.",
    icon: Plane,
    img: "/freight-air.webp",
  },
  {
    title: "Transportation",
    desc: "Secure and timely domestic road haulage, first-mile, and last-mile delivery.",
    icon: Truck,
    img: "/services/transportation.webp",
  },
  {
    title: "Smart Warehousing",
    desc: "Secure, scalable storage solutions with integrated inventory management and distribution.",
    icon: Warehouse,
    img: "/warehouse.webp",
  },
  {
    title: "Coastal Services",
    desc: "Seamless coastal shipping and domestic maritime transit along the Indian coastline.",
    icon: Anchor,
    img: "/services/coastal-services.webp",
  },
  {
    title: "Vessel Chartering",
    desc: "Bespoke chartering solutions for bulk, breakbulk, and heavy-lift project cargo.",
    icon: Compass,
    img: "/services/vessel-chartering.webp",
  },
  {
    title: "Equipment Leasing",
    desc: "Flexible high-grade logistics and container lease provisions for bulk cargo.",
    icon: Boxes,
    img: "/services/equipment--leasing.webp",
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
      className="group relative h-[360px] sm:h-[420px] rounded-[2rem] overflow-hidden border border-slate-200 bg-white shadow-lg hover:shadow-[0_20px_40px_-10px_rgba(30,64,175,0.2)] hover:border-blue-400/30 hover:-translate-y-1.5 transition-all duration-500 ease-out"
    >
      <Image
        src={img}
        alt={title}
        fill
        quality={85}
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-0"
      />
      {/* Cinematic bottom gradient overlay to make text highly legible and add warmth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 via-60% to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
      
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
    img: "/industry-expertise/bulk-cargo.webp"
  },
  {
    title: "Project Cargo",
    desc: "End-to-end heavy-lift and out-of-gauge logistics for infrastructure ventures.",
    icon: HardHat,
    img: "/industry-expertise/project-cargo.webp"
  },
  {
    title: "Textile",
    desc: "Global supply chain logistics connecting Indian weaving hubs with overseas markets.",
    icon: Shirt,
    img: "/industry-expertise/textile.webp"
  },
  {
    title: "Chemicals",
    desc: "Highly secure, compliant transit protocols for hazardous and non-hazardous products.",
    icon: FlaskConical,
    img: "/industry-expertise/chemicals.webp"
  },
  {
    title: "Electronics",
    desc: "Time-sensitive, high-security routing for precision electronic instruments and components.",
    icon: Cpu,
    img: "/warehouse.webp"
  },
  {
    title: "Automotive",
    desc: "Just-in-time logistics execution for vehicular parts and specialized machinery.",
    icon: Car,
    img: "/industry-expertise/automotive.webp"
  },
  {
    title: "Commodities",
    desc: "Precision shipping coordination for agricultural, metal, and industrial raw materials.",
    icon: Scale,
    img: "/industry-expertise/commodities.webp"
  },
  {
    title: "FMCG",
    desc: "High-velocity distribution networks keeping fast-moving consumer goods in constant motion.",
    icon: ShoppingCart,
    img: "/industry-expertise/fmcg.webp"
  },
  {
    title: "Traditional & Devotional Projects",
    desc: "Respectful, highly secure logistics of traditional and devotional artifacts and institutional goods.",
    icon: Ship,
    img: "/industry-expertise/traditional-devotional-projects.webp"
  },
];

// ─── REUSABLE INDUSTRY CARD COMPONENT ───
interface IndustryCardProps {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string; size?: number; strokeWidth?: number }>;
  img: string;
}

function IndustryCard({ title, desc, icon: Icon, img }: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative rounded-2xl overflow-hidden min-h-[360px] h-full shadow-md hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-end border border-slate-200/50"
    >
      <Image src={img} alt={title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-transparent opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500 z-10" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />

      {/* Top right arrow */}
      <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white/20 transition-all">
        <ArrowRight size={14} className="text-white -rotate-45" />
      </div>

      <div className="relative z-20 p-6 w-full">
        <h3 className="text-2xl font-bold text-white mb-2 leading-tight drop-shadow-md">{title}</h3>
        <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
          <p className="text-slate-200 text-sm leading-relaxed drop-shadow-sm mt-2">{desc}</p>
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
      <section className="hero-section relative min-h-screen flex flex-col justify-end overflow-hidden pb-12 md:pb-24 pt-28">
        <div className="hero-img absolute inset-0 will-change-transform">
          <Image
            src="/hero-port.webp"
            alt="Sri Sai Shipping Background"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Cinematic, warmer gradients for premium maritime feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-[#0a1128]/40 to-transparent mix-blend-multiply opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-[#1e3a8a]/20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-95" />
          
          {/* Top gradient for Navbar visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/0 to-transparent h-48" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-8">
          
          {/* Left Side: Large Text */}
          <div className="flex-1 hero-element text-white w-full max-w-full overflow-hidden">
            <h1 className="text-[3.5rem] sm:text-6xl md:text-7xl lg:text-[7rem] leading-[1.05] md:leading-[0.95] tracking-tight mb-4 md:mb-6 w-full">
              <span className="font-sans font-medium block md:inline">Architecting</span> <br className="hidden md:block" />
              <span className="font-serif italic text-white/95 text-[1em]">Global Logistics</span>
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-white/80 max-w-2xl font-light tracking-wide leading-relaxed">
              Premium freight forwarding across international waters, ports & beyond.
            </p>
          </div>

          {/* Right Side: Solid Dark Card */}
          <div className="hero-element w-full max-w-[380px] shrink-0">
            <div className="bg-[#1c1917] border border-[#3c3633] rounded-[24px] p-4 shadow-2xl">
              {/* Card Image */}
              <div className="relative w-full h-[220px] rounded-[16px] overflow-hidden mb-5">
                <Image 
                  src="/cochin.webp"
                  alt="Featured operation"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-sm">
                  <span className="text-white text-xs font-serif italic font-medium">SS</span>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="px-2 pb-1">
                <h3 className="text-[22px] text-white font-medium tracking-tight mb-2">Enterprise Port Operations</h3>
                <p className="text-[#a8a29e] text-sm leading-relaxed mb-6 font-light pr-2">
                  Engineered for high-capacity global transit, smart container tracking, and secure breakbulk handling.
                </p>
                
                <div className="flex items-center justify-between border-t border-[#3c3633] pt-4 pb-1">
                  <span className="text-xs text-[#a8a29e] font-medium tracking-wide">Latest dispatches</span>
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 rounded-full border border-[#3c3633] flex items-center justify-center text-[#78716c] hover:text-white hover:border-[#57534e] transition-all">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                    </button>
                    <button className="w-8 h-8 rounded-full border border-[#57534e] flex items-center justify-center text-white hover:bg-[#292524] transition-all">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ─── STATS STRIP ─── */}
      <section className="py-16 md:py-20 border-b border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent pointer-events-none" />
        <AmbientGradient />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { num: "45+", label: "Years Experience" },
              { num: "1980s", label: "Established Since" },
              { num: "100%", label: "International Logistics Expertise" },
              { num: "40k+", label: "Global Freight Operations" },
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
      <section className="svc-section py-16 md:py-24 border-t border-slate-200 bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-[600px] bg-gradient-to-bl from-blue-100/20 via-transparent to-transparent pointer-events-none blur-3xl" />
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
              <div key={i} className={i === 6 || i === 7 ? "lg:translate-x-[calc(50%+1rem)]" : ""}>
                <CapabilityCard title={cap.title} desc={cap.desc} icon={cap.icon} img={cap.img} />
              </div>
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
      <section className="py-12 md:py-24 border-t border-slate-200 bg-gradient-to-br from-white to-[#f8fafc] relative overflow-hidden">
        <div className="absolute -left-[10%] top-[20%] w-[40%] h-[400px] bg-amber-500/5 rounded-full pointer-events-none blur-3xl" />
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
 
          <div className="flex flex-wrap justify-center gap-6">
            {industries.map((ind, i) => (
              <div 
                key={i} 
                className={`w-full sm:w-[calc(50%-12px)] flex ${
                  i < 2 ? "lg:w-[calc(50%-12px)]" : 
                  i < 5 ? "lg:w-[calc(33.333%-16px)]" : 
                  "lg:w-[calc(25%-18px)]"
                }`}
              >
                <div className="w-full">
                  <IndustryCard title={ind.title} desc={ind.desc} icon={ind.icon} img={ind.img} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ─── CLIENTS / TRUST SECTION ─── */}
      <section className="py-12 md:py-24 relative overflow-hidden border-t border-slate-200 bg-slate-50 shadow-inner">
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
                desc: "Orchestrating precision door-to-door transit and customs clearance for sacred traditional artifacts and institutional goods.",
                img: "/cochin.webp"
              },
              {
                name: "Blossom Foundation",
                location: "Dallas, United States of America",
                service: "Global Freight Coordination",
                flag: "🇺🇸",
                desc: "Managing complex supply chain movements and international logistics for institutional community welfare distribution.",
                img: "/Blossom Foundation Dallas, United States of America.webp"
              },
              {
                name: "Guruvayurappan Temple of Brampton",
                location: "Ontario, Canada",
                service: "Institutional Logistics Support",
                flag: "🇨🇦",
                desc: "Executing complex custom clearing and high-frequency cargo movements for traditional temple artifacts.",
                img: "/Guruvayurappan Temple of Brampton.jpg"
              }
            ].map((client, i) => (
              <div key={i} className="group relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1.5 transition-all duration-500 min-h-[380px] flex flex-col justify-end border border-slate-200/50">
                <Image src={client.img} alt={client.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />

                {/* Top right arrow */}
                <div className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <ArrowRight size={16} className="text-white -rotate-45" />
                </div>

                <div className="relative z-20 p-8 w-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl" role="img" aria-label="country flag">{client.flag}</span>
                    <span className="text-[10px] text-white/90 uppercase tracking-wider font-bold border border-white/30 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">{client.service}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight drop-shadow-md">{client.name}</h3>
                  <p className="text-white/80 text-xs mb-4 font-semibold uppercase tracking-wider drop-shadow-md">{client.location}</p>
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                    <p className="text-slate-200 text-sm leading-relaxed drop-shadow-sm border-t border-white/20 pt-4 mt-2">{client.desc}</p>
                  </div>
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
            Partner with SRI SAI SHIPPING AGENCIES today and experience the future of elite global trade execution.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center h-14 px-10 font-semibold text-sm text-white bg-gradient-to-r from-[#0f2863] to-[#1e40af] hover:from-[#1e40af] hover:to-[#2563eb] border border-blue-400/20 rounded-full shadow-[0_4px_20px_rgba(30,64,175,0.3)] hover:shadow-[0_8px_30px_rgba(30,64,175,0.5)] transition-all duration-300">
            Initiate Consultation
          </Link>
        </div>
      </section>

    </div>
  );
}
