import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('AboutPage');
  const locale = useLocale();

  const isRTL = locale === 'ar';

  return (
    <section className="py-20 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center `}>
          {/* Text Content */}
          <div>
            <span className="text-sm uppercase tracking-wider text-brand-gold font-semibold mb-2 block">
              {t('aboutus-section.label')}
            </span>
            <h2 className="text-4xl font-extrabold text-accent-800 mb-6 leading-snug">
              {t('aboutus-section.title')}
            </h2>
            <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
              <p>{t('aboutus-section.description.desc-1')}</p>
              <p>{t('aboutus-section.description.desc-2')}</p>
              <p>{t('aboutus-section.description.desc-3')}</p>
            </div>
          </div>

          {/* Image Card */}
          <div className="flex justify-center md:order-first">
            <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-300 ease-out">
                <Image
                  src="/logo.png"
                  alt="Logo Yayasan Peduli Ilmu"
                  width={320}
                  height={320}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
