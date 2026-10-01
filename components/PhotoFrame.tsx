'use client';

import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export default function PhotoFrame() {
  return (
    <section id="memory-frame" className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center rounded-comic border border-comic-border/20 bg-surface/75 p-5 text-center shadow-comic sm:p-8 lg:p-10">
        <div className="relative w-full max-w-3xl rotate-1 rounded-comic border-comic border-comic-border bg-secondary p-3 shadow-comic-lg sm:p-4">
          <div className="absolute -top-3 left-1/2 z-10 h-6 w-24 -translate-x-1/2 -rotate-2 border border-comic-border/40 bg-surface/80 shadow-sm" />
          <div className="absolute -left-4 top-10 rotate-[-18deg] text-3xl text-primary">✦</div>
          <div className="absolute -right-3 bottom-14 rotate-[16deg] text-2xl text-primary">✦</div>
          <div className="relative aspect-video overflow-hidden rounded-comic-sm border-comic border-comic-border bg-primary-light">
            <Image
              src="/foto-perjuangan.jpg"
              alt="Kebersamaan ILkomerz dalam sebuah momen perayaan"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          <div className="flex items-center justify-between px-1 pt-3 font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-surface/70">
            <span>Proxy Typescript</span>
          </div>
        </div>

        <div className="mt-8 max-w-xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-comic-pill border border-secondary/60 bg-secondary/25 px-3 py-1 text-xs font-heading font-bold uppercase tracking-[0.14em] text-comic-text">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Bingkai kenangan
          </div>
          <h2 className="font-heading text-3xl font-extrabold tracking-[-0.04em] text-comic-text sm:text-4xl">
            Mengubah Perjuangan menjadi Indah Bersama Kami
          </h2>
          <p className="font-body text-base leading-relaxed text-comic-muted">
            Percaya untuk bertumbuh bersama, berproses bersama, saling bahu-membahu untuk mencapai tujuan dan menjadi ILkomerz sejati
          </p>
        </div>
      </div>
    </section>
  );
}
