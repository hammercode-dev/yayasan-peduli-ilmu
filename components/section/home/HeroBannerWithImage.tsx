import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../ui/Button';

const HeroBannerWithLogoBG = () => {
  const t = useTranslations('HomePage');
  const language = useLocale();
  const isRTL = language === 'ar';

  return (
    <section className="relative bg-gradient-to-b from-white to-primary-50 py-28 sm:py-36 overflow-hidden isolate">
      {/* Decorative Background Logo */}
      <div
        aria-hidden
        className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none"
      >
        <div className="relative w-[460px] h-[460px] sm:w-[520px] sm:h-[520px] opacity-5 blur-[3px]">
          <Image
            src="/logo.png"
            alt="Islamic Education Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-accent-900 leading-tight drop-shadow-md">
          {t('hero-section.title')}
        </h1>

        <h2 className="mt-4 text-xl sm:text-2xl text-secondary-700 font-medium drop-shadow-sm">
          {t('hero-section.subtitle')}
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed sm:leading-loose">
          {t('hero-section.description')}
        </p>

        <div
          className={`mt-10 flex flex-col sm:flex-row justify-center gap-4 ${
            isRTL ? 'sm:flex-row-reverse' : ''
          }`}
        >
          <Button
            href="/program/pondok-pesantren"
            variant="primary"
            size="lg"
            className="group"
          >
            <span>{t('hero-section.cta.primary')}</span>
            <ArrowRight
              className={`h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 ${
                isRTL ? 'mr-2' : 'ml-2'
              }`}
            />
          </Button>

          <Button href="/tentang" variant="secondary" size="lg">
            {t('hero-section.cta.secondary')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBannerWithLogoBG;
