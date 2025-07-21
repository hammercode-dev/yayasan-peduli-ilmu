'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { X, Menu } from 'lucide-react';
import { Transition } from '@headlessui/react';

import NavLink from '../ui/NavLink';
import NavLocalSwitch from './NavLocalSwitch';
import DisclosureMenu from '../ui/DisclosureMenu';
import DropdownMenu from '../ui/DropdownMenu';

const NAV_ITEMS = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  // { href: '/report', label: 'reports' },
  { href: '/contact', label: 'contact' },
];

const PROGRAM_ITEMS = [
  { href: '/program/darul-hadits-sibowi-putra', label: 'cottage' },
  { href: '/program/darul-hadits-putra-putri', label: 'cottage2' },
  // { href: '/program/komunitas-tashil', label: 'community', desc: 'Palu' },
];

// const PUBLICATION_ITEMS = [
//   { href: '/publications/article', label: 'article' },
//   { href: '/publications/book', label: 'book' },
// ];

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
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {t(item.label)}
              </NavLink>
            ))}

            <DropdownMenu label={t('program')} items={PROGRAM_ITEMS} t={t} />
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
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                className="block px-3 py-2 btn-ghost w-full text-left hover:text-primary-600 hover:bg-gray-50 duration-300"
                onClick={() => setIsOpen(false)}
              >
                {t(item.label)}
              </NavLink>
            ))}

            <DisclosureMenu label={t('program')} items={PROGRAM_ITEMS} t={t} />
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
