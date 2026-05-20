import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Core Logistics Services | SRI SAI SHIPPING AGENCIES",
  description: "Explore our range of licensed shipping capabilities: rapid customs clearance, intelligent freight forwarding, secure warehousing, traditional devotional cargo handling, and direct India-to-North-America lanes.",
  keywords: [
    "Customs clearance services",
    "Global ocean air freight forwarding",
    "Bonded warehousing Cochin",
    "Devotional project shipping",
    "India to USA Canada shipping corridors"
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
