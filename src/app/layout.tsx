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
  title: "SRI SAI SHIPPING AGENCIES | Global Logistics",
  description: "Minimal, elegant, and intelligent global logistics. Customs clearance, freight forwarding, and reliable delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} dark`}
    >
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased overflow-x-hidden selection:bg-white/10 selection:text-white">
        <LoadingScreen />
        <SmoothScrolling>
          <Navbar />
          <main className="relative z-10 mesh-bg min-h-screen">{children}</main>
          <Footer />
        </SmoothScrolling>
        <WhatsAppButton />
      </body>
    </html>
  );
}

