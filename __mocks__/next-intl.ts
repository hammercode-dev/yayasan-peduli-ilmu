export const useTranslations = () => {
  const t = (key: string) => key;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t.rich = (_key: string, options: any) =>
    options?.strong?.('mocked rich text') ?? _key;
  return t;
};

export const useFormatter = () => ({
  number: (val: number) => val.toLocaleString(),
  dateTime: (val: Date | string) => new Date(val).toLocaleDateString('en-US'),
});

export const useLocale = () => 'en';
