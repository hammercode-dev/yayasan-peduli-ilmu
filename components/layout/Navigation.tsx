'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { X, Menu } from 'lucide-react';
import { Transition } from '@headlessui/react';

import LocalizedLink from '../ui/LocalizedLink';
import NavLocalSwitch from './NavLocalSwitch';
import DisclosureMenu from '../ui/DisclosureMenu';
import DropdownMenu from '../ui/DropdownMenu';
import { NAV_LINKS, PROGRAM_LINKS } from '@/lib/constant';

export default function Navigation() {
  const t = useTranslations('Navigation');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between px-4 h-20 items-center">
          <Link
            href="/"
            className="flex items-center space-x-3 focus-ring rounded-lg p-2"
          >
            <Image
              src="/logo.png"
              alt="Yayasan Peduli Ilmu"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h2 className="text-xl font-bold text-accent-800">{t('title')}</h2>
              <p className="text-sm text-gray-600">{t('region')}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((item) => (
              <LocalizedLink key={item.href} href={item.href} withActive={true}>
                {t(item.label)}
              </LocalizedLink>
            ))}

            <DropdownMenu label={t('program')} items={PROGRAM_LINKS} t={t} />
            {/* <DropdownMenu
              label={t('publications')}
              items={PUBLICATION_ITEMS}
              t={t}
            /> */}
            <NavLocalSwitch variant="dropdown" />
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn-ghost p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 translate-x-full"
          enterTo="transform opacity-100 translate-x-0"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 translate-x-0"
          leaveTo="transform opacity-0 translate-x-full"
        >
          <div className="lg:hidden border-t border-gray-200 space-y-1 bg-white absolute w-full rounded-b-xl shadow-lg">
            {NAV_LINKS.map((item) => (
              <LocalizedLink
                key={item.href}
                href={item.href}
                className="block px-3 py-2 btn-ghost w-full text-left hover:text-primary-600 hover:bg-gray-50 duration-300"
                onClick={() => setIsOpen(false)}
              >
                {t(item.label)}
              </LocalizedLink>
            ))}

            <DisclosureMenu label={t('program')} items={PROGRAM_LINKS} t={t} />
            {/* <DisclosureMenu
              label={t('publications')}
              items={PUBLICATION_ITEMS}
              t={t}
            /> */}

            <NavLocalSwitch variant="list" />
          </div>
        </Transition>
      </div>
    </nav>
  );
}
