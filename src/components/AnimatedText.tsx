"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Tag = "h1" | "h2" | "h3" | "h4" | "p" | "span";

interface Props {
  children: string;
  as?: Tag;
  className?: string;
  delay?: number;
  stagger?: number;
}

export default function AnimatedText({ children, as: Tag = "h2", className = "", delay = 0, stagger = 0.04 }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!ref.current) return;

    const words = ref.current.querySelectorAll<HTMLElement>(".anim-word");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.85,
          stagger,
          ease: "power3.out",
          delay,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 88%",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [delay, stagger]);

  const wordNodes = children.split(" ").map((word, i) => (
    <span key={i} className="inline-block overflow-hidden align-bottom">
      <span className="anim-word inline-block">{word}{i < children.split(" ").length - 1 ? "\u00A0" : ""}</span>
    </span>
  ));

  // @ts-expect-error dynamic tag
  return <Tag ref={ref} className={className}>{wordNodes}</Tag>;
}
