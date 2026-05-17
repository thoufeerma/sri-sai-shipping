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
      <section className="relative h-[70vh] md:h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/cochin.webp" alt="Cochin port — our home" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 pb-20 w-full">
          <div className="fade-elem inline-block px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur text-xs text-white/60 tracking-widest uppercase mb-6">
            Our Heritage
          </div>
          <h1 className="fade-elem text-5xl md:text-7xl font-medium text-white tracking-tight leading-tight">
            Engineering trust<br />
            <span className="text-white/40">since 1980.</span>
          </h1>
        </div>
      </section>


      {/* ─── INTRO ─── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <p className="fade-up text-xl md:text-2xl text-white/60 leading-relaxed font-light">
            For over four decades, Sri Sai Shipping Agencies has quietly powered global commerce, merging deep legacy expertise with modern technological precision. Born in the bustling port city of Cochin, we've grown into a trusted pillar of the international logistics industry.
          </p>
        </div>
      </section>


      {/* ─── SPLIT: Image + Values ─── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-up relative h-[500px] rounded-3xl overflow-hidden">
            <Image src="/cargo-ship.webp" alt="Global cargo operations" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <div className="fade-up space-y-10">
            <div>
              <h2 className="text-3xl font-medium text-white mb-4">Why our clients stay.</h2>
              <p className="text-white/50 leading-relaxed">
                Every engagement is built on a foundation of accuracy, transparency, and genuine care for your cargo's safe arrival. We don't just move boxes — we deliver commitments.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { title: "Precision First", desc: "Meticulous compliance with customs regulations across every jurisdiction we operate in." },
                { title: "Decades of Relationships", desc: "Longstanding partnerships with carriers, customs authorities, and freight networks worldwide." },
                { title: "Cultural Expertise", desc: "Specialised handling for devotional and traditional cargo with the respect it deserves." },
              ].map((v, i) => (
                <div key={i} className="flex gap-4 items-start border-t border-white/5 pt-6">
                  <span className="text-white/20 font-light text-lg mt-0.5">0{i + 1}</span>
                  <div>
                    <h4 className="text-white font-medium mb-1">{v.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ─── TIMELINE ─── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="fade-up text-4xl font-medium text-white mb-20">The journey.</h2>
          <div className="space-y-16 border-l border-white/10 pl-8 ml-2">
            {[
              { year: "1980", title: "The Foundation", desc: "Established in Cochin, Kerala. Operations began with a singular focus on reliability in local freight and customs clearance." },
              { year: "1995", title: "Network Expansion", desc: "Added advanced warehousing capabilities and forged enduring partnerships with premier international carriers." },
              { year: "2010", title: "Digital Integration", desc: "Streamlined customs protocols and transitioned to tech-enabled logistics for faster, more accurate processing." },
              { year: "Today", title: "Modern Command", desc: "Operating as a high-velocity logistics provider with specialised routes from India to North America." },
            ].map((item, i) => (
              <div key={i} className="fade-up relative">
                <div className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full bg-white border-4 border-black" />
                <div className="flex flex-col md:flex-row gap-4 md:gap-12 md:items-baseline">
                  <div className="text-xl text-white/30 font-light md:w-24 shrink-0">{item.year}</div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
                    <p className="text-white/50 leading-relaxed">{item.desc}</p>
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
