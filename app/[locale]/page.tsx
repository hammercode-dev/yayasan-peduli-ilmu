import { Locale } from 'next-intl';
import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';

import HeroBannerWithImage from '@/components/section/home/HeroBannerWithImage';
import VisiMisiSection from '@/components/section/home/VisiMisiSection';
import ProgramSection from '@/components/section/home/ProgramSection';
import AnnouncementSection from '@/components/section/home/AnnouncementSection';
import DonationSection from '@/components/section/home/DonationSection';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default function Index({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-white">
      <HeroBannerWithImage />
      <VisiMisiSection />
      <ProgramSection />
      <AnnouncementSection />
      <DonationSection />
    </div>
  );
}
