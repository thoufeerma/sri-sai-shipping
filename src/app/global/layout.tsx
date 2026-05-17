import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Logistics Network | Sri Sai Shipping Agencies",
  description: "Explore our real-time multi-modal logistics network and dedicated shipping corridors connecting Cochin, India directly to primary destinations in New York (USA) and Toronto (Canada).",
  keywords: [
    "Global shipping network map",
    "Cochin to USA shipping lane",
    "India to Toronto Canada shipping",
    "Multi-modal transit pipelines",
    "Industrial corridor logistics"
  ],
};

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
