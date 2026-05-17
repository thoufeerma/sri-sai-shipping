"use client";

import { useEffect, useRef } from "react";

export default function AmbientGradient() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lerp mouse parallax on gradient orbs
    let tx1 = 0, ty1 = 0, cx1 = 0, cy1 = 0;
    let tx2 = 0, ty2 = 0, cx2 = 0, cy2 = 0;
    let raf: number;

    const onMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      tx1 = nx * 30; ty1 = ny * 20;
      tx2 = nx * -20; ty2 = ny * -15;
    };

    const tick = () => {
      cx1 += (tx1 - cx1) * 0.03;
      cy1 += (ty1 - cy1) * 0.03;
      cx2 += (tx2 - cx2) * 0.03;
      cy2 += (ty2 - cy2) * 0.03;

      const orb1 = ref.current?.querySelector<HTMLDivElement>(".ag-orb-1");
      const orb2 = ref.current?.querySelector<HTMLDivElement>(".ag-orb-2");
      if (orb1) orb1.style.transform = `translate(${cx1}px, ${cy1}px)`;
      if (orb2) orb2.style.transform = `translate(${cx2}px, ${cy2}px)`;

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Orb 1 — blue-navy, upper left */}
      <div
        className="ag-orb-1 absolute rounded-full will-change-transform"
        style={{
          width: 700, height: 700,
          top: "-15%", left: "-10%",
          background: "radial-gradient(ellipse, rgba(30,60,120,0.18) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "agDrift1 18s ease-in-out infinite",
        }}
      />
      {/* Orb 2 — silver-cool, lower right */}
      <div
        className="ag-orb-2 absolute rounded-full will-change-transform"
        style={{
          width: 800, height: 600,
          bottom: "-20%", right: "-10%",
          background: "radial-gradient(ellipse, rgba(50,80,130,0.12) 0%, transparent 70%)",
          filter: "blur(100px)",
          animation: "agDrift2 22s ease-in-out infinite",
        }}
      />
      {/* Static center glow — very faint */}
      <div
        className="absolute rounded-full"
        style={{
          width: 600, height: 400,
          top: "30%", left: "30%",
          background: "radial-gradient(ellipse, rgba(80,100,160,0.06) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />
    </div>
  );
}
