export type MemberRole = 'mentor' | 'ketua' | 'anggota';

export interface Member {
  id: string;
  slug: string;
  name: string;
  role: MemberRole;
  roleTitle: string;
  birthDate: string;
  prodi: string;
  favoriteFood: string;
  motivationQuote: string;
  avatarUrl: string;
  audioUrl: string;
  audioTitle: string;
  cvUrl: string;
  pin: string; // 4-digit PIN for editing authentication
  tier: 1 | 2 | 3;
}

export interface GalleryItemData {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  caption: string;
  tiltDegree: number; // e.g., -4 to +4
}
