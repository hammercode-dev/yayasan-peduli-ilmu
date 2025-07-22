import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import DonationDetailPage from '@/features/donation/DonationDetail';

export async function generateMetadata(): Promise<Metadata> {
  // FIXME: get the locale and slug 
  //        then fetch the short description from supabase
  const t = await getTranslations('HomePage');
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default function DonationDetail() {
  return <DonationDetailPage />;
}
