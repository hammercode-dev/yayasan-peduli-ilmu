export const BOOKS = [
  {
    id: 1,
    title: 'Panduan Praktis Menghafal Al-Quran',
    author: 'Ustadz Muhammad Farid, Lc',
    category: 'Tahfidz',
    year: '2024',
    pages: 156,
    description:
      'Buku panduan lengkap untuk memulai dan mempertahankan hafalan Al-Quran dengan metode yang telah terbukti efektif di Pondok Pesantren Darul Hadits.',
    rating: 4.8,
    downloads: 2450,
    language: 'Bahasa Indonesia',
    format: 'PDF',
    size: '2.5 MB',
  },
  {
    id: 2,
    title: 'Kaidah-Kaidah Ushul Fiqh untuk Pemula',
    author: 'Dr. H. Ahmad Syahid, M.Ag',
    category: 'Ushul Fiqh',
    year: '2023',
    pages: 234,
    description:
      'Penjelasan sistematis tentang kaidah-kaidah ushul fiqh yang disajikan dengan bahasa yang mudah dipahami untuk pemula yang ingin mempelajari metodologi hukum Islam.',
    rating: 4.9,
    downloads: 1890,
    language: 'Bahasa Indonesia',
    format: 'PDF',
    size: '3.2 MB',
  },
  {
    id: 3,
    title: 'Pembelajaran Bahasa Arab Metode Praktis',
    author: 'Ustadzah Siti Aisyah, M.Pd.I',
    category: 'Bahasa Arab',
    year: '2024',
    pages: 189,
    description:
      'Metode pembelajaran bahasa Arab yang praktis dan aplikatif, dilengkapi dengan latihan-latihan yang dapat membantu penguasaan bahasa Arab dengan cepat.',
    rating: 4.7,
    downloads: 3120,
    language: 'Bahasa Indonesia & Arab',
    format: 'PDF',
    size: '4.1 MB',
  },
  {
    id: 4,
    title: 'Tafsir Ayat-Ayat Pendidikan dalam Al-Quran',
    author: 'Ustadz Abdullah Rahman, S.Ag',
    category: 'Tafsir',
    year: '2023',
    pages: 298,
    description:
      'Kajian mendalam tentang ayat-ayat Al-Quran yang berkaitan dengan pendidikan, disertai dengan implementasi praktis dalam kehidupan sehari-hari.',
    rating: 4.6,
    downloads: 1650,
    language: 'Bahasa Indonesia',
    format: 'PDF',
    size: '5.8 MB',
  },
  {
    id: 5,
    title: 'Adab dan Akhlak dalam Islam',
    author: 'Ustadz Muhammad Farid, Lc',
    category: 'Akhlak',
    year: '2024',
    pages: 167,
    description:
      'Pembahasan komprehensif tentang adab dan akhlak dalam Islam berdasarkan Al-Quran dan As-Sunnah, dengan contoh-contoh praktis dalam kehidupan modern.',
    rating: 4.8,
    downloads: 2780,
    language: 'Bahasa Indonesia',
    format: 'PDF',
    size: '2.9 MB',
  },
  {
    id: 6,
    title: 'Sejarah dan Perkembangan Pondok Pesantren',
    author: 'Dr. H. Ahmad Syahid, M.Ag',
    category: 'Sejarah',
    year: '2023',
    pages: 312,
    description:
      'Penelusuran sejarah dan perkembangan pondok pesantren di Indonesia, khususnya di Sulawesi Tengah, serta perannya dalam pendidikan Islam.',
    rating: 4.5,
    downloads: 1420,
    language: 'Bahasa Indonesia',
    format: 'PDF',
    size: '6.2 MB',
  },
];

export const CATEGORIES = [
  'Semua',
  'Tahfidz',
  'Ushul Fiqh',
  'Bahasa Arab',
  'Tafsir',
  'Akhlak',
  'Sejarah',
];

export const getCategoryColor = (category: string) => {
  const colors = {
    Tahfidz: 'bg-primary-500 text-white',
    'Ushul Fiqh': 'bg-secondary-600 text-white',
    'Bahasa Arab': 'bg-accent-800 text-white',
    Tafsir: 'bg-green-600 text-white',
    Akhlak: 'bg-purple-600 text-white',
    Sejarah: 'bg-orange-600 text-white',
  };
  return colors[category as keyof typeof colors] || 'bg-gray-500 text-white';
};
