'use client';

import React, { useState } from 'react';
import { Member } from '@/types';
import defaultMembers from '@/data/members.json';
import MemberCard from './MemberCard';
import MemberDetailModal, { AnimationType } from './MemberDetailModal';
import { Sparkles, Shield, BookOpen } from 'lucide-react';

const animationTypes: AnimationType[] = [
  'comicPop',
  'cardFlip3D',
  'spiralUnfold',
  'elasticBounce',
  'zoomSlam',
];

export default function TeamSection() {
  const members = defaultMembers as Member[];
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [activeAnimation, setActiveAnimation] = useState<AnimationType>('comicPop');

  const mentor = members.find((m) => m.tier === 1) || members[0];
  const ketua = members.find((m) => m.tier === 2) || members[1];
  const anggotas = members.filter((m) => m.tier === 3);

  const handleOpenDetail = (member: Member, index: number = 0) => {
    // Pick different animation variant for each member so every card opening has a unique feel
    const anim = animationTypes[index % animationTypes.length];
    setActiveAnimation(anim);
    setSelectedMember(member);
  };

  return (
    <section id="team" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-1.5 bg-primary-light text-primary px-4 py-1 rounded-comic-pill border border-primary/20 text-xs font-heading font-bold tracking-[0.14em] uppercase">
          <Shield className="w-4 h-4" />
          Struktur Kelompok
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-comic-text flex items-center justify-center gap-2 tracking-[-0.04em]">
          Kartu Anggota Proxy
          <Sparkles className="w-6 h-6 text-secondary hidden sm:inline-block" />
        </h2>
        <p className="font-body text-comic-muted text-base sm:text-lg max-w-2xl mx-auto flex items-center justify-center gap-2">
          <BookOpen className="w-5 h-5 text-primary shrink-0" />
          <span>
            Halaman cover kartu menampilkan nama &amp; NIM. <strong>Ketuk kartu mana saja</strong> untuk membuka detail data lengkap dengan animasi interaktif!
          </span>
        </p>
      </div>

      <div className="space-y-12">
        {/* Tier 1: PJK Kami */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-secondary border border-comic-border"></span>
            <h3 className="font-heading font-extrabold text-xl text-comic-text tracking-tight">
              PJK Kami
            </h3>
          </div>
          {mentor && (
            <MemberCard
              member={mentor}
              onOpenDetail={(m) => handleOpenDetail(m, 0)}
            />
          )}
        </div>

        {/* Tier 2: Ketua Proxy */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 justify-center">
            <span className="w-3 h-3 rounded-full bg-primary border border-comic-border"></span>
            <h3 className="font-heading font-extrabold text-xl text-comic-text tracking-tight">
              Ketua Proxy
            </h3>
          </div>
          {ketua && (
            <MemberCard
              member={ketua}
              onOpenDetail={(m) => handleOpenDetail(m, 1)}
            />
          )}
        </div>

        {/* Tier 3: 10 Anggota Inti */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-slate-300 border border-comic-border"></span>
            <h3 className="font-heading font-extrabold text-xl text-comic-text tracking-tight">
              10 Anggota Kelompok
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {anggotas.map((anggota, idx) => (
              <MemberCard
                key={anggota.id}
                member={anggota}
                onOpenDetail={(m) => handleOpenDetail(m, idx + 2)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Detail Modal (Isi Kartu) */}
      <MemberDetailModal
        isOpen={Boolean(selectedMember)}
        member={selectedMember}
        animationType={activeAnimation}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
}
