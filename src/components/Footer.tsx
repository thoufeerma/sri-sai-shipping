import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-300 bg-[#EDEFF3] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top strip with image accent */}
        <div className="relative h-32 rounded-2xl overflow-hidden mb-16 border border-slate-300/60">
          <Image src="/hero-port.webp" alt="Sri Sai port" fill className="object-cover object-bottom opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#EDEFF3] via-[#EDEFF3]/60 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden shadow-sm border border-slate-200/60 bg-white shrink-0">
                <Image src="/logoship.jpeg" alt="Sri Sai Shipping Logo" fill className="object-cover" />
              </div>
              <div>
                <p className="text-slate-900 font-semibold text-lg">SRI SAI SHIPPING AGENCIES</p>
                <p className="text-slate-500 text-sm">Established in the 1980s · Cochin, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Delivering Reliable Freight Solutions for 45+ Years. Flawlessly integrated traditional Indian values with ultra-modern, high-tech logistics infrastructure.
            </p>
          </div>

          <div>
            <h4 className="text-slate-700 text-xs font-semibold tracking-widest uppercase mb-4">Navigation</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Global Logistics", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-slate-600 hover:text-blue-600 transition-colors text-sm flex items-center gap-1 group w-fit"
                  >
                    {link}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-700 text-xs font-semibold tracking-widest uppercase mb-4">Capabilities</h4>
            <ul className="space-y-3">
              {["Customs Broking & Logistics Services", "Freight Forwarding", "Air Freight", "Transportation", "Smart Warehousing", "Coastal Services", "Vessel Chartering", "Equipment Leasing"].map((s) => (
                <li key={s} className="text-slate-600 text-sm">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-700 text-xs font-semibold tracking-widest uppercase mb-4">Contact</h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              <span className="font-semibold">SRI SAI SHIPPING AGENCIES</span><br />
              D. No. 14/1284 D<br />
              M. A. CYRIL ROAD, NEAR OFFICE OF THE KWA, WEST KARUVELIPADY<br />
              COCHIN – 682002<br />
              KERALA, INDIA
            </p>
            <div className="flex flex-col gap-1.5">
              <a href="tel:+919447054109" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">
                +91 94470 54109
              </a>
              <a href="mailto:info@srisaishipping.com" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">
                info@srisaishipping.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-300 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} SRI SAI SHIPPING AGENCIES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
