import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { Button } from '../../ui/Button';

const HeroBannerWithImage = () => {
  const t = useTranslations('HomePage');
  const language = useLocale();

  const isRTL = language === 'ar';

  const textAlignment = isRTL ? 'text-right' : 'text-left';
  const buttonDirection = isRTL ? 'flex-row-reverse' : 'flex-row';

  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* TEXT SECTION */}
          <div className={`${isRTL ? 'lg:order-2' : 'lg:order-1'} `}>
            <h1
              className={`text-4xl lg:text-6xl font-bold text-accent-900 mb-6 ${textAlignment}`}
            >
              {t('hero-section.title')}
            </h1>
            <h2
              className={`text-xl lg:text-2xl text-secondary-600 font-semibold mb-6 ${textAlignment}`}
            >
              {t('hero-section.subtitle')}
            </h2>
            <p
              className={`text-lg text-gray-600 mb-8 leading-relaxed ${textAlignment}`}
            >
              {t('hero-section.description')}
            </p>
            <div className={`flex ${buttonDirection} gap-4`}>
              <Button variant="primary" size={'lg'} href="/program/pondok-pesantren">
                {t('hero-section.cta.primary')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button variant="secondary" size={'lg'} href="/tentang">
                {t('hero-section.cta.secondary')}
              </Button>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className={`${isRTL ? 'lg:order-1' : 'lg:order-2'} relative`}>
            <div className="relative z-10">
              <Image
                src="/logo.png"
                alt="Islamic Education"
                width={600}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBannerWithImage;
