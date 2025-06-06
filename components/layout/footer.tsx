import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-accent-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="mr-3"
              />
              <div>
                <h3 className="text-xl font-bold">Yayasan Peduli Ilmu</h3>
                <p className="text-primary-200">Sulawesi Tengah</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Berkomitmen dalam mengembangkan pendidikan Islam dan dakwah yang
              berkualitas untuk membangun generasi yang berilmu, berakhlak mulia, dan
              bermanfaat bagi umat.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Menu</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tentang
                </Link>
              </li>
              <li>
                <Link
                  href="/program/pondok-pesantren"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Pondok Pesantren
                </Link>
              </li>
              <li>
                <Link
                  href="/program/komunitas-tashil"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Komunitas Ta&apos;shil
                </Link>
              </li>
              <li>
                <Link
                  href="/laporan"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Laporan
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-primary-400" />
                <div>
                  <p className="text-gray-300">info@yayasanpeduliilmu.org</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-primary-400" />
                <div>
                  <p className="text-gray-300">+62 812-3456-7890</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-primary-400" />
                <div>
                  <p className="text-gray-300">
                    Jl. Pendidikan No. 123
                    <br />
                    Palu, Sulawesi Tengah
                    <br />
                    94111
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Yayasan Peduli Ilmu Sulawesi Tengah.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
