import { Activity, BookOpen, GraduationCap, Home, Users } from 'lucide-react';

export const PROGRAMS = [
  {
    title: 'Tahfidz Al-Quran',
    description:
      'Program hafalan Al-Quran dengan metode yang telah terbukti efektif',
    features: [
      'Target 30 Juz',
      'Metode Talaqqi',
      "Muraja'ah Rutin",
      'Sertifikat Resmi',
    ],
    icon: BookOpen,
    color: 'bg-primary-500',
  },
  {
    title: 'Takhossus Ilmu Agama',
    description: 'Pendalaman ilmu-ilmu keislaman dengan kurikulum yang komprehensif',
    features: [
      'Fiqh & Ushul Fiqh',
      'Hadits & Ulum Hadits',
      'Tafsir & Ulum Quran',
      'Bahasa Arab',
    ],
    icon: GraduationCap,
    color: 'bg-secondary-600',
  },
];

export const FACILITIES = [
  { name: 'Ruang Kelas', icon: BookOpen, color: 'bg-pink-500' },
  { name: 'Masjid', icon: Activity, color: 'bg-secondary-500' },
  { name: 'Perpustakaan', icon: Home, color: 'bg-accent-500' },
  { name: 'Asrama', icon: Users, color: 'bg-primary-500' },
];
