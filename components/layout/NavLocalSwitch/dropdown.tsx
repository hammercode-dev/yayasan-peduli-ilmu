'use client';

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react';
import { ChevronDown, Globe } from 'lucide-react';
import { Fragment, useState } from 'react';
import { useLocale, Locale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { languages } from '@/lib/constant';

export default function DropdownLanguageSwitcher() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const selectedLanguage =
    languages.find((lang) => lang.code === currentLocale) || languages[0];

  const [selected, setSelected] = useState(selectedLanguage);

  function handleChange(code: Locale) {
    const target = languages.find((lang) => lang.code === code);
    if (!target) return;
    setSelected(target);
    router.push(pathname, { locale: code });
  }

  return (
    <Listbox value={selected.code} onChange={handleChange}>
      <div className="relative">
        <ListboxButton className="btn-ghost flex items-center">
          <Globe className="h-5 w-5 mr-2" />
          <span>{selected.flag}</span>
          <ChevronDown className="ml-1 h-4 w-4 transition-transform ui-open:rotate-180" />
        </ListboxButton>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden z-50">
            <div className="py-2">
              {languages.map((lang) => (
                <ListboxOption
                  key={lang.code}
                  value={lang.code}
                  className={({ active, selected }) =>
                    `${active ? 'bg-primary-50 text-primary-700' : 'text-gray-700'}
                     ${selected ? 'bg-primary-100 text-primary-800 font-medium' : ''}
                     cursor-pointer select-none relative px-4 py-3 transition-colors`
                  }
                >
                  <div className="flex items-center">
                    <span className="mr-3">{lang.flag}</span>
                    <span className="truncate">{lang.name}</span>
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
