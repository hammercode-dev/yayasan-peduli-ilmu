import React from 'react';

import { ChevronUp } from 'lucide-react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { useTranslations } from 'next-intl';
import { FAQS } from '../constants';

export default function FAQSection() {
  const t = useTranslations('ContactPage');

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* title */}
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            {t('faq-section.title')}
          </h2>
          {/* desc */}
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('faq-section.subTitle')}
          </p>
          <div className="w-24 h-1 bg-primary-600 mx-auto mt-4"></div>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <Disclosure key={idx}>
              {({ open }) => (
                <div className="bg-white rounded-lg shadow-lg">
                  <DisclosureButton className="flex justify-between items-center w-full p-6 text-left text-brand-navy font-semibold text-lg focus:outline-none focus-visible:ring focus-visible:ring-brand-gold">
                    <span>{faq.question}</span>
                    <ChevronUp
                      className={`h-5 w-5 transform transition-transform duration-300 ${
                        open ? 'rotate-180' : ''
                      }`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-6 pb-6 text-gray-700">
                    {faq.answer}
                  </DisclosurePanel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
