import fs from "fs";
import path from "path";
import Image from "next/image";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import AmbientGradient from "@/components/AmbientGradient";

// Server-side function to read gallery images
function getGalleryImages() {
  try {
    const galleryDir = path.join(process.cwd(), "public", "gallery");
    if (!fs.existsSync(galleryDir)) return [];
    
    const categoriesList = ["Vessels", "Port Operations", "Cargo"];
    const entries = fs.readdirSync(galleryDir, { withFileTypes: true });
    let images = [];
    
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const categoryName = entry.name;
        const subDir = path.join(galleryDir, categoryName);
        const subFiles = fs.readdirSync(subDir);
        for (const file of subFiles) {
          if (/\.(webp)$/i.test(file)) {
            // Encode the path to handle spaces in folder or file names correctly
            images.push({ 
              src: `/gallery/${encodeURIComponent(categoryName)}/${encodeURIComponent(file)}`, 
              category: categoryName 
            });
          }
        }
      } else if (entry.isFile() && /\.(webp)$/i.test(entry.name)) {
        let hash = 0;
        for (let i = 0; i < entry.name.length; i++) {
          hash = entry.name.charCodeAt(i) + ((hash << 5) - hash);
        }
        const category = categoriesList[Math.abs(hash) % categoriesList.length];
        images.push({ 
          src: `/gallery/${encodeURIComponent(entry.name)}`, 
          category 
        });
      }
    }
    return images;
  } catch (error) {
    console.error("Error reading gallery directory:", error);
    return [];
  }
}

export const metadata: Metadata = {
  title: "Operational Gallery | SRI SAI SHIPPING",
  description: "Explore the visual archives of SRI SAI SHIPPING AGENCIES, featuring our global maritime infrastructure, cargo handling operations, and enterprise logistics networks.",
};

export default function GalleryPage() {
  const images = getGalleryImages();

  return (
    <div className="min-h-screen bg-[#F1F5F9]">
      {/* ─── PREMIUM HERO SECTION ─── */}
      <section className="relative h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden pt-20 bg-[#1c1917]">
        <div className="absolute inset-0">
          <Image
            src="/cargo-ship.webp"
            alt="Maritime Operations Gallery"
            fill
            priority
            quality={100}
            className="object-cover object-center opacity-90 scale-105"
          />
          {/* Clean gradient overlay to ensure text readability without dulling the image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          {/* Top gradient for Navbar visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/0 to-transparent h-48" />
        </div>
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs text-white/90 font-medium tracking-[0.2em] uppercase">
              Visual Archives
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-[6.5rem] tracking-tight text-white leading-[1] mb-8">
            <span className="font-sans font-medium">Operational</span> <br />
            <span className="font-serif italic text-white/95">Mastery</span>
          </h1>
          
          <p className="text-base md:text-xl text-white/70 max-w-2xl font-light tracking-wide leading-relaxed">
            A curated documentation of our global maritime infrastructure, freight coordination, and enterprise logistics scaling across borders.
          </p>
        </div>
      </section>

      {/* ─── GALLERY GRID SECTION ─── */}
      <section className="pb-32 bg-[#F1F5F9] relative z-10">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 pt-8 md:pt-16">
          {images.length > 0 ? (
            <GalleryGrid images={images} />
          ) : (
            <div className="text-center py-20 text-slate-500 bg-white/50 rounded-2xl border border-slate-200 shadow-sm">
              No gallery images found. Please add images to the public/gallery directory.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
