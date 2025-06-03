/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Globe, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import {
  Menu as HeadlessMenu,
  Transition,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Dialog,
  Listbox,
} from '@headlessui/react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === language) || languages[0];

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
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
                  <h1 className="text-xl font-bold text-accent-800">
                    {t('hero.title')}
                  </h1>
                  <p className="text-sm text-gray-600">Sulawesi Tengah</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="btn-ghost">
                {t('nav.home')}
              </Link>

              {/* Program Dropdown */}
              <HeadlessMenu as="div" className="relative">
                <HeadlessMenu.Button className="btn-ghost flex items-center">
                  {t('nav.program')}
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform ui-open:rotate-180" />
                </HeadlessMenu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <HeadlessMenu.Items className="absolute left-0 mt-2 w-80 bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
                    <div className="py-2">
                      <HeadlessMenu.Item>
                        {({ active }) => (
                          <Link
                            href="/program/pondok-pesantren"
                            className={`${
                              active
                                ? 'bg-primary-50 text-primary-700'
                                : 'text-gray-700'
                            } block px-6 py-4 transition-colors`}
                          >
                            <div className="font-medium">{t('nav.pondok')}</div>
                            <p className="text-xs text-gray-500 mt-1">
                              Putra & Putri
                            </p>
                          </Link>
                        )}
                      </HeadlessMenu.Item>
                      <HeadlessMenu.Item>
                        {({ active }) => (
                          <Link
                            href="/program/komunitas"
                            className={`${
                              active
                                ? 'bg-primary-50 text-primary-700'
                                : 'text-gray-700'
                            } block px-6 py-4 transition-colors`}
                          >
                            <div className="font-medium">{t('nav.komunitas')}</div>
                            <p className="text-xs text-gray-500 mt-1">Palu</p>
                          </Link>
                        )}
                      </HeadlessMenu.Item>
                    </div>
                  </HeadlessMenu.Items>
                </Transition>
              </HeadlessMenu>

              <Link href="/about" className="btn-ghost">
                {t('nav.about')}
              </Link>
              <Link href="/laporan" className="btn-ghost">
                {t('nav.reports')}
              </Link>

              {/* Publications Dropdown */}
              <HeadlessMenu as="div" className="relative">
                <HeadlessMenu.Button className="btn-ghost flex items-center">
                  {t('nav.publications')}
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform ui-open:rotate-180" />
                </HeadlessMenu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <HeadlessMenu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
                    <div className="py-2">
                      <HeadlessMenu.Item>
                        {({ active }) => (
                          <Link
                            href="/publikasi/tulisan"
                            className={`${
                              active
                                ? 'bg-primary-50 text-primary-700'
                                : 'text-gray-700'
                            } block px-4 py-3 font-medium transition-colors`}
                          >
                            {t('nav.tulisan')}
                          </Link>
                        )}
                      </HeadlessMenu.Item>
                      <HeadlessMenu.Item>
                        {({ active }) => (
                          <Link
                            href="/publikasi/buku"
                            className={`${
                              active
                                ? 'bg-primary-50 text-primary-700'
                                : 'text-gray-700'
                            } block px-4 py-3 font-medium transition-colors`}
                          >
                            {t('nav.buku')}
                          </Link>
                        )}
                      </HeadlessMenu.Item>
                    </div>
                  </HeadlessMenu.Items>
                </Transition>
              </HeadlessMenu>

              <button
                onClick={() => setIsContactModalOpen(true)}
                className="btn-ghost"
              >
                {t('nav.contact')}
              </button>

              {/* Language Selector with Listbox */}
              <Listbox value={language} onChange={setLanguage}>
                <div className="relative">
                  <Listbox.Button className="btn-ghost flex items-center">
                    <Globe className="h-5 w-5 mr-2" />
                    <span>{currentLanguage.flag}</span>
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform ui-open:rotate-180" />
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
                      <div className="py-2">
                        {languages.map((lang) => (
                          <Listbox.Option
                            key={lang.code}
                            value={lang.code}
                            className={({ active, selected }) =>
                              `${
                                active
                                  ? 'bg-primary-50 text-primary-700'
                                  : 'text-gray-700'
                              }
                               ${
                                 selected
                                   ? 'bg-primary-100 text-primary-800 font-medium'
                                   : ''
                               }
                               cursor-pointer select-none relative px-4 py-3 transition-colors`
                            }
                          >
                            <div className="flex items-center">
                              <span className="mr-3">{lang.flag}</span>
                              <span className="truncate">{lang.name}</span>
                            </div>
                          </Listbox.Option>
                        ))}
                      </div>
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
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
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div className="lg:hidden border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                <Link
                  href="/"
                  className="block px-3 py-2 btn-ghost w-full text-left"
                >
                  {t('nav.home')}
                </Link>

                <Disclosure>
                  {({ open }) => (
                    <div>
                      <DisclosureButton className="flex justify-between w-full px-3 py-2 btn-ghost text-left">
                        <span>{t('nav.program')}</span>
                        <ChevronDown
                          className={`${
                            open ? 'rotate-180' : ''
                          } h-5 w-5 transition-transform`}
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="px-6 pb-2 space-y-1">
                        <Link
                          href="/program/pondok-pesantren"
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {t('nav.pondok')}
                        </Link>
                        <Link
                          href="/program/komunitas"
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {t('nav.komunitas')}
                        </Link>
                      </DisclosurePanel>
                    </div>
                  )}
                </Disclosure>

                <Link
                  href="/about"
                  className="block px-3 py-2 btn-ghost w-full text-left"
                >
                  {t('nav.about')}
                </Link>
                <Link
                  href="/laporan"
                  className="block px-3 py-2 btn-ghost w-full text-left"
                >
                  {t('nav.reports')}
                </Link>

                <Disclosure>
                  {({ open }) => (
                    <div>
                      <DisclosureButton className="flex justify-between w-full px-3 py-2 btn-ghost text-left">
                        <span>{t('nav.publications')}</span>
                        <ChevronDown
                          className={`${
                            open ? 'rotate-180' : ''
                          } h-5 w-5 transition-transform`}
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="px-6 pb-2 space-y-1">
                        <Link
                          href="/publikasi/tulisan"
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {t('nav.tulisan')}
                        </Link>
                        <Link
                          href="/publikasi/buku"
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {t('nav.buku')}
                        </Link>
                      </DisclosurePanel>
                    </div>
                  )}
                </Disclosure>

                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="block px-3 py-2 btn-ghost w-full text-left"
                >
                  {t('nav.contact')}
                </button>

                {/* Mobile Language Selector */}
                <div className="px-3 py-2 border-t border-gray-200 mt-4">
                  <p className="text-gray-700 font-medium mb-2">Language</p>
                  <div className="space-y-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code as any)}
                        className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                          language === lang.code
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
              </div>
            </div>
          </Transition>
        </div>
      </nav>

      {/* Contact Modal */}
      <Transition appear show={isContactModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setIsContactModalOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-4"
                  >
                    {t('footer.contact')}
                  </Dialog.Title>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary-600" />
                      <span className="text-gray-700">+62 451 123456</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary-600" />
                      <span className="text-gray-700">
                        info@yayasanpeduliilmu.org
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 flex space-x-3">
                    <Link href="/kontak" className="btn-primary flex-1 text-center">
                      {t('nav.contact')} Lengkap
                    </Link>
                    <button
                      type="button"
                      className="btn-secondary flex-1"
                      onClick={() => setIsContactModalOpen(false)}
                    >
                      Tutup
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
