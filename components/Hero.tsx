'use client';

import React from 'react';
import { ArrowRight, Terminal, Sparkles, Shield, Users, Layers, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* BACKGROUND ILLUSTRATIONS & CARTOON BACKDROP */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 select-none">
        {/* Soft Radial Ambient Glow */}
        <div className="w-[600px] sm:w-[850px] h-[500px] bg-primary/10 rounded-full blur-3xl transform -translate-y-6"></div>

        {/* Floating Cartoon Floating Badges in Background */}
        <div className="absolute top-24 left-[8%] animate-float hidden md:block">
          <div className="bg-surface/75 backdrop-blur-sm p-3 rounded-comic-sm border-comic border-comic-border shadow-comic transform -rotate-6">
            <Terminal className="w-8 h-8 text-primary" strokeWidth={2.2} />
          </div>
        </div>

        <div className="absolute bottom-28 left-[10%] animate-float hidden md:block" style={{ animationDelay: '2s' }}>
          <div className="bg-secondary/80 p-3 rounded-comic-sm border-comic border-comic-border shadow-comic transform rotate-6">
            <Shield className="w-7 h-7 text-comic-text" strokeWidth={2.2} />
          </div>
        </div>

        <div className="absolute top-28 right-[10%] animate-float hidden md:block" style={{ animationDelay: '1s' }}>
          <div className="bg-surface/75 backdrop-blur-sm p-3 rounded-comic-sm border-comic border-comic-border shadow-comic transform rotate-12">
            <Code2 className="w-8 h-8 text-accent" strokeWidth={2.2} />
          </div>
        </div>

        <div className="absolute bottom-24 right-[10%] animate-float hidden md:block" style={{ animationDelay: '3s' }}>
          <div className="bg-primary/90 text-white p-3 rounded-comic-sm border-comic border-comic-border shadow-comic transform -rotate-6">
            <Sparkles className="w-7 h-7 text-white" strokeWidth={2.2} />
          </div>
        </div>
      </div>

      {/* CENTERED HERO CONTENT */}
      <div className="hero-stagger max-w-5xl mx-auto w-full flex flex-col items-center text-center space-y-6 relative z-10">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-light px-4 py-1.5 rounded-comic-pill border border-primary/20 text-xs sm:text-sm font-heading font-bold text-primary tracking-wide">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span>Proxy Typescript · 12 Calon Engineer</span>
        </div>

        {/* Centered Main Title */}
        <div className="space-y-3">
          <h1 className="font-heading font-extrabold text-5xl sm:text-7xl lg:text-[6.8rem] text-comic-text tracking-[-0.06em] leading-[0.95]">
            Proxy <span className="text-primary relative inline-block">
              Typescript
              <span className="absolute -bottom-1 left-0 w-full h-2.5 bg-secondary/80 -z-10 rounded-full transform -rotate-1"></span>
            </span>
          </h1>
          <p className="font-heading font-semibold text-lg sm:text-xl text-comic-muted tracking-tight max-w-2xl mx-auto">
            &ldquo;Proxy Tipe Kamu !!!&rdquo;
          </p>
        </div>

        {/* Body Description */}
        <p className="font-body text-base sm:text-lg text-comic-text/85 max-w-xl mx-auto leading-relaxed font-normal">
          Kelompok belajar mahasiswa yang berisi <strong>12 calon engineer</strong> dengan rasa ingin tahu besar, energi kolaborasi, dan cerita seru di setiap tugasnya.
        </p>

        {/* Action Buttons Centered */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-primary text-white text-base font-heading font-bold px-7 py-3.5 rounded-comic-sm border border-primary shadow-comic hover:bg-primary-hover hover:shadow-comic-md transition-all transform hover:-translate-y-0.5 active:translate-y-0.5"
          >
            Kenali Kami
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="#team"
            className="inline-flex items-center gap-2 bg-surface text-comic-text text-base font-heading font-bold px-7 py-3.5 rounded-comic-sm border-comic border-comic-border shadow-comic hover:bg-secondary-light hover:shadow-comic-md transition-all transform hover:-translate-y-0.5 active:translate-y-0.5"
          >
            <Users className="w-5 h-5 text-primary" />
            Kartu 12 Anggota
          </a>
        </div>

        {/* 3-Tier Summary Indicator Chips */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-heading font-semibold text-comic-text">
          <div className="flex items-center gap-2 bg-surface/90 px-3.5 py-1.5 rounded-comic-pill border border-comic-border shadow-comic-sm">
            <span className="w-3 h-3 rounded-full bg-secondary border border-comic-border"></span>
            <span>1 PJK Kami</span>
          </div>
          <div className="flex items-center gap-2 bg-surface/90 px-3.5 py-1.5 rounded-comic-pill border border-comic-border shadow-comic-sm">
            <span className="w-3 h-3 rounded-full bg-primary border border-comic-border"></span>
            <span>1 Ketua Proxy</span>
          </div>
          <div className="flex items-center gap-2 bg-surface/90 px-3.5 py-1.5 rounded-comic-pill border border-comic-border shadow-comic-sm">
            <span className="w-3 h-3 rounded-full bg-slate-300 border border-comic-border"></span>
            <span>10 Anggota Kelompok</span>
          </div>
        </div>
      </div>
    </section>
  );
}
