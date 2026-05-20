"use client";

import { useState, useMemo } from "react";
import GalleryCard from "./GalleryCard";
import Lightbox from "./Lightbox";

export interface GalleryImage {
  src: string;
  category: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const cats = new Set<string>();
    cats.add("All");
    images.forEach(img => {
      if (img.category) cats.add(img.category);
    });
    return Array.from(cats);
  }, [images]);

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return images;
    return images.filter(img => img.category === activeCategory);
  }, [images, activeCategory]);

  // Helper to determine the grid span for a curated editorial layout
  const getGridSpan = (index: number) => {
    // Mobile is simpler: 2 columns, occasional full width
    const mobileSpan = index % 5 === 0 ? "col-span-2" : "col-span-1";

    // Desktop: Create an asymmetrical architectural rhythm
    let desktopSpan = "";
    if (index % 11 === 0) {
      desktopSpan = "md:col-span-2 md:row-span-2"; // Large feature block
    } else if (index % 7 === 0) {
      desktopSpan = "md:col-span-2 md:row-span-1"; // Wide panorama
    } else if (index % 9 === 0) {
      desktopSpan = "md:col-span-1 md:row-span-2"; // Tall portrait
    } else {
      desktopSpan = "md:col-span-1 md:row-span-1"; // Standard square
    }

    return `${mobileSpan} ${desktopSpan}`;
  };

  return (
    <div className="flex flex-col gap-10">
      {categories.length > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#1E40AF] text-white shadow-lg shadow-blue-900/20"
                  : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 shadow-sm"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-3 md:gap-5 grid-flow-dense">
        {filteredImages.map((imageObj, index) => (
          <GalleryCard
            key={imageObj.src}
            image={imageObj.src}
            category={imageObj.category}
            index={index}
            className={`${getGridSpan(index)} [&>div:first-child]:absolute [&>div:first-child]:inset-0 [&>div:first-child]:pb-0`}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <Lightbox
          images={filteredImages.map(img => img.src)}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNavigate={(newIndex) => setSelectedIndex(newIndex)}
        />
      )}
    </div>
  );
}
