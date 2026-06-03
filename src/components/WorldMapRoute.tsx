"use client";

import { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, Line, Marker } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface City {
  name: string;
  sub: string;
  coords: [number, number];
  lx: number;
  ly: number;
  lAnchor: "start" | "end" | "middle";
}

const COCHIN: City  = { name: "Cochin",    sub: "Kerala — Origin",          coords: [76.22, 9.93]   as [number, number], lx: 14,  ly: -4,  lAnchor: "start" };
const NHAVASHEVA: City = { name: "Nhava Sheva", sub: "Mumbai — Hub",         coords: [72.95, 18.95]  as [number, number], lx: -14, ly: 2,   lAnchor: "end" };
const MUNDRA: City = { name: "Mundra",      sub: "Gujarat — Hub",        coords: [69.73, 22.84]  as [number, number], lx: -14, ly: -10,  lAnchor: "end" };
const NEWYORK: City = { name: "New York",  sub: "USA — Primary Dest.",      coords: [-74.0, 40.71]  as [number, number], lx: 12,  ly: 20,  lAnchor: "start" };
const TORONTO: City = { name: "Toronto",   sub: "Canada — Secondary Dest.", coords: [-79.38, 43.65] as [number, number], lx: -14, ly: -18, lAnchor: "end" };

function PulseMarker({ city }: { city: City }) {
  return (
    <Marker coordinates={city.coords}>
      {/* Outer pulse ring */}
      <circle r={0} fill="none" stroke="rgba(34,211,238,0.25)" strokeWidth={1}>
        <animate attributeName="r"       values="5;20;5"   dur="3.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0;0.5" dur="3.5s" repeatCount="indefinite" />
      </circle>
      {/* Inner pulse ring */}
      <circle r={0} fill="none" stroke="rgba(34,211,238,0.4)" strokeWidth={1}>
        <animate attributeName="r"       values="3;11;3"   dur="3.5s" begin="0.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="3.5s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      {/* Core dot */}
      <circle r={4} fill="#FBBF24" style={{ filter: "drop-shadow(0 0 5px rgba(251,191,36,0.6))" }} />
      {/* City name */}
      <text
        x={city.lx} y={city.ly}
        fill="#F8FAFC" fontSize={11} fontWeight={600}
        fontFamily="system-ui, -apple-system, sans-serif"
        textAnchor={city.lAnchor}
        style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.8))" }}
      >
        {city.name}
      </text>
      {/* Sub-label */}
      <text
        x={city.lx} y={city.ly + 13}
        fill="#CBD5E1" fontSize={8} fontWeight={400}
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

  if (!mounted) return <div className="w-full aspect-[1000/460] bg-[#071821] rounded-3xl" />;

  return (
    <div className="relative w-full aspect-[1000/460] overflow-hidden bg-[#071821] rounded-3xl border border-[#00719c]/20 shadow-[0_0_40px_rgba(0,113,156,0.15)]">
      {/* Subtle centre glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(34,211,238,0.05) 0%, transparent 100%)" }}
      />

      <ComposableMap
        projection="geoEquirectangular"
        projectionConfig={{ scale: 160, center: [-15, 25] }}
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <linearGradient id="rg1" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%"   stopColor="rgba(34,211,238,0.15)" />
            <stop offset="55%"  stopColor="rgba(34,211,238,0.7)" />
            <stop offset="100%" stopColor="#0A6C94" />
          </linearGradient>
          <linearGradient id="rg2" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%"   stopColor="rgba(34,211,238,0.12)" />
            <stop offset="55%"  stopColor="rgba(34,211,238,0.6)" />
            <stop offset="100%" stopColor="#FBBF24" />
          </linearGradient>
        </defs>

        {/* Continents */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isHighlighted = ["United States of America", "Canada"].includes(geo.properties.name);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isHighlighted ? "rgba(34,211,238,0.18)" : "#0B2430"}
                  stroke={isHighlighted ? "rgba(34,211,238,0.6)" : "#061A24"}
                  strokeWidth={isHighlighted ? 1 : 0.5}
                  style={{
                    default: { outline: "none", transition: "all 0.3s ease" },
                    hover:   { fill: isHighlighted ? "rgba(34,211,238,0.35)" : "#102D3A", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
 
        {/* Ghost tracks */}
        <Line from={COCHIN.coords} to={NEWYORK.coords}
          stroke="rgba(34,211,238,0.12)" strokeWidth={1.5}
          strokeLinecap="round" strokeDasharray="5 8"
        />
        <Line from={COCHIN.coords} to={TORONTO.coords}
          stroke="rgba(34,211,238,0.12)" strokeWidth={1.5}
          strokeLinecap="round" strokeDasharray="5 8"
        />
        <Line from={NHAVASHEVA.coords} to={NEWYORK.coords}
          stroke="rgba(34,211,238,0.12)" strokeWidth={1.5}
          strokeLinecap="round" strokeDasharray="5 8"
        />
        <Line from={MUNDRA.coords} to={TORONTO.coords}
          stroke="rgba(34,211,238,0.12)" strokeWidth={1.5}
          strokeLinecap="round" strokeDasharray="5 8"
        />
 
        {/* Animated glowing route lines */}
        <Line from={COCHIN.coords} to={NEWYORK.coords}
          stroke="url(#rg1)" strokeWidth={2.2} strokeLinecap="round"
          className="rmap-r1"
          style={{ filter: "drop-shadow(0 0 5px rgba(34,211,238,0.3))" }}
        />
        <Line from={COCHIN.coords} to={TORONTO.coords}
          stroke="url(#rg2)" strokeWidth={2.2} strokeLinecap="round"
          className="rmap-r2"
          style={{ filter: "drop-shadow(0 0 5px rgba(34,211,238,0.3))" }}
        />
        <Line from={NHAVASHEVA.coords} to={NEWYORK.coords}
          stroke="url(#rg1)" strokeWidth={2.2} strokeLinecap="round"
          className="rmap-r1"
          style={{ filter: "drop-shadow(0 0 5px rgba(34,211,238,0.3))" }}
        />
        <Line from={MUNDRA.coords} to={TORONTO.coords}
          stroke="url(#rg2)" strokeWidth={2.2} strokeLinecap="round"
          className="rmap-r2"
          style={{ filter: "drop-shadow(0 0 5px rgba(34,211,238,0.3))" }}
        />

        {/* Region Labels */}
        <Marker coordinates={[-98.5, 39.8]}>
          <text textAnchor="middle" y={0} fill="#FBBF24" fontSize={10} fontWeight={800} letterSpacing={3} style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.8))" }}>
            USA
          </text>
        </Marker>
        <Marker coordinates={[-106.3, 58.1]}>
          <text textAnchor="middle" y={0} fill="#FBBF24" fontSize={10} fontWeight={800} letterSpacing={3} style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.8))" }}>
            CANADA
          </text>
        </Marker>

        {/* Markers – origins rendered first, Cochin on top */}
        <PulseMarker city={MUNDRA} />
        <PulseMarker city={NHAVASHEVA} />
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
