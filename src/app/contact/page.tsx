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
    window.open(`https://wa.me/+919846501223?text=${text}`, "_blank");
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
          <h1 className="fade-elem text-5xl md:text-6xl font-medium text-white tracking-tight">
            Initiate <span className="text-white/40">contact</span>
          </h1>
        </div>
      </section>


      {/* ─── FORM + DETAILS ─── */}
      <section className="pt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Form */}
          <div className="lg:col-span-3 fade-up">
            <p className="text-white/50 text-lg mb-10 leading-relaxed max-w-lg">
              Reach out to architect your next global shipment. Our team responds with precision and promptness.
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
                  <option value="Customs Clearance" className="text-black">Customs Clearance</option>
                  <option value="Freight Forwarding" className="text-black">Freight Forwarding</option>
                  <option value="Warehousing" className="text-black">Warehousing</option>
                  <option value="Devotional Cargo" className="text-black">Devotional Cargo</option>
                  <option value="India to USA/Canada" className="text-black">India to USA / Canada</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-white/40 tracking-widest uppercase">Message</label>
                <textarea
                  required rows={4} value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-white/15 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors duration-300 resize-none"
                  placeholder="Tell us about your requirements…"
                />
              </div>
              <button type="submit" className="inline-flex items-center gap-3 h-14 px-10 font-medium text-sm text-black bg-white rounded-full hover:bg-white/90 transition-colors">
                Send via WhatsApp <Send size={16} />
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
                  label: "Location",
                  detail: "D. No. 14/1284 D, M. A. Cyril Road, West Karuvelipady, Cochin — 682002, Kerala, India"
                },
                {
                  icon: <Phone size={18} strokeWidth={1.5} className="text-white/40 shrink-0" />,
                  label: "Phone",
                  detail: "+91 98465 01223",
                  href: "tel:+919846501223"
                },
                {
                  icon: <Mail size={18} strokeWidth={1.5} className="text-white/40 shrink-0" />,
                  label: "Email",
                  detail: "operations@srisaishipping.com",
                  href: "mailto:operations@srisaishipping.com"
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 border-t border-white/5 pt-6">
                  {item.icon}
                  <div>
                    <p className="text-xs text-white/30 tracking-widest uppercase mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
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

    </div>
  );
}
