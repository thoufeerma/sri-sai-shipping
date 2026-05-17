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
      <header
        className={clsx(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out",
          isScrolled
            ? "py-3 border-b border-white/[0.07]"
            : "py-6"
        )}
        style={isScrolled ? {
          background: "rgba(7,8,9,0.72)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          // Subtle top highlight — glass edge lighting
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)"
        } : undefined}
      >
        {/* Shimmer sweep on scroll */}
        {isScrolled && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-none">
            <div className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/[0.025] to-transparent animate-[navShimmer_8s_ease-in-out_infinite]" />
          </div>
        )}

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
          <Link href="/" className="relative z-50 group">
            <span className="font-sans font-semibold text-[15px] tracking-wide text-white/85 group-hover:text-white transition-colors duration-300">
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
                  "relative text-sm font-sans tracking-wide transition-colors duration-300",
                  pathname === link.href ? "text-white" : "text-white/50 hover:text-white/85"
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white/50"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden relative z-50 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col justify-center px-8"
            style={{ background: "rgba(7,8,9,0.92)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
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
                      "text-2xl font-light tracking-wide",
                      pathname === link.href ? "text-white" : "text-white/50"
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
