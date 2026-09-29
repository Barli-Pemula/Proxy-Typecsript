'use client';

import React, { useState } from 'react';
import { GalleryItemData } from '@/types';
import { Sparkles, ZoomIn } from 'lucide-react';

interface GalleryItemProps {
  item: GalleryItemData;
  index: number;
  onClick: () => void;
}

export default function GalleryItem({ item, index, onClick }: GalleryItemProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Lihat foto: ${item.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      style={{
        transform: `rotate(${item.tiltDegree}deg)`,
      }}
      className="group relative bg-surface p-3 sm:p-4 pb-6 rounded-comic-sm border-comic border-comic-border shadow-comic hover:shadow-comic-xl hover:scale-105 hover:!rotate-0 hover:z-20 transition-all duration-300 ease-out cursor-pointer flex flex-col focus:outline-none focus:ring-4 focus:ring-primary select-none"
    >
      {/* Tape Sticker Decor */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-5 bg-secondary/80 border border-comic-border rounded-sm shadow-sm rotate-2 group-hover:rotate-0 transition-transform"></div>

      {/* Photo Container */}
      <div className="relative w-full aspect-square bg-cream rounded-md overflow-hidden border-2 border-comic-border/80 flex items-center justify-center">
        {/* Skeleton Shimmer */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-slate-400 animate-spin" />
          </div>
        )}

        {/* Polaroid Image */}
        <img
          src={item.imageUrl}
          alt={item.title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Hover Overlay with Zoom Icon */}
        <div className="absolute inset-0 bg-comic-border/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
          <div className="w-10 h-10 rounded-full bg-secondary border-2 border-comic-border shadow-comic flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
            <ZoomIn className="w-5 h-5 text-comic-text" />
          </div>
        </div>
      </div>

      {/* Polaroid Handwritten Caption */}
      <div className="mt-3 space-y-1 text-center">
        <h4 className="font-heading font-bold text-sm sm:text-base text-comic-text line-clamp-1">
          {item.title}
        </h4>
        <p className="font-quote text-comic-muted text-base sm:text-lg font-bold leading-none">
          {item.date}
        </p>
      </div>
    </div>
  );
}
