import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import AboutPage from '@/pages/about';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('AboutPage');
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default function About() {
  return <AboutPage />;
}
