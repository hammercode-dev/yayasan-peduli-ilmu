import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('AboutPage');

  return (
    <section className="bg-primary-400 text-primary-foreground py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
          {t('title') ?? 'Tentang Kami'}
        </h1>
        <div className="mx-auto mb-8 w-20 h-1 bg-primary-600 rounded" />
        <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-xl mx-auto">
          {t('meta.description') ?? 'Deskripsi singkat tentang Yayasan Peduli Ilmu'}
        </p>
      </div>
    </section>
  );
}
