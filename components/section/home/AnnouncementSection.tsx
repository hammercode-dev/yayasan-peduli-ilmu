import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

import CardEvent from '@/components/ui/CardEvent';

const AnnouncementSection = () => {
  const t = useTranslations('HomePage');
  const language = useLocale();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* title section */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl lg:text-4xl font-bold text-accent-900 mb-6 `}>
            {t('announcement-section.title')}
          </h2>
        </div>
        {/* events */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CardEvent
            date={t('announcement-section.notice-1.date')}
            isRTL={language === 'ar'}
            title={t('announcement-section.notice-1.title')}
            shortDesc={t('announcement-section.notice-1.shortDesc')}
            href={``}
            textColor="primary"
            textLink={t('announcement-section.readmore')}
          />
          <CardEvent
            date={t('announcement-section.notice-2.date')}
            isRTL={language === 'ar'}
            title={t('announcement-section.notice-2.title')}
            shortDesc={t('announcement-section.notice-2.shortDesc')}
            href={``}
            textColor="primary"
            textLink={t('announcement-section.readmore')}
          />
          <CardEvent
            date={t('announcement-section.notice-3.date')}
            isRTL={language === 'ar'}
            title={t('announcement-section.notice-3.title')}
            shortDesc={t('announcement-section.notice-3.shortDesc')}
            href={``}
            textColor="primary"
            textLink={t('announcement-section.readmore')}
          />
        </div>
      </div>
    </section>
  );
};

export default AnnouncementSection;
