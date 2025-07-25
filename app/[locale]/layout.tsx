import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Locale, NextIntlClientProvider, hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';
import { Inter, Amiri } from 'next/font/google';

import { locales } from '@/config';

import Navigation from '@/components/layout/Navigation';
import '../globals.css';
import Footer from '@/components/layout/Footer';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Yayasan Peduli Ilmu',
  description: "Yayasan Peduli Ilmu Sulawesi Tengah - Membangun Generasi Qur'ani",
  icons:{
    icon: "/logo.ico"
  }
};

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const amiri = Amiri({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  variable: '--font-amiri',
});

export default async function LocaleLayout({ children, params }: Props) {
  // Ensure that the incoming locale is valid
  const { locale } = await params;
  if (!hasLocale(locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${inter.variable} ${amiri.variable}`}>
      <body
        className={
          locale === 'ar' ? 'font-arabic antialiased' : 'font-sans antialiased'
        }
      >
        <NextIntlClientProvider>
          <Navigation />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
