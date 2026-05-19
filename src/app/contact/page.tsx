"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919447054109?text=${text}`, "_blank");
  };

  return (
    <div ref={containerRef} className="min-h-screen pb-32">

      {/* ─── HERO ─── */}
      <section className="relative h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/cochin.webp" alt="Cochin — our home" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 w-full">
          <div className="fade-elem inline-block px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur text-xs text-white/60 tracking-widest uppercase mb-4">
            GLOBAL SUPPORT NETWORK
          </div>
          <h1 className="fade-elem text-5xl md:text-6xl font-medium text-white tracking-tight uppercase">
            INITIATE EXECUTIVE<br />
            <span className="text-white/40 font-light">CONSULTATION</span>
          </h1>
        </div>
      </section>


      {/* ─── FORM + DETAILS ─── */}
      <section className="pt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Form */}
          <div className="lg:col-span-3 fade-up">
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight">REQUEST ENTERPRISE QUOTE</h2>
            <p className="text-white/50 text-base mb-10 leading-relaxed max-w-lg">
              Please provide detailed specifications regarding your cargo, destination, and timeline for a highly accurate architectural logistics assessment.
            </p>
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-2">
                <label className="text-xs font-medium text-white/40 tracking-widest uppercase">Full Name</label>
                <input
                  type="text" required value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-white/15 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors duration-300"
                  placeholder="Jane Smith"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-white/40 tracking-widest uppercase">Email</label>
                <input
                  type="email" required value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-white/15 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors duration-300"
                  placeholder="jane@company.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-white/40 tracking-widest uppercase">Service</label>
                <select
                  required value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-transparent border-b border-white/15 py-3 text-white focus:outline-none focus:border-white transition-colors duration-300 appearance-none"
                >
                  <option value="" disabled className="text-black">Select a service</option>
                  <option value="North American Export (Ocean Freight)" className="text-black">North American Export (Ocean Freight)</option>
                  <option value="Expedited Customs Clearance" className="text-black">Expedited Customs Clearance</option>
                  <option value="Premium Ocean & Air Freight" className="text-black">Premium Ocean & Air Freight</option>
                  <option value="Smart Warehousing & Storage" className="text-black">Smart Warehousing & Storage</option>
                  <option value="Traditional & Devotional Projects" className="text-black">Traditional & Devotional Projects</option>
                  <option value="North American Enterprise Routes" className="text-black">North American Enterprise Routes</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-white/40 tracking-widest uppercase">Message</label>
                <textarea
                  required rows={4} value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-white/15 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors duration-300 resize-none"
                  placeholder="Provide details regarding volume, weight, commodity type, and destination..."
                />
              </div>
              <button type="submit" className="inline-flex items-center gap-3 h-14 px-10 font-medium text-sm text-black bg-white rounded-full hover:bg-white/90 transition-colors">
                Transmit Inquiry <Send size={16} />
              </button>
            </form>
          </div>

          {/* Info + Image */}
          <div className="lg:col-span-2 flex flex-col gap-12 fade-up">
            <div className="relative h-52 rounded-3xl overflow-hidden">
              <Image src="/hero-port.webp" alt="Port operations" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-white/40 tracking-widest uppercase">
                Cochin Port — Command Hub
              </div>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: <MapPin size={18} strokeWidth={1.5} className="text-white/40 shrink-0" />,
                  label: "Global Headquarters",
                  detail: "Sree Mahadeva Temple Trust Bldg, 1st Floor, Cochin, Kerala - 682 035"
                },
                {
                  icon: <MapPin size={18} strokeWidth={1.5} className="text-white/40 shrink-0" />,
                  label: "Registered Office",
                  detail: "D. No. 14/1284 D, M. A. Cyril Road, West Karuvelipady, Cochin — 682002, Kerala, India"
                },
                {
                  icon: <Phone size={18} strokeWidth={1.5} className="text-white/40 shrink-0" />,
                  label: "Executive Hotline",
                  detail: "+91 94470 54109",
                  href: "tel:+919447054109"
                },
                {
                  icon: <Phone size={18} strokeWidth={1.5} className="text-white/40 shrink-0" />,
                  label: "WhatsApp Priority Support",
                  detail: "Instant executive messaging for critical enterprise shipment updates.",
                  href: "https://wa.me/919447054109"
                },
                {
                  icon: <Mail size={18} strokeWidth={1.5} className="text-white/40 shrink-0" />,
                  label: "Executive Inquiry",
                  detail: "info@srisaishipping.com",
                  href: "mailto:info@srisaishipping.com"
                },
                {
                  icon: <Mail size={18} strokeWidth={1.5} className="text-white/40 shrink-0" />,
                  label: "Operations",
                  detail: "operations@srisaishipping.com",
                  href: "mailto:operations@srisaishipping.com"
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 border-t border-white/5 pt-6">
                  {item.icon}
                  <div>
                    <p className="text-xs text-white/30 tracking-widest uppercase mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed block">
                        {item.detail}
                      </a>
                    ) : (
                      <p className="text-white/70 text-sm leading-relaxed">{item.detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── STANDARDS & FAQ ─── */}
      <section className="pt-20 border-t border-white/5 mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Operational Standards */}
          <div className="fade-up">
            <p className="text-xs text-white/30 tracking-[0.4em] uppercase mb-4">Service Level Agreement</p>
            <h3 className="text-3xl font-medium text-white mb-8">OPERATIONAL STANDARDS</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-white font-medium text-lg mb-2">Response Time Guarantee</h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  All executive inquiries are addressed within exactly 2 hours by a senior director.
                </p>
              </div>
              <div className="border-t border-white/5 pt-6">
                <h4 className="text-white font-medium text-lg mb-2">Confidentiality Protocol</h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  All commercial data and trade routing information is secured under strict NDA parameters.
                </p>
              </div>
            </div>
          </div>

          {/* Frequently Asked */}
          <div className="fade-up">
            <p className="text-xs text-white/30 tracking-[0.4em] uppercase mb-4">FAQ</p>
            <h3 className="text-3xl font-medium text-white mb-8">FREQUENTLY ASKED</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-white font-medium text-lg mb-2">Do you handle CBP documentation?</h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  Yes. We completely manage all US Customs and Border Protection documentation to ensure zero-delay clearance.
                </p>
              </div>
              <div className="border-t border-white/5 pt-6">
                <h4 className="text-white font-medium text-lg mb-2">Can you handle sensitive religious cargo?</h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  Absolutely. We specialize in the respectful, highly secure logistics of traditional and devotional items.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
