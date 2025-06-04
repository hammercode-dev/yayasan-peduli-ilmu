import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

import { Target, BookOpen } from 'lucide-react';
import CardWithIcon from '@/components/ui/CardWithICon';

const VisiMisiSection = () => {
  const t = useTranslations('HomePage');
  const language = useLocale();

  const isRTL = language === 'ar';

  const missionKeys = ['mission-1', 'mission-2', 'mission-3', 'mission-4'];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl lg:text-4xl font-bold text-accent-900 mb-6`}>
            {t('visimisi-section.title')}
          </h2>
        </div>

        {/* Visi & Misi Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* visi */}
          <CardWithIcon
            title={t('visimisi-section.visi.title')}
            content={<p>{t('visimisi-section.visi.desc')}</p>}
            icon={Target}
            language={language}
            gradientFrom="from-primary-50"
            gradientTo="to-primary-100"
            iconColor="text-primary-600"
          />

          {/* misi */}
          <CardWithIcon
            title={t('visimisi-section.misi.title')}
            content={
              <section aria-labelledby="misi-title">
                <ul className={`space-y-3`}>
                  {missionKeys.map((n) => (
                    <li
                      key={n}
                      className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <div
                        className={`w-2 h-2 bg-secondary-500 rounded-full mt-2 ${isRTL ? 'ml-3' : 'mr-3'} flex-shrink-0`}
                      />
                      <span className={`text-gray-700`}>
                        {t(`visimisi-section.misi.${n}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            }
            icon={BookOpen}
            language={language}
            gradientFrom="from-secondary-50"
            gradientTo="to-secondary-100"
            iconColor="text-secondary-600"
          />
        </div>
      </div>
    </section>
  );
};

export default VisiMisiSection;
