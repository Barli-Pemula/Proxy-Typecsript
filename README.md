# Typescript — Cartoon Coding Community Profile Website 🚀

A modern, accessible, and playful company profile website built for **Typescript**—a 12-member coding community in Indonesia featuring a 3-tier hierarchical structure:
- 🌟 **Tier 1: 1 Lead Mentor** (Large card, Gold Badge, Border Glow)
- 👑 **Tier 2: 1 Ketua Proxy** (Medium card, Blue Badge)
- 💻 **Tier 3: 10 Anggota Inti** (Responsive 3-4 Column Grid, Gray Badges)

---

## 🎨 Tech Stack & Highlights

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/) + TypeScript in Strict Mode
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) customized with Neo-Pop / Comic aesthetic (2.5px solid strokes, solid comic drop-shadows, warm `#FFF9F0` cream canvas)
- **Typography**: Google Fonts via `next/font` (`Fredoka`, `Nunito`, `Caveat`)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) for single-audio-playback orchestration
- **Data Persistence**: `localStorage` with seamless [Supabase](https://supabase.com/) integration
- **Icons**: [Lucide React](https://lucide.dev/) configured with 2-2.5px doodle stroke weight
- **Micro-Interactions**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti), responsive polaroid tilts, shake animations on PIN failure

---

## 📁 Project Architecture

```
/typescript-web
├── /app
│   ├── globals.css          # Theme tokens, comic scrollbars & dot grids
│   ├── layout.tsx           # Google fonts & SEO metadata
│   ├── page.tsx             # Master page rendering all 5 sections
│   └── /edit/[slug]
│       └── page.tsx         # Standalone direct-link member editor
├── /components
│   ├── Navbar.tsx           # Sticky navigation with mobile sheet
│   ├── Hero.tsx             # Title, tagline & animated "Typey" cat mascot
│   ├── About.tsx            # Story, stats chips, vision & mission cards
│   ├── PhotoGallery.tsx     # Polaroid scrapbook grid & Masonry container
│   ├── GalleryItem.tsx      # Polaroid card with dynamic tilt & hover zoom
│   ├── Lightbox.tsx         # Accessible modal (Esc, arrow keys, focus trap)
│   ├── TeamSection.tsx      # 3-tier hierarchy container
│   ├── MemberCard.tsx       # Tier-specific cards with audio & CV actions
│   ├── AudioPlayer.tsx      # Mini audio player with equalizer visualizer
│   ├── PinModal.tsx         # 4-digit PIN authentication dialog
│   ├── EditForm.tsx         # Profile editor with confetti celebration
│   └── Footer.tsx           # Social links & copyright
├── /data
│   ├── members.json         # 12 member profiles (Mentor, Ketua, 10 Anggota)
│   └── gallery.json         # 10 polaroid memories with captions
├── /hooks
│   ├── useAudio.ts          # Custom audio control hook
│   └── useLightbox.ts       # Lightbox keyboard navigation hook
├── /lib
│   ├── storage.ts           # LocalStorage + Supabase sync layer
│   ├── supabase.ts          # Supabase client initializer
│   └── utils.ts             # Tailwind class merge helper
├── /public
│   ├── /avatars             # Vector cartoon avatars
│   ├── /gallery             # Polaroid gallery SVGs
│   └── /cv                  # ATS resume PDF placeholders
└── /store
    └── useAudioStore.ts     # Zustand audio singleton (strictly 1 song plays)
```

---

## ⚡ Quick Start & Installation

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 🔐 Member PINs (Demo Credentials)

| Role | Name | Default 4-Digit PIN |
| :--- | :--- | :--- |
| **Mentor** | Dr. Budi Prasetyo, M.Kom | `1234` |
| **Ketua** | Arya Pratama | `2024` |
| **Anggota 1** | Siti Rahma | `1111` |
| **Anggota 2** | Dimas Surya | `2222` |
| **Anggota 3** | Nabila Putri | `3333` |
| **Anggota 4** | Kevin Sanjaya | `4444` |
| **Anggota 5** | Farhan Maulana | `5555` |
| **Anggota 6** | Amanda Larasati | `6666` |
| **Anggota 7** | Rizky Ramadhan | `7777` |
| **Anggota 8** | Zahra Aurelia | `8888` |
| **Anggota 9** | Ilham Saputra | `9999` |
| **Anggota 10** | Gita Maharani | `1010` |

---

## ☁️ Supabase Setup (Optional)

To sync card edits to a remote Supabase database:
1. Create a table named `members` matching the fields in `types/index.ts`.
2. Add environment variables to `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```
If omitted, the platform automatically falls back to browser `localStorage`.

---

## ♿ Accessibility Features (WCAG 2.1 AA)

- High contrast text (`#2D2D2D` on `#FFF9F0` achieves a 13.8:1 AAA contrast ratio).
- Keyboard shortcuts: `Escape` closes modals, `ArrowLeft` / `ArrowRight` cycles through gallery photos.
- Focus rings: 2.5px solid borders + distinct yellow outline on focused interactive elements.
- Screen reader accessible `aria-label` tags on all icon-only buttons.
