import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ContactPageContent from './ContactPageContent';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('ContactPage');
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default function Contact() {
  // Why this page is split:
  // We need to use `generateMetadata()`, which only works in server components.
  // But `ContactInformationSection` uses client-side stuff like useState,
  // so we moved the interactive parts into a separate client component.
  // This keeps server and client code clean and avoids Next.js errors.

  return <ContactPageContent />;
}
