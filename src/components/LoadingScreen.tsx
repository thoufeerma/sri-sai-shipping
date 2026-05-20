"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function ShipSVG() {
  return (
    <svg width="64" height="22" viewBox="0 0 80 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 16 L8 11 L68 11 L77 16 L74 22 L5 22 Z" fill="rgba(15,23,42,0.85)" />
      <rect x="18" y="6" width="8" height="5" rx="0.5" fill="rgba(15,23,42,0.48)" />
      <rect x="28" y="6" width="8" height="5" rx="0.5" fill="rgba(15,23,42,0.36)" />
      <rect x="38" y="6" width="8" height="5" rx="0.5" fill="rgba(15,23,42,0.44)" />
      <rect x="48" y="6" width="8" height="5" rx="0.5" fill="rgba(15,23,42,0.36)" />
      <rect x="58" y="6" width="8" height="5" rx="0.5" fill="rgba(15,23,42,0.44)" />
      <rect x="6" y="3" width="13" height="8" rx="1" fill="rgba(15,23,42,0.76)" />
      <rect x="8" y="1" width="9" height="4" rx="0.5" fill="rgba(15,23,42,0.6)" />
      <line x1="13" y1="1" x2="13" y2="-1" stroke="rgba(15,23,42,0.4)" strokeWidth="0.8" />
      <line x1="13" y1="-1" x2="20" y2="-1" stroke="rgba(15,23,42,0.3)" strokeWidth="0.6" />
      <circle cx="30" cy="17" r="1.2" fill="rgba(0,0,0,0.18)" />
      <circle cx="46" cy="17" r="1.2" fill="rgba(0,0,0,0.18)" />
      <circle cx="62" cy="17" r="1.2" fill="rgba(0,0,0,0.18)" />
    </svg>
  );
}

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const shipRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current || !trackRef.current) return;

    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      delay: 0.1,
      onComplete: () => {
        gsap.to(overlayRef.current, {
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.9,
          ease: "power2.inOut",
          onComplete: () => {
            setHidden(true);
            document.body.style.overflow = "";
          },
        });
      },
    });

    // Characters stagger up
    tl.fromTo(".ls-char",
      { yPercent: 120, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.025, ease: "power3.out" }
    );

    // Subtitle fade
    tl.fromTo(".ls-sub",
      { opacity: 0, y: 6 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.3"
    );

    // Track line appears
    tl.fromTo(".ls-track",
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 0.55, ease: "power2.out", transformOrigin: "left center" },
      "+=0.15"
    );

    // Water ripple
    tl.fromTo(".ls-ripple", { opacity: 0 }, { opacity: 1, duration: 0.4 }, "<+0.1");

    // Status text
    tl.fromTo(".ls-status", { opacity: 0 }, { opacity: 1, duration: 0.3 }, "<");

    // Ship + fill + glow move across
    const tw = trackRef.current.offsetWidth;
    tl.fromTo(fillRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 2.2, ease: "power2.inOut", transformOrigin: "left center" },
      "+=0.05"
    );
    tl.fromTo(shipRef.current,
      { x: -8 },
      { x: tw - 56, duration: 2.2, ease: "power2.inOut" }, "<"
    );
    tl.fromTo(glowRef.current,
      { x: 0 },
      { x: tw - 32, duration: 2.2, ease: "power2.inOut" }, "<"
    );

    // Hold
    tl.to({}, { duration: 0.2 });

    return () => { tl.kill(); document.body.style.overflow = ""; };
  }, []);

  if (hidden) return null;

  const BRAND = "SRI SAI SHIPPING AGENCIES";

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center select-none"
      style={{ background: "radial-gradient(ellipse 90% 70% at 50% 50%, #FFFFFF 0%, #EEF2F7 100%)" }}
    >
      {/* Subtle ambient top glow */}
      <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-blue-100/30 to-transparent pointer-events-none" />

      {/* Brand text — character-level mask reveal */}
      <div className="overflow-hidden mb-3">
        <div className="flex tracking-[0.32em] text-sm md:text-base font-light text-slate-900">
          {BRAND.split("").map((char, i) => (
            <span key={i} className="overflow-hidden inline-block" style={{ height: "1.6em", lineHeight: "1.6em", verticalAlign: "bottom" }}>
              <span className="ls-char inline-block">{char === " " ? "\u00A0" : char}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="ls-sub text-[10px] tracking-[0.55em] text-slate-400 uppercase mb-20">
        Est. 1980 &nbsp;·&nbsp; Global Logistics
      </div>

      {/* Track container */}
      <div className="relative w-72 md:w-[420px]">
        {/* Glow orb that follows ship */}
        <div
          ref={glowRef}
          className="absolute top-0 -translate-y-1/2 w-10 h-10"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.2), transparent 70%)", filter: "blur(8px)", pointerEvents: "none" }}
        />

        {/* Track */}
        <div
          ref={trackRef}
          className="ls-track h-[1px] bg-slate-200 relative"
          style={{ transformOrigin: "left center" }}
        >
          {/* Fill */}
          <div
            ref={fillRef}
            className="absolute inset-0 origin-left"
            style={{ background: "linear-gradient(to right, rgba(37,99,235,0.3), rgba(37,99,235,0.8))" }}
          />

          {/* Ship — sits on top of the line */}
          <div
            ref={shipRef}
            className="absolute"
            style={{ top: "-11px", left: 0 }}
          >
            {/* Wake lines behind ship */}
            <div className="absolute top-[14px] right-full flex flex-col gap-[3px] pr-1 opacity-25">
              {[32, 22, 12].map((w, i) => (
                <div key={i} className="h-[0.5px] bg-blue-600/60 rounded-full" style={{ width: w, marginLeft: (32 - w) * 0.3 }} />
              ))}
            </div>
            {/* Gentle bob */}
            <div className="animate-[shipBob_2.5s_ease-in-out_infinite]">
              <ShipSVG />
            </div>
          </div>
        </div>

        {/* Water ripple SVG */}
        <div className="ls-ripple absolute w-full" style={{ top: 6 }}>
          <svg viewBox="0 0 420 14" preserveAspectRatio="none" className="w-full h-3 opacity-100">
            <path
              d="M0,7 Q52,2 105,7 Q158,12 210,7 Q262,2 315,7 Q368,12 420,7"
              fill="none" stroke="rgba(15,23,42,0.08)" strokeWidth="1.5"
            >
              <animate
                attributeName="d"
                values="M0,7 Q52,2 105,7 Q158,12 210,7 Q262,2 315,7 Q368,12 420,7;M0,7 Q52,12 105,7 Q158,2 210,7 Q262,12 315,7 Q368,2 420,7;M0,7 Q52,2 105,7 Q158,12 210,7 Q262,2 315,7 Q368,12 420,7"
                dur="3.5s" repeatCount="indefinite"
              />
            </path>
            <path
              d="M0,7 Q70,4 140,7 Q210,10 280,7 Q350,4 420,7"
              fill="none" stroke="rgba(15,23,42,0.04)" strokeWidth="1"
            >
              <animate
                attributeName="d"
                values="M0,7 Q70,4 140,7 Q210,10 280,7 Q350,4 420,7;M0,7 Q70,10 140,7 Q210,4 280,7 Q350,10 420,7;M0,7 Q70,4 140,7 Q210,10 280,7 Q350,4 420,7"
                dur="4.5s" repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      </div>
 
      {/* Status */}
      <div className="ls-status mt-14 text-[10px] tracking-[0.5em] text-slate-400 uppercase">
        Navigating your cargo
      </div>

      {/* Ship bob keyframe */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shipBob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-2px)} }
      `}} />
    </div>
  );
}
