import React from 'react';

import { Eye, Target, CheckCircle } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { MISSIONS } from '@/constants/about';

export default function VisiMisiSection() {
  const t = useTranslations('AboutPage');
  const locale = useLocale();

  const isRTL = locale === 'ar';

  return (
    <section className="py-20 bg-gray-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
            {t('visimisi-section.title')}
          </h2>
          <p>{/* desc if ny*/}</p>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
        </div>

        {/* Visi & Misi */}
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
                {t('visimisi-section.visi')}
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
              {MISSIONS.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-muted/40 p-4 rounded-lg border  hover:shadow transition-shadow"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-primary-600" />
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {t(`visimisi-section.misions.${item}`, { default: item })}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
