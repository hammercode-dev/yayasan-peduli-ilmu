'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'id' | 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  id: {
    // Navigation
    'nav.home': 'Beranda',
    'nav.program': 'Program',
    'nav.about': 'Tentang',
    'nav.reports': 'Laporan',
    'nav.publications': 'Publikasi',
    'nav.contact': 'Kontak',
    'nav.pondok': 'Pondok Pesantren Darul Hadits',
    'nav.komunitas': "Komunitas Ta'shil Ilmi (Palu)",
    'nav.tulisan': 'Tulisan',
    'nav.buku': 'Buku / Risalah',

    // Hero Section
    'hero.title': 'Yayasan Peduli Ilmu',
    'hero.subtitle': "Membangun Generasi Qur'ani Berakhlak Mulia",
    'hero.description':
      'Yayasan yang berkomitmen dalam pengembangan pendidikan Islam dan pemberdayaan masyarakat melalui program-program berkualitas.',
    'hero.cta.primary': 'Bergabung Sekarang',
    'hero.cta.secondary': 'Pelajari Lebih Lanjut',

    // Vision & Mission
    'vision.title': 'Visi & Misi',
    'vision.text':
      "Menjadi lembaga pendidikan Islam terdepan dalam mencetak generasi Qur'ani yang berakhlak mulia dan bermanfaat bagi umat.",
    'visi.title': 'Visi',
    'mission.title': 'Misi',
    'mission.1': 'Menyelenggarakan pendidikan Islam berkualitas',
    'mission.2': "Mengembangkan program tahfidz Al-Qur'an",
    'mission.3': 'Memberdayakan masyarakat melalui pendidikan',
    'mission.4': 'Membangun karakter islami yang kuat',

    // Programs
    'programs.title': 'Program Unggulan',
    'programs.pondok.title': 'Pondok Pesantren Darul Hadits',
    'programs.pondok.desc':
      'Program pendidikan Islam terpadu untuk putra dan putri dengan fokus pada tahfidz dan takhossus.',
    'programs.komunitas.title': "Komunitas Ta'shil Ilmi",
    'programs.komunitas.desc':
      'Program pembelajaran ilmu alat meliputi bahasa Arab, Ushul Fiqh, dan Ushul Tafsir.',

    // Announcements
    'announcements.title': 'Pengumuman Terbaru',
    'announcements.date': 'Tanggal',
    'announcements.readmore': 'Baca Selengkapnya',

    // Donations
    'donations.title': "Ta'awun (Donasi Terbuka)",
    'donations.subtitle':
      'Mari berpartisipasi dalam pembangunan fasilitas pendidikan',
    'donations.needed': 'Kebutuhan',
    'donations.progress': 'Progress',
    'donations.donate': 'Donasi Sekarang',

    // Footer
    'footer.about': 'Tentang Kami',
    'footer.programs': 'Program',
    'footer.contact': 'Kontak',
    'footer.follow': 'Ikuti Kami',
    'footer.rights': 'Hak Cipta Dilindungi',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.program': 'البرامج',
    'nav.about': 'عن المؤسسة',
    'nav.reports': 'التقارير',
    'nav.publications': 'المنشورات',
    'nav.contact': 'اتصل بنا',
    'nav.pondok': 'معهد دار الحديث',
    'nav.komunitas': 'جماعة تسهيل العلمي',
    'nav.tulisan': 'المقالات',
    'nav.buku': 'الكتب والرسائل',

    // Hero Section
    'hero.title': 'مؤسسة عناية العلوم',
    'hero.subtitle': 'بناء جيل قرآني ذو أخلاق كريمة',
    'hero.description':
      'مؤسسة ملتزمة بتطوير التعليم الإسلامي وتمكين المجتمع من خلال برامج عالية الجودة.',
    'hero.cta.primary': 'انضم الآن',
    'hero.cta.secondary': 'اعرف المزيد',

    // Vision & Mission
    'vision.title': 'الرؤية والرسالة',
    'vision.text':
      'أن نكون مؤسسة تعليمية إسلامية رائدة في إعداد جيل قرآني ذو أخلاق كريمة ونافع للأمة.',
    'visi.title': 'رؤية',
    'mission.title': 'الرسالة',
    'mission.1': 'تقديم تعليم إسلامي عالي الجودة',
    'mission.2': 'تطوير برامج تحفيظ القرآن الكريم',
    'mission.3': 'تمكين المجتمع من خلال التعليم',
    'mission.4': 'بناء شخصية إسلامية قوية',

    // Programs
    'programs.title': 'البرامج المتميزة',
    'programs.pondok.title': 'معهد دار الحديث',
    'programs.pondok.desc':
      'برنامج التعليم الإسلامي المتكامل للبنين والبنات مع التركيز على التحفيظ والتخصص.',
    'programs.komunitas.title': 'جماعة تسهيل العلمي',
    'programs.komunitas.desc':
      'برنامج تعلم علوم الآلة يشمل اللغة العربية وأصول الفقه وأصول التفسير.',

    // Announcements
    'announcements.title': 'آخر الإعلانات',
    'announcements.date': 'التاريخ',
    'announcements.readmore': 'اقرأ المزيد',

    // Donations
    'donations.title': 'التعاون (التبرعات المفتوحة)',
    'donations.subtitle': 'لنشارك في بناء المرافق التعليمية',
    'donations.needed': 'الحاجة',
    'donations.progress': 'التقدم',
    'donations.donate': 'تبرع الآن',

    // Footer
    'footer.about': 'عن المؤسسة',
    'footer.programs': 'البرامج',
    'footer.contact': 'اتصل بنا',
    'footer.follow': 'تابعنا',
    'footer.rights': 'جميع الحقوق محفوظة',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.program': 'Programs',
    'nav.about': 'About',
    'nav.reports': 'Reports',
    'nav.publications': 'Publications',
    'nav.contact': 'Contact',
    'nav.pondok': 'Darul Hadits Islamic Boarding School',
    'nav.komunitas': "Ta'shil Ilmi Community (Palu)",
    'nav.tulisan': 'Articles',
    'nav.buku': 'Books / Treatises',

    // Hero Section
    'hero.title': 'Yayasan Peduli Ilmu',
    'hero.subtitle': 'Building a Quranic Generation with Noble Character',
    'hero.description':
      'A foundation committed to developing Islamic education and community empowerment through quality programs.',
    'hero.cta.primary': 'Join Now',
    'hero.cta.secondary': 'Learn More',

    // Vision & Mission
    'vision.title': 'Vision & Mission',
    'vision.text':
      'To become a leading Islamic educational institution in producing a Quranic generation with noble character and beneficial to the ummah.',
    'visi.title': 'Vision',
    'mission.title': 'Mission',
    'mission.1': 'Provide quality Islamic education',
    'mission.2': 'Develop Quran memorization programs',
    'mission.3': 'Empower communities through education',
    'mission.4': 'Build strong Islamic character',

    // Programs
    'programs.title': 'Featured Programs',
    'programs.pondok.title': 'Darul Hadits Islamic Boarding School',
    'programs.pondok.desc':
      'Integrated Islamic education program for boys and girls focusing on memorization and specialization.',
    'programs.komunitas.title': "Ta'shil Ilmi Community",
    'programs.komunitas.desc':
      'Learning program for instrumental sciences including Arabic, Usul Fiqh, and Usul Tafsir.',

    // Announcements
    'announcements.title': 'Latest Announcements',
    'announcements.date': 'Date',
    'announcements.readmore': 'Read More',

    // Donations
    'donations.title': "Ta'awun (Open Donations)",
    'donations.subtitle': "Let's participate in building educational facilities",
    'donations.needed': 'Needed',
    'donations.progress': 'Progress',
    'donations.donate': 'Donate Now',

    // Footer
    'footer.about': 'About Us',
    'footer.programs': 'Programs',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow Us',
    'footer.rights': 'All Rights Reserved',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)[typeof language]] ||
      key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
