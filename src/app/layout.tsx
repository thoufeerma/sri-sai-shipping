import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SRI SAI SHIPPING AGENCIES | Elite Global Logistics",
  description: "Premium global logistics, precision freight forwarding, vessel chartering, and integrated supply chain management operating from major hubs in India and North America.",
  keywords: ["global logistics", "freight forwarding", "customs clearance", "vessel chartering", "Cochin logistics", "supply chain management", "project cargo", "bulk cargo", "cross-country logistics", "SRI SAI SHIPPING AGENCIES"],
  openGraph: {
    title: "SRI SAI SHIPPING AGENCIES",
    description: "Architecting global logistics with precision and expertise.",
    type: "website",
    locale: "en_US",
    siteName: "SRI SAI SHIPPING AGENCIES",
  },
  twitter: {
    card: "summary_large_image",
    title: "SRI SAI SHIPPING AGENCIES",
    description: "Premium freight forwarding across international waters, ports & beyond.",
  },
  icons: {
    icon: "/bg-logo-fav.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} light`}
    >
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
        <SmoothScrolling>
          <LoadingScreen />
          <Navbar />
          <main className="relative z-10 mesh-bg min-h-screen">{children}</main>
          <Footer />
        </SmoothScrolling>
        <WhatsAppButton />
      </body>
    </html>
  );
}

