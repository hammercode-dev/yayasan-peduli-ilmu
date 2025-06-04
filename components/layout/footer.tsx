'use client';

import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  const links = [
    { href: '/', label: 'home' },
    { href: '/tentang', label: 'about' },
    { href: '/laporan', label: 'reports' },
    { href: '/kontak', label: 'contact' },
    { href: '/program/pondok-pesantren', label: 'cottage' },
    { href: '/komunitas', label: 'community' },
    { href: '/artikel', label: 'article' },
    { href: '/publikasi/buku', label: 'book' },
  ];

  return (
    <footer className="bg-accent-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.png"
                alt="Yayasan Peduli Ilmu"
                width={60}
                height={60}
                className="h-15 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">{t('logo.title')}</h3>
                <p className="text-gray-300">{t('logo.region')}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">{t('logo.desc')}</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('menu.title')}</h4>
            <ul className="space-y-2">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {t(`menu.${label}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contact.title')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Jl. Contoh Alamat No. 123
                  <br />
                  Palu, Sulawesi Tengah 94111
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+62 451 123456</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  info@yayasanpeduliilmu.org
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} {t('logo.title')}. {t('rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
}
