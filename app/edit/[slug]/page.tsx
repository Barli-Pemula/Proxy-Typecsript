'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Member } from '@/types';
import defaultMembers from '@/data/members.json';
import { getMembers } from '@/lib/storage';
import PinModal from '@/components/PinModal';
import EditForm from '@/components/EditForm';
import { ArrowLeft, UserX, Loader2 } from 'lucide-react';

export default function DirectEditPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const [member, setMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPinVerified, setIsPinVerified] = useState(false);

  useEffect(() => {
    async function load() {
      const all = await getMembers();
      const found = all.find((m) => m.slug === slug || m.id === slug);
      setMember(found || null);
      setLoading(false);
    }
    if (slug) {
      load();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="flex items-center gap-2 font-heading font-bold text-comic-text">
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
          Memuat data profil...
        </div>
      </div>
    );
  }

  if (!member) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-cream p-4 text-center space-y-4">
        <UserX className="w-16 h-16 text-accent" />
        <h1 className="font-heading font-extrabold text-2xl text-comic-text">
          Member Tidak Ditemukan
        </h1>
        <p className="font-body text-comic-muted text-sm max-w-md">
          Profil dengan slug <code>&ldquo;{slug}&rdquo;</code> tidak terdaftar dalam database komunitas Typescript.
        </p>
        <button
          onClick={() => router.push('/')}
          className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold px-6 py-2.5 rounded-comic-sm border-2 border-comic-border shadow-comic hover:bg-primary-hover"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Beranda
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-4">
      <div className="text-center mb-6">
        <button
          onClick={() => router.push('/')}
          className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-comic-muted hover:text-primary transition-colors mb-2"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
        </button>
        <h1 className="font-heading font-extrabold text-3xl text-comic-text">
          Pengaturan Profil Member
        </h1>
      </div>

      {/* Pin Authentication if not verified */}
      {!isPinVerified && (
        <PinModal
          isOpen={true}
          member={member}
          onSuccess={() => setIsPinVerified(true)}
          onClose={() => router.push('/')}
        />
      )}

      {/* Full Edit Form once PIN is verified */}
      {isPinVerified && (
        <EditForm
          isOpen={true}
          member={member}
          onSaveSuccess={() => router.push('/#team')}
          onClose={() => router.push('/#team')}
        />
      )}
    </div>
  );
}
