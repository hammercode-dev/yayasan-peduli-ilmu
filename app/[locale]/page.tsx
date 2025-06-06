import { use } from 'react';
import { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

import HeroBannerWithImage from '@/components/section/home/HeroBannerWithImage';
import VisiMisiSection from '@/components/section/home/VisiMisiSection';
import ProgramSection from '@/components/section/home/ProgramSection';
import AnnouncementSection from '@/components/section/home/AnnouncementSection';
import DonationSection from '@/components/section/home/DonationSection';

type Props = {
  // The `params` prop comes from the dynamic segment `[locale]` in the URL.
  // Because it's passed through generateStaticParams(), it arrives as a Promise.
  params: Promise<{ locale: Locale }>;
};

export default function Index({ params }: Props) {
  // Unwrap the promise to get the locale using React's native `use()` (only works in Server Components)
  const { locale } = use(params);

  // Manually set the locale context for this request.
  // This is required so `useTranslations()` knows which language to load.
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-white">
      {/* These section components may contain localized content */}
      <HeroBannerWithImage />
      <VisiMisiSection />
      <ProgramSection />
      <AnnouncementSection />
      <DonationSection />
    </div>
  );
}
