import React from 'react';
import { useTranslations } from 'next-intl';
import { BookOpen } from 'lucide-react';
import { BOOKS } from '@/constants/komunitas';

export default function BookSection() {
  const t = useTranslations('KomunitasPage');

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
            {t('books-section.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BOOKS.map((book, index) => (
            <div
              key={index}
              className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-border group hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center gap-4">
                  {/* Icon on the left */}
                  <div
                    className={`w-14 h-14 ${book.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shrink-0`}
                  >
                    <BookOpen className="h-7 w-7 text-white" />
                  </div>

                  {/* Text content on the right, aligned to right */}
                  <div className="flex-1 text-right items-end flex flex-col">
                    <h3 className="font-bold text-accent-800 mb-1">
                      {t(`books.${book.id}.title`)}
                    </h3>

                    {t(`books.${book.id}.arabic`) && (
                      <p className="text-primary-600 text-lg mb-1" dir="rtl">
                        {t(`books.${book.id}.arabic`)}
                      </p>
                    )}

                    <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full">
                      {t(`books.${book.id}.subject`)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
