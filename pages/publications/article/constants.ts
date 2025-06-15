export const ARTICLES = [
  {
    id: 1,
    title: 'Pentingnya Menghafal Al-Quran di Era Modern',
    author: 'Ustadz Muhammad Farid, Lc',
    date: '15 Maret 2024',
    category: 'Pendidikan',
    excerpt:
      'Dalam era digital ini, menghafal Al-Quran tetap menjadi prioritas utama dalam pendidikan Islam. Artikel ini membahas strategi dan manfaat tahfidz...',
    views: 1250,
    readTime: '5 menit',
  },
  {
    id: 2,
    title: 'Metodologi Pembelajaran Bahasa Arab yang Efektif',
    author: 'Ustadzah Siti Aisyah, M.Pd.I',
    date: '10 Maret 2024',
    category: 'Bahasa Arab',
    excerpt:
      'Pembelajaran bahasa Arab memerlukan metode yang tepat agar dapat dikuasai dengan baik. Berikut adalah beberapa metodologi yang terbukti efektif...',
    views: 980,
    readTime: '7 menit',
  },
  {
    id: 3,
    title: 'Memahami Ushul Fiqh dalam Kehidupan Sehari-hari',
    author: 'Dr. H. Ahmad Syahid, M.Ag',
    date: '5 Maret 2024',
    category: 'Fiqh',
    excerpt:
      'Ushul Fiqh bukan hanya teori, tetapi dapat diaplikasikan dalam kehidupan sehari-hari. Mari kita pelajari bagaimana menerapkan kaidah-kaidah fiqh...',
    views: 1450,
    readTime: '8 menit',
  },
  {
    id: 4,
    title: 'Peran Pondok Pesantren dalam Pembangunan Karakter',
    author: 'Ustadz Abdullah Rahman, S.Ag',
    date: '28 Februari 2024',
    category: 'Pendidikan',
    excerpt:
      'Pondok pesantren memiliki peran strategis dalam membentuk karakter generasi muda. Sistem pendidikan pesantren yang holistik...',
    views: 1120,
    readTime: '6 menit',
  },
  {
    id: 5,
    title: 'Tafsir Kontemporer: Memahami Al-Quran di Zaman Now',
    author: 'Ustadz Muhammad Farid, Lc',
    date: '20 Februari 2024',
    category: 'Tafsir',
    excerpt:
      'Memahami Al-Quran dengan pendekatan kontemporer membantu kita mengaplikasikan nilai-nilai Qurani dalam kehidupan modern...',
    views: 890,
    readTime: '9 menit',
  },
  {
    id: 6,
    title: 'Dakwah di Era Digital: Peluang dan Tantangan',
    author: 'Dr. H. Ahmad Syahid, M.Ag',
    date: '15 Februari 2024',
    category: 'Dakwah',
    excerpt:
      'Era digital membuka peluang besar untuk dakwah, namun juga menghadirkan tantangan baru. Bagaimana strategi dakwah yang efektif...',
    views: 1350,
    readTime: '7 menit',
  },
];

export const CATEGORIES = [
  'Semua',
  'Pendidikan',
  'Bahasa Arab',
  'Fiqh',
  'Tafsir',
  'Dakwah',
];

export const getCategoryColor = (category: string) => {
  const colors = {
    Pendidikan: 'bg-primary-500 text-white',
    'Bahasa Arab': 'bg-secondary-600 text-white',
    Fiqh: 'bg-accent-800 text-white',
    Tafsir: 'bg-green-600 text-white',
    Dakwah: 'bg-purple-600 text-white',
  };
  return colors[category as keyof typeof colors] || 'bg-gray-500 text-white';
};