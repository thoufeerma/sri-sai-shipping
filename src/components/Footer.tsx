import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-matte-black pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top strip with image accent */}
        <div className="relative h-32 rounded-2xl overflow-hidden mb-16 border border-white/5">
          <Image src="/hero-port.webp" alt="Sri Sai port" fill className="object-cover object-bottom opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-matte-black via-matte-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8">
            <div>
              <p className="text-white font-medium text-lg">Sri Sai Shipping Agencies</p>
              <p className="text-white/40 text-sm">Established in the 1980s · Cochin, India</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <p className="text-sm text-white/40 leading-relaxed mb-4">
              Delivering Reliable Freight Solutions for 45+ Years. Flawlessly integrated traditional Indian values with ultra-modern, high-tech logistics infrastructure.
            </p>
          </div>

          <div>
            <h4 className="text-white/60 text-xs font-medium tracking-widest uppercase mb-4">Navigation</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Global Logistics", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-white/40 hover:text-white transition-colors text-sm flex items-center gap-1 group w-fit"
                  >
                    {link}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/60 text-xs font-medium tracking-widest uppercase mb-4">Capabilities</h4>
            <ul className="space-y-3">
              {["Shipping Agency (Liner)", "Customs Broking", "Freight Forwarding", "Transportation", "Coastal Services"].map((s) => (
                <li key={s} className="text-white/40 text-sm">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/60 text-xs font-medium tracking-widest uppercase mb-4">Contact</h4>
            <p className="text-white/40 text-sm leading-relaxed mb-3">
              Sree Mahadeva Temple Trust Bldg,<br />
              1st Floor, Cochin,<br />
              Kerala - 682 035, India
            </p>
            <div className="flex flex-col gap-1.5">
              <a href="tel:+919447054109" className="text-white/40 hover:text-white transition-colors text-sm">
                +91 94470 54109
              </a>
              <a href="mailto:info@srisaishipping.com" className="text-white/40 hover:text-white transition-colors text-sm">
                info@srisaishipping.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Sri Sai Shipping Agencies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
