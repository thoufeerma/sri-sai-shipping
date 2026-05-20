"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Global Logistics", href: "/global" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-50 flex justify-center p-4 md:p-5 pointer-events-none">
        <header
          className={clsx(
            "w-full max-w-7xl mx-auto rounded-2xl border pointer-events-auto transition-all duration-500 ease-out",
            isScrolled
              ? "py-3 border-slate-200/80 shadow-[0_8px_32px_rgba(15,23,42,0.08)]"
              : "py-4 md:py-5 border-slate-200/50 shadow-[0_6px_22px_rgba(15,23,42,0.05)]"
          )}
          style={{
            background: isScrolled ? "rgba(255, 255, 255, 0.88)" : "rgba(255, 255, 255, 0.72)",
            backdropFilter: isScrolled ? "blur(24px) saturate(180%)" : "blur(16px) saturate(160%)",
            WebkitBackdropFilter: isScrolled ? "blur(24px) saturate(180%)" : "blur(16px) saturate(160%)",
            boxShadow: isScrolled 
              ? "0 8px 32px rgba(15,23,42,0.08), inset 0 1px 0 rgba(255,255,255,0.6)"
              : "0 6px 22px rgba(15,23,42,0.05), inset 0 1px 0 rgba(255,255,255,0.5)"
          }}
        >
          {/* Shimmer sweep on scroll */}
          {isScrolled && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
              <div className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent animate-[navShimmer_8s_ease-in-out_infinite]" />
            </div>
          )}

          <div className="w-full px-6 flex items-center justify-between relative">
            <Link href="/" className="relative z-50 group">
              <span className="font-sans font-bold text-[15px] tracking-wide text-slate-900 group-hover:text-[#1E40AF] transition-colors duration-300">
                SRI SAI
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    "relative text-sm font-sans tracking-wide transition-colors duration-300 pb-1",
                    pathname === link.href ? "text-[#1E40AF] font-semibold" : "text-slate-700 hover:text-[#1E40AF]"
                  )}
                >
                  {link.name}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#1E40AF]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Toggle */}
            <button
              className="md:hidden relative z-50 text-slate-800 hover:text-[#1E40AF] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col justify-center px-8"
            style={{ background: "rgba(255, 255, 255, 0.98)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
          >
            <nav className="flex flex-col gap-7 items-center">
              {navLinks.map((link, i) => (
                <motion.div key={link.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={clsx(
                      "text-2xl tracking-wide transition-colors",
                      pathname === link.href ? "text-[#1E40AF] font-semibold" : "text-slate-700 hover:text-[#1E40AF]"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes navShimmer {
          0%   { left: -30%; }
          50%  { left: 130%; }
          100% { left: 130%; }
        }
      `}} />
    </>
  );
}
