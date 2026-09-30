'use client';

import React from 'react';
import { Lightbulb, Rocket, ShieldCheck, Flame, Users, Calendar, Infinity as InfinityIcon, Code2 } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: 'Inklusif & Kolaboratif',
      description: 'Setiap anggota didorong untuk aktif berpendapat dan bertukar wawasan teknis secara terbuka.',
      icon: Users,
      color: 'bg-primary/20 text-primary',
    },
    {
      title: 'Belajar bareng, tumbuh bareng',
      description: 'Saling berbagi cara berpikir, membedah masalah, dan merayakan progres kecil dalam perjalanan menjadi engineer.',
      icon: ShieldCheck,
      color: 'bg-secondary/30 text-comic-text',
    },
    {
      title: 'Seru dalam prosesnya',
      description: 'Eksperimen, diskusi, dan proyek kecil kami jadikan ruang aman untuk mencoba hal baru tanpa takut salah.',
      icon: Flame,
      color: 'bg-accent/20 text-accent',
    },
  ];

  const stats = [
    { label: 'Talenta masa depan', value: '12', icon: Users, suffix: 'Calon Engineer' },
    { label: 'Tahun perjalanan', value: '2026', icon: Calendar, suffix: 'Bertumbuh' },
    { label: 'Momen yang terukir', value: '∞', icon: InfinityIcon, suffix: 'Kenangan terbentuk' },
  ];

  return (
    <section id="about" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <div className="inline-block bg-primary-light text-primary px-4 py-1 rounded-comic-pill border border-primary/20 text-xs font-heading font-bold tracking-[0.14em] uppercase">
          Cara kami bekerja
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-comic-text tracking-[-0.04em]">
          Tentang Proxy Typescript
        </h2>
        <p className="font-body text-comic-muted text-base sm:text-lg max-w-2xl mx-auto">
          Ruang untuk belajar, bercanda, mencoba, dan tumbuh bersama sebagai Proxy. Kami hadir sebagai kelompok yang saling menguatkan dalam perjalanan menjadi talenta digital masa depan.
        </p>
      </div>

      {/* Description & Story Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
        <div className="lg:col-span-7 space-y-5 bg-surface/85 p-6 sm:p-9 rounded-comic border border-comic-border/20 shadow-comic">
          <h3 className="font-heading font-bold text-2xl text-comic-text flex items-center gap-2">
            <Code2 className="w-6 h-6 text-primary" /> Fondasi kebersamaan
          </h3>
          <p className="font-body text-comic-text/85 text-base leading-relaxed">
            <strong>Proxy Typescript</strong> bukan perusahaan dan bukan sekadar nama kelompok. Proxy adalah tempat kami bertemu, bertukar cerita, mengerjakan tantangan, dan menemukan versi diri yang lebih berani untuk belajar teknologi.
          </p>
          <p className="font-body text-comic-text/85 text-base leading-relaxed">
            Bersama <strong>1 PJK Kami</strong>, <strong>1 Ketua Proxy</strong>, dan <strong>10 anggota inti</strong>, kami membangun kebiasaan kolaborasi yang hangat: diskusi yang hidup, kerja kelompok yang kompak, dan kenangan yang terus bertambah.
          </p>
        </div>

        {/* Stats Column */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
          {stats.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="bg-surface p-5 rounded-comic border-comic border-comic-border shadow-comic flex items-center gap-4 hover:shadow-comic-md hover:-translate-y-0.5 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center border-2 border-comic-border shrink-0">
                  <Icon className="w-7 h-7 text-comic-text" />
                </div>
                <div className="min-w-0">
                  <div className={`font-heading font-extrabold text-comic-text ${st.value === '∞' ? 'text-6xl leading-[0.8] tracking-[-0.08em] text-primary' : 'text-3xl leading-none'}`}>
                    {st.value}
                  </div>
                  <div className="mt-1 max-w-[18ch] font-body text-xs font-semibold leading-snug text-comic-muted">
                    {st.suffix}
                  </div>
                  <div className="mt-1 font-heading text-sm font-semibold leading-snug text-comic-muted">
                    {st.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Vision & Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {/* Visi */}
        <div className="bg-surface p-8 rounded-comic border-comic border-comic-border shadow-comic hover:shadow-comic-md transition-all relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/30 rounded-bl-[60px] -z-0"></div>
          <div className="relative z-10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center border-2 border-comic-border shadow-comic-sm">
              <Lightbulb className="w-6 h-6 text-comic-text" />
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-comic-text tracking-tight">
              Visi Proxy
            </h3>
            <p className="font-body text-comic-text/85 text-base leading-relaxed">
              Menjadi kelompok yang membuat proses belajar teknologi terasa lebih dekat, menyenangkan, dan berarti bagi setiap calon engineer di dalamnya.
            </p>
          </div>
        </div>

        {/* Misi */}
        <div className="bg-surface p-8 rounded-comic border-comic border-comic-border shadow-comic hover:shadow-comic-md transition-all relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-bl-[60px] -z-0"></div>
          <div className="relative z-10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center border-2 border-comic-border shadow-comic-sm">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-comic-text tracking-tight">
              Misi Proxy
            </h3>
            <ul className="font-body text-comic-text/85 text-sm sm:text-base space-y-2.5 list-disc list-inside">
              <li>Berani bertanya, berbagi ilmu, dan saling membantu saat menemui jalan buntu.</li>
              <li>Mengerjakan tantangan dan proyek kelompok dengan komunikasi yang terbuka.</li>
              <li>Mengubah setiap pertemuan menjadi pengalaman, pembelajaran, dan cerita baru.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-6">
        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-comic-text text-center tracking-[-0.03em]">
          Prinsip &amp; Nilai Utama
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="bg-surface p-6 rounded-comic border-comic border-comic-border shadow-comic text-center space-y-3 hover:shadow-comic-md transition-all transform hover:-translate-y-0.5"
              >
                <div className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center border-2 border-comic-border ${v.color}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="font-heading font-bold text-lg text-comic-text">{v.title}</h4>
                <p className="font-body text-comic-text/80 text-sm">{v.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
