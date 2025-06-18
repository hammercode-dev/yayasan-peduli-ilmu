'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Phone } from 'lucide-react';
import { CONTACTS } from '@/constants/komunitas';

export default function ContactSection() {
  const t = useTranslations('KomunitasPage');

  return (
    <section className="py-20 bg-accent-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('contact-section.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto" />
        </div>

        {/* Contacts */}
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {CONTACTS.map((contact, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-300"
            >
              <div className="p-6 text-center">
                <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {t(`contact-section.contacts.${contact.name}`)}
                </h3>
                <p className="text-primary-100 mb-4">{contact.phone}</p>
                <a
                  href={contact.link}
                  className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  {t('contact-section.whatsapp')}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-xl mx-auto border border-white/20">
            <h3 className="text-xl font-bold mb-4">
              {t('contact-section.note.title')}
            </h3>
            <p className="text-sm text-gray-300">{t('contact-section.note.body')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
