export const useTranslations = () => {
  const t = (key: string) => key;
  t.rich = (_key: string, options: any) =>
    options?.strong?.('mocked rich text') ?? _key;
  return t;
};

export const useFormatter = () => ({
  number: (val: number) => val.toLocaleString(),
  dateTime: (val: Date | string) => new Date(val).toLocaleDateString('en-US'),
});

export const useLocale = () => 'en';
