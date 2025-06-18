import { BookOpen, GraduationCap, Users } from 'lucide-react';

export const MISSIONS = ['misi-1', 'misi-2', 'misi-3'];

export const ACHIEVEMENT_INDICATORS = [
  {
    title: 'ach-1',
    icon: BookOpen,
    color: 'bg-primary-600',
  },
  {
    title: 'ach-2',
    icon: GraduationCap,
    color: 'bg-secondary-600',
  },
  {
    title: 'ach-3',
    icon: Users,
    color: 'bg-accent-600',
  },
];

type DataScheduleProps = {
  day: string;
  program: string;
  time: string;
  color: string;
};

export const SCHEDULE_DATA: Record<string, DataScheduleProps[]> = {
  id: [
    {
      day: 'Kamis',
      program: 'Topik akan diumumkan saat pertemuan',
      time: `Ba'da Isha WITA`,
      color: 'text-secondary-600',
    },
    {
      day: 'Sabtu',
      program: 'Topik akan diumumkan saat pertemuan',
      time: `Ba'da Dhuhur WITA`,
      color: 'text-accent-800',
    },
    {
      day: 'Ahad',
      program: 'Topik akan diumumkan saat pertemuan',
      time: `Ba'da Isha WITA`,
      color: 'text-primary-500',
    },
  ],
  en: [
    {
      day: 'Thursday',
      program: 'Topic will be announced during the session',
      time: `After Isha WITA`,
      color: 'text-secondary-600',
    },
    {
      day: 'Saturday',
      program: 'Topic will be announced during the session',
      time: `After Dhuhr WITA`,
      color: 'text-accent-800',
    },
    {
      day: 'Sunday',
      program: 'Topic will be announced during the session',
      time: `After Isha WITA`,
      color: 'text-primary-500',
    },
  ],
  ar: [
    {
      day: 'الخميس',
      program: 'سيتم الإعلان عن الموضوع أثناء اللقاء',
      time: `بعد العشاء بتوقيت وسط إندونيسيا`,
      color: 'text-secondary-600',
    },
    {
      day: 'السبت',
      program: 'سيتم الإعلان عن الموضوع أثناء اللقاء',
      time: `بعد الظهر بتوقيت وسط إندونيسيا`,
      color: 'text-accent-800',
    },
    {
      day: 'الأحد',
      program: 'سيتم الإعلان عن الموضوع أثناء اللقاء',
      time: `بعد العشاء بتوقيت وسط إندونيسيا`,
      color: 'text-primary-500',
    },
  ],
};

export const BOOKS = [
  {
    id: 'ajurrumiyah',
    color: 'bg-primary-500',
  },
  {
    id: 'mutammimah',
    color: 'bg-primary-600',
  },
  {
    id: 'lamiyah-afal',
    color: 'bg-secondary-500',
  },
  {
    id: 'miatul-maaani',
    color: 'bg-secondary-600',
  },
  {
    id: 'arabic-dictionary',
    color: 'bg-accent-600',
  },
  {
    id: 'al-waraqat',
    color: 'bg-green-600',
  },
  {
    id: 'qawaid-fiqhiyah',
    color: 'bg-green-700',
  },
  {
    id: 'al-baiquniyah',
    color: 'bg-purple-600',
  },
  {
    id: 'fushul-tafsir',
    color: 'bg-blue-600',
  },
  {
    id: 'taqdim-ilmi',
    color: 'bg-orange-600',
  },
];

export const CONTACTS = [
  {
    name: 'ctc-1.name',
    phone: '+62 5225 5756 96',
    link: 'https://wa.me/6285225575696',
  },
  {
    name: 'ctc-2.name',
    phone: '+62 82292 1344 42',
    link: 'https://wa.me/6282292134442',
  },
];
