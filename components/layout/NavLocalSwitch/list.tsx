'use client';

import { useLocale, Locale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { languages } from '@/lib/constant';

export default function ListLanguageSwitcher() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function handleChange(code: Locale) {
    router.push(pathname, { locale: code });
  }

  return (
    <div className="px-3 py-2 border-t border-gray-200 mt-4">
      <p className="text-gray-700 font-medium mb-2">Language</p>
      <div className="space-y-1">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleChange(lang.code as Locale)}
            className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
              lang.code === currentLocale
                ? 'bg-primary-100 text-primary-700 font-medium'
                : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
            }`}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
}
