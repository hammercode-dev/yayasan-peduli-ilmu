import HeaderBanner from '@/components/layout/HeaderBanner';
import { useTranslations } from 'next-intl';
import {
  AboutSection,
  ContactInformationSection,
  ManagementSection,
  VisiMisiSection,
} from './components';

const AboutPage = () => {
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
};
export default AboutPage;
