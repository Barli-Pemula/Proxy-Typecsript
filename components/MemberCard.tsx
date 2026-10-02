'use client';

import React from 'react';
import { Member } from '@/types';
import { getImageUrl } from '@/lib/utils';
import {
  Crown,
  Star,
  User,
  Sparkles,
  IdCard,
  Eye,
} from 'lucide-react';

interface MemberCardProps {
  member: Member;
  onOpenDetail: (member: Member) => void;
}

export default function MemberCard({ member, onOpenDetail }: MemberCardProps) {
  // Badge configuration based on role
  const badgeConfig = {
    mentor: {
      label: 'PJK KAMI',
      bg: 'bg-secondary text-comic-text',
      border: 'border-secondary',
      icon: Star,
      glow: 'hover:shadow-secondary/30',
      accentColor: 'text-secondary',
    },
    ketua: {
      label: '👑 KETUA PROXY',
      bg: 'bg-primary text-white',
      border: 'border-primary',
      icon: Crown,
      glow: 'hover:shadow-primary/30',
      accentColor: 'text-primary',
    },
    anggota: {
      label: 'ANGGOTA KELOMPOK',
      bg: 'bg-slate-100 text-comic-text',
      border: 'border-slate-300',
      icon: User,
      glow: 'hover:shadow-accent/20',
      accentColor: 'text-accent',
    },
  }[member.role];

  const BadgeIcon = badgeConfig.icon;

  // Render Tier 1 (PJK Kami) Cover Card
  if (member.tier === 1) {
    return (
      <div
        role="button"
        tabIndex={0}
        onClick={() => onOpenDetail(member)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenDetail(member);
          }
        }}
        aria-label={`Buka kartu detail profil ${member.name}`}
        className="relative group bg-surface rounded-comic p-6 sm:p-8 border-comic-thick border-comic-border shadow-comic-lg hover:shadow-comic-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-pointer select-none focus:outline-none focus:ring-4 focus:ring-primary"
      >
        {/* Gold Corner Ambient Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/25 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform"></div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 text-center sm:text-left">
            {/* Cover Avatar */}
            <div className="relative shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-secondary-light border-comic-thick border-comic-border overflow-hidden shadow-comic group-hover:scale-105 group-hover:rotate-2 transition-all">
                <img
                  src={getImageUrl(member.avatarUrl)}
                  alt={member.name}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-comic-pill bg-secondary border-2 border-comic-border shadow-comic-sm text-[10px] font-heading font-extrabold text-comic-text whitespace-nowrap">
                PJK Kami
              </div>
            </div>

            {/* Name & NIM on Cover */}
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 bg-secondary text-comic-text px-3 py-0.5 rounded-comic-pill border-2 border-comic-border text-xs font-heading font-extrabold shadow-comic-sm">
                <Star className="w-3.5 h-3.5 fill-comic-text" />
                {member.roleTitle}
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-comic-text tracking-tight group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <div className="inline-flex items-center gap-1.5 bg-cream px-3 py-1 rounded-comic-sm border border-comic-border font-heading font-bold text-xs text-comic-muted">
                <IdCard className="w-3.5 h-3.5 text-primary" />
                <span>NIM / Kode: <strong className="text-comic-text">{member.nim || 'PJK-2026'}</strong></span>
              </div>
            </div>
          </div>

          {/* Prompt to Open Detail */}
          <div className="shrink-0 flex items-center gap-2 bg-secondary text-comic-text px-4 py-2.5 rounded-comic-sm border-2 border-comic-border shadow-comic group-hover:bg-secondary-hover group-hover:scale-105 active:translate-y-0.5 transition-all">
            <Eye className="w-4 h-4 text-comic-text animate-pulse" />
            <span className="font-heading font-bold text-xs sm:text-sm">Buka Detail Kartu ✨</span>
          </div>
        </div>
      </div>
    );
  }

  // Render Tier 2 (Ketua Proxy) Cover Card
  if (member.tier === 2) {
    return (
      <div
        role="button"
        tabIndex={0}
        onClick={() => onOpenDetail(member)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenDetail(member);
          }
        }}
        aria-label={`Buka kartu detail profil ${member.name}`}
        className="relative group bg-surface rounded-comic p-6 sm:p-7 border-comic-thick border-comic-border shadow-comic-lg hover:shadow-comic-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden max-w-3xl mx-auto cursor-pointer select-none focus:outline-none focus:ring-4 focus:ring-primary"
      >
        {/* Blue Ambient Glow */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-primary/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform"></div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 relative z-10">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 text-center sm:text-left">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary-light border-comic-thick border-comic-border overflow-hidden shadow-comic group-hover:scale-105 group-hover:-rotate-2 transition-all">
                <img
                  src={getImageUrl(member.avatarUrl)}
                  alt={member.name}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-comic-pill bg-primary border-2 border-comic-border shadow-comic-sm text-[9px] font-heading font-extrabold text-white whitespace-nowrap">
                Ketua Proxy
              </div>
            </div>

            {/* Name & NIM */}
            <div className="space-y-1.5">
              <span className="inline-flex items-center gap-1.5 bg-primary text-white px-3 py-0.5 rounded-comic-pill border-2 border-comic-border text-xs font-heading font-extrabold shadow-comic-sm">
                <Crown className="w-3.5 h-3.5" />
                {member.roleTitle}
              </span>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-comic-text tracking-tight group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <div className="inline-flex items-center gap-1.5 bg-cream px-2.5 py-1 rounded-comic-sm border border-comic-border font-heading font-bold text-xs text-comic-muted">
                <IdCard className="w-3.5 h-3.5 text-primary" />
                <span>NIM: <strong className="text-comic-text">{member.nim || 'G640122...'}</strong></span>
              </div>
            </div>
          </div>

          {/* Prompt Button */}
          <div className="shrink-0 flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-comic-sm border-2 border-comic-border shadow-comic group-hover:bg-primary-hover group-hover:scale-105 active:translate-y-0.5 transition-all">
            <Eye className="w-4 h-4 text-white" />
            <span className="font-heading font-bold text-xs sm:text-sm">Buka Detail ✨</span>
          </div>
        </div>
      </div>
    );
  }

  // Render Tier 3 (10 Anggota Inti) Cover Card
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onOpenDetail(member)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenDetail(member);
        }
      }}
      aria-label={`Buka kartu detail profil ${member.name}`}
      className="group relative bg-surface rounded-comic p-5 border-comic border-comic-border shadow-comic hover:shadow-comic-xl hover:-translate-y-2 hover:rotate-1 transition-all duration-300 flex flex-col justify-between cursor-pointer select-none focus:outline-none focus:ring-4 focus:ring-primary"
    >
      <div className="space-y-3.5">
        {/* Top Badge */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 bg-slate-100 text-comic-text px-2.5 py-0.5 rounded-comic-pill border border-comic-border text-[11px] font-heading font-bold shadow-comic-sm">
            <BadgeIcon className="w-3 h-3 text-comic-muted" />
            {badgeConfig.label}
          </span>
          <Sparkles className="w-4 h-4 text-secondary opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all" />
        </div>

        {/* Avatar on Cover */}
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-comic-sm bg-cream border-comic border-comic-border overflow-hidden shadow-comic-sm group-hover:scale-105 group-hover:-rotate-2 transition-all mb-2.5">
            <img
              src={getImageUrl(member.avatarUrl)}
              alt={member.name}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name & NIM on Cover */}
          <h4 className="font-heading font-extrabold text-base sm:text-lg text-comic-text line-clamp-1 tracking-tight group-hover:text-primary transition-colors">
            {member.name}
          </h4>
          <div className="mt-1 inline-flex items-center gap-1 bg-cream px-2 py-0.5 rounded-md border border-comic-border text-xs font-heading font-bold text-comic-muted">
            <IdCard className="w-3 h-3 text-primary" />
            <span>NIM: <strong className="text-comic-text">{member.nim || 'G640122...'}</strong></span>
          </div>
        </div>
      </div>

      {/* Bottom Action Strip on Cover */}
      <div className="mt-4 pt-3 border-t border-comic-border/50 flex items-center justify-center gap-1.5 text-xs font-heading font-bold text-primary group-hover:text-primary-hover">
        <Eye className="w-3.5 h-3.5" />
        <span>Ketuk untuk Buka Isi 📖</span>
      </div>
    </div>
  );
}
