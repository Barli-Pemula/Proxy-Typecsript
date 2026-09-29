'use client';

import React from 'react';
import { Member } from '@/types';
import {
  Crown,
  Star,
  User,
  Cake,
  GraduationCap,
  UtensilsCrossed,
  FileText,
  Pencil,
  Quote,
} from 'lucide-react';

interface MemberCardProps {
  member: Member;
  onEditClick: (member: Member) => void;
}

export default function MemberCard({ member, onEditClick }: MemberCardProps) {
  // Badge configuration based on tier
  const badgeConfig = {
    mentor: {
      label: '⭐ LEAD MENTOR',
      bg: 'bg-secondary text-comic-text',
      border: 'border-secondary',
      icon: Star,
    },
    ketua: {
      label: '👑 KETUA PROXY',
      bg: 'bg-primary text-white',
      border: 'border-primary',
      icon: Crown,
    },
    anggota: {
      label: 'ANGGOTA INTI',
      bg: 'bg-slate-100 text-comic-text',
      border: 'border-slate-300',
      icon: User,
    },
  }[member.role];

  const BadgeIcon = badgeConfig.icon;

  // Render Tier 1 (Lead Mentor) Layout
  if (member.tier === 1) {
    return (
      <div className="relative group bg-surface rounded-comic p-6 sm:p-8 border-comic-thick border-comic-border shadow-comic-lg hover:shadow-comic-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
        {/* Gold Corner Ambient Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-secondary-light border-comic-thick border-comic-border overflow-hidden shadow-comic group-hover:scale-105 transition-transform">
              <img
                src={member.avatarUrl}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-comic-pill bg-secondary border-2 border-comic-border shadow-comic-sm text-[11px] font-heading font-extrabold text-comic-text whitespace-nowrap">
              Mentor Utama
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-between gap-3">
              <div>
                <span className="inline-flex items-center gap-1.5 bg-secondary text-comic-text px-3 py-1 rounded-comic-pill border-2 border-comic-border text-xs font-heading font-extrabold shadow-comic-sm">
                  <Star className="w-3.5 h-3.5 fill-comic-text" />
                  {member.roleTitle}
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-comic-text mt-1.5 tracking-tight">
                  {member.name}
                </h3>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href={member.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-surface text-comic-text px-4 py-2 rounded-comic-sm border-2 border-comic-border shadow-comic-sm text-xs font-heading font-bold hover:bg-secondary/30 active:translate-y-0.5 transition-all"
                  aria-label={`Lihat CV ATS ${member.name}`}
                >
                  <FileText className="w-4 h-4 text-primary" />
                  Lihat CV (ATS)
                </a>
                <button
                  type="button"
                  onClick={() => onEditClick(member)}
                  className="inline-flex items-center gap-1.5 bg-surface text-comic-text px-3 py-2 rounded-comic-sm border-2 border-comic-border shadow-comic-sm text-xs font-heading font-bold hover:bg-accent/20 active:translate-y-0.5 transition-all"
                  aria-label={`Edit profil ${member.name}`}
                >
                  <Pencil className="w-4 h-4 text-accent" />
                  <span>Edit</span>
                </button>
              </div>
            </div>

            {/* Metadata Tags */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs sm:text-sm font-heading font-semibold text-comic-muted">
              <div className="flex items-center justify-center lg:justify-start gap-1.5 bg-cream px-3 py-2 rounded-comic-sm border border-comic-border/80">
                <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                <span className="truncate">{member.prodi}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-1.5 bg-cream px-3 py-2 rounded-comic-sm border border-comic-border/80">
                <Cake className="w-4 h-4 text-accent shrink-0" />
                <span>{member.birthDate}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-1.5 bg-cream px-3 py-2 rounded-comic-sm border border-comic-border/80">
                <UtensilsCrossed className="w-4 h-4 text-secondary shrink-0" />
                <span className="truncate">{member.favoriteFood}</span>
              </div>
            </div>

            {/* Motivation Quote */}
            <div className="relative bg-secondary/15 p-4 rounded-comic-sm border-2 border-comic-border text-left">
              <Quote className="w-5 h-5 text-secondary absolute top-2.5 left-2.5 opacity-40" />
              <p className="font-quote text-comic-text text-lg sm:text-xl font-bold italic pl-5">
                &ldquo;{member.motivationQuote}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render Tier 2 (Ketua Proxy) Layout
  if (member.tier === 2) {
    return (
      <div className="relative group bg-surface rounded-comic p-6 sm:p-7 border-comic-thick border-comic-border shadow-comic-lg hover:shadow-comic-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-primary-light border-comic-thick border-comic-border overflow-hidden shadow-comic group-hover:scale-105 transition-transform">
              <img
                src={member.avatarUrl}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-comic-pill bg-primary border-2 border-comic-border shadow-comic-sm text-[10px] font-heading font-extrabold text-white whitespace-nowrap">
              Ketua Proxy
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 space-y-3.5 text-center md:text-left w-full">
            <div className="flex flex-wrap items-center justify-center md:justify-between gap-3">
              <div>
                <span className="inline-flex items-center gap-1.5 bg-primary text-white px-3 py-0.5 rounded-comic-pill border-2 border-comic-border text-xs font-heading font-extrabold shadow-comic-sm">
                  <Crown className="w-3.5 h-3.5" />
                  {member.roleTitle}
                </span>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-comic-text mt-1 tracking-tight">
                  {member.name}
                </h3>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href={member.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-surface text-comic-text px-3.5 py-1.5 rounded-comic-sm border-2 border-comic-border shadow-comic-sm text-xs font-heading font-bold hover:bg-primary/20 active:translate-y-0.5 transition-all"
                  aria-label={`Lihat CV ATS ${member.name}`}
                >
                  <FileText className="w-3.5 h-3.5 text-primary" />
                  Lihat CV
                </a>
                <button
                  type="button"
                  onClick={() => onEditClick(member)}
                  className="inline-flex items-center gap-1.5 bg-surface text-comic-text px-2.5 py-1.5 rounded-comic-sm border-2 border-comic-border shadow-comic-sm text-xs font-heading font-bold hover:bg-accent/20 active:translate-y-0.5 transition-all"
                  aria-label={`Edit profil ${member.name}`}
                >
                  <Pencil className="w-3.5 h-3.5 text-accent" />
                  <span>Edit</span>
                </button>
              </div>
            </div>

            {/* Metadata Tags */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-heading font-semibold text-comic-muted">
              <div className="flex items-center justify-center md:justify-start gap-1 bg-cream px-2.5 py-1.5 rounded-comic-sm border border-comic-border/80 truncate">
                <GraduationCap className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="truncate">{member.prodi}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-1 bg-cream px-2.5 py-1.5 rounded-comic-sm border border-comic-border/80">
                <Cake className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>{member.birthDate}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-1 bg-cream px-2.5 py-1.5 rounded-comic-sm border border-comic-border/80 truncate">
                <UtensilsCrossed className="w-3.5 h-3.5 text-secondary shrink-0" />
                <span className="truncate">{member.favoriteFood}</span>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-primary/10 p-3 rounded-comic-sm border-2 border-comic-border text-left">
              <p className="font-quote text-comic-text text-base sm:text-lg font-bold italic">
                &ldquo;{member.motivationQuote}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render Tier 3 (10 Anggota Inti) Layout
  return (
    <div className="group relative bg-surface rounded-comic p-5 border-comic border-comic-border shadow-comic hover:shadow-comic-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
      <div className="space-y-3.5">
        {/* Card Header & Actions */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 bg-slate-100 text-comic-text px-2.5 py-0.5 rounded-comic-pill border border-comic-border text-[11px] font-heading font-bold shadow-comic-sm">
            <BadgeIcon className="w-3 h-3 text-comic-muted" />
            {badgeConfig.label}
          </span>

          <div className="flex items-center gap-1.5">
            <a
              href={member.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-comic-sm bg-cream border border-comic-border text-comic-text hover:bg-secondary/30 active:translate-y-0.5 transition-all"
              title="Lihat CV ATS"
              aria-label={`Lihat CV ATS ${member.name}`}
            >
              <FileText className="w-3.5 h-3.5 text-primary" />
            </a>
            <button
              type="button"
              onClick={() => onEditClick(member)}
              className="p-1.5 rounded-comic-sm bg-cream border border-comic-border text-comic-text hover:bg-accent/20 active:translate-y-0.5 transition-all"
              title="Edit Profil"
              aria-label={`Edit profil ${member.name}`}
            >
              <Pencil className="w-3.5 h-3.5 text-accent" />
            </button>
          </div>
        </div>

        {/* Centered Avatar */}
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-cream border-comic border-comic-border overflow-hidden shadow-comic-sm group-hover:scale-105 transition-transform mb-2">
            <img
              src={member.avatarUrl}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="font-heading font-extrabold text-base sm:text-lg text-comic-text line-clamp-1 tracking-tight">
            {member.name}
          </h4>
          <p className="font-heading font-semibold text-xs text-primary line-clamp-1">
            {member.roleTitle}
          </p>
        </div>

        {/* Member Info Chips */}
        <div className="space-y-1.5 pt-1 text-xs font-heading font-semibold text-comic-muted">
          <div className="flex items-center gap-1.5 bg-cream/70 px-2.5 py-1.5 rounded-md border border-comic-border/60">
            <GraduationCap className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="truncate">{member.prodi}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-cream/70 px-2.5 py-1.5 rounded-md border border-comic-border/60">
            <Cake className="w-3.5 h-3.5 text-accent shrink-0" />
            <span className="truncate">{member.birthDate}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-cream/70 px-2.5 py-1.5 rounded-md border border-comic-border/60">
            <UtensilsCrossed className="w-3.5 h-3.5 text-secondary shrink-0" />
            <span className="truncate">{member.favoriteFood}</span>
          </div>
        </div>

        {/* Quote Bubble */}
        <div className="bg-secondary/10 p-3 rounded-comic-sm border border-comic-border text-center">
          <p className="font-quote text-comic-text text-sm sm:text-base font-bold italic line-clamp-2">
            &ldquo;{member.motivationQuote}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
