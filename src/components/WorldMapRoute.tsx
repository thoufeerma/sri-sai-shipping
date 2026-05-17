"use client";

import { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, Line, Marker } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Each city has independent label offsets so they never overlap.
// NY label → below-right, Toronto → above-left (separated vertically)
const COCHIN  = { name: "Cochin",    sub: "India — Origin",           coords: [76.22, 9.93]   as [number, number], lx: 14,  ly: -4,  lAnchor: "start" as const };
const NEWYORK = { name: "New York",  sub: "USA — Primary Dest.",      coords: [-74.0, 40.71]  as [number, number], lx: 12,  ly: 20,  lAnchor: "start" as const };
const TORONTO = { name: "Toronto",   sub: "Canada — Secondary Dest.", coords: [-79.38, 43.65] as [number, number], lx: -14, ly: -18, lAnchor: "end"   as const };

function PulseMarker({ city }: { city: typeof COCHIN }) {
  return (
    <Marker coordinates={city.coords}>
      {/* Outer pulse ring */}
      <circle r={0} fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth={1}>
        <animate attributeName="r"       values="5;20;5"   dur="3.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0;0.5" dur="3.5s" repeatCount="indefinite" />
      </circle>
      {/* Inner pulse ring */}
      <circle r={0} fill="none" stroke="rgba(255,255,255,0.38)" strokeWidth={1}>
        <animate attributeName="r"       values="3;11;3"   dur="3.5s" begin="0.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="3.5s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      {/* Core dot */}
      <circle r={4} fill="#ffffff" style={{ filter: "drop-shadow(0 0 7px rgba(255,255,255,0.95))" }} />
      {/* City name */}
      <text
        x={city.lx} y={city.ly}
        fill="#ffffff" fontSize={11} fontWeight={600}
        fontFamily="system-ui, -apple-system, sans-serif"
        textAnchor={city.lAnchor}
        style={{ filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.9))" }}
      >
        {city.name}
      </text>
      {/* Sub-label */}
      <text
        x={city.lx} y={city.ly + 13}
        fill="rgba(255,255,255,0.52)" fontSize={8} fontWeight={400}
        fontFamily="system-ui, -apple-system, sans-serif"
        textAnchor={city.lAnchor}
      >
        {city.sub}
      </text>
    </Marker>
  );
}

export default function WorldMapRoute() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return <div className="w-full aspect-[1000/460] bg-[#040608] rounded-3xl" />;

  return (
    <div className="relative w-full aspect-[1000/460] overflow-hidden bg-[#040608] rounded-3xl border border-white/[0.06]">
      {/* Subtle centre glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(255,255,255,0.028) 0%, transparent 100%)" }}
      />

      <ComposableMap
        projection="geoEquirectangular"
        projectionConfig={{ scale: 145, center: [0, 5] }}
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <linearGradient id="rg1" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%"   stopColor="rgba(255,255,255,0.12)" />
            <stop offset="55%"  stopColor="rgba(255,255,255,0.65)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.92)" />
          </linearGradient>
          <linearGradient id="rg2" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%"   stopColor="rgba(255,255,255,0.08)" />
            <stop offset="55%"  stopColor="rgba(255,255,255,0.55)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.85)" />
          </linearGradient>
        </defs>

        {/* Continents */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="rgba(255,255,255,0.04)"
                stroke="rgba(255,255,255,0.13)"
                strokeWidth={0.4}
                style={{
                  default: { outline: "none" },
                  hover:   { fill: "rgba(255,255,255,0.07)", outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* Ghost tracks */}
        <Line from={COCHIN.coords} to={NEWYORK.coords}
          stroke="rgba(255,255,255,0.07)" strokeWidth={1.5}
          strokeLinecap="round" strokeDasharray="5 8"
        />
        <Line from={COCHIN.coords} to={TORONTO.coords}
          stroke="rgba(255,255,255,0.07)" strokeWidth={1.5}
          strokeLinecap="round" strokeDasharray="5 8"
        />

        {/* Animated glowing route lines */}
        <Line from={COCHIN.coords} to={NEWYORK.coords}
          stroke="url(#rg1)" strokeWidth={2.2} strokeLinecap="round"
          className="rmap-r1"
          style={{ filter: "drop-shadow(0 0 5px rgba(255,255,255,0.4))" }}
        />
        <Line from={COCHIN.coords} to={TORONTO.coords}
          stroke="url(#rg2)" strokeWidth={2.2} strokeLinecap="round"
          className="rmap-r2"
          style={{ filter: "drop-shadow(0 0 5px rgba(255,255,255,0.35))" }}
        />

        {/* Markers – destinations rendered first, Cochin on top */}
        <PulseMarker city={NEWYORK} />
        <PulseMarker city={TORONTO} />
        <PulseMarker city={COCHIN}  />
      </ComposableMap>

      {/* Route draw-on CSS animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        .rmap-r1, .rmap-r2 { stroke-dasharray: 2000; stroke-dashoffset: 2000; }
        .rmap-r1 { animation: rmapDraw 3.2s cubic-bezier(0.4,0,0.2,1) forwards 0.3s; }
        .rmap-r2 { animation: rmapDraw 3.2s cubic-bezier(0.4,0,0.2,1) forwards 0.8s; }
        @keyframes rmapDraw { to { stroke-dashoffset: 0; } }
      `}} />
    </div>
  );
}
