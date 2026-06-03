import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | SRI SAI SHIPPING AGENCIES",
  description: "Founded in 1980 in Cochin, Kerala, SRI SAI SHIPPING AGENCIES delivers high-precision customs clearance, freight forwarding, and trusted international logistics services.",
  keywords: [
    "About SRI SAI SHIPPING", 
    "Logistics history Cochin", 
    "Licensed custom house broker", 
    "International shipping Kerala",
    "Trustworthy logistics agency"
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
