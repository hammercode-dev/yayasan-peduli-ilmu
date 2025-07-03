import { useLocale } from 'next-intl';

export default function useLocalizedField() {
  const locale = useLocale();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getField = <T extends Record<string, any> | null | undefined>(
    data: T,
    field: keyof NonNullable<T>,
    fallback = '-'
  ) => {
    if (!data) return fallback;

    const localizedField =
      locale === 'id' ? String(field) : `${String(field)}_${locale}`;

    return data[localizedField] ?? data[String(field)] ?? fallback;
  };

  return { getField };
}
