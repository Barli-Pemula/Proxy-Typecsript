'use client';

import React, { useState, useRef } from 'react';
import { Member } from '@/types';
import { updateMember } from '@/lib/storage';
import confetti from 'canvas-confetti';
import {
  X,
  Save,
  User,
  GraduationCap,
  Cake,
  UtensilsCrossed,
  Quote,
  FileText,
  CheckCircle,
  Loader2,
  Upload,
  ExternalLink,
} from 'lucide-react';

interface EditFormProps {
  isOpen: boolean;
  member: Member | null;
  onSaveSuccess: (updated: Member) => void;
  onClose: () => void;
}

export default function EditForm({
  isOpen,
  member,
  onSaveSuccess,
  onClose,
}: EditFormProps) {
  if (!isOpen || !member) return null;

  const [formData, setFormData] = useState<Member>({ ...member });
  const [isSaving, setIsSaving] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // File Upload References & State
  const [avatarFileName, setAvatarFileName] = useState<string>('');
  const [cvFileName, setCvFileName] = useState<string>('');
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const cvInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Avatar Image Upload
  const handleAvatarFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Harap pilih file gambar (PNG, JPG, SVG, WebP)!');
        return;
      }
      setAvatarFileName(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        setFormData((prev) => ({ ...prev, avatarUrl: base64 }));
      };
      reader.readAsDataURL(file);
    }
  };

  // CV Document (PDF) Upload
  const handleCvFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf' && !file.name.endsWith('.pdf')) {
        alert('Harap pilih file format PDF untuk CV!');
        return;
      }
      setCvFileName(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        setFormData((prev) => ({ ...prev, cvUrl: base64 }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTriggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#4A90E2', '#F5C542', '#FF6B6B', '#4CAF50'],
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    const res = await updateMember(formData);
    setIsSaving(false);

    if (res.success) {
      handleTriggerConfetti();
      setToastMessage('Profil berhasil diperbarui! 🎉');
      setTimeout(() => {
        onSaveSuccess(formData);
      }, 1000);
    } else {
      alert(`Gagal menyimpan: ${res.error}`);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Edit Profil ${member.name}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-comic-border/70 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget && !isSaving) onClose();
      }}
    >
      <div className="relative max-w-2xl w-full bg-surface rounded-comic border-comic-thick border-comic-border shadow-comic-xl my-8 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-secondary/30 border-b-2 border-comic-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-secondary border-2 border-comic-border flex items-center justify-center font-heading font-extrabold text-xs">
              EDIT
            </div>
            <h3 className="font-heading font-extrabold text-lg sm:text-xl text-comic-text">
              Edit Profil Member: {member.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            disabled={isSaving}
            aria-label="Tutup formulir edit"
            className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center border-2 border-comic-border shadow-comic-sm hover:scale-105 active:translate-y-0.5 transition-all disabled:opacity-50"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Success Banner Toast */}
        {toastMessage && (
          <div className="bg-emerald-100 border-b-2 border-emerald-400 p-3 text-center text-emerald-800 font-heading font-bold text-sm flex items-center justify-center gap-2 animate-bounce-short">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            {toastMessage}
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[75vh]">
          {/* UPLOAD AVATAR & CV SECTION */}
          <div className="bg-cream/80 p-4 sm:p-5 rounded-comic border-2 border-comic-border shadow-comic-sm space-y-3">
            <h4 className="font-heading font-bold text-xs sm:text-sm text-comic-text uppercase tracking-wider flex items-center gap-2">
              <Upload className="w-4 h-4 text-primary" /> Upload Foto Avatar &amp; Berkas CV ATS
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center pt-1">
              {/* Avatar Upload */}
              <div className="flex items-center gap-3 bg-surface p-3 rounded-comic-sm border-2 border-comic-border">
                <div className="relative w-16 h-16 rounded-full bg-secondary-light border-2 border-comic-border overflow-hidden shrink-0 shadow-comic-sm">
                  <img
                    src={formData.avatarUrl || member.avatarUrl}
                    alt="Avatar Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <label className="block text-xs font-heading font-bold text-comic-text">
                    Foto Avatar
                  </label>
                  <input
                    type="file"
                    ref={avatarInputRef}
                    accept="image/*"
                    onChange={handleAvatarFileChange}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => avatarInputRef.current?.click()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-comic-sm bg-secondary text-comic-text text-xs font-heading font-bold border-2 border-comic-border shadow-comic-sm hover:bg-secondary-hover active:translate-y-0.5 transition-all"
                  >
                    <Upload className="w-3 h-3" />
                    Pilih Foto
                  </button>
                  {avatarFileName && (
                    <p className="text-[10px] font-heading text-comic-muted truncate max-w-[120px]">
                      {avatarFileName}
                    </p>
                  )}
                </div>
              </div>

              {/* CV Document Upload */}
              <div className="flex items-center gap-3 bg-surface p-3 rounded-comic-sm border-2 border-comic-border">
                <div className="w-16 h-16 rounded-2xl bg-primary-light border-2 border-comic-border flex flex-col items-center justify-center shrink-0 shadow-comic-sm text-primary">
                  <FileText className="w-7 h-7" />
                  <span className="text-[9px] font-heading font-extrabold">PDF ATS</span>
                </div>
                <div className="flex-1 space-y-1">
                  <label className="block text-xs font-heading font-bold text-comic-text">
                    Dokumen CV (PDF)
                  </label>
                  <input
                    type="file"
                    ref={cvInputRef}
                    accept=".pdf,application/pdf"
                    onChange={handleCvFileChange}
                    className="hidden"
                  />
                  <div className="flex flex-wrap gap-1.5">
                    <button
                      type="button"
                      onClick={() => cvInputRef.current?.click()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-comic-sm bg-primary text-white text-xs font-heading font-bold border-2 border-comic-border shadow-comic-sm hover:bg-primary-hover active:translate-y-0.5 transition-all"
                    >
                      <Upload className="w-3 h-3" />
                      Pilih PDF
                    </button>
                    {formData.cvUrl && (
                      <a
                        href={formData.cvUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2 py-1.5 rounded-comic-sm bg-cream text-comic-text text-xs font-heading font-bold border border-comic-border hover:bg-secondary/30"
                        title="Buka CV Preview"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-primary" />
                      </a>
                    )}
                  </div>
                  {cvFileName && (
                    <p className="text-[10px] font-heading text-emerald-600 font-bold truncate max-w-[120px]">
                      ✓ {cvFileName}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Row 1: Name & Role Title */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-xs font-heading font-bold text-comic-text flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-primary" /> Nama Lengkap
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3.5 py-2.5 rounded-comic-sm border-2 border-comic-border bg-cream font-body text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary shadow-comic-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-heading font-bold text-comic-text flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-primary" /> Jabatan / Role Title
              </label>
              <input
                type="text"
                name="roleTitle"
                value={formData.roleTitle}
                onChange={handleChange}
                required
                className="w-full px-3.5 py-2.5 rounded-comic-sm border-2 border-comic-border bg-cream font-body text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary shadow-comic-sm"
              />
            </div>
          </div>

          {/* Row 2: Prodi & BirthDate */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-xs font-heading font-bold text-comic-text flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-secondary" /> Program Studi / Keahlian
              </label>
              <input
                type="text"
                name="prodi"
                value={formData.prodi}
                onChange={handleChange}
                required
                className="w-full px-3.5 py-2.5 rounded-comic-sm border-2 border-comic-border bg-cream font-body text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary shadow-comic-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-heading font-bold text-comic-text flex items-center gap-1.5">
                <Cake className="w-3.5 h-3.5 text-accent" /> Tanggal Lahir
              </label>
              <input
                type="text"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                required
                className="w-full px-3.5 py-2.5 rounded-comic-sm border-2 border-comic-border bg-cream font-body text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary shadow-comic-sm"
              />
            </div>
          </div>

          {/* Row 3: Favorite Food */}
          <div className="space-y-1">
            <label className="block text-xs font-heading font-bold text-comic-text flex items-center gap-1.5">
              <UtensilsCrossed className="w-3.5 h-3.5 text-secondary" /> Makanan Favorit
            </label>
            <input
              type="text"
              name="favoriteFood"
              value={formData.favoriteFood}
              onChange={handleChange}
              required
              className="w-full px-3.5 py-2.5 rounded-comic-sm border-2 border-comic-border bg-cream font-body text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary shadow-comic-sm"
            />
          </div>

          {/* Row 4: Motivation Quote */}
          <div className="space-y-1">
            <label className="block text-xs font-heading font-bold text-comic-text flex items-center gap-1.5">
              <Quote className="w-3.5 h-3.5 text-secondary" /> Kutipan Motivasi (Motto Hidup)
            </label>
            <textarea
              name="motivationQuote"
              rows={3}
              value={formData.motivationQuote}
              onChange={handleChange}
              required
              className="w-full px-3.5 py-2.5 rounded-comic-sm border-2 border-comic-border bg-cream font-quote text-lg font-bold focus:outline-none focus:ring-2 focus:ring-primary shadow-comic-sm"
            ></textarea>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t-2 border-comic-border">
            <button
              type="button"
              onClick={onClose}
              disabled={isSaving}
              className="px-5 py-2.5 rounded-comic-sm border-2 border-comic-border bg-cream font-heading font-bold text-sm text-comic-text hover:bg-slate-200 active:translate-y-0.5 transition-all disabled:opacity-50"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-comic-sm border-2 border-comic-border bg-primary text-white font-heading font-bold text-sm shadow-comic hover:bg-primary-hover active:translate-y-0.5 transition-all disabled:opacity-50"
            >
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Menyimpan...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Simpan Perubahan
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
