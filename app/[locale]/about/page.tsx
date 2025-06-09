import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import {
  HeroSection,
  AboutSection,
  VisiMisiSection,
  ManagementSection,
  ContactInformationSection,
} from '@/components/section/about';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('AboutPage');
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default function About() {
  return (
    <div className="min-h-screen ">
      <HeroSection />
      <AboutSection />
      <VisiMisiSection />
      <ManagementSection />
      <ContactInformationSection />
    </div>
  );
}
