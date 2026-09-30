# Proxy Typescript - Website Profil Kelompok Belajar 🚀

Website profil interaktif untuk kelompok belajar **Proxy Typescript**. Halaman ini menampilkan cerita perjalanan kelompok kami, galeri kenangan, dan profil 12 anggota yang terdiri dari PJK Kami, Ketua Proxy, serta 10 Anggota Inti.

---

## 👥 Struktur Anggota Kelompok

Kelompok kami beranggotakan 12 orang dengan susunan:
- 🌟 **PJK Kami**: Ayubi Fathan
- 👑 **Ketua Proxy**: Barlian Athallah Dyu
- 💻 **10 Anggota Inti**:
  1. Alviansyah Dewantara
  2. Caldero Loritz
  3. Diva Wynne Athaya Kumaladjati
  4. Fitri Aulia Rahmadhani
  5. M. Ridwan Assayidi Nasution
  6. Muhammad Baqir
  7. Muhammad Hanif Ihsan
  8. Nashtya Aqila Ramadhani
  9. Syakiirah Adinda Salsabila
  10. Syaikhul Akbar

> [!NOTE]
> Fitur edit profil pada kartu anggota dilindungi oleh 4-digit PIN rahasia milik masing-masing anggota.

---

## 🎨 Teknologi yang Digunakan

- [Next.js 14](https://nextjs.org/) (App Router & TypeScript)
- [Tailwind CSS](https://tailwindcss.com/) dengan tema Neo-Pop / Comic
- [Zustand](https://github.com/pmndrs/zustand) untuk pengaturan pemutar audio mini
- [Lucide React](https://lucide.dev/) untuk ikon
- `canvas-confetti` untuk animasi saat simpan profil
- `localStorage` & integrasi opsional ke [Supabase](https://supabase.com/)

---

## 📁 Struktur Folder Proyek

```text
app/                  Halaman utama, layout, dan halaman edit anggota
components/           Komponen Navbar, Hero, About, Galeri, Tim, dan Modal PIN
data/                 Data anggota (members.json) dan galeri (gallery.json)
hooks/                Hook audio dan lightbox galeri
lib/                  Penyimpanan data lokal / Supabase
public/               Aset avatar, audio, dan gambar
types/                Definisi tipe data TypeScript
```

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

1. **Install dependensi**:
   ```bash
   npm install
   ```

2. **Jalankan development server**:
   ```bash
   npm run dev
   ```

3. **Buka di browser**:
   Akses `http://localhost:3000` pada browser favorit Anda.

4. **Build untuk production**:
   ```bash
   npm run build
   npm start
   ```

---

## 🔒 Keamanan & Privasi

- PIN masing-masing anggota bersifat privat untuk mengamankan perubahan data profil.
- Jangan menyebarkan kode PIN di repositori publik atau berkas dokumentasi.
