'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Code2, Users, Image as ImageIcon, Info, Shield } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#hero', icon: Code2 },
    { name: 'Tentang', href: '#about', icon: Info },
    { name: 'Galeri', href: '#gallery', icon: ImageIcon },
    { name: 'Struktur Tim', href: '#team', icon: Users },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 py-3.5 ${
        isScrolled
          ? 'bg-cream/90 backdrop-blur-md py-2.5 border-b border-comic-border/20 shadow-comic-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group bg-surface/80 px-2.5 py-1.5 rounded-comic-sm border border-comic-border/20 shadow-comic-sm hover:shadow-comic transition-all transform hover:-translate-y-0.5 active:translate-y-0.5"
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center border border-primary text-white font-heading font-extrabold text-sm">
            TS
          </div>
          <span className="font-heading font-extrabold text-lg sm:text-xl text-comic-text tracking-tight flex items-center gap-1.5">
            Proxy Typescript
            <Sparkles className="w-4 h-4 text-accent" />
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-surface/90 backdrop-blur-sm px-2 py-1.5 rounded-comic-pill border border-comic-border/20 shadow-comic-sm">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-comic-pill text-sm font-heading font-semibold text-comic-text hover:bg-secondary/30 transition-all hover:text-primary"
              >
                <Icon className="w-4 h-4 text-comic-muted" />
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#team"
            className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-comic-sm font-heading font-bold text-sm border border-primary shadow-comic hover:bg-primary-hover hover:shadow-comic-md transition-all transform hover:-translate-y-0.5 active:translate-y-0.5"
          >
            <Shield className="w-4 h-4" />
            12 Calon Engineer
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
          className="md:hidden p-2 rounded-comic-sm bg-surface border-comic border-comic-border shadow-comic text-comic-text focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 bg-surface border-comic border-comic-border rounded-comic p-4 shadow-comic-lg animate-bounce-short">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-comic-sm font-heading font-semibold text-comic-text hover:bg-secondary/30 transition-colors"
                >
                  <Icon className="w-5 h-5 text-primary" />
                  {link.name}
                </a>
              );
            })}
            <a
              href="#team"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 text-center bg-primary text-white py-2.5 rounded-comic-sm font-heading font-bold border-comic border-comic-border shadow-comic"
            >
              Lihat Struktur Tim
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
