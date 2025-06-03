import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { useLanguage } from '@/contexts/language-context';
import { Button } from '../ui/Button';

const HeroBannerWithImage = () => {
  const { t, language } = useLanguage();

  const isRTL = language === 'ar';

  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* TEXT SECTION */}
          <div
            className={`
            ${isRTL ? 'lg:order-2 text-right' : 'lg:order-1 text-left'}
          `}
          >
            <h1
              className={`text-4xl lg:text-6xl font-bold text-accent-900 mb-6 ${
                isRTL ? 'font-arabic' : ''
              }`}
            >
              {t('hero.title')}
            </h1>
            <h2
              className={`text-xl lg:text-2xl text-secondary-600 font-semibold mb-6 ${
                isRTL ? 'font-arabic' : ''
              }`}
            >
              {t('hero.subtitle')}
            </h2>
            <p
              className={`text-lg text-gray-600 mb-8 leading-relaxed ${
                isRTL ? 'font-arabic' : ''
              }`}
            >
              {t('hero.description')}
            </p>
            <div className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} gap-4`}>
              <Button variant="primary" size={'lg'} href="/program/pondok-pesantren">
                {t('hero.cta.primary')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button variant="secondary" size={'lg'} href="/tentang">
                {t('hero.cta.secondary')}
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
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary-200 to-secondary-200 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBannerWithImage;
