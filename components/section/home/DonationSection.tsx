import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import CardDonation from '@/components/ui/CardDonation';

const DonationSection = () => {
  const t = useTranslations('HomePage');
  const language = useLocale();

  return (
    <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* title section  */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl lg:text-4xl font-bold text-accent-900 mb-6 `}>
            {t('donation-section.title')}
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto `}>
            {t('donation-section.subTitle')}
          </p>
        </div>

        {/* donations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CardDonation
            progress={t('donation-section.donation-1.progress')}
            isRtl={language === 'ar'}
            title={t('donation-section.donation-1.name')}
            description={t('donation-section.donation-1.desc')}
            textTotal={t('donation-section.attributes.needed')}
            total={t('donation-section.donation-1.needed')}
            textButton={t('donation-section.attributes.action')}
          />
          <CardDonation
            progress={t('donation-section.donation-2.progress')}
            isRtl={language === 'ar'}
            title={t('donation-section.donation-2.name')}
            description={t('donation-section.donation-2.desc')}
            textTotal={t('donation-section.attributes.needed')}
            total={t('donation-section.donation-2.needed')}
            textButton={t('donation-section.attributes.action')}
          />
          <CardDonation
            progress={t('donation-section.donation-3.progress')}
            isRtl={language === 'ar'}
            title={t('donation-section.donation-3.name')}
            description={t('donation-section.donation-3.desc')}
            textTotal={t('donation-section.attributes.needed')}
            total={t('donation-section.donation-3.needed')}
            textButton={t('donation-section.attributes.action')}
          />
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
