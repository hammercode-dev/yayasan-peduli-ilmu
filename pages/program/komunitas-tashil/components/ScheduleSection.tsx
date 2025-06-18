import React from 'react';
import { Calendar } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { SCHEDULE_DATA } from '@/constants/komunitas';

export default function ScheduleSection() {
  const t = useTranslations('KomunitasPage');
  const locale = useLocale();
  const scheduleData = SCHEDULE_DATA[locale] ?? SCHEDULE_DATA['id'];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
            {t('schedule-section.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg shadow-lg border border-border">
            <div className="p-6 space-y-4">
              {scheduleData.map((item, index) => (
                <ScheduleItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScheduleItem({
  day,
  program,
  time,
  color,
}: {
  day: string;
  program: string;
  time: string;
  color: string;
}) {
  return (
    <div className="flex items-center justify-between py-3 border-b">
      <div className="flex items-center">
        <Calendar className={`h-5 w-5 ${color} mr-3`} />
        <span className="font-medium text-accent-800">{day}</span>
      </div>
      <div className="text-right">
        <p className="font-medium">{program}</p>
        <p className="text-sm text-muted-foreground">{time}</p>
        <p className="text-sm text-muted-foreground">
          Jl Tombolotutu dekat Mesjid Jami
        </p>
      </div>
    </div>
  );
}
