'use client';

import React from 'react';
import { Lightbulb, Rocket, ShieldCheck, Flame, Users, Calendar, Award, Code2 } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: 'Inklusif & Kolaboratif',
      description: 'Setiap anggota didorong untuk aktif berpendapat dan bertukar wawasan teknis secara terbuka.',
      icon: Users,
      color: 'bg-primary/20 text-primary',
    },
    {
      title: 'Standar Kode Presisi',
      description: 'Menjunjung arsitektur clean code, type safety yang ketat, serta automated testing teruji.',
      icon: ShieldCheck,
      color: 'bg-secondary/30 text-comic-text',
    },
    {
      title: 'Inovasi & Daya Cipta',
      description: 'Mengeksplorasi teknologi terdepan untuk menghadirkan solusi digital yang relevan dan bernilai.',
      icon: Flame,
      color: 'bg-accent/20 text-accent',
    },
  ];

  const stats = [
    { label: 'Talenta Terpilih', value: '12', icon: Users, suffix: 'Engineer' },
    { label: 'Tahun Terbentuk', value: '2024', icon: Calendar, suffix: 'Aktif' },
    { label: 'Proyek Selesai', value: '15+', icon: Award, suffix: 'Karya' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <div className="inline-block bg-accent/20 text-accent px-4 py-1 rounded-comic-pill border border-comic-border text-sm font-heading font-bold">
          Profil &amp; Eksplorasi
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-comic-text tracking-tight">
          Tentang Proxy Typescript
        </h2>
        <p className="font-body text-comic-muted text-base sm:text-lg max-w-2xl mx-auto">
          Unit rekayasa perangkat lunak yang berfokus pada kolaborasi intensif, penyusunan arsitektur sistem tangguh, dan pengembangan kapabilitas talenta digital.
        </p>
      </div>

      {/* Description & Story Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
        <div className="lg:col-span-7 space-y-5 bg-surface p-6 sm:p-8 rounded-comic border-comic border-comic-border shadow-comic">
          <h3 className="font-heading font-bold text-2xl text-comic-text flex items-center gap-2">
            <Code2 className="w-6 h-6 text-primary" /> Fondasi &amp; Visi Pengembangan
          </h3>
          <p className="font-body text-comic-text/85 text-base leading-relaxed">
            <strong>Proxy Typescript</strong> dibentuk sebagai unit kerja kolaboratif untuk mempercepat penguasaan teknologi modern. Kami percaya bahwa keandalan sistem berakar dari pondasi logika yang kokoh dan disiplin arsitektur yang konsisten.
          </p>
          <p className="font-body text-comic-text/85 text-base leading-relaxed">
            Dibimbing secara strategis oleh <strong>1 Lead Mentor</strong>, dipimpin secara adaptif oleh <strong>1 Ketua Proxy</strong>, dan diperkuat oleh <strong>10 Anggota Inti</strong> lintas keahlian rekayasa perangkat lunak, kami berkolaborasi memecahkan tantangan komputasi nyata.
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
                <div>
                  <div className="font-heading font-extrabold text-3xl text-comic-text">
                    {st.value} <span className="text-sm font-body text-comic-muted font-normal">({st.suffix})</span>
                  </div>
                  <div className="font-heading font-semibold text-sm text-comic-muted">
                    {st.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Vision & Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
              Menjadi tim rekayasa perangkat lunak unggulan yang melahirkan solusi digital berdaya guna tinggi, menerapkan standar industri terdepan, serta mencetak talenta engineer berkualifikasi profesional.
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
              <li>Menyelenggarakan asistensi dan review teknis berkala bersama mentor.</li>
              <li>Membangun serta merawat produk digital berbasis arsitektur terdistribusi.</li>
              <li>Menerapkan prinsip keamanan, maintainability, dan automated testing terintegrasi.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-6">
        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-comic-text text-center tracking-tight">
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
