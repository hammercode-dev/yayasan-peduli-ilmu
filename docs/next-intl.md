# Next-intl Cheatsheet (v4.1.0)

A complete cheatsheet for using next-intl against projects.

## 1. Installation & Setup

```bash
npm install next-intl
```

## Structure Folder

```bash
├── app
│   └── [locale]
│       ├── layout.tsx
│       └── page.tsx
├── messages
│   ├── ar.json
│   ├── en.json
│   └── id.json
├── next.config.ts
├── i18n
│   ├── routing.ts
│   ├── navigation.ts
│   └── request.ts
├── middleware.ts
```

## 2. Basic Configuration

#### middleware.ts

```typescript
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
```

#### next.config.ts

```javascript
import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
```

## 3. i18n Configuration

#### routing.ts

```typescript
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['id', 'en', 'ar'],

  // Used when no locale matches
  defaultLocale: 'id',
});
```

#### navigation.ts

```typescript
import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Lightweight wrappers around Next.js' navigation
// APIs that consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
```

#### request.ts

```typescript
import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    // messages: (await import(`../../messages/${locale}.json`)).default,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
```

## 4. Message Files Structure

#### messages/en.json | id.json | ar.json

```json
{
  "HomePage": {
    "title": "Hello world!",
    "about": "Go to the about page"
  },
  "AboutPage": {
    "title": "About us"
  }
}
```

## 5. Using Translations

#### app/[locale]/layout.tsx

setRequestLocale(locale) next-intl is used to optimize static generation and ensure locale consistency in server components.

```typescript
import {NextIntlClientProvider} from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default async function LocaleLayout({ children, params }: Props) {
  // Ensure that the incoming locale is valid
  const { locale } = await params;
  if (!hasLocale(locales, locale)) {
    notFound();
  }
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

#### Using Translations on Component

```typescript
import {useTranslations} from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('about')}</p>
    </div>
  );
}
```

## 6. Advanced Features

#### Translations with Parameters

```json
{
  "welcome": "Welcome {username}!",
  "items": "You have {count, plural, =0 {no items} =1 {one item} other {# items}}",
  "price": "Price: {amount, number, currency}"
}
```

```typescript
t('welcome', { username: 'John' });
t('items', { count: 5 });
t('price', { amount: 29.99 });
```

#### Rich Text Formatting

```json
{
  "markup": "This is <important>very important</important>!",
  "link": "Visit our <link>website</link> for more info."
}
```

```typescript
t.rich('markup', {
  important: (chunks) => <strong>{chunks}</strong>
});

t.rich('link', {
  link: (chunks) => <a href="/about">{chunks}</a>
});
```

#### Datetime & Number Formatting

```typescript
import {useFormatter} from 'next-intl';

function Component() {
  const format = useFormatter();

  return (
    <div>
      <p>{format.dateTime(new Date(), 'short')}</p>
      <p>{format.number(1234.5)}</p>
      <p>{format.number(0.75, {style: 'percent'})}</p>
      <p>{format.number(29.99, {
        style: 'currency',
        currency: 'USD'
      })}</p>
    </div>
  );
}
```

## 7. Metadata Internationalization

### Dynamic Metadata
generateMetadata is used to generate dynamic metadata for each page.
```typescript
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
  };
}
```

### messages/en.json (Metadata section)

```json
{
  "Metadata": {
    "title": "My Website",
    "description": "Welcome to my amazing website",
    "keywords": "website, nextjs, react"
  }
}
```

## 8. Advanced Configuration

#### VSCode Integration extension
To improve the workflow for managing messages right from your code editor, you can use an extension for VSCode that includes support for next-intl.

These extensions are known to support next-intl: [Vscode Integration Next Intl](https://next-intl.dev/docs/workflows/vscode-integration)

- i18n Ally
- Sherlock

#### Custom Formats (Optional)
```typescript
export default getRequestConfig(async ({ requestLocale }) => {
  return {
    ...,
    formats: {
      dateTime: {
        short: {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        },
      },
      number: {
        precise: {
          maximumFractionDigits: 5,
        },
      },
    },
  };
});
```

## 9. Locale Switching
```typescript
'use client';
import { useLocale, Locale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

const languages = [
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];

export default function DropdownLanguageSwitcher() {
  // Get current locale from next-intl
  const currentLocale = useLocale();
  // Get current pathname to preserve route when switching locale
  const pathname = usePathname();
  // Get router instance for navigation
  const router = useRouter();
  // Find current language object based on locale, fallback to first language
  const selectedLanguage =
    languages.find((lang) => lang.code === currentLocale) || languages[0];
  // Local state to track selected language for UI updates
  const [selected, setSelected] = useState(selectedLanguage);
  // Handle language change - update state and navigate to new locale
  function handleChange(code: Locale) {
    const target = languages.find((lang) => lang.code === code);
    if (!target) return;
    setSelected(target);
    // Navigate to same pathname but with new locale
    router.push(pathname, { locale: code });
  }

  return (
    <Listbox value={selected.code} onChange={handleChange}>
      <div>
        <ListboxButton>
          <span>{selected.flag}</span>
        </ListboxButton>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions>
            <div className="py-2">
              {languages.map((lang) => (
                <ListboxOption
                  key={lang.code}
                  value={lang.code}
                >
                  <div>
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </div>
                </ListboxOption>
              ))}
            </div>
          </ListboxOptions>
        </Transition>
      </div>
    </Listbox>
  );
}
```