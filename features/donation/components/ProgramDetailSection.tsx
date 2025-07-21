'use client';

import { useTranslations, useLocale } from 'next-intl';

import useLocalizedField from '@/hooks/useLocalizedField';
import { formatDate } from '@/lib/format';

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
  const locale = useLocale();

  return (
    <section className="border-border pt-8 mb-8">
      <h3 className="font-semibold text-foreground mb-6 text-xl sm:text-2xl">
        {t('title')}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-base">
        <DetailBox label={t('locationLabel')} value={data?.location} />
        <DetailBox label={t('statusLabel')} value={data?.status} />
        <DetailBox
          label={t('startDateLabel')}
          value={formatDate(data?.starts_at, locale)}
        />
        <DetailBox
          label={t('endDateLabel')}
          value={formatDate(data?.ends_at, locale)}
        />
      </div>

      <div className="p-4 bg-muted/30 rounded-lg mt-6">
        <p className="text-muted-foreground mb-2 font-medium">
          {t('descriptionLabel')}
        </p>
        <div className="prose prose-lg text-muted-foreground">
          <MarkdownRenderer markdown={getField(data, 'description') ?? '-'} />
        </div>
      </div>
    </section>
  );
};

export default ProgramDetailSection;

interface DetailBoxProps {
  label: string;
  value?: string | null;
}

const DetailBox = ({ label, value }: DetailBoxProps) => (
  <div className="p-4 bg-muted/30 rounded-lg">
    <p className="text-muted-foreground mb-2 font-medium">{label}</p>
    <p className={`font-semibold text-foreground break-words `}>{value || '-'}</p>
  </div>
);
