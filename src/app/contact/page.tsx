"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  "Customs Broking & Logistics Services",
  "Freight Forwarding",
  "Air Freight",
  "Transportation",
  "Smart Warehousing",
  "Coastal Services",
  "Vessel Chartering",
  "Equipment Leasing"
];

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    if (!formData.service) {
      alert("Please select a service before transmitting your inquiry.");
      return;
    }
    const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919447054109?text=${text}`, "_blank");
  };

  return (
    <div ref={containerRef} className="min-h-screen pb-32">

      {/* ─── HERO ─── */}
      <section className="relative h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden pt-20 bg-[#1c1917]">
        <div className="absolute inset-0">
          <Image src="/cochin.webp" alt="Cochin — our home" fill priority quality={100} className="object-cover opacity-90 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/0 to-transparent h-48" />
        </div>
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-12">
          <div className="fade-elem inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs text-white/90 font-medium tracking-[0.2em] uppercase">
              Global Support Network
            </span>
          </div>
          
          <h1 className="fade-elem text-5xl sm:text-6xl md:text-[6.5rem] tracking-tight text-white leading-[1] mb-8">
            <span className="font-sans font-medium">Initiate</span> <br />
            <span className="font-serif italic text-white/95">Consultation</span>
          </h1>
          
          <p className="fade-elem text-base md:text-xl text-white/70 max-w-2xl font-light tracking-wide leading-relaxed">
            Connect directly with our executive logistics specialists to architect your custom supply chain solution.
          </p>
        </div>
      </section>

      {/* ─── FORM + DETAILS ─── */}
      <section className="pt-24 relative">
        {/* Ambient background for glassmorphism */}
        <div className="absolute top-[20%] left-[5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-5 gap-16 relative z-10">
 
          {/* Form */}
          <div className="lg:col-span-3 fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight uppercase">REQUEST ENTERPRISE QUOTE</h2>
            <p className="text-slate-700 text-base mb-10 leading-relaxed max-w-lg">
              Please provide detailed specifications regarding your cargo, destination, and timeline for a highly accurate architectural logistics assessment.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/40 backdrop-blur-3xl border border-white/80 p-8 md:p-10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-slate-600 tracking-widest uppercase pl-1">Full Name</label>
                <input
                  type="text" required value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/50 border border-white/60 focus:bg-white/80 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 rounded-xl px-4 py-3.5 text-slate-900 transition-all outline-none shadow-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-slate-600 tracking-widest uppercase pl-1">Email</label>
                <input
                  type="email" required value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/50 border border-white/60 focus:bg-white/80 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 rounded-xl px-4 py-3.5 text-slate-900 transition-all outline-none shadow-sm"
                />
              </div>
              <div className="space-y-1.5 relative" ref={dropdownRef}>
                <label className="text-[11px] font-semibold text-slate-600 tracking-widest uppercase pl-1">Service</label>
                <div className="relative">
                  <div
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full bg-white/50 border border-white/60 focus-within:bg-white/80 focus-within:border-blue-500/50 focus-within:ring-4 focus-within:ring-blue-500/10 rounded-xl px-4 py-3.5 transition-all outline-none shadow-sm cursor-pointer flex justify-between items-center ${
                      formData.service ? "text-slate-900" : "text-slate-500"
                    }`}
                  >
                    {formData.service || "Select a service"}
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-blue-600" : "text-slate-500"}`} />
                  </div>
                  
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute z-50 w-full mt-2 py-2 bg-white/80 backdrop-blur-2xl border border-white/80 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden"
                      >
                        <div className="max-h-60 overflow-y-auto">
                          {SERVICES.map((srv, idx) => (
                            <div
                              key={idx}
                              onClick={() => {
                                setFormData({ ...formData, service: srv });
                                setIsDropdownOpen(false);
                              }}
                              className="px-4 py-2.5 mx-2 rounded-xl text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 cursor-pointer transition-colors"
                            >
                              {srv}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-slate-600 tracking-widest uppercase pl-1">Message</label>
                <textarea
                  required rows={4} value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/50 border border-white/60 focus:bg-white/80 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 rounded-xl px-4 py-3.5 text-slate-900 transition-all outline-none shadow-sm resize-none"
                />
              </div>
              <button type="submit" className="inline-flex items-center gap-3 h-14 px-10 font-semibold text-sm text-white bg-gradient-to-br from-[#1E40AF] to-[#2563EB] hover:from-[#1D4ED8] hover:to-[#1E40AF] rounded-full shadow-[0_4px_14px_rgba(30,64,175,0.15)] hover:shadow-[0_6px_20px_rgba(30,64,175,0.25)] transition-all duration-300">
                Transmit Inquiry <Send size={16} />
              </button>
            </form>
          </div>
 
          {/* Info + Image */}
          <div className="lg:col-span-2 flex flex-col gap-12 fade-up">
            <div className="relative h-52 rounded-3xl overflow-hidden">
              <Image src="/hero-port.webp" alt="Port operations" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-800 tracking-widest uppercase font-semibold bg-white/70 backdrop-blur-md px-3 py-1 rounded-lg inline-block w-fit">
                Cochin Port — Command Hub
              </div>
            </div>
 
            <div className="space-y-8">
              {[
                {
                  icon: <MapPin size={18} strokeWidth={1.5} className="text-[#2563EB] shrink-0" />,
                  label: "Corporate Office",
                  detail: "SRI SAI SHIPPING AGENCIES\nD. No. 14/1284 D\nM. A. CYRIL ROAD, NEAR OFFICE OF THE KWA, WEST KARUVELIPADY\nCOCHIN – 682002\nKERALA, INDIA"
                },
                {
                  icon: <Phone size={18} strokeWidth={1.5} className="text-[#2563EB] shrink-0" />,
                  label: "Executive Hotline",
                  detail: "+91 94470 54109",
                  href: "tel:+919447054109"
                },
                {
                  icon: <Phone size={18} strokeWidth={1.5} className="text-[#2563EB] shrink-0" />,
                  label: "WhatsApp Priority Support",
                  detail: "Instant executive messaging for critical enterprise shipment updates.",
                  href: "https://wa.me/919447054109"
                },
                {
                  icon: <Mail size={18} strokeWidth={1.5} className="text-[#2563EB] shrink-0" />,
                  label: "Executive Inquiry",
                  detail: "info@srisaishipping.com",
                  href: "mailto:info@srisaishipping.com"
                },
                {
                  icon: <Mail size={18} strokeWidth={1.5} className="text-[#2563EB] shrink-0" />,
                  label: "Operations",
                  detail: "operations@srisaishipping.com",
                  href: "mailto:operations@srisaishipping.com"
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 border-t border-slate-200 pt-6">
                  {item.icon}
                  <div>
                    <p className="text-xs text-slate-500 tracking-widest uppercase mb-1 font-semibold">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-slate-800 hover:text-[#1E40AF] transition-colors text-sm leading-relaxed block font-medium">
                        {item.detail}
                      </a>
                    ) : (
                      <p className="text-slate-800 text-sm leading-relaxed whitespace-pre-wrap">{item.detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
 
        </div>
      </section>
 
      {/* ─── STANDARDS & FAQ ─── */}
      <section className="pt-20 border-t border-slate-200 mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Operational Standards */}
          <div className="fade-up">
            <p className="text-xs text-slate-500 tracking-[0.4em] uppercase mb-4">Service Level Agreement</p>
            <h3 className="text-3xl font-medium text-slate-900 mb-8">OPERATIONAL STANDARDS</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-slate-900 font-medium text-lg mb-2">Response Time Guarantee</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  All executive inquiries are addressed within exactly 2 hours by a senior director.
                </p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="text-slate-900 font-medium text-lg mb-2">Confidentiality Protocol</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  All commercial data and trade routing information is secured under strict NDA parameters.
                </p>
              </div>
            </div>
          </div>
 
          {/* Frequently Asked */}
          <div className="fade-up">
            <p className="text-xs text-slate-500 tracking-[0.4em] uppercase mb-4">FAQ</p>
            <h3 className="text-3xl font-medium text-slate-900 mb-8">FREQUENTLY ASKED</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-slate-900 font-medium text-lg mb-2">Do you handle CBP documentation?</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Yes. We completely manage all US Customs and Border Protection documentation to ensure zero-delay clearance.
                </p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="text-slate-900 font-medium text-lg mb-2">Can you handle sensitive religious cargo?</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
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
