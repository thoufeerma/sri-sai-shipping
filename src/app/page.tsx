"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowDown, Globe, Package, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AmbientGradient from "@/components/AmbientGradient";
import MagneticButton from "@/components/MagneticButton";
import AnimatedText from "@/components/AnimatedText";
import ShipmentJourney from "@/components/ShipmentJourney";

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

      // Service cards stagger
      gsap.fromTo(".svc-card",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: ".svc-section", start: "top 80%" } }
      );
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
            <span className="text-xs text-white/60 font-medium tracking-wide">Sri Sai Shipping Agencies — Est. 1980</span>
          </div>

          <h1 className="hero-element text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.05] mb-5 md:mb-6 max-w-4xl">
            The world moves.<br />
            <span className="text-white/40">We move it.</span>
          </h1>

          <p className="hero-element text-base md:text-xl text-white/55 mb-8 md:mb-10 max-w-xl leading-relaxed">
            46 years of intelligent customs clearance, freight forwarding, and global logistics — connecting India to the world.
          </p>

          <div className="hero-element flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link href="/services" className="inline-flex items-center justify-center gap-2 h-12 px-7 font-medium text-sm text-black bg-white rounded-full hover:bg-white/90 transition-colors">
              Our Services
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 h-12 px-7 font-medium text-sm text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-full backdrop-blur-sm transition-colors">
              Talk to an Expert
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
              { num: "46+", label: "Years Experience" },
              { num: "50K+", label: "Shipments Handled" },
              { num: "24 / 7", label: "Global Operations" },
              { num: "100%", label: "Compliance Rate" },
            ].map((stat, i) => (
              <div key={i} className="stat-num">
                <div className="text-3xl md:text-5xl font-light text-white mb-1 md:mb-2">{stat.num}</div>
                <div className="text-xs md:text-sm text-white/35 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── ABOUT STRIP ─── */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <AmbientGradient />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
          <div className="relative h-[300px] sm:h-[400px] lg:h-[480px] rounded-2xl md:rounded-3xl overflow-hidden glass-shimmer">
            <Image
              src="/cochin.webp"
              alt="Cochin port aerial view — Sri Sai Shipping headquarters"
              fill
              quality={85}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 md:bottom-6 md:left-6 md:right-6">
              <p className="text-xs text-white/40 tracking-widest uppercase mb-1">Headquarters</p>
              <p className="text-white font-medium text-sm md:text-base">Cochin, Kerala, India</p>
            </div>
          </div>

          <div>
            <p className="text-white/35 text-xs font-medium tracking-[0.4em] uppercase mb-5 md:mb-6">Our Legacy</p>
            <AnimatedText as="h2" className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-5 md:mb-6 leading-tight">
              Built on four decades of logistics excellence.
            </AnimatedText>
            <p className="text-white/55 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              Since 1980, Sri Sai Shipping Agencies has operated at the heart of global commerce — navigating customs protocols, forging international freight routes, and ensuring every shipment arrives exactly as intended.
            </p>
            <MagneticButton>
              <Link href="/about" className="inline-flex items-center gap-2 text-white hover:text-white/60 transition-colors text-sm font-medium border-b border-white/20 pb-1 hover:border-white/40">
                Read our story <ArrowRight size={16} />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>


      {/* ─── SHIPMENT JOURNEY (pinned scroll) ─── */}
      <ShipmentJourney />


      {/* ─── SERVICES VISUAL GRID ─── */}
      <section className="svc-section py-20 md:py-32 border-t border-white/[0.04] relative overflow-hidden">
        <AmbientGradient />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
          <div className="mb-10 md:mb-16">
            <p className="text-white/35 text-xs tracking-[0.4em] uppercase mb-3 md:mb-4">Capabilities</p>
            <AnimatedText as="h2" className="text-3xl md:text-5xl font-medium text-white tracking-tight max-w-2xl">
              Comprehensive logistics infrastructure.
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="svc-card md:col-span-2 relative h-[280px] sm:h-[360px] md:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden group glass-shimmer">
              <Image
                src="/cargo-ship.webp"
                alt="Sri Sai freight forwarding — cargo ship at sea"
                fill
                quality={85}
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center mb-3 md:mb-4 backdrop-blur-sm">
                  <Globe size={18} strokeWidth={1.5} className="text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-white mb-1 md:mb-2">Freight Forwarding</h3>
                <p className="text-white/55 text-sm max-w-sm">Intelligent global routing across sea and air cargo networks.</p>
              </div>
            </div>

            <div className="svc-card relative h-[280px] sm:h-[360px] md:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden group glass-shimmer">
              <Image
                src="/customs.webp"
                alt="Sri Sai customs clearance documentation"
                fill
                quality={85}
                sizes="(max-width: 768px) 100vw, 34vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center mb-3 md:mb-4 backdrop-blur-sm">
                  <Shield size={18} strokeWidth={1.5} className="text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-white mb-1 md:mb-2">Customs Clearance</h3>
                <p className="text-white/55 text-sm">Precision compliance for import & export.</p>
              </div>
            </div>

            <div className="svc-card relative h-[240px] sm:h-[280px] md:h-[320px] rounded-2xl md:rounded-3xl overflow-hidden group glass-shimmer">
              <Image
                src="/warehouse.webp"
                alt="Sri Sai bonded warehouse facility in Cochin"
                fill
                quality={85}
                sizes="(max-width: 768px) 100vw, 34vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center mb-3 md:mb-4 backdrop-blur-sm">
                  <Package size={18} strokeWidth={1.5} className="text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-white mb-1 md:mb-2">Warehousing</h3>
                <p className="text-white/55 text-sm">Secure, scalable storage facilities.</p>
              </div>
            </div>

            <div className="svc-card md:col-span-2 relative h-[240px] sm:h-[280px] md:h-[320px] rounded-2xl md:rounded-3xl overflow-hidden group glass-shimmer">
              <Image
                src="/freight-air.webp"
                alt="Air freight service India to USA and Canada"
                fill
                quality={85}
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <h3 className="text-xl md:text-2xl font-medium text-white mb-1 md:mb-2">India → USA & Canada</h3>
                <p className="text-white/55 text-sm max-w-md">Direct door-to-door delivery with unrivalled speed and traceability.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-10 text-center">
            <MagneticButton>
              <Link href="/services" className="inline-flex items-center gap-2 text-white/45 hover:text-white transition-colors text-sm font-medium">
                View all services <ArrowRight size={16} />
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
            <p className="text-white/35 text-xs tracking-[0.4em] uppercase mb-3 md:mb-4">Trusted By</p>
            <AnimatedText as="h2" className="text-2xl md:text-4xl font-medium text-white tracking-tight mx-auto max-w-2xl">
              Global Associations & Partnerships
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            
            <div className="group relative rounded-2xl md:rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 md:p-10 backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center mb-5 border border-white/10 group-hover:border-white/20 transition-colors">
                    <Globe className="text-white/70 group-hover:text-white transition-colors" size={18} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg md:text-xl font-medium text-white mb-1.5">Guruvayurappan Temple</h3>
                  <p className="text-white/40 text-sm">Brampton, Ontario Canada</p>
                </div>
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-white/30 uppercase tracking-wider">Devotional Project Logistics</span>
                  <ArrowRight size={14} className="text-white/30 group-hover:text-white/70 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>

            <div className="group relative rounded-2xl md:rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 md:p-10 backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center mb-5 border border-white/10 group-hover:border-white/20 transition-colors">
                    <Globe className="text-white/70 group-hover:text-white transition-colors" size={18} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg md:text-xl font-medium text-white mb-1.5">Blossom Foundation</h3>
                  <p className="text-white/40 text-sm">Dallas, United States of America</p>
                </div>
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-white/30 uppercase tracking-wider">International Freight</span>
                  <ArrowRight size={14} className="text-white/30 group-hover:text-white/70 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>

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
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <AmbientGradient />
        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <AnimatedText as="h2" className="text-3xl sm:text-4xl md:text-6xl font-medium text-white tracking-tight mb-4 md:mb-6">
            Ready to ship smarter?
          </AnimatedText>
          <p className="text-base md:text-xl text-white/50 mb-8 md:mb-10">
            Let our experts design the right logistics solution for your business.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center h-13 md:h-14 px-8 md:px-10 font-medium text-black bg-white rounded-full hover:bg-white/90 transition-colors shadow-[0_0_60px_rgba(255,255,255,0.08)]">
            Start a Conversation
          </Link>
        </div>
      </section>

    </div>
  );
}
