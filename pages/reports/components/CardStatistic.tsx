import { useCurrencyByLocale } from '@/hooks/useCurrencyByLocale';
import { cn } from '@/lib/utils';
import { TrendingUp } from 'lucide-react';
import { useFormatter } from 'next-intl';

const borderColorMap = {
  primary: 'border-l-primary-500',
  secondary: 'border-l-secondary-600',
  accent: 'border-l-accent-800',
};

const CardStatistic = ({
  title,
  value,
  icon: Icon = TrendingUp,
  borderColor = 'primary',
}: {
  title: string;
  value: number;
  icon?: React.ElementType;
  borderColor?: string;
}) => {
  const format = useFormatter();
  const { convertCurrency } = useCurrencyByLocale();
  const colorClasses =
    borderColorMap[borderColor as keyof typeof borderColorMap] ||
    borderColorMap['primary'];
  return (
    <div
      className={cn(
        `bg-card rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow duration-300`,
        'border-l-4',
        colorClasses
      )}
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-accent-800">
              {format.number(convertCurrency(value), 'currency')}
            </p>
          </div>
          <Icon className={`h-8 w-8 text-${borderColor}`} />
        </div>
      </div>
    </div>
  );
};

export default CardStatistic;
