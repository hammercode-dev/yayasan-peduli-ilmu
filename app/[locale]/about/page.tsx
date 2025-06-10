import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

import {
  AboutSection,
  VisiMisiSection,
  ManagementSection,
  ContactInformationSection,
} from '@/components/section/about';

import HeaderBanner from '@/components/layout/HeaderBanner';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('AboutPage');
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default function About() {
  const t = useTranslations('AboutPage');

  return (
    <div className="min-h-screen ">
      <HeaderBanner
        title={t('title') ?? 'Tentang Kami'}
        description={
          t('meta.description') ?? 'Deskripsi singkat tentang Yayasan Peduli Ilmu'
        }
      />
      <AboutSection />
      <VisiMisiSection />
      <ManagementSection />
      <ContactInformationSection />
    </div>
  );
}
