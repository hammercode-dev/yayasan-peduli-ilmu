'use client';
import { useLocale } from 'next-intl';
import { useMemo, useCallback } from 'react';

export function useCurrencyByLocale() {
  const locale = useLocale();

  const ratesFromIDR = useMemo(
    () => ({
      // Default IDR
      IDR: 1,
      USD: 1 / 15000,
      AED: 1 / 4085,
    }),
    []
  );

  const getLocaleCurrency = useCallback((): string => {
    switch (locale) {
      case 'id':
        return 'IDR';
      case 'en':
      case 'ar':
        return 'USD';
      default:
        return 'IDR';
    }
  }, [locale]);

  const getLocaleRate = useCallback((): number => {
    const currency = getLocaleCurrency();
    return ratesFromIDR[currency as keyof typeof ratesFromIDR];
  }, [getLocaleCurrency, ratesFromIDR]);

  const convertCurrency = useCallback(
    (idrAmount: number): number => {
      const rate = getLocaleRate();
      return idrAmount * rate;
    },
    [getLocaleRate]
  );

  return {
    convertCurrency,
  };
}
