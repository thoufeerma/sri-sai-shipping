"use client";

import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const WA_ICON = (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "18px", height: "18px", display: "block", flexShrink: 0 }}
    fill="rgba(255,255,255,0.9)"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.854L.054 23.406a.75.75 0 0 0 .916.948l5.682-1.49A11.934 11.934 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 0 1-4.944-1.349l-.355-.21-3.671.963.981-3.585-.232-.37A9.714 9.714 0 0 1 2.25 12c0-5.376 4.374-9.75 9.75-9.75S21.75 6.624 21.75 12 17.376 21.75 12 21.75z" />
  </svg>
);

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const btnRef = useRef<HTMLAnchorElement>(null);

  const phoneNumber = "+919846501223";
  const message = encodeURIComponent("Hello, I would like to inquire about your logistics services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  // Magnetic motion values
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 180, damping: 18 });
  const sy = useSpring(my, { stiffness: 180, damping: 18 });

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mx.set((e.clientX - cx) * 0.28);
    my.set((e.clientY - cy) * 0.28);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
    setIsHovered(false);
  };

  return (
    <>
      <style>{`
        /* Idle float */
        @keyframes waFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-5px); }
        }
        .wa-idle { animation: waFloat 4s ease-in-out infinite; }

        /* Pill expand */
        .wa-pill {
          width: 48px;
          transition: width 0.4s cubic-bezier(0.34,1.2,0.64,1), 
                      background 0.3s ease,
                      box-shadow 0.3s ease;
          overflow: hidden;
          white-space: nowrap;
        }
        .wa-pill:hover {
          width: 154px;
          background: rgba(255,255,255,0.06) !important;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.12),
            0 8px 32px rgba(0,0,0,0.55),
            0 0 40px rgba(255,255,255,0.04) !important;
          animation: none;
        }

        /* Text slide-in */
        .wa-text {
          max-width: 0;
          opacity: 0;
          transition: max-width 0.38s cubic-bezier(0.34,1.2,0.64,1) 0.04s,
                      opacity 0.25s ease 0.1s;
          overflow: hidden;
          display: inline-block;
          vertical-align: middle;
        }
        .wa-pill:hover .wa-text {
          max-width: 100px;
          opacity: 1;
        }

        /* Icon subtle brightness */
        .wa-icon { transition: opacity 0.2s ease; }
        .wa-pill:hover .wa-icon { opacity: 1; }
      `}</style>

      <AnimatePresence>
        {isVisible && (
          <motion.a
            ref={btnRef}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Sri Sai Shipping on WhatsApp"
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            style={{
              // Magnetic offset
              x: sx,
              y: sy,
              // Fixed positioning
              position: "fixed",
              bottom: "28px",
              right: "28px",
              zIndex: 9999,
              // Pill base
              height: "48px",
              borderRadius: "999px",
              // Glass
              background: "rgba(12,12,16,0.82)",
              backdropFilter: "blur(20px) saturate(160%)",
              WebkitBackdropFilter: "blur(20px) saturate(160%)",
              border: "1px solid rgba(255,255,255,0.09)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
              // Layout
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "9px",
              padding: "0 14px",
              textDecoration: "none",
              cursor: "pointer",
              userSelect: "none",
            } as React.CSSProperties}
            className="wa-pill wa-idle"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
          >
            {/* WhatsApp icon */}
            <span className="wa-icon" style={{ opacity: 0.78, flexShrink: 0, display: "flex", alignItems: "center" }}>
              {WA_ICON}
            </span>

            {/* Expandable label */}
            <span
              className="wa-text"
              style={{
                color: "rgba(255,255,255,0.82)",
                fontSize: "13px",
                fontWeight: 500,
                fontFamily: "system-ui, -apple-system, 'SF Pro Text', sans-serif",
                letterSpacing: "0.01em",
              }}
            >
              Chat With Us
            </span>
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
}
