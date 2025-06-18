import React from 'react';
import { useTranslations } from 'next-intl';
import { ACHIEVEMENT_INDICATORS } from '@/constants/komunitas';

export default function AchievementIndicators() {
  const t = useTranslations('KomunitasPage');

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
            {t('achievement-section.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ACHIEVEMENT_INDICATORS.map((ach, index) => {
            const IconComponent = ach.icon;
            const bgColor = ach.color;
            return (
              <div
                key={index}
                className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-border text-center group hover:-translate-y-1"
              >
                <div className="p-6">
                  <div
                    className={`mx-auto w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-20`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-accent-800 font-bold text-lg">
                    {t(`achievement-section.${ach.title}`)}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
