import { BookOpen, GraduationCap } from 'lucide-react';

export const PROGRAMS = [
  {
    title: 'Bahasa Arab',
    level: 'Pemula - Mahir',
    description:
      'Pembelajaran bahasa Arab dari dasar hingga mahir dengan metode praktis',
    topics: ['Nahwu & Sharaf', "Muthala'ah", 'Muhadatsah', 'Kitabah'],
    schedule: 'Senin & Rabu, 19:30-21:00',
    icon: BookOpen,
    color: 'bg-primary-500',
  },
  {
    title: 'Ushul Fiqh',
    level: 'Menengah - Mahir',
    description: 'Mempelajari kaidah-kaidah dalam istinbath hukum Islam',
    topics: [
      "Qawa'id Fiqhiyyah",
      'Maqashid Syariah',
      'Istinbath Hukum',
      'Studi Kasus',
    ],
    schedule: 'Selasa & Kamis, 19:30-21:00',
    icon: GraduationCap,
    color: 'bg-secondary-600',
  },
  {
    title: 'Ushul Tafsir',
    level: 'Menengah - Mahir',
    description: 'Memahami metodologi penafsiran Al-Quran yang benar',
    topics: [
      'Ulumul Quran',
      'Manhaj Mufassirin',
      "Tafsir Maudhu'i",
      'Praktik Tafsir',
    ],
    schedule: 'Jumat, 19:30-21:00',
    icon: BookOpen,
    color: 'bg-accent-800',
  },
];

export const BENEFITS = [
  'Pembelajaran dengan metode yang mudah dipahami',
  "Materi dari kitab-kitab mu'tabarah",
  'Diskusi interaktif dan tanya jawab',
  'Sertifikat kelulusan untuk setiap tingkat',
  'Komunitas belajar yang solid',
  'Akses ke perpustakaan digital',
  'Bimbingan dari ustadz berpengalaman',
  'Fleksibilitas waktu belajar',
];

export const ACTIVITY_WEEK = [
  {
    day: 'Senin',
    program: 'Bahasa Arab (Pemula)',
    time: '19:30 - 21:00 WITA',
    color: 'text-primary-500',
  },
  {
    day: 'Selasa',
    program: 'Ushul Fiqh',
    time: '19:30 - 21:00 WITA',
    color: 'text-secondary-600',
  },
  {
    day: 'Rabu',
    program: 'Bahasa Arab (Lanjutan)',
    time: '19:30 - 21:00 WITA',
    color: 'text-primary-500',
  },
  {
    day: 'Kamis',
    program: 'Ushul Fiqh (Lanjutan)',
    time: '19:30 - 21:00 WITA',
    color: 'text-secondary-600',
  },
  {
    day: 'Jumat',
    program: 'Ushul Tafsir',
    time: '19:30 - 21:00 WITA',
    color: 'text-accent-800',
  },
];
