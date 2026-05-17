import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Sri Sai Shipping Agencies",
  description: "Founded in 1980 in Cochin, Kerala, Sri Sai Shipping Agencies delivers high-precision customs clearance, freight forwarding, and trusted international logistics services.",
  keywords: [
    "About Sri Sai Shipping", 
    "Logistics history Cochin", 
    "Licensed custom house broker", 
    "International shipping Kerala",
    "Trustworthy logistics agency"
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
