'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Member } from '@/types';
import {
  X,
  Crown,
  Star,
  User,
  Cake,
  GraduationCap,
  UtensilsCrossed,
  Quote,
  FileText,
  Sparkles,
  IdCard,
  ExternalLink,
} from 'lucide-react';
import AudioPlayer from './AudioPlayer';

export type AnimationType =
  | 'comicPop'
  | 'cardFlip3D'
  | 'spiralUnfold'
  | 'elasticBounce'
  | 'zoomSlam';

interface MemberDetailModalProps {
  isOpen: boolean;
  member: Member | null;
  animationType?: AnimationType;
  onClose: () => void;
}

// 5 Different dynamic animation variants for opening cards
const animationVariants: Record<AnimationType, any> = {
  // Variant 1: Comic Pop with bouncy spring & slight tilt
  comicPop: {
    initial: { scale: 0.4, opacity: 0, rotate: -8, y: 40 },
    animate: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      y: 0,
      transition: {
        type: 'spring',
        damping: 18,
        stiffness: 260,
      },
    },
    exit: {
      scale: 0.6,
      opacity: 0,
      rotate: 6,
      y: 30,
      transition: { duration: 0.2 },
    },
  },

  // Variant 2: 3D Card Flip on Y-axis
  cardFlip3D: {
    initial: { rotateY: 90, opacity: 0, scale: 0.8 },
    animate: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 200,
      },
    },
    exit: {
      rotateY: -70,
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 },
    },
  },

  // Variant 3: Spiral Unfold spin
  spiralUnfold: {
    initial: { rotate: -35, scale: 0.5, opacity: 0, y: 80 },
    animate: {
      rotate: 0,
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 22,
        stiffness: 240,
      },
    },
    exit: {
      rotate: 20,
      scale: 0.5,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  },

  // Variant 4: Elastic Upward Bounce
  elasticBounce: {
    initial: { y: 160, opacity: 0, scale: 0.85 },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 14,
        stiffness: 220,
      },
    },
    exit: {
      y: 100,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 },
    },
  },

  // Variant 5: Zoom Slam with comic impact
  zoomSlam: {
    initial: { scale: 1.4, opacity: 0, rotate: 6 },
    animate: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        damping: 16,
        stiffness: 300,
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      rotate: -5,
      transition: { duration: 0.2 },
    },
  },
};

function getSpotifyEmbedUrl(spotifyUrl: string) {
  try {
    const url = new URL(spotifyUrl);
    const trackId = url.pathname.split('/').filter(Boolean).pop();

    if (!trackId || !['open.spotify.com', 'spotify.com'].includes(url.hostname)) {
      return null;
    }

    return `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`;
  } catch {
    return null;
  }
}

export default function MemberDetailModal({
  isOpen,
  member,
  animationType = 'comicPop',
  onClose,
}: MemberDetailModalProps) {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !member) return null;

  // Role badge setup
  const roleBadge = {
    mentor: {
      label: 'PJK KAMI',
      bg: 'bg-secondary text-comic-text',
      icon: Star,
      accentBorder: 'border-secondary',
      badgeColor: 'bg-secondary',
    },
    ketua: {
      label: 'KETUA PROXY',
      bg: 'bg-primary text-white',
      icon: Crown,
      accentBorder: 'border-primary',
      badgeColor: 'bg-primary text-white',
    },
    anggota: {
      label: 'ANGGOTA KELOMPOK',
      bg: 'bg-slate-100 text-comic-text',
      icon: User,
      accentBorder: 'border-comic-border',
      badgeColor: 'bg-slate-200 text-comic-text',
    },
  }[member.role];

  const BadgeIcon = roleBadge.icon;
  const currentVariant = animationVariants[animationType] || animationVariants.comicPop;
  const spotifyEmbedUrl = member.spotifyEmbedUrl || (member.spotifyUrl ? getSpotifyEmbedUrl(member.spotifyUrl) : null);

  // Rule: Show CV button for Ketua and 10 Anggota, EXCLUDE for PJK Kami (tier === 1)
  const showCvButton = member.tier !== 1 && Boolean(member.cvUrl);

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Detail Profil ${member.name}`}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-comic-border/75 backdrop-blur-md overflow-y-auto"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          key={member.id}
          variants={currentVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ perspective: 1000 }}
          className="relative max-w-lg w-full bg-surface rounded-comic border-comic-thick border-comic-border shadow-comic-xl my-8 overflow-hidden flex flex-col"
        >
          {/* Top Decorative Header */}
          <div className="flex items-center justify-between px-6 py-3.5 bg-secondary/35 border-b-2 border-comic-border">
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-comic-pill border-2 border-comic-border text-xs font-heading font-extrabold shadow-comic-sm ${roleBadge.bg}`}>
                <BadgeIcon className="w-3.5 h-3.5" />
                {roleBadge.label}
              </span>
              <span className="text-[11px] font-heading font-bold text-comic-muted flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                Detail Isi Kartu
              </span>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Tutup detail kartu"
              className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center border-2 border-comic-border shadow-comic-sm hover:scale-110 active:translate-y-0.5 transition-transform"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-7 space-y-5 overflow-y-auto max-h-[80vh]">
            {/* Header Profil: Avatar, Nama, NIM & Role */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left">
              <div className="relative shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-comic-sm bg-cream border-comic border-comic-border overflow-hidden shadow-comic">
                  <img
                    src={member.avatarUrl}
                    alt={member.name}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-comic-pill bg-surface border-2 border-comic-border shadow-comic-sm text-[10px] font-heading font-extrabold text-comic-text whitespace-nowrap">
                  {member.roleTitle}
                </div>
              </div>

              <div className="flex-1 space-y-1.5">
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-comic-text tracking-tight">
                  {member.name}
                </h3>
                
                {/* NIM Tag */}
                <div className="inline-flex items-center gap-1.5 bg-primary-light text-primary px-3 py-1 rounded-comic-sm border border-primary/30 font-heading font-extrabold text-xs">
                  <IdCard className="w-3.5 h-3.5" />
                  <span>NIM: {member.nim || 'G640122...'}</span>
                </div>

                <p className="font-heading font-semibold text-xs text-comic-muted pt-1">
                  {member.prodi}
                </p>
              </div>
            </div>

            {/* Info Grid (Tanggal Lahir, Makanan Favorit, Prodi) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm font-heading font-semibold text-comic-text">
              <div className="flex items-center gap-2 bg-cream p-3 rounded-comic-sm border border-comic-border/80">
                <div className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center border border-comic-border shrink-0">
                  <GraduationCap className="w-4 h-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] text-comic-muted uppercase">Program Studi</div>
                  <div className="truncate font-bold">{member.prodi}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-cream p-3 rounded-comic-sm border border-comic-border/80">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center border border-comic-border shrink-0">
                  <Cake className="w-4 h-4 text-accent" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] text-comic-muted uppercase">Tanggal Lahir</div>
                  <div className="truncate font-bold">{member.birthDate}</div>
                </div>
              </div>

              <div className="sm:col-span-2 flex items-center gap-2 bg-cream p-3 rounded-comic-sm border border-comic-border/80">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center border border-comic-border shrink-0">
                  <UtensilsCrossed className="w-4 h-4 text-comic-text" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] text-comic-muted uppercase">Makanan Favorit</div>
                  <div className="truncate font-bold">{member.favoriteFood}</div>
                </div>
              </div>
            </div>

            {/* Motto / Motivasi Quote Balloon */}
            <div className="relative bg-secondary/15 p-4 rounded-comic-sm border-2 border-comic-border">
              <Quote className="w-5 h-5 text-secondary absolute top-2.5 left-2.5 opacity-50" />
              <p className="font-quote text-comic-text text-base sm:text-lg font-bold italic pl-5">
                &ldquo;{member.motivationQuote}&rdquo;
              </p>
            </div>

            {/* Mini Audio Theme Beats */}
            {spotifyEmbedUrl ? (
              <div className="pt-1">
                <iframe
                  src={spotifyEmbedUrl}
                  title={`Putar ${member.audioTitle} di Spotify`}
                  width="100%"
                  height="80"
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-comic-sm border-2 border-comic-border"
                />
                <a
                  href={member.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-heading text-xs font-bold text-comic-muted hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Buka di Spotify jika player tidak tersedia
                </a>
              </div>
            ) : member.audioUrl ? (
              <div className="pt-1">
                <AudioPlayer
                  memberId={member.id}
                  audioUrl={member.audioUrl}
                  audioTitle={member.audioTitle}
                />
              </div>
            ) : null}

            {/* Action Bar (CV Button for non-PJK & Close Button) */}
            <div className="flex items-center justify-end gap-3 pt-3 border-t-2 border-comic-border">
              {showCvButton && (
                <a
                  href={member.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-sm px-5 py-2.5 rounded-comic-sm border-2 border-comic-border shadow-comic hover:bg-primary-hover active:translate-y-0.5 transition-all"
                >
                  <FileText className="w-4 h-4" />
                  Lihat Berkas CV
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-comic-sm border-2 border-comic-border bg-cream font-heading font-bold text-sm text-comic-text hover:bg-slate-200 active:translate-y-0.5 transition-all"
              >
                Tutup Kartu
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
