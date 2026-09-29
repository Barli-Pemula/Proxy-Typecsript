'use client';

import React from 'react';
import defaultGallery from '@/data/gallery.json';
import { GalleryItemData } from '@/types';
import GalleryItem from './GalleryItem';
import Lightbox from './Lightbox';
import { useLightbox } from '@/hooks/useLightbox';
import { Camera, Sparkles } from 'lucide-react';

interface PhotoGalleryProps {
  initialItems?: GalleryItemData[];
}

export default function PhotoGallery({ initialItems = defaultGallery as GalleryItemData[] }: PhotoGalleryProps) {
  const {
    isOpen,
    currentIndex,
    currentItem,
    openLightbox,
    closeLightbox,
    nextImage,
    prevImage,
  } = useLightbox(initialItems);

  return (
    <section id="gallery" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-1.5 bg-secondary/30 text-comic-text px-4 py-1 rounded-comic-pill border border-secondary/50 text-xs font-heading font-extrabold tracking-[0.14em] uppercase">
          <Camera className="w-4 h-4 text-primary" />
          Scrapbook Kenangan
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-comic-text flex items-center justify-center gap-2 tracking-[-0.04em]">
          Momen Kebersamaan Kami
          <Sparkles className="w-6 h-6 text-accent hidden sm:inline-block" />
        </h2>
        <p className="font-body text-comic-muted text-base sm:text-lg max-w-2xl mx-auto">
          Potret tawa, perjuangan deadline, pizza hangat, dan kehangatan persahabatan di balik setiap baris kode yang kami ciptakan.
        </p>
      </div>

      {/* Polaroid Masonry / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 sm:gap-5 pt-4">
        {initialItems.map((item, index) => (
          <GalleryItem
            key={item.id}
            item={item}
            index={index}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={isOpen}
        item={currentItem}
        currentIndex={currentIndex}
        totalItems={initialItems.length}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </section>
  );
}
