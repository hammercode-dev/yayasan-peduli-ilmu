import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import ReportsPage from '@/pages/reports';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('ReportPage');
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default function LaporanPage() {
  return <ReportsPage />;
}
