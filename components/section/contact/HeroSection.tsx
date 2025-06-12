import React from 'react';
import { useTranslations } from 'next-intl';

function HeroSection() {
  const t = useTranslations('ContactPage');

  return (
    <section className="bg-primary-400 text-primary-foreground py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
          {t('hero-section.title')}
        </h1>

        {/* Decorative underline */}
        <div className="mx-auto mb-8 w-20 h-1 rounded bg-primary-600"></div>

        {/* description */}
        <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-xl mx-auto leading-relaxed">
          {t('hero-section.description')}
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
