import { Locale } from 'next-intl';
import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';

import HeroBannerWithImage from '@/components/section/HeroBannerWithImage';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default function Index({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <div className="min-h-screen bg-white">
        <HeroBannerWithImage />
      </div>
    </>
  );
}
