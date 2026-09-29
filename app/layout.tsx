import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter, Caveat } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Proxy Typescript — Profil Resmi Tim Rekayasa Perangkat Lunak',
  description:
    'Profil resmi Proxy Typescript. Kolektif 12 talenta teknologi (1 Mentor, 1 Ketua Proxy, 10 Anggota) yang berfokus pada inovasi, arsitektur sistem modern, dan pengembangan digital berkualitas.',
  keywords: ['Proxy Typescript', 'Typescript', 'Software Engineering', 'Team Profile', 'Tech Proxy'],
  openGraph: {
    title: 'Proxy Typescript — Official Team Profile',
    description: 'Belajar, Berkarya, Bertumbuh Bersama',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakarta.variable} ${inter.variable} ${caveat.variable}`}>
      <body className="antialiased min-h-screen flex flex-col text-comic-text selection:bg-secondary">
        {children}
      </body>
    </html>
  );
}
