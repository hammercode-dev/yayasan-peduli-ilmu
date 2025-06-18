'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { CheckCircle } from 'lucide-react';

export default function RuleSection() {
  const t = useTranslations('KomunitasPage');
  const locale = useLocale();

  const isRTL = locale === 'ar';

  // Load the array of rules from the translation file
  const rules = t.raw('rule-section.rules') as string[];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* title section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
            {t('rule-section.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className="bg-card rounded-lg shadow-lg border border-border">
            <div className="p-8">
              <ul className="space-y-4">
                {rules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <p
                      className={`text-muted-foreground leading-relaxed ${isRTL ? 'mr-3' : 'ml-3'}`}
                    >
                      {rule}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
