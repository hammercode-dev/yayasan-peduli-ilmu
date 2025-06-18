'use client';
import HeaderBanner from '@/components/layout/HeaderBanner';
import { ContactInformationSection, FAQSection } from './components';
import { useTranslations } from 'next-intl';

const ContactPage = () => {
  const t = useTranslations('ContactPage');
  return (
    <div className="min-h-screen">
      <HeaderBanner title={t('meta.title')} description={t('meta.description')} />
      <ContactInformationSection />
      <FAQSection />
    </div>
  );
};
export default ContactPage;
