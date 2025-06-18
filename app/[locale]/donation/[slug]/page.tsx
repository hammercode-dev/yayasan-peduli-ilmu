import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import DonationDetailPage from '@/features/donation/DonationDetail';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('HomePage');
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default function DonationDetail() {
  return <DonationDetailPage />;
}
