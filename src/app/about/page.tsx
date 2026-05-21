"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(".fade-elem", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: "power2.out", delay: 0.2 });
      gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 40 }, { scrollTrigger: { trigger: el, start: "top 85%" }, opacity: 1, y: 0, duration: 1, ease: "power2.out" });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen pb-32">

      {/* ─── HERO IMAGE ─── */}
      <section className="relative h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden pt-20 bg-[#1c1917]">
        <div className="absolute inset-0">
          <Image src="/cochin.webp" alt="Cochin port — our home" fill priority quality={100} className="object-cover opacity-90 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/0 to-transparent h-48" />
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-12">
          <div className="fade-elem inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs text-white/90 font-medium tracking-[0.2em] uppercase">
              Corporate Heritage
            </span>
          </div>
          
          <h1 className="fade-elem text-5xl sm:text-6xl md:text-[6.5rem] tracking-tight text-white leading-[1] mb-8">
            <span className="font-sans font-medium">The Legacy of</span> <br />
            <span className="font-serif italic text-white/95">SRI SAI SHIPPING</span>
          </h1>
          
          <p className="fade-elem text-base md:text-xl text-white/70 max-w-2xl font-light tracking-wide leading-relaxed">
            Pioneering global maritime logistics and supply chain architecture from the historic seaport of Cochin since the 1980s.
          </p>
        </div>
      </section>


      {/* ─── INTRO ─── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <p className="fade-up text-xs text-slate-500 tracking-widest uppercase mb-4">OUR HISTORICAL TIMELINE</p>
          <h2 className="fade-up text-3xl md:text-5xl font-medium text-slate-900 tracking-tight mb-6 leading-tight">
            Rooted in Tradition, Delivering Worldwide
          </h2>
          <p className="fade-up text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
            Serving the logistics industry since the 1980s, SRI SAI SHIPPING AGENCIES has stood as a beacon of logistics excellence for over 45 years at the historic seaport of Cochin. Our journey began with a simple but powerful mission: to bridge the gap between traditional Indian merchant trust and the rapidly evolving demands of international commerce. Over the years, we have scaled our operations from local customs handling to architectural global logistics, establishing high-frequency shipping corridors that connect India’s manufacturing hubs directly with key commercial gateways in North America. Today, we are proud to combine deep regulatory mastery with innovative modern supply chain technologies, ensuring every shipment is executed with absolute precision, safety, and speed.
          </p>
        </div>
      </section>

      {/* ─── MISSION & VISION ─── */}
      <section className="py-12 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <p className="fade-up text-xs text-slate-500 tracking-widest uppercase mb-2">THE CORPORATE MANDATE</p>
          <h3 className="fade-up text-xl font-medium text-slate-900 mb-6">Guiding Our Path forward</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            <div className="fade-up">
              <h3 className="text-xs text-slate-500 tracking-widest uppercase mb-4">THE MISSION</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To architect elite, zero-delay supply chain solutions that empower global enterprise trade while meticulously safeguarding the cultural and commercial integrity of every cargo.
              </p>
            </div>
            <div className="fade-up">
              <h3 className="text-xs text-slate-500 tracking-widest uppercase mb-4">THE VISION</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To become the absolute standard of logistics excellence connecting India to the world, recognized for unshakeable compliance, technological innovation, and dedicated executive care.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ─── SPLIT: Image + Values ─── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-up relative h-[500px] rounded-3xl overflow-hidden">
            <Image src="/cargo-ship.webp" alt="Global cargo operations" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
          </div>
          <div className="fade-up space-y-10">
            <div>
              <p className="text-slate-500 text-xs tracking-widest uppercase mb-2">UNCOMPROMISING VALUES</p>
              <h2 className="text-3xl font-medium text-slate-900 mb-4">Core Cultural Pillars</h2>
              <p className="text-slate-600 leading-relaxed">
                The foundational principles that govern every executive decision, every operational workflow, and dictate our unyielding standard of excellence.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { title: "Absolute Trust", desc: "Building lasting, unshakeable enterprise partnerships through completely transparent, honest, and auditable operations." },
                { title: "Flawless Reliability", desc: "Engineering deterministic processes that ensure zero delays, maximum security, and 100% border compliance on all complex shipments." },
                { title: "Profound Respect", desc: "Treating every cargo, especially sacred devotional and traditional goods, with immense cultural care and executive reverence." },
              ].map((v, i) => (
                <div key={i} className="flex gap-4 items-start border-t border-slate-200 pt-6">
                  <span className="text-slate-300 font-light text-lg mt-0.5">0{i + 1}</span>
                  <div>
                    <h4 className="text-slate-900 font-medium mb-1">{v.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ─── TIMELINE ─── */}
      <section className="py-24 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="fade-up text-4xl font-medium text-slate-900 mb-20">The journey.</h2>
          <div className="space-y-16 border-l border-slate-200 pl-8 ml-2">
            {[
              { year: "1980s", title: "Founded in the 1980s", desc: "Established in the historic maritime hub of Cochin with traditional Indian business values, managing local customs clearance." },
              { year: "1990s", title: "Expansion into Freight Forwarding", desc: "Expanded operational capabilities to offer comprehensive domestic freight forwarding and custom clearing solutions." },
              { year: "2000s", title: "International Logistics Operations", desc: "Scaled services internationally, managing global vessel chartering, liner shipping agency services, and complex logistics solutions." },
              { year: "2010s", title: "USA & Canada Corridors", desc: "Established dedicated direct shipping services connecting India's manufacturing hubs with major gateways in USA and Canada." },
              { year: "Today", title: "Advanced Customs & Logistics Handling", desc: "Dominating global routes with digital supply chain tracking, high-frequency cargo operations, and elite customs compliance." },
            ].map((item, i) => (
              <div key={i} className="fade-up relative">
                <div className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full bg-[#1E40AF] border-4 border-[#F8FAFC]" />
                <div className="flex flex-col md:flex-row gap-4 md:gap-12 md:items-baseline">
                  <div className="text-xl text-slate-500 font-bold md:w-24 shrink-0">{item.year}</div>
                  <div>
                    <h3 className="text-xl font-medium text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
