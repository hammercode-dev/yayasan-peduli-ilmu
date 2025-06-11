import React from 'react';
import { useTranslations } from 'next-intl';
import { User } from 'lucide-react';

export default function TeacherSection() {
  const t = useTranslations('KomunitasPage');

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* title section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
            {t('teacher-section.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
            <div className="p-8 text-center">
              <div className="mx-auto w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                <User className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-accent-800 mb-2">
                {t('teacher-section.name')}
              </h3>
              <p className="text-lg text-primary-600 mb-4">
                {t('teacher-section.degree')}
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-muted-foreground">
                  {t('teacher-section.university')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
