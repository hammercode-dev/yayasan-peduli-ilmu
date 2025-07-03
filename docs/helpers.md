# 🧰 Global Helper Functions & Hooks

This document lists and explains globally reusable utility functions and custom hooks across the **Yayasan Peduli Ilmu** project.

These helpers are used to simplify common multilingual formatting, currency handling, and data fetching logic.

---

## 🏷️ `useLocalizedField`

A utility hook to retrieve localized fields from multilingual objects based on the active locale (e.g., `title_en`, `title_id`).

### 📦 Source

`src/hooks/useLocalizedField.ts`

### 🧠 Purpose

When working with multilingual data (from Supabase, for example), fields might include localized variations:

```json
{
  "title": "Judul Indonesia",
  "title_en": "English Title",
  "title_ar": "عنوان عربي"
}
```

Instead of doing this manually:

```ts
const title = locale === 'en' ? data.title_en : data.title;
```

You can simplify using:

```ts
const { getField } = useLocalizedField();
const title = getField(data, 'title');
```

### 🔧 Hook Code

```ts
import { useLocale } from 'next-intl';

export default function useLocalizedField() {
  const locale = useLocale();

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
```

### ✅ Benefits

- Avoids repetitive locale-based logic
- Prevents crash from undefined fields
- Fallback-aware (e.g., fallback to original field or '-')
- Scales across all multilingual entities (title, description, activity, etc.)

### 🧪 Example Usage

```tsx
const { getField } = useLocalizedField();
const programTitle = getField(program, 'title');
const activity = getField(timelineItem, 'activity');
```

---

## 📌 Future Helpers To Document Here

- `useCurrencyByLocale`
- `formatDate`
- `useCopyToClipboard`
- `formatProgramStatus`

Feel free to add usage examples, testing notes, or rationale for each new helper.

---

> 📝 Keeping these helpers documented makes onboarding new contributors easier and improves team knowledge sharing.
