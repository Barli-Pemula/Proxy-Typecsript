'use client';

import React, { useEffect, useRef } from 'react';
import { GalleryItemData } from '@/types';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  item: GalleryItemData | null;
  currentIndex: number | null;
  totalItems: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  isOpen,
  item,
  currentIndex,
  totalItems,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trap
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen || !item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Galeri: ${item.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-comic-border/80 backdrop-blur-md animate-bounce-short"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Modal Card */}
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative max-w-4xl w-full bg-surface rounded-comic border-comic-thick border-comic-border shadow-comic-xl overflow-hidden flex flex-col focus:outline-none"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-secondary/30 border-b-2 border-comic-border">
          <div className="flex items-center gap-2 font-heading font-bold text-comic-text">
            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
            <span>
              Foto {(currentIndex ?? 0) + 1} dari {totalItems}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Tutup jendela galeri"
            className="w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center border-2 border-comic-border shadow-comic hover:shadow-comic-md hover:scale-105 active:translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-comic-border"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media & Caption Section */}
        <div className="p-6 sm:p-8 flex flex-col items-center space-y-6">
          {/* Main Image Display */}
          <div className="relative w-full max-h-[60vh] flex items-center justify-center bg-cream rounded-comic-sm border-2 border-comic-border overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="max-h-[55vh] w-auto max-w-full object-contain rounded-md"
            />

            {/* Navigation Arrow Controls */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label="Foto sebelumnya"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-surface border-2 border-comic-border shadow-comic flex items-center justify-center text-comic-text hover:bg-secondary transition-all hover:scale-110 active:translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label="Foto selanjutnya"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-surface border-2 border-comic-border shadow-comic flex items-center justify-center text-comic-text hover:bg-secondary transition-all hover:scale-110 active:translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Caption & Metadata */}
          <div className="w-full text-center space-y-2 bg-cream p-4 rounded-comic-sm border-2 border-comic-border">
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-comic-text">
              {item.title}
            </h3>
            <p className="font-body text-comic-text/85 text-sm sm:text-base max-w-2xl mx-auto">
              {item.caption}
            </p>
          </div>

          {/* Keyboard Hint Chip */}
          <div className="text-xs font-heading text-comic-muted flex items-center gap-4">
            <span>Gunakan tombol panah <strong>[◀] [▶]</strong> untuk navigasi</span>
            <span>•</span>
            <span>Tekan <strong>[Esc]</strong> untuk menutup</span>
          </div>
        </div>
      </div>
    </div>
  );
}
