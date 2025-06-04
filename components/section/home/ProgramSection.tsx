import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { BookOpen, Users } from 'lucide-react';

import { CardFeature } from '@/components/ui/CardFeature';

const ProgramSection = () => {
  const t = useTranslations('HomePage');
  const language = useLocale();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* title section */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl lg:text-4xl font-bold text-accent-900 mb-6 `}>
            {t('program-section.title')}
          </h2>
        </div>

        {/* programs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CardFeature
            icon={BookOpen}
            title={t('program-section.cottage.title')}
            description={t('program-section.cottage.desc')}
            href="/program/pondok-pesantren"
            gradient="bg-gradient-to-br from-primary-400 to-primary-600"
            textColor="text-primary-600"
            textLink={t('hero-section.cta.primary')}
            isRTL={language === 'ar'}
          />
          <CardFeature
            icon={Users}
            title={t('program-section.community.title')}
            description={t('program-section.community.desc')}
            href="/program/komunitas"
            gradient="bg-gradient-to-br from-secondary-400 to-secondary-600"
            textColor="text-secondary-600"
            textLink={t('hero-section.cta.secondary')}
            isRTL={language === 'ar'}
          />
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
