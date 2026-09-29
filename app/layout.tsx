import type { Metadata } from 'next';
import { DM_Sans, Outfit, Caveat } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

const dmSans = DM_Sans({
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
  title: 'Proxy Typescript — About Us Kelompok Calon Engineer',
  description:
    'About us Proxy Typescript: kelompok 12 calon engineer yang belajar, berkarya, dan bertumbuh bersama dalam 1 PJK Proxy, 1 Ketua Proxy, dan 10 anggota inti.',
  keywords: ['Proxy Typescript', 'Typescript', 'Software Engineering', 'Team Profile', 'Tech Proxy'],
  openGraph: {
    title: 'Proxy Typescript — About Us',
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
    <html lang="id" className={`${outfit.variable} ${dmSans.variable} ${caveat.variable}`}>
      <body className="antialiased min-h-screen flex flex-col text-comic-text selection:bg-secondary">
        {children}
      </body>
    </html>
  );
}
