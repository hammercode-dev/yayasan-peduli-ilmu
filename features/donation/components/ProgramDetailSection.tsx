'use client';

import { useTranslations } from 'next-intl';

import useLocalizedField from '@/hooks/useLocalizedField';

import type { ProgramDonasiProps } from '../types';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';

type ProgramDetailFields = Pick<
  ProgramDonasiProps,
  | 'location'
  | 'status'
  | 'starts_at'
  | 'ends_at'
  | 'description'
  | 'description_en'
  | 'description_ar'
>;

interface ProgramDetailSectionProps {
  data: ProgramDetailFields | null;
}

const ProgramDetailSection = ({ data }: ProgramDetailSectionProps) => {
  const t = useTranslations('DonationDetailPage.detail-section');
  const { getField } = useLocalizedField();

  return (
    <section className="border-border mb-8">
      <p className="mb-2 md:mb-6 font-medium">
        {t('title')}
      </p>
      {/* <div className="mb-4 md:mb-6 grid grid-cols-3 gap-6 text-base">
        <p>{t('locationLabel')} {data?.location}</p>
        <p>{t('statusLabel')} {data?.status}</p>
        <p>{t('endDateLabel')} {formatDate(data?.ends_at, locale)}</p>
      </div> */}
      <p className="mb-2 md:mb-6 font-medium">
        {t('descriptionLabel')}
      </p>
      {/* <h3 className="font-semibold text-foreground mb-6 text-xl sm:text-2xl">
        {t('title')}
      </h3> */}


      <div className="md:p-4 md:bg-muted/30 rounded-lg mt-2 md:mt-6">
        
        <div className="prose prose-lg text-muted-foreground">
          <MarkdownRenderer markdown={getField(data, 'description') ?? '-'} />
        </div>
      </div>
    </section>
  );
};

export default ProgramDetailSection;