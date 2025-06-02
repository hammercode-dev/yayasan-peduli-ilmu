"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function Footer() {
  const { t } = useLanguage();

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
                <h3 className="text-xl font-bold">{t("hero.title")}</h3>
                <p className="text-gray-300">Sulawesi Tengah</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {t("hero.description")}
            </p>
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
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/program/pondok-pesantren"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  {t("footer.programs")}
                </Link>
              </li>
              <li>
                <Link
                  href="/laporan"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  {t("nav.reports")}
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.contact")}
            </h4>
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
            © {new Date().getFullYear()} {t("hero.title")}. {t("footer.rights")}
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
