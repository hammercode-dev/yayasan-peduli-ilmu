'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { formatDate } from '@/lib/format';
import useLocalizedField from '@/hooks/useLocalizedField';
import { ProgramTimelineItem } from '../types';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';

type ProgramTimelineProps = {
  timeline: ProgramTimelineItem[] | null | undefined;
};

function ProgramTimeline({ timeline = [] }: ProgramTimelineProps) {
  const t = useTranslations('DonationDetailPage');
  const { getField } = useLocalizedField();

  const sortedTimeLine =
    timeline?.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    ) ?? [];

  return (
    <div className="border-t border-border pt-8 mb-8">
      <h3 className="font-semibold text-foreground mb-6 text-xl sm:text-2xl">
        {t('timelineLabel')}
      </h3>
      <div className="space-y-6">
        {sortedTimeLine.length > 0 ? (
          sortedTimeLine.map((item) => (
            <div key={item.date + item.activity} className="flex gap-4">
              <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-foreground text-base mb-1">
                  {formatDate(item.date)}
                </p>
                <p className="text-muted-foreground text-base">
                  {getField(item, 'activity')}
                </p>
                <div className="mt-4">
                  <MarkdownRenderer markdown={item.description} />
                </div>
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
