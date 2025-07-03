import { useTranslations, useFormatter } from 'next-intl';
import { useCurrencyByLocale } from '@/hooks/useCurrencyByLocale';
import { ProgramDonationProps } from '@/features/home/types';

type DonationProgressField = Pick<
  ProgramDonationProps,
  'collected_amount' | 'target_amount'
>;

type DonationProgressProps = {
  donation: DonationProgressField | null;
};

function DonationProgress({ donation }: DonationProgressProps) {
  const t = useTranslations('DonationDetailPage.progress-section');
  const { convertCurrency } = useCurrencyByLocale();
  const format = useFormatter();

  const collected = donation?.collected_amount ?? 0;
  const target = donation?.target_amount ?? 0;

  // Prevent division by zero by using a safe fallback
  // `safeTarget` is only used for the progress calculation, not for display
  const safeTarget = target === 0 ? 1 : target;

  // derived state
  // If target is 0, we show 0% progress explicitly to avoid misleading result
  const progress = target === 0 ? 0 : Math.round((collected / safeTarget) * 100);
  const remainingAmount = target - collected;

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">{t('progressLabel')}</span>
        <span className="font-semibold text-accent-800">{progress}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-4">
        <div
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 h-4 rounded-full transition-[width] duration-1000 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <Stat
          value={format.number(convertCurrency(collected), 'currency')}
          label={t('collectedLabel')}
          color="text-primary-600"
        />
        <Stat
          value={format.number(convertCurrency(target), 'currency')}
          label={t('targetLabel')}
        />
        <Stat
          value={format.number(convertCurrency(remainingAmount), 'currency')}
          label={t('remainingLabel')}
          color="text-secondary-600"
        />
      </div>
    </div>
  );
}

type StatProps = {
  value: string;
  label: string;
  color?: string;
};

const Stat = ({ value, label, color = 'text-accent-800' }: StatProps) => {
  return (
    <div className="text-center">
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default DonationProgress;
