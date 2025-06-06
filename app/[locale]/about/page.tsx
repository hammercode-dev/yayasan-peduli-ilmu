'use client';

import Image from 'next/image';
import { Target, User, Mail, Phone, MapPin, Eye, CheckCircle } from 'lucide-react';
import { useLocale } from 'next-intl';

export default function About() {
  // const t = useTranslations('HomePage');
  const language = useLocale();

  const pengurus = [
    {
      name: 'Dr. H. Ahmad Syahid, M.Ag',
      position: 'Ketua Yayasan',
      description:
        'Doktor Ilmu Agama Islam, berpengalaman 20+ tahun dalam pendidikan Islam',
    },
    {
      name: 'Ustadz Muhammad Farid, Lc',
      position: 'Direktur Pondok Pesantren',
      description:
        'Lulusan Universitas Al-Azhar, spesialis dalam bidang Hadits dan Tafsir',
    },
    {
      name: 'Ustadzah Siti Aisyah, M.Pd.I',
      position: 'Koordinator Program Putri',
      description:
        'Magister Pendidikan Islam, fokus pada pengembangan pendidikan perempuan',
    },
    {
      name: 'H. Baharuddin, S.E',
      position: 'Bendahara',
      description:
        'Sarjana Ekonomi, berpengalaman dalam manajemen keuangan organisasi',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-400 text-primary-foreground py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Tentang Kami
          </h1>

          {/* Decorative underline */}
          <div className="mx-auto mb-8 w-20 h-1 rounded bg-primary-600"></div>

          <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-xl mx-auto leading-relaxed">
            Mengenal lebih dekat Yayasan Peduli Ilmu dan komitmen kami dalam
            membangun generasi Qur&apos;ani
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <span className="text-sm uppercase tracking-wider text-brand-gold font-semibold mb-2 block">
                Tentang Kami
              </span>
              <h2 className="text-4xl font-extrabold text-accent-800 mb-6 leading-snug">
                Yayasan Peduli Ilmu Sulawesi Tengah
              </h2>
              <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
                <p>
                  Yayasan Peduli Ilmu Sulawesi Tengah didirikan dengan visi mulia
                  untuk mengembangkan pendidikan Islam yang berkualitas di wilayah
                  Sulawesi Tengah. Kami berkomitmen untuk mencetak generasi yang
                  tidak hanya cerdas secara intelektual, tetapi juga memiliki akhlak
                  yang mulia.
                </p>
                <p>
                  Sejak berdiri, yayasan ini telah menjalankan berbagai program
                  pendidikan dan dakwah yang berdampak positif bagi masyarakat.
                  Dengan dukungan para donatur dan relawan yang peduli, kami terus
                  berupaya memberikan kontribusi terbaik untuk kemajuan pendidikan
                  Islam di Indonesia.
                </p>
                <p>
                  Program-program kami dirancang untuk memenuhi kebutuhan pendidikan
                  Islam yang komprehensif, mulai dari pendidikan formal di pondok
                  pesantren hingga program pembelajaran komunitas yang terbuka untuk
                  masyarakat umum.
                </p>
              </div>
            </div>

            {/* Image Card */}
            <div className="flex justify-center md:order-first">
              <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                <div className="overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-300 ease-out">
                  <Image
                    src="/logo.png"
                    alt="Logo Yayasan"
                    width={320}
                    height={320}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Visi */}
            <div className="bg-white rounded-2xl shadow-md ring-1 ring-gray-200 transition hover:shadow-xl">
              <div className="flex items-center gap-3 px-6 pt-6">
                <div className="flex items-center justify-center rounded-full bg-primary-100 p-2">
                  <Eye className="h-5 w-5 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-accent-800">Visi</h3>
              </div>
              <div className="px-6 py-5">
                <p className="text-muted-foreground leading-relaxed text-base">
                  Menjadi lembaga pendidikan Islam yang unggul dalam mencetak
                  generasi yang berilmu, berakhlak mulia, dan mampu berkontribusi
                  positif bagi kemajuan umat dan bangsa.
                </p>
              </div>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-2xl shadow-md ring-1 ring-gray-200 transition hover:shadow-xl">
              <div className="flex items-center gap-3 px-6 pt-6">
                <div className="flex items-center justify-center rounded-full bg-secondary-100 p-2">
                  <Target className="h-5 w-5 text-secondary-600" />
                </div>
                <h3 className="text-xl font-semibold text-accent-800">Misi</h3>
              </div>
              <div className="px-6 py-5 space-y-4">
                {[
                  'Menyelenggarakan pendidikan Islam yang berkualitas dan terpadu',
                  'Mengembangkan dakwah Islam yang moderat dan rahmatan lil alamiin',
                  'Memberdayakan masyarakat melalui program-program sosial dan ekonomi',
                  'Membangun jaringan kerjasama dengan berbagai pihak untuk kemajuan pendidikan',
                  'Melestarikan nilai-nilai Islam dalam kehidupan bermasyarakat',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-muted/40 p-4 rounded-lg border  hover:shadow transition-shadow"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-primary-600" />
                    </div>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
              Pengurus Yayasan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tim pengurus yang berpengalaman dan berkomitmen dalam mengembangkan
              pendidikan Islam
            </p>
            <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pengurus.map((person, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-b text-center group flex flex-col"
              >
                <div className="flex flex-col flex-1 p-6 border-b">
                  {/* Avatar */}
                  <div className="mx-auto w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                    <User className="h-10 w-10 text-white" />
                  </div>

                  {/* Name */}
                  <h3 className="text-accent-800 text-lg font-bold">
                    {person.name}
                  </h3>

                  {/* Spacer to push position to bottom */}
                  <div className="flex-1" />

                  {/* Position */}
                  <span className="inline-block mt-2 px-3 py-1 bg-secondary-100 text-secondary-800 text-sm font-medium rounded-full">
                    {person.position}
                  </span>
                </div>

                {/* Description */}
                <div className="p-6 mt-auto">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {person.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl lg:text-4xl font-bold text-accent-900 mb-6 ${
                language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              Informasi Kontak
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-primary-600" />
              </div>
              <h3
                className={`text-xl font-bold text-accent-900 mb-4 ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}
              >
                Alamat
              </h3>
              <p
                className={`text-gray-600 ${language === 'ar' ? 'font-arabic' : ''}`}
              >
                Jl. Contoh Alamat No. 123
                <br />
                Palu, Sulawesi Tengah 94111
                <br />
                Indonesia
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-secondary-600" />
              </div>
              <h3
                className={`text-xl font-bold text-accent-900 mb-4 ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}
              >
                Telepon
              </h3>
              <p
                className={`text-gray-600 ${language === 'ar' ? 'font-arabic' : ''}`}
              >
                +62 451 123456
                <br />
                +62 812 3456 7890
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-accent-600" />
              </div>
              <h3
                className={`text-xl font-bold text-accent-900 mb-4 ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}
              >
                Email
              </h3>
              <p
                className={`text-gray-600 ${language === 'ar' ? 'font-arabic' : ''}`}
              >
                info@yayasanpeduliilmu.org
                <br />
                admin@yayasanpeduliilmu.org
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
