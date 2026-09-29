'use client';

import React from 'react';
import { Sparkles, Github, Instagram, Disc as Discord, Terminal, Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-surface border-t-comic-thick border-comic-border pt-16 pb-12 px-4 sm:px-6 lg:px-8 mt-24">
      {/* Decorative Top Pill Banner */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-secondary px-6 py-2 rounded-comic-pill border-comic border-comic-border shadow-comic text-xs sm:text-sm font-heading font-extrabold text-comic-text flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-accent" />
        Proxy Typescript &bull; Engineering Collective
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* Brand & About Column */}
        <div className="md:col-span-6 space-y-4 text-center md:text-left">
          <div className="inline-flex items-center gap-2.5 bg-cream px-3.5 py-1.5 rounded-comic-sm border-comic border-comic-border shadow-comic-sm">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-heading font-extrabold text-lg text-comic-text tracking-tight">
              Proxy Typescript
            </span>
          </div>
          <p className="font-body text-sm text-comic-muted max-w-sm mx-auto md:mx-0 leading-relaxed font-normal">
            Kolektif 12 talenta teknologi rekayasa perangkat lunak yang berdedikasi membangun karya digital solutif, aman, dan berstandar tinggi.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-cream border-2 border-comic-border shadow-comic-sm flex items-center justify-center text-comic-text hover:bg-secondary hover:scale-110 active:translate-y-0.5 transition-all"
              aria-label="GitHub Proxy Typescript"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-cream border-2 border-comic-border shadow-comic-sm flex items-center justify-center text-comic-text hover:bg-accent hover:text-white hover:scale-110 active:translate-y-0.5 transition-all"
              aria-label="Instagram Proxy Typescript"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-cream border-2 border-comic-border shadow-comic-sm flex items-center justify-center text-comic-text hover:bg-primary hover:text-white hover:scale-110 active:translate-y-0.5 transition-all"
              aria-label="Discord Proxy Typescript"
            >
              <Discord className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Nav Links */}
        <div className="md:col-span-3 space-y-2 text-center md:text-left">
          <h4 className="font-heading font-bold text-xs text-comic-text uppercase tracking-wider">
            Navigasi Halaman
          </h4>
          <ul className="font-heading font-semibold text-sm text-comic-muted space-y-2">
            <li><a href="#hero" className="hover:text-primary transition-colors">Beranda</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">Tentang Proxy</a></li>
            <li><a href="#gallery" className="hover:text-primary transition-colors">Galeri Foto</a></li>
            <li><a href="#team" className="hover:text-primary transition-colors">Struktur 12 Member</a></li>
          </ul>
        </div>

        {/* Tech Credits */}
        <div className="md:col-span-3 text-center md:text-right space-y-2">
          <div className="inline-block bg-cream p-3 rounded-comic-sm border-2 border-comic-border text-xs font-heading font-semibold text-comic-text shadow-comic-sm">
            ⚡ Engineered with Next.js 14, Tailwind &amp; TypeScript
          </div>
          <p className="font-body text-xs text-comic-muted">
            &copy; {currentYear} <strong>Proxy Typescript</strong>.<br />
            Seluruh Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
