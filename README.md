# Typescript - Cartoon Coding Community Profile

Website profil untuk komunitas coding Typescript di Indonesia. Halaman utama menampilkan cerita komunitas, galeri kenangan, serta profil 12 anggota dalam tiga tingkat: mentor, ketua, dan anggota inti.

## Tech Stack

- [Next.js 14](https://nextjs.org/) dengan App Router dan TypeScript strict mode
- [Tailwind CSS](https://tailwindcss.com/) dengan gaya Neo-Pop / comic
- [Zustand](https://github.com/pmndrs/zustand) untuk mengatur pemutaran audio
- `localStorage` dengan integrasi opsional ke [Supabase](https://supabase.com/)
- [Lucide React](https://lucide.dev/) untuk ikon
- `canvas-confetti` untuk micro-interaction

## Struktur Proyek

```text
app/                  Halaman utama, metadata, dan halaman editor anggota
components/           Navbar, hero, galeri, tim, audio player, dan form
data/                 Data anggota dan galeri dalam format JSON
hooks/                Hook audio dan lightbox
lib/                  Penyimpanan, Supabase client, dan utility
public/avatars/       Aset avatar anggota
store/                Zustand audio store
types/                Definisi tipe TypeScript
```

## Menjalankan Proyek

Pasang dependensi:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

Untuk memeriksa build production:

```bash
npm run build
npm start
```

## Konfigurasi Supabase (Opsional)

Untuk menyinkronkan perubahan profil ke Supabase:

1. Buat tabel `members` dengan field yang sesuai dengan `types/index.ts`.
2. Tambahkan variabel berikut ke `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Tanpa konfigurasi tersebut, aplikasi menggunakan `localStorage` di browser.

## Aksesibilitas

- Dukungan keyboard untuk menutup modal dan berpindah foto di galeri.
- Focus ring yang terlihat pada elemen interaktif.
- Label pembaca layar pada tombol ikon.
