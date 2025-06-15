import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const getCurrencyByLocale = (locale?: string) => {
    switch (locale) {
      case 'id':
        return 'IDR';
      case 'en':
        return 'USD';
      case 'ar':
        return 'AED';
      default:
        return 'IDR';
    }
  };

  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
  ? requested
  : routing.defaultLocale;
  const defaultCurrency = getCurrencyByLocale(requested);

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    defaultCurrency,
    formats: {
      number: {
        currency: {
          style: 'currency',
          currency: defaultCurrency,
          minimumFractionDigits: defaultCurrency === 'IDR' ? 0 : 2,
          maximumFractionDigits: defaultCurrency === 'IDR' ? 0 : 2,
        },
      },
    },
  };
});
