import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import HomePage from '@/features/home';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('HomePage');
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default function Index() {
  return <HomePage />;
}
