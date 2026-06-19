"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Building2, CalendarDays, Users } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function TraditionalProjects() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll animations for subtle parallax on the section itself
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  return (
    <section 
      ref={containerRef}
      className="relative py-20 md:py-32 overflow-hidden border-t border-white/10 bg-[#04121a]"
    >
      {/* ─── BACKGROUND EFFECTS ─── */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 pointer-events-none opacity-50"
      >
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-amber-700/5 to-transparent rounded-full blur-3xl mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-[#061A24] to-transparent rounded-full blur-3xl mix-blend-screen" />
      </motion.div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("/file.svg")', backgroundSize: '100px 100px' }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ─── LEFT CONTENT (45%) ─── */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <span className="w-8 h-[1px] bg-amber-500/50" />
                <p className="text-amber-500/90 text-[10px] md:text-xs font-semibold tracking-[0.3em] uppercase">
                  Heritage & Cultural Logistics
                </p>
              </div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium text-white tracking-tight mb-6 leading-[1.1]"
              >
                Traditional &<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-600">Cultural Projects</span>
              </motion.h2>

              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8 font-light">
                Supporting temples, cultural institutions, heritage developments, festivals, and community projects with reliable logistics solutions. We combine operational excellence with a deep respect for cultural significance, ensuring every project is handled with precision, care, and professionalism.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { icon: Building2, text: "Religious Infrastructure" },
                  { icon: CalendarDays, text: "Cultural Events & Heritage Projects" },
                  { icon: Users, text: "Community Development Support" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.1), duration: 0.5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full border border-amber-500/20 bg-amber-500/5 flex items-center justify-center group-hover:bg-amber-500/10 group-hover:border-amber-500/40 transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.05)] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                      <item.icon className="w-4 h-4 text-amber-400/80 group-hover:text-amber-400 transition-colors" />
                    </div>
                    <span className="text-white/80 text-sm font-medium tracking-wide group-hover:text-white transition-colors">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <MagneticButton>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-amber-400 hover:text-amber-300 transition-colors border-b border-amber-500/30 hover:border-amber-400 pb-1 group"
                >
                  Discuss Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>

          {/* ─── RIGHT VISUAL (55%) ─── */}
          <div className="lg:col-span-7 relative h-[500px] sm:h-[600px] lg:h-[700px] w-full perspective-1000">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Main Center Image */}
              <motion.div 
                className="relative w-[75%] h-[80%] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] z-10 group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Image
                  src="/Heritage & Cultural Logistics/premium_temple.png"
                  alt="Heritage Project Logistics"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent mix-blend-overlay" />
                

              </motion.div>

              {/* Top Right Overlapping Image */}
              <motion.div 
                className="absolute top-[5%] right-[0%] w-[45%] h-[40%] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-20"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <Image
                  src="/Heritage & Cultural Logistics/cultural.webp"
                  alt="Cultural Events Support"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-[#04121a]/20 mix-blend-overlay" />
                <div className="absolute inset-0 border border-amber-500/20 rounded-2xl" />
              </motion.div>

              {/* Bottom Left Overlapping Image */}
              <motion.div 
                className="absolute bottom-[5%] left-[5%] w-[40%] h-[35%] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-20"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <Image
                  src="/industry-expertise/traditional-devotional-projects.webp"
                  alt="Infrastructure Logistics"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-[#04121a]/30 mix-blend-overlay" />
                <div className="absolute inset-0 border border-amber-500/20 rounded-2xl" />
              </motion.div>



              {/* Ambient Glowing Orbs behind the images */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-amber-500/20 rounded-full blur-[100px] -z-10" />

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
