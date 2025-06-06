import React from 'react';
import { Link } from '@/i18n/navigation';
// import { getTranslations } from 'next-intl/server';
// import { getLocale } from 'next-intl/server';
import {
  BookOpen,
  Users,
  GraduationCap,
  ArrowRight,
  ChurchIcon as Mosque,
} from 'lucide-react';

const ProgramSection = () => {
  // used getTranslations if it's async components

  // const t = await getTranslations('HomePage');
  // const locale = await getLocale();
  // const isRTL = locale === 'ar';
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
            Program Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dua program utama yang menjadi fokus dalam pengembangan pendidikan Islam
            di Sulawesi Tengah
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-border group hover:-translate-y-1">
            <div className="p-6 text-center border-b border-border">
              <div className="mx-auto w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <Mosque className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-accent-800 text-xl font-bold">
                Pondok Pesantren Darul Hadits
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                (Putra - Putri) - Sibowi
              </p>
            </div>
            <div className="p-6 text-center">
              <p className="text-muted-foreground mb-6">
                Pendidikan Islam terpadu yang menggabungkan pembelajaran Al-Quran,
                Hadits, dan ilmu-ilmu keislaman dengan pendekatan modern.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-muted p-3 rounded-lg hover:bg-primary-50 transition-colors duration-200">
                  <BookOpen className="h-5 w-5 text-primary-500 mx-auto mb-2" />
                  <p className="text-sm font-medium text-accent-800">Tahfidz</p>
                </div>
                <div className="bg-muted p-3 rounded-lg hover:bg-secondary-50 transition-colors duration-200">
                  <GraduationCap className="h-5 w-5 text-secondary-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-accent-800">Takhossus</p>
                </div>
              </div>
              <Link
                href="/program/pondok-pesantren"
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-accent-800 hover:bg-accent-900 text-white font-medium rounded-lg transition-colors duration-200 group"
              >
                Selengkapnya
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          <div className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-border group hover:-translate-y-1">
            <div className="p-6 text-center border-b border-border">
              <div className="mx-auto w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-accent-800 text-xl font-bold">
                Komunitas Ta&apos;shil Ilmi
              </h3>
              <p className="text-sm text-muted-foreground mt-1">Palu</p>
            </div>
            <div className="p-6 text-center">
              <p className="text-muted-foreground mb-6">
                Program pembelajaran ilmu alat seperti Bahasa Arab, Ushul Fiqh, dan
                Ushul Tafsir untuk memperdalam pemahaman agama.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-muted p-3 rounded-lg hover:bg-primary-50 transition-colors duration-200">
                  <BookOpen className="h-5 w-5 text-primary-500 mx-auto mb-2" />
                  <p className="text-sm font-medium text-accent-800">Bahasa Arab</p>
                </div>
                <div className="bg-muted p-3 rounded-lg hover:bg-secondary-50 transition-colors duration-200">
                  <GraduationCap className="h-5 w-5 text-secondary-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-accent-800">Ushul Fiqh</p>
                </div>
              </div>
              <Link
                href="/program/komunitas-tashil"
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-accent-800 hover:bg-accent-900 text-white font-medium rounded-lg transition-colors duration-200 group"
              >
                Selengkapnya
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
