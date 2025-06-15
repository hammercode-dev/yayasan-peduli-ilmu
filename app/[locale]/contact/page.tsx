import ContactPage from '@/pages/contact';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('ContactPage');
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default function Contact() {
  return <ContactPage />;
}
