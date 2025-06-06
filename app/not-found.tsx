import Link from 'next/link';
import { Home, ArrowLeft, Search, BookOpen, Users, Phone } from 'lucide-react';
import { Inter, Amiri } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const amiri = Amiri({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  variable: '--font-amiri',
});

export default function GlobalNotFound() {
  const quickLinks = [
    {
      title: 'Beranda',
      description: 'Kembali ke halaman utama',
      href: '/',
      icon: Home,
      color: 'bg-primary-500',
    },
    {
      title: 'Program Kami',
      description: 'Lihat program pendidikan',
      href: '/program/pondok-pesantren',
      icon: BookOpen,
      color: 'bg-secondary-600',
    },
    {
      title: 'Tentang Kami',
      description: 'Pelajari lebih lanjut',
      href: '/tentang',
      icon: Users,
      color: 'bg-accent-800',
    },
    {
      title: 'Kontak',
      description: 'Hubungi kami',
      href: '/kontak',
      icon: Phone,
      color: 'bg-primary-500',
    },
  ];

  const popularPages = [
    { title: 'Pondok Pesantren Darul Hadits', href: '/program/pondok-pesantren' },
    { title: "Komunitas Ta'shil Ilmi", href: '/program/komunitas-tashil' },
    { title: 'Laporan Keuangan', href: '/laporan' },
    { title: 'Publikasi Buku', href: '/publikasi/buku' },
    { title: 'Artikel & Tulisan', href: '/publikasi/tulisan' },
  ];

  return (
    <html lang="id" className={`${inter.variable} ${amiri.variable}`}>
      <body className="min-h-screen bg-background text-foreground p-6 relative overflow-x-hidden">
        {/* Background accent */}
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-10 bg-gradient-to-tr from-primary-300 via-primary-50 to-primary-100 opacity-30 animate-pulse-slow"
        />

        <main className="bg-gradient-to-br from-muted/30 via-background to-primary-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Header */}
            <div className="text-center mb-20">
              <div className="relative mb-10">
                <h1 className="text-9xl md:text-[10rem] font-bold text-primary-200 select-none">
                  404
                </h1>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 md:w-36 md:h-36 bg-primary-500 rounded-full flex items-center justify-center animate-pulse">
                    <Search className="w-14 h-14 md:w-16 md:h-16 text-white" />
                  </div>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
                Halaman Tidak Ditemukan
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin sudah
                dipindahkan, dihapus, atau URL-nya salah.
              </p>
              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-accent-800 hover:bg-accent-900 text-white font-medium rounded-lg transition-colors duration-200 group"
                >
                  <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                  Kembali ke Beranda
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <section className="mb-20">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-accent-800 mb-2">
                  Halaman Populer
                </h3>
                <p className="text-muted-foreground">
                  Mungkin Anda sedang mencari salah satu halaman ini
                </p>
                <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={index}
                      href={link.href}
                      className="bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-border group hover:-translate-y-1"
                    >
                      <div className="p-6 text-center">
                        <div
                          className={`mx-auto w-14 h-14 ${link.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                        >
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="font-bold text-accent-800 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                          {link.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {link.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>

            {/* Popular Pages */}
            <section className="mb-20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-accent-800 mb-2">
                  Halaman Lainnya
                </h3>
                <p className="text-muted-foreground">
                  Jelajahi halaman penting lainnya
                </p>
              </div>
              <div className="max-w-2xl mx-auto">
                <div className="bg-card rounded-xl shadow-md border border-border divide-y divide-border">
                  {popularPages.map((page, index) => (
                    <Link
                      key={index}
                      href={page.href}
                      className="flex items-center justify-between px-6 py-4 hover:bg-muted transition-colors duration-200 group first:rounded-t-xl last:rounded-b-xl"
                    >
                      <span className="text-accent-800 font-medium group-hover:text-primary-600 transition-colors duration-200">
                        {page.title}
                      </span>
                      <ArrowLeft className="w-4 h-4 text-muted-foreground rotate-180 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            {/* Help Section */}
            <section className="text-center mb-20">
              <div className="bg-card rounded-xl shadow-md border border-border p-8 max-w-2xl mx-auto">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-accent-800 mb-2">
                    Masih Tidak Menemukan?
                  </h3>
                  <p className="text-muted-foreground">
                    Jika Anda masih tidak menemukan yang dicari, jangan ragu untuk
                    menghubungi kami
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link
                    href="/kontak"
                    className="inline-flex items-center justify-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-200"
                  >
                    <Phone className="w-4 h-4 mr-2" /> Hubungi Kami
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center px-4 py-2 border border-border text-muted-foreground hover:bg-muted hover:text-accent-800 font-medium rounded-lg transition-colors duration-200"
                  >
                    <Home className="w-4 h-4 mr-2" /> Kembali ke Beranda
                  </Link>
                </div>
              </div>
            </section>

            {/* Tips */}
            <section className="text-center">
              <div className="bg-muted/50 rounded-lg p-6 max-w-xl mx-auto border border-border">
                <h4 className="font-semibold text-accent-800 mb-2">
                  Tips Pencarian
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1 text-left">
                  <li>• Periksa ejaan URL yang Anda masukkan</li>
                  <li>• Gunakan menu navigasi untuk menemukan halaman</li>
                  <li>• Coba kembali ke halaman sebelumnya</li>
                  <li>• Hubungi kami jika masalah berlanjut</li>
                </ul>
              </div>
            </section>
          </div>
        </main>
      </body>
    </html>
  );
}
