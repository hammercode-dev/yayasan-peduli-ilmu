import {
  BookOpen,
  GraduationCap,
  Users,
  ChurchIcon as Mosque,
  LucideIcon,
} from 'lucide-react';

import { Features } from './types';

type ProgramCardDataProps = {
  id: string;
  href: string;
  icon: LucideIcon;
  iconBg: string;
  location: string;
  features: Features[];
};

export const PROGRAM_CARD_DATA: ProgramCardDataProps[] = [
  {
    id: 'cottage',
    href: '/program/pondok-pesantren',
    icon: Mosque,
    iconBg: 'bg-primary-500',
    location: '(Putra - Putri) - Sibowi',
    features: [
      { label: 'Tahfidz', icon: BookOpen, iconClass: 'text-primary-500' },
      { label: 'Takhossus', icon: GraduationCap, iconClass: 'text-secondary-600' },
    ],
  },
  {
    id: 'community',
    href: '/program/komunitas-tashil',
    icon: Users,
    iconBg: 'bg-secondary-600',
    location: 'Palu',
    features: [
      { label: 'Bahasa Arab', icon: BookOpen, iconClass: 'text-primary-500' },
      { label: 'Ushul Fiqh', icon: GraduationCap, iconClass: 'text-secondary-600' },
    ],
  },
];

type AnnouncementsProps = {
  id: number;
  title: string;
  date: string;
  category: string;
  content: string;
  urgent: boolean;
};

export const ANNOUNCEMENTS: AnnouncementsProps[] = [
  {
    id: 1,
    title: 'Pendaftaran Santri Baru Tahun 2024/2025',
    date: '15 Januari 2024',
    category: 'Pendaftaran',
    content:
      'Dibuka pendaftaran santri baru untuk Pondok Pesantren Darul Hadits. Kuota terbatas untuk putra dan putri.',
    urgent: true,
  },
  {
    id: 2,
    title: "Kajian Rutin Komunitas Ta'shil Ilmi",
    date: '10 Januari 2024',
    category: 'Kajian',
    content:
      'Kajian rutin setiap hari Sabtu pukul 08.00 WITA di Masjid Al-Ikhlas Palu.',
    urgent: false,
  },
  {
    id: 3,
    title: 'Program Bantuan Beasiswa Yatim',
    date: '5 Januari 2024',
    category: 'Beasiswa',
    content:
      'Tersedia bantuan beasiswa untuk anak yatim yang ingin menuntut ilmu di pondok pesantren.',
    urgent: false,
  },
];
