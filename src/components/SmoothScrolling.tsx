"use client";

import { ReactLenis } from "lenis/react";
import { useEffect } from "react";

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // We can add any GSAP ScrollTrigger integrations here if needed
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
