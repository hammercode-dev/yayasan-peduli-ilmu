/*  i dont use existing hooks, because cant use custom hooks 
when generating metadata, as it is client side. wdyt guys? */

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getLocalizedField<T extends Record<string, any> | null | undefined>(
  data: T,
  field: keyof NonNullable<T>,
  locale: string,
  fallback = '-'
) {
  if (!data) return fallback;

  const localizedField =
    locale === 'id' ? String(field) : `${String(field)}_${locale}`;

  return data[localizedField] ?? data[String(field)] ?? fallback;
}