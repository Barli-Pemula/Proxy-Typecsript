'use client';

import React, { useState, useEffect } from 'react';
import { Member } from '@/types';
import defaultMembers from '@/data/members.json';
import { getMembers } from '@/lib/storage';
import MemberCard from './MemberCard';
import PinModal from './PinModal';
import EditForm from './EditForm';
import { Users, Sparkles, Shield } from 'lucide-react';

export default function TeamSection() {
  const [members, setMembers] = useState<Member[]>(defaultMembers as Member[]);
  const [selectedMemberForPin, setSelectedMemberForPin] = useState<Member | null>(null);
  const [selectedMemberForEdit, setSelectedMemberForEdit] = useState<Member | null>(null);

  // Load from localStorage or Supabase on mount
  useEffect(() => {
    async function load() {
      const data = await getMembers();
      setMembers(data);
    }
    load();
  }, []);

  const mentor = members.find((m) => m.tier === 1) || members[0];
  const ketua = members.find((m) => m.tier === 2) || members[1];
  const anggotas = members.filter((m) => m.tier === 3);

  const handleOpenEdit = (member: Member) => {
    setSelectedMemberForPin(member);
  };

  const handlePinSuccess = (member: Member) => {
    setSelectedMemberForPin(null);
    setSelectedMemberForEdit(member);
  };

  const handleSaveSuccess = (updatedMember: Member) => {
    setMembers((prev) =>
      prev.map((m) => (m.id === updatedMember.id ? updatedMember : m))
    );
    setSelectedMemberForEdit(null);
  };

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-1.5 bg-primary/20 text-primary px-4 py-1 rounded-comic-pill border border-comic-border text-sm font-heading font-bold">
          <Shield className="w-4 h-4" />
          Struktur Tim 3-Tier
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-comic-text flex items-center justify-center gap-2 tracking-tight">
          Struktur Proxy Typescript
          <Sparkles className="w-6 h-6 text-secondary hidden sm:inline-block" />
        </h2>
        <p className="font-body text-comic-muted text-base sm:text-lg max-w-2xl mx-auto">
          Struktur 12 talenta teknologi yang solid dan terkoordinasi. Klik tombol edit pada kartu untuk memperbarui profil (dilindungi 4-digit PIN).
        </p>
      </div>

      <div className="space-y-12">
        {/* Tier 1: Lead Mentor */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-secondary border border-comic-border"></span>
            <h3 className="font-heading font-extrabold text-xl text-comic-text tracking-tight">
              Tier 1 — Lead Mentor &amp; Technical Advisor
            </h3>
          </div>
          {mentor && (
            <MemberCard member={mentor} onEditClick={handleOpenEdit} />
          )}
        </div>

        {/* Tier 2: Ketua Proxy */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 justify-center">
            <span className="w-3 h-3 rounded-full bg-primary border border-comic-border"></span>
            <h3 className="font-heading font-extrabold text-xl text-comic-text tracking-tight">
              Tier 2 — Ketua Proxy &amp; Project Lead
            </h3>
          </div>
          {ketua && (
            <MemberCard member={ketua} onEditClick={handleOpenEdit} />
          )}
        </div>

        {/* Tier 3: 10 Anggota Inti */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-slate-300 border border-comic-border"></span>
            <h3 className="font-heading font-extrabold text-xl text-comic-text tracking-tight">
              Tier 3 — 10 Anggota Inti
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {anggotas.map((anggota) => (
              <MemberCard
                key={anggota.id}
                member={anggota}
                onEditClick={handleOpenEdit}
              />
            ))}
          </div>
        </div>
      </div>

      {/* PIN Verification Dialog */}
      <PinModal
        isOpen={Boolean(selectedMemberForPin)}
        member={selectedMemberForPin}
        onSuccess={handlePinSuccess}
        onClose={() => setSelectedMemberForPin(null)}
      />

      {/* Full Edit Form Modal */}
      <EditForm
        isOpen={Boolean(selectedMemberForEdit)}
        member={selectedMemberForEdit}
        onSaveSuccess={handleSaveSuccess}
        onClose={() => setSelectedMemberForEdit(null)}
      />
    </section>
  );
}
