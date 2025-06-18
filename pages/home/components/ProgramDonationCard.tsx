import { Link } from '@/i18n/navigation';
import { Building, Heart } from 'lucide-react';
import { ProgramDonationProps } from '../types';
import { formatCurrency } from '@/lib/format';

interface Props {
  program: ProgramDonationProps;
  t: (key: string) => string;
  locale: 'id' | 'en' | 'ar';
}

const ProgramDonationCard = ({ program, t, locale }: Props) => {
  const progress = program.target_amount
    ? Math.round((program.collected_amount / program.target_amount) * 100)
    : 0;

  const currencyMap: Record<string, string> = {
    id: 'IDR',
    en: 'USD',
    ar: 'SAR', // or AED
  };

  const currency = currencyMap[locale] || 'IDR';

  return (
    <div className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-border group hover:-translate-y-1 flex flex-col">
      {/* icons */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-2">
          <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <Building className="h-6 w-6 text-white" />
          </div>
          {program.status === 'active' && (
            <span className="bg-secondary-600 text-white text-xs px-2 py-1 rounded-full animate-pulse">
              {t('donation-section.card.status')}
            </span>
          )}
        </div>
        <h3 className="text-accent-800 text-lg font-bold group-hover:text-primary-600 transition-colors duration-200">
          {program.title}
        </h3>
      </div>
      {/* end icons */}

      <div className="p-6 flex flex-col h-full">
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {program.description}
        </p>

        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              {t('donation-section.card.progressLabel')}
            </span>
            <span className="font-semibold text-accent-800">{progress}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between text-sm">
            <div>
              <p className="text-muted-foreground">
                {t('donation-section.card.collectedLabel')}
              </p>
              <p className="font-semibold text-secondary-700">
                {formatCurrency(program.collected_amount, locale, currency)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-muted-foreground">
                {t('donation-section.card.targetLabel')}
              </p>
              <p className="font-semibold text-accent-800">
                {formatCurrency(program.target_amount, locale, currency)}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <Link
            href={`/donation/${program.slug}`}
            className="inline-flex items-center justify-center w-full px-4 py-2 bg-secondary-600 hover:bg-secondary-700 text-white font-medium rounded-lg transition-colors duration-200 group"
          >
            <Heart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
            {t('donation-section.card.ctaLabel')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramDonationCard;
