'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Member } from '@/types';
import { Lock, X, KeyRound, AlertCircle, CheckCircle } from 'lucide-react';

interface PinModalProps {
  isOpen: boolean;
  member: Member | null;
  onSuccess: (member: Member) => void;
  onClose: () => void;
}

export default function PinModal({
  isOpen,
  member,
  onSuccess,
  onClose,
}: PinModalProps) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setPin('');
      setError(false);
      setErrorMessage('');
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  if (!isOpen || !member) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pin) {
      setError(true);
      setErrorMessage('Masukkan 4-digit PIN!');
      return;
    }

    // Verify against member's stored PIN
    if (pin === member.pin) {
      setError(false);
      onSuccess(member);
    } else {
      setError(true);
      setErrorMessage('PIN salah! Silakan coba lagi.');
      setPin('');
      inputRef.current?.focus();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Verifikasi PIN Member"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-comic-border/70 backdrop-blur-sm animate-bounce-short"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative max-w-sm w-full bg-surface rounded-comic border-comic-thick border-comic-border shadow-comic-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-secondary/30 border-b-2 border-comic-border">
          <div className="flex items-center gap-2 font-heading font-bold text-sm text-comic-text">
            <Lock className="w-4 h-4 text-primary" />
            Autentikasi Profil
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup modal PIN"
            className="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center border-2 border-comic-border shadow-comic-sm hover:scale-105 active:translate-y-0.5 transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content & PIN Form */}
        <div className="p-6 text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-secondary/30 mx-auto flex items-center justify-center border-2 border-comic-border shadow-comic-sm">
            <KeyRound className="w-7 h-7 text-comic-text" />
          </div>

          <div>
            <h3 className="font-heading font-extrabold text-xl text-comic-text">
              Verifikasi Identitas
            </h3>
            <p className="font-body text-comic-muted text-xs sm:text-sm mt-1">
              Masukkan 4-digit PIN rahasia untuk mengedit profil{' '}
              <strong>{member.name}</strong>.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className={error ? 'animate-shake' : ''}>
              <input
                ref={inputRef}
                type="password"
                maxLength={4}
                value={pin}
                onChange={(e) => {
                  setError(false);
                  setPin(e.target.value.replace(/\D/g, ''));
                }}
                placeholder="● ● ● ●"
                className={`w-40 mx-auto text-center font-heading font-extrabold text-2xl tracking-[0.5em] py-2 px-4 rounded-comic-sm border-comic border-comic-border bg-cream shadow-comic focus:outline-none focus:ring-4 ${
                  error ? 'border-accent ring-4 ring-accent/30' : 'focus:ring-primary'
                }`}
              />
            </div>

            {error && (
              <div className="flex items-center justify-center gap-1.5 text-accent font-heading font-bold text-xs">
                <AlertCircle className="w-3.5 h-3.5" />
                {errorMessage}
              </div>
            )}

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2 rounded-comic-sm border-2 border-comic-border bg-cream font-heading font-bold text-sm text-comic-text hover:bg-slate-200 active:translate-y-0.5 transition-all"
              >
                Batal
              </button>
              <button
                type="submit"
                className="flex-1 py-2 rounded-comic-sm border-2 border-comic-border bg-primary font-heading font-bold text-sm text-white shadow-comic hover:bg-primary-hover active:translate-y-0.5 transition-all"
              >
                Verifikasi
              </button>
            </div>
          </form>

          <p className="text-[11px] font-heading text-comic-muted">
            🔒 Masukkan 4-digit PIN rahasia untuk mengedit profil.
          </p>
        </div>
      </div>
    </div>
  );
}
