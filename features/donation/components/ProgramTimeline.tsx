import React from 'react';
import { useTranslations } from 'next-intl';
import { formatDate } from '@/lib/format';
import useLocalizedField from '@/hooks/useLocalizedField';
import { ProgramTimelineItem } from '../types';

type ProgramTimelineProps = {
  program: ProgramTimelineItem[] | null | undefined;
};

function ProgramTimeline({ program }: ProgramTimelineProps) {
  const t = useTranslations('DonationDetailPage');
  const { getField } = useLocalizedField();

  const timeline = program ?? [];

  return (
    <div className="border-t border-border pt-8 mb-8">
      <h3 className="font-semibold text-foreground mb-6 text-xl sm:text-2xl">
        {t('timelineLabel')}
      </h3>
      <div className="space-y-6">
        {timeline.length > 0 ? (
          timeline.map((item) => (
            <div key={item.date + item.activity} className="flex gap-4">
              <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-foreground text-base mb-1">
                  {formatDate(item.date)}
                </p>
                <p className="text-muted-foreground text-base">
                  {getField(item, 'activity')}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted-foreground">{t('noTimelineMessage')}</p>
        )}
      </div>
    </div>
  );
}

export default ProgramTimeline;
