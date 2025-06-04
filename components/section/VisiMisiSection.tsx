import React from 'react';

import { useLanguage } from '@/contexts/language-context';

import { Target, BookOpen } from 'lucide-react';
import CardWithIcon from '../ui/CardWithICon';

const VisiMisiSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-accent-900 mb-6 ${
              language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {t('vision.title')}
          </h2>
        </div>

        {/* Visi & Misi Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* visi */}
          <CardWithIcon
            title={t('visi.title')}
            content={<p>{t('vision.text')}</p>}
            icon={Target}
            language={language}
            gradientFrom="from-primary-50"
            gradientTo="to-primary-100"
            iconColor="text-primary-600"
          />

          {/* misi */}
          <CardWithIcon
            title={t('mission.title')}
            content={
              <ul className={`space-y-3 ${language === 'ar' ? 'text-right' : ''}`}>
                {[1, 2, 3, 4].map((i) => (
                  <li
                    key={i}
                    className={`flex items-start ${
                      language === 'ar' ? 'flex-row-reverse' : ''
                    }`}
                  >
                    <div
                      className={`w-2 h-2 bg-secondary-500 rounded-full mt-2 ${
                        language === 'ar' ? 'ml-3' : 'mr-3'
                      } flex-shrink-0`}
                    />
                    <span
                      className={`text-gray-700 ${
                        language === 'ar' ? 'font-arabic' : ''
                      }`}
                    >
                      {t(`mission.${i}`)}
                    </span>
                  </li>
                ))}
              </ul>
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
